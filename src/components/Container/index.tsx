interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-screen-xl mx-auto p-4">{children}</div>;
}
