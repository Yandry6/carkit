import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import InstallBoostrap from "./components/InstallBootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CarKit",
  description: "Repuestos de vehículos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ margin: 0, padding: 0 }}>
      <body className={inter.className}>{children}</body>
      <InstallBoostrap />
    </html>
  );
}
