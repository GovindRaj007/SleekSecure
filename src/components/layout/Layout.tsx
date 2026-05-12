import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <div className="relative z-10"><Footer /></div>
      <FloatingCTA />
    </div>
  );
};

export default Layout;
