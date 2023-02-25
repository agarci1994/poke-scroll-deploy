import { forwardRef } from "react";

export const ItemLoading = forwardRef(function ItemLoading(_, ref) {
  return (
    <div
      // @ts-ignore
      ref={ref}
      className="bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-4 py-6"
    >
      <div className="flex flex-col space-y-4 h-full items-center justify-center text-center">
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-32 h-32 max-w-full" />
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-12 h-8" />
        <div className="animate-pulse bg-neutral-200 dark:bg-neutral-600 rounded-lg w-48 max-w-full h-12" />
      </div>
    </div>
  )
})