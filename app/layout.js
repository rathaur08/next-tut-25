import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Sunny Ratahur | Learn Web Development",
    template: " | Sunny Ratahur",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sunny Ratahur.",
  keywords: ["React", "Next.js", "Web Development", "Sunny Ratahur"],
  icons: {
    icon: "/images/kody.png",
  },
  metadataBase: new URL("https://Sunnyratahur.com"),
  openGraph: {
    title: "Sunny Ratahur",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sunny Ratahur",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunny Ratahur Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunny Ratahur",
    description: "Learn Web Dev from scratch with Sunny Ratahur!",
    creator: "@Sunnyratahur",
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
