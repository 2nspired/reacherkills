import LargeVideoCard from "./VideoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Skull from "~/app/(main)/_components/svg/SkullCross";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Image from "next/image";

const testData = {
  Season: 1,
  Year: 2022,
  TotalDeaths: 64,
  TotalReacherKills: 22,
  TotalEpisodes: 8,
  shortSummary: "Margrave, GA was safe until a new hobo came to town",
  longSummary:
    "Margrave, GA was safe until a new hobo came to town. Jack Reacher, a former military police officer, arrives in the small town of Margrave, Georgia, only to find himself embroiled in a conspiracy involving counterfeit money and a series of murders. As he investigates, he uncovers dark secrets about the town and its residents, leading to a thrilling showdown with dangerous adversaries.",
  Episodes: [
    {
      episode: 1,
      Title: "Trouble in Margrove",
      heroImage: "/reacher-images/hero/reacher-1920x1080-01.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 24,
      ReacherKills: 10,
    },
    {
      episode: 2,
      Title: "The Long Road",
      heroImage: "/reacher-images/hero/reacher-1920x1080-02.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 18,
      ReacherKills: 7,
    },
    {
      episode: 3,
      Title: "Shadows of the Past",
      heroImage: "/reacher-images/hero/reacher-1920x1080-03.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 15,
      ReacherKills: 5,
    },
    {
      episode: 4,
      Title: "Crossfire",
      heroImage: "/reacher-images/hero/reacher-1920x1080-04.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 20,
      ReacherKills: 8,
    },
    {
      episode: 5,
      Title: "Betrayal",
      heroImage: "/reacher-images/hero/reacher-1920x1080-05.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 22,
      ReacherKills: 9,
    },
    {
      episode: 6,
      Title: "The Reckoning",
      heroImage: "/reacher-images/hero/reacher-1920x1080-06.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 25,
      ReacherKills: 12,
    },
    {
      episode: 7,
      Title: "Final Stand",
      heroImage: "/reacher-images/hero/reacher-1920x1080-05.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 30,
      ReacherKills: 15,
    },
    {
      episode: 8,
      Title: "Aftermath",
      heroImage: "/reacher-images/hero/reacher-1920x1080-04.png",
      VideoRef: "/videos/reacher-s1-e1-lightening-long3.mp4",
      Deaths: 10,
      ReacherKills: 3,
    },
  ],
};

export default function SeasonDetails() {
  return (
    <div className="flex max-h-[900px] w-full flex-col items-center lg:max-h-none">
      <div className="w-full">
        <LargeVideoCard
          className="lg:min-h-[600px]"
          title={`Season ${testData.Season}`}
          subtitle={testData.Year.toString()}
          description={testData.shortSummary}
          videoRef="/videos/reacher-s1-e1-lightening-long3.mp4"
          imageRef="/reacher-images/hero/reacher-1920x1080-01.png"
        />
      </div>
      <div className="min-h-full w-full max-w-7xl">
        <div className="flex-col-center w-full text-center">
          <Tabs defaultValue="season1" className="flex-col-center w-full">
            <TabsList className="my-6 p-6">
              <TabsTrigger value="season1">Season 1</TabsTrigger>
              <TabsTrigger value="season2">Season 2</TabsTrigger>
              <TabsTrigger value="season3">Season 3</TabsTrigger>
            </TabsList>
            <TabsContent className="w-full grow" value="season1">
              <div className="flex w-full grow flex-col lg:flex-row">
                <EpisodeList />
                <div className="bg-blue-500/50 p-6 text-right lg:w-1/3">
                  TOP KILLERS
                </div>
              </div>
            </TabsContent>
            <TabsContent value="season2">
              Change your password here.
            </TabsContent>
            <TabsContent value="season3">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

const EpisodeList = () => {
  return (
    <div className="grow p-6 text-left">
      <Table>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="text-white"></TableHead>
            <TableHead className="hidden w-[150px] pb-3 text-white md:table-cell"></TableHead>
            <TableHead className="pb-3 text-base text-white md:text-lg"></TableHead>
            <TableHead>
              <div className="pb-2">
                <Skull className="size-5 fill-zinc-200 md:size-8 lg:size-10" />
              </div>
            </TableHead>
            <TableHead className="text-right text-white">
              <div className="font-bebas tracking-none flex flex-row justify-end pt-1.5 pb-2 text-[1.75rem] leading-none md:text-[3rem]">
                <div className="">R</div>
                <div className="text-accent">K</div>
              </div>
            </TableHead>
            <TableHead className="text-white"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {testData.Episodes.map((episode) => (
            <TableRow
              key={episode.episode}
              className="group hover:bg-accent/70 border-none md:text-lg"
            >
              <TableCell>
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex-col-center border-accent/50 size-15 rounded-full border-2 font-semibold text-zinc-300 group-hover:border-zinc-900 group-hover:text-zinc-900 md:border-2 lg:size-10 lg:text-lg">
                    {episode.episode}
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden font-medium md:table-cell">
                <Image
                  src={episode.heroImage}
                  alt={episode.Title}
                  width={500}
                  height={300}
                  className="size-full rounded-lg"
                />
              </TableCell>
              <TableCell className="group-hover:text-zinc-900">
                {episode.Title}
              </TableCell>
              <TableCell className="font-sometype text-lg group-hover:text-zinc-900 md:pl-3.5 md:text-3xl lg:pl-4.5">
                {episode.Deaths}
              </TableCell>
              <TableCell className="font-sometype pr-5 text-right text-lg font-semibold group-hover:text-zinc-900 md:pr-2 md:text-3xl">
                {episode.ReacherKills}
              </TableCell>
              <TableCell className="font-sometype hidden pr-5 text-right font-semibold md:block md:pr-2 md:text-3xl"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
