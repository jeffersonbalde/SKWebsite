'use client'

import Link from "next/link";
import style from "./navLink.module.css";
import { usePathname } from "next/navigation";

interface NavItem {
  path: string;
  title: string;
}

interface NavLinkProps {
  item: NavItem;
}

const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link href={item.path} className={`${pathName === item.path && style.active}`}>
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
