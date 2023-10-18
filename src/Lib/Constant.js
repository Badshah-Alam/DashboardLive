import {
  RiDashboardLine,
  RiProductHuntLine,
  RiCustomerService2Fill,
  RiLoginCircleLine,
  RiImageAddFill,
  RiArrowDropRightLine,
  RiArrowDropUpLine,
  RiUserAddLine,
} from "react-icons/ri";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <RiDashboardLine />,
    next: <RiArrowDropRightLine />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <RiProductHuntLine />,
    next: <RiArrowDropRightLine />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <RiCustomerService2Fill />,
    next: <RiArrowDropRightLine />,
  },
  {
    key: "icome",
    label: "Icome ",
    path: "/transactions",
    icon: <RiLoginCircleLine />,
    next: <RiArrowDropRightLine />,
  },
  {
    key: "promote",
    label: "Promote",
    path: "/promotion",
    icon: <RiProductHuntLine />,
    next: <RiArrowDropRightLine />,
  },
  {
    key: "help",
    label: "Help",
    path: "/helps",
    icon: <RiImageAddFill />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "name",
    label: "Badshah Alam",
    role:"fronted Web Developer",
    path: "/name",
    icon:<RiUserAddLine/>,
    next: <RiArrowDropUpLine/>
  },
];
