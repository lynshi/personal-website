import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface NavbarProps {
  transparentAtTop: boolean;
};

const navLinkClassNames = "text-white";
const activeNavLinkClassNames = "text-blue-100 font-bold";

export default function Navbar({ transparentAtTop }: NavbarProps) {
  const [isTop, setScrollState] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();

  let scrollListener: any;
  useEffect(() => {
    scrollListener = document.addEventListener("scroll", e => {
      var atTop = window.scrollY === 0;
      if (atTop === true) {
        if (isTop !== true) {
          setScrollState(true);
        }
      } else {
        if (isTop !== false) {
          setScrollState(false);
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", scrollListener)
    }
  }, [isTop])

  function toggleNavbar (e: React.MouseEvent) {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={"flex sticky top-0 z-50 items-center justify-between flex-wrap p-6 " + (isTop && transparentAtTop ? "bg-transparent" : "bg-gray-navbar")}>
      <div className="flex items-center text-blue-300 mr-6">
        <Link href="/" passHref>
          <a className="font-bold text-xl tracking-tight">
            LYNDON SHI
          </a>
        </Link>
      </div>
      <button className="inline-block md:hidden w-8 h-8 bg-transparent text-gray-400 p-1" onClick={toggleNavbar}>
        <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div className={"absolute md:relative top-16 left-0 md:top-0 bg-black flex flex-col md:flex-row md:space-x-6 shadow-md rounded-lg md:rounded-none md:shadow-none p-6 pt-0 md:p-0 w-full block flex-grow lg:flex lg:items-center lg:w-auto " + (mobileMenuOpen === true ? "flex" : "hidden") + " md:flex"}>
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
