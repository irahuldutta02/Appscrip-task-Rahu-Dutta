import Image from "next/image";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Image
              src="/assets/svg/hamburger.svg"
              alt="hamburger menu"
              className="logo-icon hamburger-icon"
              width={50}
              height={50}
            />
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

          <div className="header-icons">
            <div className="header-icon-wrapper">
              <Image
                src="/assets/svg/search.svg"
                alt="Search"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>
            <div className="header-icon-wrapper">
              <Image
                src="/assets/svg/account.svg"
                alt="Account"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>
            <div className="header-icon-wrapper">
              <Image
                src="/assets/svg/heart.svg"
                alt="Wishlist"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>
            <div className="header-icon-wrapper sm-display-none">
              <Image
                src="/assets/svg/bag.svg"
                alt="Cart"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>
            <div className="language-selector sm-display-none">
              <span>ENG</span>
              <Image
                src="/assets/svg/arrow-down.svg"
                alt="Language dropdown"
                className="header-icon"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <NavMenu />
      </header>

      <div className="sm-heder-btm">
        <span className="sm-heder-btm-left">HOME |</span>
        <span className="sm-heder-btm-right">SHOP</span>
      </div>
    </>
  );
}
