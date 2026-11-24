import type { ReactNode } from "react";

import cleanCodeTileUrl from "../brand/clean-code-tile.png";

export function StandalonePage({ children }: { readonly children: ReactNode }) {
  return (
    // The page owns scrolling because root cannot scroll; safe centering keeps oversized cards top-aligned.
    <div className="flex h-full items-center-safe justify-center overflow-y-auto scrollbar-gutter-both bg-background px-4 py-10 text-foreground sm:px-6">
      <section className="dialog-glass w-full max-w-xl rounded-2xl border p-6">{children}</section>
    </div>
  );
}

export function StandalonePageHeader({
  context,
  title,
  description,
}: {
  readonly context?: ReactNode;
  readonly title: ReactNode;
  readonly description: ReactNode;
}) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3 text-muted-foreground">
        {/* oxlint-disable-next-line t3code/no-untranslated-copy -- product name */}
        <span className="flex items-center gap-2" role="img" aria-label="T3 Clean Code">
          <img alt="" className="size-6 shrink-0" draggable={false} src={cleanCodeTileUrl} />
          {/* oxlint-disable-next-line t3code/no-untranslated-copy -- product wordmark */}
          <span className="text-xl font-bold tracking-tighter text-foreground">clean code</span>
        </span>
        {context ? <span className="text-sm">{context}</span> : null}
      </div>
      <h1 className="mt-6 text-xl leading-tight font-semibold">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </>
  );
}
