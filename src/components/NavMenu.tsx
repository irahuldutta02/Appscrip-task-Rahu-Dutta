import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <nav className="nav-menu">
        <Link href="#" className="nav-item">
          SHOP
        </Link>
        <Link href="#" className="nav-item">
          SKILLS
        </Link>
        <Link href="#" className="nav-item">
          STORIES
        </Link>
        <Link href="#" className="nav-item">
          ABOUT
        </Link>
        <Link href="#" className="nav-item">
          CONTACT US
        </Link>
      </nav>
    </>
  );
}
