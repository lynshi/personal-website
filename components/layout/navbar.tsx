import React from "react";

export interface NavbarProps {
  transparentAtTop: boolean;
};

class Navbar extends React.Component {
  state = {
    isTop: true
  };

  transparentAtTop: boolean;

  constructor(props: NavbarProps) {
    super(props);
    this.transparentAtTop = props.transparentAtTop;
    this.scrollListener = this.scrollListener.bind(this);
  }

  scrollListener() {
    const isTop = window.scrollY < 10;
    if (isTop !== this.state.isTop) {
      this.setState({ isTop });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
  }

  render() {
    return (
      <nav className={"flex sticky top-0 z-50 items-center justify-between flex-wrap p-6 " + (this.state.isTop && this.transparentAtTop ? "bg-transparent" : "bg-gray-navbar")}>
        <div className="flex items-center text-blue-300 mr-6">
          <a href="/" className="font-bold text-xl tracking-tight">LYNDON SHI</a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow">
            <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-700 mr-4">
              Home
            </a>
            <a href="/resume" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-pink-700 mr-4">
              Résumé
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
