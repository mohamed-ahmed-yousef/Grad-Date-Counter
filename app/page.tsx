import Image from "next/image";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <main className=" h-screen">
      <Timer />
      <Footer />
    </main>
  );
}
