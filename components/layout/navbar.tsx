import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavbarProps {
  transparentAtTop: boolean;
};

const navLinkClassNames = "text-white";
const activeNavLinkClassNames = "text-blue-100 font-bold";

export default function Navbar({ transparentAtTop }: NavbarProps) {
  const [state, setState] = useState({
    isTop: true,
  });

  const router = useRouter();

  function scrollListener() {
    const isTop = window.scrollY < 10;
    if (isTop !== state.isTop) {
      setState({ isTop: isTop });
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
  });

  console.log(router.pathname);

  return (
    <nav className={"flex sticky top-0 z-50 items-center justify-between flex-wrap p-6 " + (state.isTop && transparentAtTop ? "bg-transparent" : "bg-gray-navbar")}>
      <div className="flex items-center text-blue-300 mr-6">
        <Link href="/" passHref>
          <a className="font-bold text-xl tracking-tight">
            LYNDON SHI
          </a>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-lg lg:flex-grow">
          <Link href="/" passHref>
            <a className={"block mt-4 lg:inline-block lg:mt-0 hover:text-pink-500 mr-4 " + (router.pathname == "/" ? activeNavLinkClassNames : navLinkClassNames)}>
              Home
            </a>
          </Link>
          <Link href="/resume" passHref>
          <a className={"block mt-4 lg:inline-block lg:mt-0 hover:text-pink-500 mr-4 " + (router.pathname == "/resume" ? activeNavLinkClassNames : navLinkClassNames)}>
              Résumé
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
