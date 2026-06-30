import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import "./globals.css";


const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-heading',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Carlos Velasco — Full Stack Developer",
  description: "Full-stack developer and technical lead with 3+ years building end-to-end systems. Open to new projects.",
  openGraph: {
    title: "Carlos Velasco — Full Stack Developer",
    description: "Full-stack developer and technical lead with 3+ years building end-to-end systems.",
    url: "https://yoursite.com",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Velasco — Full Stack Developer",
    images: ["/images/og-image.png"],
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-main text-text">{children}</body>
    </html>
  );
}
