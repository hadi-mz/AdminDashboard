"use client";

import React from "react";
import styles from "./menulink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link href={item.path}>
      <div className={`${styles.containerMenuLink} ${pathname === item ? styles.active : ''}`}>
        {item.icon}
        {item.title}
      </div>
    </Link>
  );
}
