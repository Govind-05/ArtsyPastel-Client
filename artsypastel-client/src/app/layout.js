import "./globals.css";
import "@/styles/global.css"
import "@/styles/responsive.css";
import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: "ArstyPastel",
  description: "This is my Space and my Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
