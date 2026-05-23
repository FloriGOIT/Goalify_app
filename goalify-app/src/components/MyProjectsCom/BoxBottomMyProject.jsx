import { PackageOpen } from "lucide-react";

export default function BoxBottomMyProject() {
  return (
    <div className="mt-auto flex flex-col items-center justify-center">
      <div className="mb-6 text-6xl">
        <PackageOpen className="text-blue-500 w-16 h-16" />
      </div>

      <span className="text-[20px] font-bold text-gray-500 mb-3">
        Stay organized and achieve your goals!
      </span>

      <p className="text-gray-500 text-center max-w-md font-semibold">
        Create projects, set deadlines, and track your progress.
      </p>
    </div>
  );
}
