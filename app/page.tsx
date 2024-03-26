import Image from "next/image";
import CountdownTimer from "./components/Timer/TimerLogic";

export default function Home() {
  return (
    <main className="">
      <CountdownTimer />
    </main>
  );
}
