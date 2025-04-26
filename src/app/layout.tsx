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
        className={`${rubikFont.variable} ${rubikFont.className} antialiased overflow-hidden`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="dark">
          <SidebarProvider>
            <div className="flex w-full min-h-screen relative">
              <AppSidebar />
              <main className="flex-1">
                <SidebarTrigger />
                {children}
              </main>
              <div className="w-[80px] md:w-[100px] bg-secondary p-5 ">
                <RightSidebar />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
