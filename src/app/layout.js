import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/CreateList";
import { Provider } from "@/components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assignment 4",
  description: "Weekly Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
