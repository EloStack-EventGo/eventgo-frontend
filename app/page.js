import { React } from "react";
import EventCard from "./components/EventCard";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import TopPicks from "./top-picks/page";
import Background from "./components/Background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <SearchBar />
      {/* CONTENT CONTAINER */}
      <div className="flex flex-col h-auto w-full z-10">
        <h1 className="text-6xl h-20 leading-[80px] font-black px-5">
          Our Top Picks
        </h1>
        <TopPicks />
      </div>
      <Background />
    </main>
  );
}
