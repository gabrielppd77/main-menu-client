export default function LinearProgress() {
  return (
    <div className="w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-red-200">
        <div className="animate-progress origin-left h-full w-full bg-red-400"></div>
      </div>
    </div>
  );
}
