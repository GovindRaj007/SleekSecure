import { ReactNode } from "react";
import TopAnnouncementBar from "./TopAnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopAnnouncementBar />
      <Navbar />
      {/* 40px (announcement) + 64px (navbar h-16) = 104px; 40px + 80px (navbar h-20) = 120px */}
      <main className="flex-1 pt-[104px] md:pt-[120px]">{children}</main>
      <div className="relative z-10"><Footer /></div>
      <FloatingCTA />
    </div>
  );
};

export default Layout;
