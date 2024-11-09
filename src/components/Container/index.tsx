import clsx, { ClassValue } from "clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: ClassValue;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("max-w-screen-xl mx-auto p-4", className)}>
      {children}
    </div>
  );
}
