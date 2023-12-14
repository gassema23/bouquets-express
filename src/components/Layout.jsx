import { Link, Outlet } from "react-router-dom";

/** Components */
import NavigationDesktop from "../components/NavigationDesktop";
import NavigationMobile from "../components/NavigationMobile";
import Logo from "./Logo";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex justify-between flex-col w-full min-h-screen scroll-smooth">
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
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
