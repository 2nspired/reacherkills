"use client";
import truncateText from "~/utilities/truncate-text";

import seasonsData from "~/data/seasons-flat-data.json";
import episodesData from "~/data/episodes-flat-data.json";
import deathsData from "~/data/deaths-flat-data.json";
import { ScrollArea } from "~/components/ui/scroll-area";
import ExpandContainer from "~/app/(main)/_components/ExpandContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import Episode from "~/app/(main)/_components/season/Episode";

const description = `When retired Military Police Officer Jack Reacher is arrested
                for a murder he did not commit, he finds himself in the middle
                of a deadly conspiracy full of dirty cops, shady businessmen and
                scheming politicians. With nothing but his wits, he must figure
                out what is happening in Margrave, Georgia. The first season of
                Reacher is based on the international bestseller, The Killing
                Floor by Lee Child.`;

export default function SeasonDetailsOverlay({
  seasonNum,
  className,
  children,
}: {
  seasonNum: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const [seasonSelect, setSeasonSelect] = useState(seasonNum ?? 1);

  const [open, setOpen] = useState(false);

  const seasonData = {
    season: seasonsData.find((season) => season.season === seasonSelect) && {
      ...seasonsData.find((season) => season.season === seasonSelect),
      deadliestCharacters: Object.entries(
        deathsData
          .map((death) => death.killer)
          .reduce((acc: Record<string, number>, killer) => {
            acc[killer] = (acc[killer] ?? 0) + 1;
            return acc;
          }, {}),
      ).reduce((a, b) => (a[1] > b[1] ? a : b))[0],
      mostUsedWeapons: Object.entries(
        deathsData
          .map((death) => death.weapon)
          .reduce((acc: Record<string, number>, weapon) => {
            acc[weapon] = (acc[weapon] ?? 0) + 1;
            return acc;
          }, {}),
      ).reduce((a, b) => (a[1] > b[1] ? a : b))[0],
      totalDeaths: deathsData.filter((death) => death.season === seasonSelect)
        .length,
      reacherKills: deathsData.filter(
        (death) =>
          death.season === seasonSelect && death.killer === "Jack Reacher",
      ).length,
      totalEpisodes: episodesData.filter(
        (episode) => episode.season === seasonSelect,
      ).length,
    },

    episodes: episodesData
      .filter((episode) => episode.season === seasonSelect)
      .map((episode) => ({
        ...episode,
        deadliestCharacter: Object.entries(
          deathsData
            .map((death) => death.killer)
            .reduce((acc: Record<string, number>, killer) => {
              acc[killer] = (acc[killer] ?? 0) + 1;
              return acc;
            }, {}),
        ).reduce((a, b) => (a[1] > b[1] ? a : b))[0],
        mostUsedWeapon: deathsData
          .map((death) => death.weapon)
          .reduce((acc: Record<string, number>, weapon) => {
            acc[weapon] = (acc[weapon] ?? 0) + 1;
            return acc;
          }, {}),
      })),
  };

  return (
    <div className={`${className}`}>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex h-full w-full max-w-[1280px] flex-col items-center border-0 bg-zinc-800/90 p-0 text-zinc-50 backdrop-blur-lg">
          <div className="flex h-full w-full max-w-7xl flex-col items-start">
            <video
              className="aspect-video max-h-[40vh] w-full rounded-t object-cover shadow-2xl"
              src="/videos/reacher-s1-e1-lightening-long3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <ScrollArea className="h-full w-full max-w-full overflow-hidden">
              <div className="w-full space-y-2 p-4 md:p-8">
                <DialogDescription></DialogDescription>
                <div>
                  <DialogTitle className="py-1 font-semibold lg:text-lg">
                    Reacher
                  </DialogTitle>
                  <div className="flex flex-row space-x-3 pt-1 text-xs text-zinc-400 md:text-sm lg:text-base">
                    <div>2022 - 2025</div>
                    <div>TV-MA</div>
                    <div>3 Seasons</div>
                  </div>
                </div>

                <div>
                  <button onClick={() => setOpen(!open)}>
                    <div className="py-2 text-left">
                      {!open
                        ? truncateText(description, 100, "...")
                        : description}
                    </div>
                  </button>
                </div>
                <div className="pb-3">
                  <Select
                    defaultValue={seasonNum?.toString()}
                    onValueChange={(value) => setSeasonSelect(Number(value))}
                  >
                    <SelectTrigger className="w-28 border-zinc-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-300">
                      <SelectItem value="1">Season 1</SelectItem>
                      <SelectItem value="2">Season 2</SelectItem>
                      <SelectItem value="3">Season 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ExpandContainer>
                  <div className="pt-1 pb-3">
                    <div>{`Total Deaths: ${seasonData.season?.totalDeaths}`}</div>
                    <div>{`Reacher Kills: ${seasonData.season?.reacherKills}`}</div>
                    <div>{`Most used weapon: ${seasonData.season?.mostUsedWeapons}`}</div>
                    <div>{`Deadliest Character: ${seasonData.season?.deadliestCharacters}`}</div>
                  </div>
                </ExpandContainer>
                <div className="flex flex-col space-y-16 pb-18">
                  {episodesData
                    .filter((episode) => episode.season === 1)
                    .map((episode) => (
                      <Episode
                        key={`s${seasonSelect}-e${episode.episode}`}
                        seasonNum={seasonSelect}
                        episodeNum={episode.episode}
                      />
                    ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
