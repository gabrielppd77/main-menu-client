interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function IconButton({ onClick, children }: IconButtonProps) {
  return (
    <div
      onClick={onClick}
      className={
        "p-1 text-red-500 rounded-full duration-200 hover:scale-110 hover:cursor-pointer hover:bg-gray-200"
      }
    >
      {children}
    </div>
  );
}
