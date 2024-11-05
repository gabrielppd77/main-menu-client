interface TypographyProps {
  children: React.ReactNode;
}

export default function Typography({ children }: TypographyProps) {
  return (
    <h2 className="text-gray-700 font-medium text-lg line-clamp-2 mb-2">
      {children}
    </h2>
  );
}
