import React from "react";
import "./sidebar.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdOutlineHelpCenter,
  MdHome,
} from "react-icons/md";
import { BsGrid3X3GapFill } from 'react-icons/bs';

import MenuLink from "./menuLink/menuLink"
import Image from "next/image";
import userIamge from "../../../../public/user-image.png"

export default function Sidebar() {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashbord",
          path: "/dashbord",
          icon: <MdHome/>,
        },
        {
          title: "Users",
          path: "/dashbord/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashbord/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashbord/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashbord/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashbord/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashbord/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashbord/settings",
          icon: <MdOutlineSettings  />,
        },
        {
          title: "Help",
          path: "/dashbord/help",
          icon: <MdOutlineHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="containerr">
        <div className="user">
            <Image
            src={userIamge}
            className="userImage"
            />
            <div className="user-Detaile">
              <span className="userName">John doe </span>
              <span className="userTitle">Administrator</span>
            </div>
        </div>
      <ul className="list">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="cat">{cat.title}</span>
            {cat.list.map((item)=>(
                <MenuLink item={item} key={item.title}  />
            ))}
            </li>
        ))}
      </ul>
      <button className="logout-sidebar rounded-md">
        <MdLogout />
        LogOut
      </button>
    </div>
  );
}








