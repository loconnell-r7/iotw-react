"use client"

import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clicked, setClicked] = useState(0);

  const handleClick = () => {
    const clickCount = clicked + 1
    setClicked(clickCount)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center content-center justify-center p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full flex-col  items-center font-mono text-sm lg:flex mx-auto">
        <h1 className="text-4xl mb-4">CookieClicker</h1>
        <Image 
          className="transition duration-75 ease-in-out hover:-translate-y-1 hover:scale-105"
          src="iotw-react/cookie.png"
          alt="cookie" 
          width={500}
          height={500}
          onClick={handleClick} />
        <p>I have been clicked {clicked} times</p>
      </div>



      
    </main>
  )

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        {/* <h1>Clicker</h1> */}
        {/* <p>I have been clicked {clicked} times</p>
        <button onClick={handleClick}>Click me</button> */}
      </div>
    </main>
  );
}
