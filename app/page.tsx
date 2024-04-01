import Image from "next/image";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <main className="flex flex-col absolute min-h-full w-full">
      <Timer />
      <Footer />
    </main>
  );
}
