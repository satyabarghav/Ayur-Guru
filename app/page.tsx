import Image from "next/image";
import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div className="flex p-11 space-y-4">
    <div className="order-1">
    <div className="text-left font-bold text-6xl mb-5">
     Discover your Prakriti
    </div>
    <div className="text-left font-serif text-3xl">
     Balance and Harmony with <span className="text-green-600">Ayurveda</span>
    </div>
    </div>
   </div>
  );
}
