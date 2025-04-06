import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import character from "~/data/profile-data.json";

export default function Profile() {
  const reacherProfile = character;

  return (
    <Accordion
      // defaultValue="item-2"
      type="single"
      // className="bg-black/60"
      collapsible
    >
      <AccordionItem value="item-1" className="font-sometype">
        <AccordionTrigger className="bg-black/50 px-0">
          Profile
        </AccordionTrigger>
        <AccordionContent className="space-y-1 bg-white/70 py-2 pl-3 text-black">
          <p>
            <strong>Height:</strong> {reacherProfile.estimatedHeight}
          </p>
          <p>
            <strong>Weight:</strong> {reacherProfile.estimatedWeight}
          </p>
          <p>
            <strong>Age Estimate:</strong> {reacherProfile.ageEstimate}
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="font-sometype">
        <AccordionTrigger className="bg-black/50 px-0">
          Military Service
        </AccordionTrigger>
        <AccordionContent className="space-y-1 bg-white/70 py-2 text-black">
          <ul className="list-inside list-none space-y-1 pl-3 font-sometype">
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
      <AccordionItem value="item-3" className="font-sometype">
        <AccordionTrigger className="bg-black/50 px-0">
          Personality Traits
        </AccordionTrigger>
        <AccordionContent className="space-y-1 bg-white/70 py-2 pl-3 text-black">
          <ul className="list-inside list-disc space-y-1 pl-3 font-sometype">
            {reacherProfile.personalityTraits.map((trait, index) => (
              <li key={index}>{trait}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="font-sometype">
        <AccordionTrigger className="bg-black/50 px-0">
          Lifestyle
        </AccordionTrigger>
        <AccordionContent className="space-y-1 bg-white/70 py-2 pl-3 text-black">
          <ul className="list-inside space-y-1 pl-3 font-sometype">
            <li>
              <strong>Residence:</strong> <span>None, </span>
              <span className="line-through">drifter</span> <span>hobo</span>
            </li>
            <li>
              <strong>Possessions:</strong>
              <ul className="ml-3 list-inside list-disc font-sometype">
                {reacherProfile.lifestyle.possessions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong>Habits:</strong>
              <ul className="ml-3 list-inside list-disc font-sometype">
                {reacherProfile.lifestyle.habits.map((habit, index) => (
                  <li key={index}>{habit}</li>
                ))}
              </ul>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className="font-sometype">
        <AccordionTrigger className="bg-black/50 px-0">
          Portrayal
        </AccordionTrigger>
        <AccordionContent className="space-y-1 bg-white/70 py-2 pl-3 text-black">
          <div className="space-y-1 pl-3 font-sometype">
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
  );
}
