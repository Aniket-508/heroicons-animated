import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { type Framework, ICON_MANIFEST } from "@heroicons-animated/shared";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CliBlock } from "@/components/cli-block";
import { LINK, SITE } from "@/constants";
import { getFrameworkName } from "@/lib/cli";
import { kebabToPascalCase } from "@/lib/kebab-to-pascal";
import { BreadcrumbJsonLd } from "@/seo/json-ld";
import { baseMetadata } from "@/seo/metadata";
import { IconCard } from "./icon-card";
import { SimilarIcons } from "./similar-icons";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ framework?: string }>;
};

const getIconBySlug = (slug: string) => {
  return ICON_MANIFEST.find((icon) => icon.name === slug);
};

export const generateStaticParams = () => {
  return ICON_MANIFEST.map((icon) => ({
    slug: icon.name,
  }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const icon = getIconBySlug(slug);

  if (!icon) {
    return {
      title: "Icon Not Found",
    };
  }

  const pascalName = kebabToPascalCase(slug);
  const [keyword] = pascalName.split("Icon");

  const title = `${keyword} Icon - Animated Icon for React, Vue & Svelte`;
  const description = `Free animated ${icon.name} icon for React, Vue, and Svelte. Smooth animations, copy-paste ready. Keywords: ${icon.keywords.slice(0, 5).join(", ")}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/icons/${slug}`,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: `${pascalName} | ${SITE.NAME}`,
      description,
      url: `${SITE.URL}/icons/${slug}`,
      type: "website",
    },
    twitter: {
      ...baseMetadata.twitter,
      title: `${pascalName} | ${SITE.NAME}`,
      description,
    },
    keywords: [
      ...icon.keywords,
      "animated icon",
      "react icon",
      "vue icon",
      "svelte icon",
      "motion icon",
      `${icon.name} animation`,
      `${icon.name} react`,
      `${icon.name} vue`,
      `${icon.name} svelte`,
    ],
  };
};

const IconJsonLd = ({ icon }: { icon: (typeof ICON_MANIFEST)[number] }) => {
  const pascalName = kebabToPascalCase(icon.name);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: pascalName,
    description: `Animated ${icon.name} icon component for React, Vue, and Svelte`,
    codeRepository: LINK.GITHUB,
    programmingLanguage: ["TypeScript", "React", "Vue", "Svelte"],
    license: LINK.LICENSE,
    isPartOf: {
      "@type": "SoftwareSourceCode",
      name: SITE.NAME,
      url: SITE.URL,
    },
    keywords: icon.keywords.join(", "),
  };

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: ignore
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
};

const IconPage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const searchParamsResolved = await searchParams;
  const framework = searchParamsResolved.framework as Framework;
  const icon = getIconBySlug(slug);

  if (!icon) {
    notFound();
  }

  const pascalName = kebabToPascalCase(slug);

  const backHref =
    framework && framework !== "react" ? `/?framework=${framework}` : "/";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE.URL },
          { name: "Icons", url: `${SITE.URL}/icons` },
          { name: pascalName, url: `${SITE.URL}/icons/${slug}` },
        ]}
      />
      <IconJsonLd icon={icon} />

      <section className="flex min-h-[calc(100vh-var(--header-height))] flex-col">
        <div className="view-container flex flex-col items-start border-neutral-200 py-12 xl:border-x xl:pb-4 min-[880px]:pt-[60px] dark:border-neutral-800">
          <Link
            className="mb-8 flex items-center gap-2 font-sans text-secondary text-sm transition-[color] duration-100 hover:text-primary focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-2"
            href={backHref}
          >
            <ArrowLeftIcon className="size-4" />
            Back to all icons
          </Link>

          <div className="flex w-full flex-col gap-6 min-[880px]:flex-row min-[880px]:items-center">
            <IconCard icon={icon} />

            <div className="flex h-full flex-col gap-1">
              <h1 className="font-sans text-[28px] min-[640px]:text-[36px]">
                {pascalName}
              </h1>
              <p className="font-mono text-secondary text-sm">
                Animated {icon.name.replace(/-/g, " ")} icon for{" "}
                {getFrameworkName(framework)}
              </p>
              <CliBlock
                className="mt-7 hidden px-0 min-[880px]:flex"
                staticIconName={slug}
              />
            </div>
          </div>

          <CliBlock
            className="mt-8 flex px-0 min-[880px]:hidden"
            staticIconName={slug}
          />
        </div>

        <div className="view-container border-neutral-200 py-4 xl:border dark:border-neutral-800">
          <h2 className="mb-3 font-sans text-xl">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {icon.keywords.map((keyword, index) => (
              <span
                className="supports-[corner-shape:squircle]:corner-squircle rounded-[12px] bg-neutral-200 px-3 py-1 font-mono text-secondary text-sm supports-[corner-shape:squircle]:rounded-[20px] dark:bg-[#262626]"
                key={`${keyword}-${index}`}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <SimilarIcons currentIcon={icon} />
      </section>
    </>
  );
};

export default IconPage;
