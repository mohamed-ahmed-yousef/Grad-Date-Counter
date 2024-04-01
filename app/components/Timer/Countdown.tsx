"use client";
import { useEffect, useState } from "react";
import CountdownItem from "./CountdownItem";
import { getDateInfo } from "./utils";

export default function Countdown() {
  const [remaining, setRemaining] = useState(getDateInfo());

  useEffect(() => {
    const interval = setInterval(handleCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCountdown = () => {
    setRemaining(getDateInfo());
  };

  return (
    <div className="bg-gradient-to-b from-[#000] via-[#011] to-black p-4 min-h-[200px]">
      <div className="items-center grid grid-cols-2 lg:grid-cols-4 mx-auto w-full max-w-5xl">
        <CountdownItem num={remaining.days} text="يوما" />
        <CountdownItem num={remaining.hours} text="ساعة" />
        <CountdownItem num={remaining.minutes} text="دقيقة" />
        <CountdownItem num={remaining.seconds} text="ثانية" />
      </div>
    </div>
  );
}
