import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
