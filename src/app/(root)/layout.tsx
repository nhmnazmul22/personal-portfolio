import LeftSideBar from "@/components/Layout/LeftSideBar";
import RightSidebar from "@/components/Layout/RightSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen">
      <LeftSideBar />
      <main className="flex-1">
        <SidebarTrigger />
        {children}
      </main>
      <div className="w-1/5">
        <RightSidebar />
      </div>
    </div>
  );
};

export default layout;
