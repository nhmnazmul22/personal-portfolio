import AppSidebar from "@/components/Layout/AppSidebar";
import RightSidebar from "@/components/Layout/RightSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubikFont = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nhm Nazmul - Personal Portfolio",
  description: "A personal portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubikFont.variable} ${rubikFont.className} antialiased overflow-x-hidden relative`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark">
          <SidebarProvider>
            <div className="flex w-full min-h-screen relative">
              <AppSidebar />
              <main className="flex-1 pt-2 pe-[80px] md:pe-[100px] mb-10">
                <SidebarTrigger className="sticky top-0" />
                {children}
              </main>
              <div className="w-[80px] min-h-[100vh] md:w-[100px] bg-secondary p-5 fixed right-0 top-0">
                <RightSidebar />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
