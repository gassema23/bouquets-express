import NavigationDesktop from "../components/NavigationDesktop";
import NavigationMobile from "../components/NavigationMobile";
import Logo from "./Logo";

function Header() {
  return (
    <header>
      <div
        className={`fixed z-40 w-full bg-white transition duration-300 shadow`}
      >
        <div className="flex justify-between py-2 container mx-auto">
          <Logo />
          <NavigationDesktop />
          <NavigationMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;
