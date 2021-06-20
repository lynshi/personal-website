import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithubSquare,
    faLinkedin,
    faMedium
} from "@fortawesome/free-brands-svg-icons";

import Head from "./head";
import Navbar from "./navbar";
import { NavbarProps } from "./navbar";

interface LayoutProps extends NavbarProps {
  pageTitle: string;
  pageDescription: string;
};

export default function Layout(props: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="bg-black">
      <Head title={props.pageTitle} description={props.pageDescription} />

      <Navbar {...props} />

      <main>{props.children}</main>

      <footer className="grid grid-flow-col">
        <div className="text-gray-500 justify-self-start">
          &nbsp; © Lyndon Shi {new Date().getFullYear()}. View on <a href="https://github.com/lynshi/personal-website" target="_blank" rel="noopener noreferrer" className="text-gray-400">GitHub</a>!
        </div>
        <div className="text-blue-500 grid grid-flow-col justify-end">
          <div>
            <a
              href="https://github.com/lynshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 pr-2"
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/lynshi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 pr-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
              />
            </a>
          </div>
          <div>
            <a
              href="https://medium.com/@shilyndon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-300 pr-2"
            >
              <FontAwesomeIcon
                icon={faMedium}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
