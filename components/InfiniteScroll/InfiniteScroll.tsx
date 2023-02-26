"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useEffect, useRef } from "react";

import { ItemLoading } from "@/components/ItemLoading/ItemLoading";
import { DEFAULT_PLACE_HOLDER, DEFAULT_RENDER, INIT_PAGE } from "@/constants/config.constans";

export function InfiniteScroll({
  children,
}: {
  children: ReactElement;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    let observerRefValue: any = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const pageNumber: string = searchParams.get("page") ?? "0"
          router.replace(
            `?page=${parseInt(pageNumber) > 980 ? INIT_PAGE : parseInt(pageNumber) + DEFAULT_RENDER}`
          )
          router.refresh();
        }
      },
      { rootMargin: "1200px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue)
    };
  }, [router, searchParams]);

  return (
    <>
      {children}
      <ItemLoading ref={ref} />
      {Array(DEFAULT_PLACE_HOLDER).fill(1).map((_: number, i: number) => (<ItemLoading key={_ + i} />))}
    </>
  )
}
