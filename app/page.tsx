import Image from "next/image";
import { colors } from "./colors/colors";
import Header from "./components/Header";
import VisitaContainer from "./components/VisitaContainer";
import RecompensaSection from "./components/RecompensaSection";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-zinc-100 p-2  gap-2">
      <Header image="/camino.png" nombre="Jesus Eng" descripcion="Bienvenido a Camino a comala" />
      <VisitaContainer />
      <RecompensaSection />
    </div>
  );
}
