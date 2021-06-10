import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overview",
    path: "#",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Home",
        path: "/home",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "About",
        path: "/about",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Services",
    path: "#",
    icon: <FaIcons.FaBuffer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Converter",
        path: "/services/converter",
        icon: <FaIcons.FaBuffer />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Author",
    path: "/author",
    icon: <IoIcons.IoMdPeople />,
  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
