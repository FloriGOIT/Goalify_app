import {
  Folder,
  NotebookPen,
  Calendar,
  User,
  Settings,
} from "lucide-react";

export const sidebarData = [
  {
    label: "My Projects",
    path: "/projects",
    icon: Folder,
  },
  {
    label: "Notes",
    path: "/notes",
    icon: NotebookPen,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    label: "Profile",
    path: "/profile",
    icon: User,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
  
];

export const buttonBlueStyle =
  "flex font-semibold text-white bg-blue-500 w-40 px-3 py-2 border-gray-500 rounded-lg hover:shadow-[6px_6px_14px_rgba(59,130,246,0.5)]";

export const sidebarLinkStyle =
  "flex items-center gap-3 pl-2 py-1 rounded-xl w-40 transition duration-300   hover:font-semibold hover:shadow-[6px_6px_14px_rgba(59,130,246,0.5)]";

