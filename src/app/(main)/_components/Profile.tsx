import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import character from "~/data/profile-data.json";

export default function Profile({ className }: { className?: string }) {
  const reacherProfile = character;

  // bg-[url('/texture/Paper_07.jpg')]
  return (
    <div className={`${className} p-6 text-black md:p-0`}>
      {/*  */}
      <Accordion
        // defaultValue="item-2"
        type="single"
        className="rounded-2xl rounded-b-2xl bg-linear-to-br from-white/60 to-white/30 backdrop-blur-sm"
        collapsible
      >
        <AccordionItem value="item-1" className="font-sometype border-0">
          <AccordionTrigger className="px-3">Profile</AccordionTrigger>
          <AccordionContent className="mx-3 space-y-3 rounded-md bg-white/40 p-4 text-zinc-900 inset-shadow-sm inset-shadow-zinc-900/50 md:p-6">
            <p>
              <strong>Full Name:</strong> {reacherProfile.fullName}
            </p>
            <p>
              <strong>Height:</strong> {reacherProfile.estimatedHeight}
            </p>
            <p>
              <strong>Weight:</strong> {reacherProfile.estimatedWeight}
            </p>
            <p>
              <strong>Age Estimate:</strong> {reacherProfile.ageEstimate}
            </p>
            <strong>Notable Facts:</strong>
            <ul className="font-sometype ml-3 list-inside list-disc">
              {reacherProfile.notableFacts.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <strong>Skills:</strong>
            <ul className="font-sometype ml-3 list-inside list-disc">
              {reacherProfile.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="font-sometype border-0">
          <AccordionTrigger className="px-3">Military Service</AccordionTrigger>
          <AccordionContent className="mx-3 space-y-3 rounded-md bg-white/40 p-4 inset-shadow-sm inset-shadow-zinc-900/50 md:p-6">
            <ul className="font-sometype list-inside list-none space-y-3">
              <li>
                <strong>Branch:</strong>{" "}
                {reacherProfile.militaryBackground.branch}
              </li>
              <li>
                <strong>Rank:</strong> {reacherProfile.militaryBackground.rank}
              </li>
              <li>
                <strong>Command:</strong>{" "}
                {reacherProfile.militaryBackground.command}
              </li>
              <li>
                <strong>Unit:</strong> {reacherProfile.militaryBackground.unit}
              </li>
              <li>
                <strong>Education:</strong>{" "}
                {reacherProfile.militaryBackground.education}
              </li>
              <li>
                <strong>Years of Service:</strong>{" "}
                {reacherProfile.militaryBackground.yearsOfService}
              </li>
              <li>
                <strong>Discharge:</strong>{" "}
                {reacherProfile.militaryBackground.dischargeStatus}
              </li>
              <li>
                <strong>Honors:</strong>
                <ul className="ml-8 list-disc">
                  {reacherProfile.militaryBackground.honors.map(
                    (honor, index) => (
                      <li key={index}>{honor}</li>
                    ),
                  )}
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="font-sometype border-0">
          <AccordionTrigger className="px-3">
            Personality Traits
          </AccordionTrigger>
          <AccordionContent className="mx-3 space-y-1 rounded-md bg-white/40 p-4 inset-shadow-sm inset-shadow-zinc-900/50 md:p-6">
            <ul className="font-sometype list-inside list-disc space-y-3">
              {reacherProfile.personalityTraits.map((trait, index) => (
                <li key={index}>{trait}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="font-sometype border-0">
          <AccordionTrigger className="px-3">Lifestyle</AccordionTrigger>
          <AccordionContent className="mx-3 rounded-md bg-white/40 p-4 inset-shadow-sm inset-shadow-zinc-900/50 md:p-6">
            <ul className="font-sometype list-inside space-y-3">
              <li>
                <strong>Residence:</strong> <span>None, </span>
                <span className="line-through">drifter</span> <span>hobo</span>
              </li>
              <li>
                <strong>Possessions:</strong>
                <ul className="font-sometype ml-3 list-inside list-disc">
                  {reacherProfile.lifestyle.possessions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </li>
              <li>
                <strong>Habits:</strong>
                <ul className="font-sometype ml-3 list-inside list-disc">
                  {reacherProfile.lifestyle.habits.map((habit, index) => (
                    <li key={index}>{habit}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="font-sometype border-b-0 pb-3">
          <AccordionTrigger className="px-3">Portrayal</AccordionTrigger>
          <AccordionContent className="mx-3 space-y-1 rounded-md bg-white/40 p-4 inset-shadow-sm inset-shadow-zinc-900/50 md:p-6">
            <div className="font-sometype space-y-3">
              <p>
                <strong>Actor:</strong> {reacherProfile.seriesPortrayal.actor}
              </p>
              <p>
                <strong>Adaptation:</strong>{" "}
                {reacherProfile.seriesPortrayal.adaptation}
              </p>
              <p>
                <strong>Source Material:</strong>{" "}
                {reacherProfile.seriesPortrayal.season1SourceMaterial}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
