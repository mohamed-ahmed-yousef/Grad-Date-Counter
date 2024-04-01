"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const COUNTDOWN_FROM = "2024-07-31";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function getDateInfo() {
  const end = new Date(COUNTDOWN_FROM);
  const now = new Date();
  const distance = +end - +now;

  const days = Math.floor(distance / DAY);
  const hours = Math.floor((distance % DAY) / HOUR);
  const minutes = Math.floor((distance % HOUR) / MINUTE);
  const seconds = Math.floor((distance % MINUTE) / SECOND);

  return { days, hours, minutes, seconds };
}

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

function CountdownItem({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-1 md:gap-2 mx-auto w-[30%] sm:w-[18%] md:w-[16%] lg:w-[38%] xs:w-[36%] h-24 md:h-36">
      <span className="font-light text-base text-slate-400">{text}</span>
      <div className="relative w-full font-bold font-mono overflow-hidden">
        <span className="bg-clip-text font-medium text-lg lg:text-6xl xxs:text-xl xs:text-4xl invisible">
          {num}
        </span>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={num}
            initial={{ y: "100%", x: "-50%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ ease: "backIn", duration: 0.6 }}
            className="top-0 left-1/2 absolute bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400 font-medium text-lg text-transparent lg:text-6xl xxs:text-xl xs:text-4xl"
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
