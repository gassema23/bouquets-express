import { Link, Outlet } from "react-router-dom";

/** Components */
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="flex justify-between flex-col w-full min-h-screen scroll-smooth">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
