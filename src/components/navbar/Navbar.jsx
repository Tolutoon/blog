"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        Tolu
      </Link>
      <div className={styles.links}>
        {links.map((elem) => {
          return (
            <Link key={elem.id} href={elem.url} className={styles.link}>
              {elem.title}
            </Link>
          );
        })}
        <button
        className={styles.logout}
          onClick={() => {
            console.log("log out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
