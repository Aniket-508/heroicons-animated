"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const GITHUB_API = "https://api.github.com/repos/Aniket-508/heroicons-animated";
const CACHE_KEY = "github-stars-cache";
const CACHE_DURATION = 600_000; // 10 minutes in ms

interface StarsCacheData {
  stars: number;
  timestamp: number;
}

interface GithubStarsContextType {
  stars: number | null;
}

const GithubStarsContext = createContext<GithubStarsContextType>({
  stars: null,
});

function useGithubStars() {
  return useContext(GithubStarsContext);
}

function getCachedStars(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const data: StarsCacheData = JSON.parse(cached);
      if (Date.now() - data.timestamp < CACHE_DURATION) {
        return data.stars;
      }
    }
  } catch {
    // Ignore localStorage errors
  }
  return null;
}

function GithubStarsProvider({ children }: { children: ReactNode }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    // Check cache first
    const cached = getCachedStars();
    if (cached !== null) {
      setStars(cached);
      return;
    }

    const controller = new AbortController();

    fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "heroicons-animated",
      },
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.stargazers_count != null) {
          const count = data.stargazers_count;
          setStars(count);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ stars: count, timestamp: Date.now() })
          );
        }
      })
      .catch(() => {
        // Ignore fetch errors (e.g., network issues, aborted requests)
      });

    return () => controller.abort();
  }, []);

  return (
    <GithubStarsContext.Provider value={{ stars }}>
      {children}
    </GithubStarsContext.Provider>
  );
}

export { GithubStarsProvider, useGithubStars };
