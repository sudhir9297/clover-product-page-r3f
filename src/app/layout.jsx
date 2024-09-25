import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Clover | Heel Brand",
  description: "Product Page for a 3D Heel",
  metadataBase: new URL("https://clover-product-page.netlify.app"),
  openGraph: {
    title: "Clover | Heel Brand",
    description: "Product Page for a 3D Heel",
    url: "https://clover-product-page.netlify.app/",
    siteName: "Clover | Heel Brand",
    images: [
      {
        url: "/thumb/red/1-1.webp",
        width: 1260,
        height: 800,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full w-full px-4 lg:px-40`}
      >
        <Header />
        <main className="h-full w-full">{children}</main>
      </body>
    </html>
  );
}
