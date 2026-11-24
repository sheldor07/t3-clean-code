import type { SVGProps } from "react";

/** T3 Clean Code's own mark: a prompt chevron and two sparkles. The name is upstream's. */
export function T3Wordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="226 224 654 560" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M286 318 L518 512 L286 706"
        fill="none"
        stroke="currentColor"
        strokeWidth="104"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M700 232 C712 352 752 392 872 404 C752 416 712 456 700 576 C688 456 648 416 528 404 C648 392 688 352 700 232Z"
        fill="currentColor"
      />
      <path
        d="M772 604 C778 664 798 684 858 690 C798 696 778 716 772 776 C766 716 746 696 686 690 C746 684 766 664 772 604Z"
        fill="currentColor"
      />
    </svg>
  );
}
