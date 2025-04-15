"use client";

import ExpandContainer from "~/app/(main)/_components/ExpandContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "~/components/ui/dialog";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Skull from "~/app/(main)/_components/svg/SkullCross";
import { Video } from "lucide-react";

export default function SeasonDetailsOverlay({
  season,
  className,
  children,
}: {
  season: number;
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${className}`}>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="flex h-full min-h-full min-w-full flex-col items-center border-0 bg-zinc-900/80 p-0 text-white backdrop-blur-xs">
          <DialogTitle className="hidden">text</DialogTitle>
          <div className="flex h-full max-w-7xl flex-col items-start bg-blue-500/50">
            <video
              className="aspect-video max-h-[600px] w-full object-cover"
              //   className="aspect-video max-h-[40rem] min-h-1/3 w-full object-cover"
              src="/videos/reacher-s1-e1-lightening-long3.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="w-full overflow-y-auto bg-red-500/50 p-4">
              <Select defaultValue="s1">
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s1">Season 1</SelectItem>
                  <SelectItem value="s2">Season 2</SelectItem>
                  <SelectItem value="s3">Season 3</SelectItem>
                </SelectContent>
              </Select>
              <div className="pt-2">
                <div className="text-xs">2022</div>
                <ExpandContainer
                  title="Description"
                  titleClassName="py-2"
                  className=""
                  defaultOpen={true}
                >
                  <div className="py-2">
                    When retired Military Police Officer Jack Reacher is
                    arrested for a murder he did not commit, he finds himself in
                    the middle of a deadly conspiracy full of dirty cops, shady
                    businessmen and scheming politicians. With nothing but his
                    wits, he must figure out what is happening in Margrave,
                    Georgia. The first season of Reacher is based on the
                    international bestseller, The Killing Floor by Lee Child.
                  </div>
                </ExpandContainer>
              </div>
              {/* <div className="w-full bg-purple-500/50">
                {" "}
                When retired Military Police Officer Jack Reacher is arrested
                for a murder he did not commit, he finds himself in the middle
                of a deadly conspiracy full of dirty cops, shady businessmen and
                scheming politicians. With nothing but his wits, he must figure
                out what is happening in Margrave, Georgia. The first season of
                Reacher is based on the international bestseller, The Killing
                Floor by Lee Child.
              </div>
              <div className="w-full bg-yellow-500/50">
                {" "}
                When retired Military Police Officer Jack Reacher is arrested
                for a murder he did not commit, he finds himself in the middle
                of a deadly conspiracy full of dirty cops, shady businessmen and
                scheming politicians. With nothing but his wits, he must figure
                out what is happening in Margrave, Georgia. The first season of
                Reacher is based on the international bestseller, The Killing
                Floor by Lee Child.
              </div> */}
              <ExpandContainer
                title="Season Stats"
                titleClassName="py-2 bg-blue-500"
              >
                <div className="bg-blue-500/50">
                  <div>Total Deaths</div>
                  <div>Reacher Kills</div>
                  <div>Most used weapon</div>
                  <div>Deadliest Character</div>
                </div>
              </ExpandContainer>
              <ExpandContainer
                title="Episodes"
                titleClassName="py-2 bg-green-500"
              >
                <div className="bg-green-500/50">
                  <div>Epsiode 1</div>
                  <div>Epsiode 2</div>
                </div>
              </ExpandContainer>
            </div>
          </div>
          {/* <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
