import Scrambler from "~/app/main/_components/Scrambler";

export default function HomePage() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center space-y-6 bg-gradient-to-r from-slate-500 to-slate-800 text-white">
      <div>landing page</div>
      <div className="leading-0 flex flex-col items-end font-bebas text-8xl leading-[0.80] tracking-wide sm:text-[160px]">
        <div className="text-orange-500">REACHER</div>

        <Scrambler text="kills" className="h-[40px] text-4xl" />
        {/* <div className="text-2xl text-white">KILLS</div> */}
      </div>
      <div className="max-w-[600px] px-10 pt-10 text-center font-sometype sm:text-xl">
        A fan-made guide tracking every bad guy Jack Reacher takes down, episode
        by episode...
      </div>
      <div className="font-sometype text-xl">coming soon</div>
    </main>
  );
}
