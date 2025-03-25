import Scrambler from "./(main)/components/scrambler";

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center space-y-6 bg-slate-700 text-white">
      <div className="font-bebas leading-0 flex flex-col items-end text-[160px] leading-[0.80] tracking-wide">
        <div className="text-orange-500">REACHER</div>

        <Scrambler text="kills" className="h-[40px] text-4xl" />
        {/* <div className="text-2xl text-white">KILLS</div> */}
      </div>
      <div className="font-sometype max-w-[600px] px-10 pt-10 text-center text-xl">
        A fan-made guide tracking every bad guy Jack Reacher takes down, episode
        by episode...
      </div>
      <div className="font-sometype text-xl">coming soon</div>
    </main>
  );
}
