import { MdOutlineDashboardCustomize,MdOutlinePayments } from "react-icons/md";
import { PiEnvelopeDuotone } from "react-icons/pi";
import { TfiLayersAlt } from "react-icons/tfi";
import { IoDocumentTextOutline , IoSettingsOutline,IoPeopleOutline} from "react-icons/io5";
import { ImInsertTemplate } from "react-icons/im";
import { FiHome } from "react-icons/fi";


const SidebarItems = [
  {
    title: "Insights",
    path: "/",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Inbox+",
    path: "/Card",
    icon: <PiEnvelopeDuotone />,
  },
  {
    title: "Clients", // Main menu item with submenus
    icon: <IoPeopleOutline />,
    subNavOpen: false,
    subNav: [
      {
        title: "Accounts",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "Contacts",
        path: "/submenu2",
        icon: <FiHome />,
      },
     
    ],
  },
  {
    title: "Workflow", // Main menu item with submenus
    icon: <TfiLayersAlt />,
    subNavOpen: false,
    subNav: [
      {
        title: "Tasks",
        path: "/marketplace",
        icon: <FiHome />,
      },
      {
        title: "Jobs",
        path: "/firmtemplates",
        icon: <FiHome />,
      },
      {
        title: "Jobrecurrences",
        path: "/tags",
        icon: <FiHome />,
      },
      {
        title: "Pipelines",
        path: "/services",
        icon: <FiHome />,
      },
      {
        title: "Calendar",
        path: "/customfields",
        icon: <FiHome />,
      },
    ],
  },
  {
    title: "Documents", // Main menu item with submenus
    icon: <IoDocumentTextOutline />,
    subNavOpen: false,
    subNav: [
      {
        title: "Clientsdocs",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "Wiki",
        path: "/submenu2",
        icon: <FiHome />,
      },
     
    ],
  },
  {
    title: "Billing", // Main menu item with submenus
    icon: <MdOutlinePayments />,
    subNavOpen: false,
    subNav: [
      {
        title: "Invoices",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "Recurring invoices",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Time entries",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "WIP",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Personals & ELS",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Payments",
        path: "/submenu2",
        icon: <FiHome />,
      },
    ],
  },
  {
    title: "Templates", // Main menu item with submenus
    icon: <ImInsertTemplate />,
    subNavOpen: false,
    subNav: [
      {
        title: "Market place",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "Firm templates",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Tags",
        path: "/newtag",
        icon: <FiHome />,
      },
      {
        title: "Services",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Custom fields",
        path: "/submenu2",
        icon: <FiHome />,
      },
     
    ],
  },
  {
    title: "Settings", // Main menu item with submenus
    icon: <IoSettingsOutline />,
    subNavOpen: false,
    subNav: [
      {
        title: "My account",
        path: "/submenu1",
        icon: <FiHome />,
      },
      {
        title: "Firm settings",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Integrations",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Teams & Plans",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Firm balance",
        path: "/submenu2",
        icon: <FiHome />,
      },
      {
        title: "Invoice",
        path: "/submenu2",
        icon: <FiHome />,
      },
     
    ],
  },
  
 
];

export default SidebarItems;
