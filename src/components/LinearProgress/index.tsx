import clsx from "clsx";

interface LinearProgressProps {
  active?: boolean;
}

export default function LinearProgress({ active = true }: LinearProgressProps) {
  return (
    <div className={clsx("w-full", !active && "invisible")}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-red-200">
        <div className="animate-progress origin-left h-full w-full bg-red-400"></div>
      </div>
    </div>
  );
}
