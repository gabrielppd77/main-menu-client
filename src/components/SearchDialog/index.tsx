import clsx from "clsx";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-red-200 z-10",
        "duration-300 ease-in-out",
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
      <button onClick={onClose}>X</button>
    </div>
  );
}
