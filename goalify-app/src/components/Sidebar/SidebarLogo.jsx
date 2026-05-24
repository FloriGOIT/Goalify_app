import { Boxes} from "lucide-react";

export default function SidebarLogo() {
  return (
    <div className="mb-10 flex flex-row items-center gap-2.5 ">
      <Boxes
        className="text-blue-600"
        size={40}
      />

      <div>
        <h2 className="text-2xl font-bold text-blue-600 leading-none  mb-1">
          Goalify
        </h2>

        <p className="text-sm font-semibold text-gray-500 leading-none">
          Track. Plan. Achieve.
        </p>
      </div>
    </div>
  );
}
