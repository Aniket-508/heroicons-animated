import {
  CommentAnimationsDevLinkClient,
  CommentButtonClient,
  CommentLucideAnimatedLinkClient,
} from "./comment.client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const CommentBlock = () => {
  return (
    <div className="relative my-[40px] flex w-full max-w-[610px] flex-col items-center justify-center pl-4 after:absolute after:left-0 after:h-full after:w-[4px] after:bg-neutral-400/50 max-[655px]:px-4 max-[655px]:after:left-4">
      <blockquote className="font-sans text-neutral-700 text-sm/[150%] tracking-[0.01em] before:content-[open-quote] after:content-[close-quote] max-[655px]:pl-4 dark:text-neutral-200">
        these icons were heavily inspired from the work of{" "}
        <CommentLucideAnimatedLinkClient /> and what i learned from the{" "}
        <CommentAnimationsDevLinkClient /> course.
      </blockquote>
      <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-4 border-neutral-200 border-t pt-4 max-[655px]:pl-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <AvatarImage
              alt="Aniket Pawar, the author of the heroicons-animated"
              className="select-none"
              src="/aniket.jpg"
            />
            <AvatarFallback className="bg-neutral-200 font-sans dark:bg-neutral-800">
              AP
            </AvatarFallback>
          </Avatar>
          <p className="text-[13px] text-neutral-600 tracking-[0.01em] dark:text-neutral-400">
            aniket, creator of heroicons-animated
          </p>
        </div>
        <CommentButtonClient />
      </div>
    </div>
  );
};

export { CommentBlock };
