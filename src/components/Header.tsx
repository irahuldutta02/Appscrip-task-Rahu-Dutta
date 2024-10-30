import Image from "next/image";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <>
      <header className="header" role="banner">
        <div className="header-content">
          <div className="logo-container">
            <button aria-label="Open menu" className="logo-icon hamburger-icon">
              <Image
                src="/assets/svg/hamburger.svg"
                className="hamburger-icon-ico"
                alt="hamburger-icon"
                width={50}
                height={50}
              />
            </button>
            <Image
              src="/assets/svg/logo.svg"
              alt="Company Logo"
              className="logo-icon"
              width={50}
              height={50}
            />
          </div>

          <div className="logo-text-container">
            <span className="logo-text">LOGO</span>
          </div>

          <nav className="header-icons" aria-label="Header icons">
            <button aria-label="Search" className="header-icon-wrapper">
              <Image
                src="/assets/svg/search.svg"
                alt=""
                className="header-icon"
                width={24}
                height={24}
              />
            </button>
            <button aria-label="Account" className="header-icon-wrapper">
              <Image
                src="/assets/svg/account.svg"
                alt=""
                className="header-icon"
                width={24}
                height={24}
              />
            </button>
            <button aria-label="Wishlist" className="header-icon-wrapper">
              <Image
                src="/assets/svg/heart.svg"
                alt=""
                className="header-icon"
                width={24}
                height={24}
              />
            </button>
            <button
              aria-label="Cart"
              className="header-icon-wrapper sm-display-none"
            >
              <Image
                src="/assets/svg/bag.svg"
                alt=""
                className="header-icon"
                width={24}
                height={24}
              />
            </button>
            <div className="language-selector sm-display-none">
              <span>ENG</span>
              <button aria-label="Change language">
                <Image
                  src="/assets/svg/arrow-down.svg"
                  alt=""
                  className="header-icon"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </nav>
        </div>
        <NavMenu />
      </header>

      <div
        className="sm-heder-btm"
        role="navigation"
        aria-label="Secondary navigation"
      >
        <span className="sm-heder-btm-left">HOME |</span>
        <span className="sm-heder-btm-right">SHOP</span>
      </div>
    </>
  );
}
