import AppSidebar from "@/components/Layout/AppSidebar";
import Navbar from "@/components/Layout/Navbar";
import { SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full min-h-screen">
      <AppSidebar />
      <main className="flex-1">
        <SidebarTrigger />
        {children}
      </main>
      <div className="w-1/5">
        <Navbar />
      </div>
    </div>
  );
};

export default layout;
