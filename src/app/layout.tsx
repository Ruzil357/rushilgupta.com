import "./globals.scss";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import Typing from "../components/typing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className={`text-shadow link link-underline link-underline-black pb-2`}>
      <Link href={href} className={`font-bold text-center text-lg sm:text-xl lg:text-[22px] px-2`}>
        {children}
      </Link>
    </li>
  );
}

function NavBar() {
  return (
    <div className={`text-white bg-gradient-to-b from-[#202c54] to-[#070d1d] backdrop-blur-sm pb-6 sm:pb-8 px-3 sm:px-16 md:px-20 lg:px-32`}>
      <div className={`emojiWrapper fixed text-4xl blur-[1.2px]`}>
        <p>&#9749;</p> {/* Coffee */}
        <p>&#x1F4BB;</p> {/* Personal Laptop */}
        <p>&#128170;</p> {/* Flexed Bicep */}
        <p>&#129299;</p> {/* Nerd Face */}
        <p>&#9749;</p> {/* Coffee */}
        <p>&#x1F4BB;</p> {/* Personal Laptop */}
      </div>
      <div className={"z-10 relative"}>
        <ul className={`flex items-center pt-6 pb-10 sm:pb-12 justify-center sm:justify-start gap-x-4 sm:gap-x-12`}>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/blogs'>Blogs</NavItem>
        </ul>
        <div className='min-h-[39px] sm:min-h-[56px] md:min-h-[64px] lg:min-h-[72px]'>
          <Typing
            className={`font-bold text-shadow leading-none empty:inline-block text-[39px] sm:text-[56px] md:text-[64px] lg:text-[72px]`}
            texts={["Student Developer", "Caffeine Addict", "Chess Enthusiast"]}
          />
        </div>
        {/* <p className={`text-shadow text-[18px] sm:text-[20px] font-light sm:font-[250]`}>Ashoka University</p> */}
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`h-full`}>
      <body className={`${inter.className} h-full bg-[#ffffff] text-black mx-auto max-w-full overflow-x-hidden`}>
        <NavBar />
        <div className={`h-2/3 z-10 relative px-4 sm:px-16 md:px-20 lg:px-24 bg-[#ffffff]`}>{children}</div>
      </body>
    </html>
  );
}
