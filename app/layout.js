import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Sunny Rathaur | Learn Web Development",
    template: "%s | Sunny Rathaur",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sunny Rathaur.",
  keywords: ["React", "Next.js", "Web Development", "Sunny Rathaur"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://Sunny.com"),
  openGraph: {
    title: "Sunny Rathaur",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sunny Rathaur",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunny Rathaur Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Rathaur",
    description: "Learn Web Dev from scratch with Sunny Rathaur!",
    creator: "@SunnyRathaur",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${workSans.variable} `}>
        {children}
      </body>
    </html>
  );
}