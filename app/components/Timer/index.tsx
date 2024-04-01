import Image from "next/image";
import Countdown from "./Countdown";
import Faculty from "./faculty.svg";
export default function Timer() {
  return (
    <div className="">
      <div className="relative flex  justify-center">
        <Image
          priority
          src={Faculty.src}
          alt="faculty"
          width={100}
          height={100}
          className="w-[100vw] h-[calc(100vh-250px)] object-cover"
        />
        <p className="absolute bottom-16  text-slate-50 text-3xl">
          بقي على خط النهاية
        </p>
      </div>
      <Countdown />
    </div>
  );
}
