import {
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
  HiMiniPower,
} from "react-icons/hi2";
export const Menu = [
  {
    id: 1,
    name: "Home",
    icon: <HiOutlineHome />,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Explore",
    icon: <HiOutlineSquare3Stack3D />,
    path: "/dashboard/explore",
  },
  {
    id: 3,
    name: "LogOut",
    icon: <HiMiniPower />,
    path: "/dashboard/logout",
  },
];
