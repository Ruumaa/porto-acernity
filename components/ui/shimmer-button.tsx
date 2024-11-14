const ShimmerButton = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <button
      className={`${className} text-sm inline-flex py-2 my-4 px-4 font-light animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#e5e7eb,45%,#f5f5f4,55%,#e5e7eb)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-slate-800 dark:text-slate-400 transition-colors cursor-default`}
    >
      {label}
    </button>
  );
};

export default ShimmerButton;
