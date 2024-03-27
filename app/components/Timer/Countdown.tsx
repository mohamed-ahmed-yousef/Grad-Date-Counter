"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "7/31/2024";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Countdown() {
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(handleCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCountdown = () => {
    const end = new Date(COUNTDOWN_FROM);

    const now = new Date();

    const distance = +end - +now;

    const days = Math.floor(distance / DAY);
    const hours = Math.floor((distance % DAY) / HOUR);
    const minutes = Math.floor((distance % HOUR) / MINUTE);
    const seconds = Math.floor((distance % MINUTE) / SECOND);

    setRemaining({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="p-4 bg-gradient-to-b from-[#000] via-[#011] to-black min-h-[200px]">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 items-center ">
        <CountdownItem num={remaining.days} text="يوما" />
        <CountdownItem num={remaining.hours} text="ساعة" />
        <CountdownItem num={remaining.minutes} text="دقيقة" />
        <CountdownItem num={remaining.seconds} text="ثانية" />
      </div>
    </div>
  );
}

function CountdownItem({ num, text }: { num: number; text: string }) {
  return (
    <div className="font-mono  h-24 md:h-36 flex flex-col gap-1 md:gap-2 items-center justify-center mx-auto ">
      <span className="text-base font-light text-slate-400">{text}</span>
      <div className="w-full text-center relative  font-[400] overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.75 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400   text-4xl lg:text-6xl font-medium"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
