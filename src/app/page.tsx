import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Checkbox } from "~/components/ui/checkbox";

export default function HomePage() {
  const dough = [
    {
      id: "wheat",
      label: "3dl hvetemel",
    },
    {
      id: "sugar",
      label: "2ss sukker",
    },
    {
      id: "butter",
      label: "125g smør (romtemperert)",
    },
    {
      id: "egg",
      label: "1 eggeplomme",
    },
    {
      id: "lemon",
      label: "skall fra sitronene som skal brukes i fyllet",
    },
  ];

  const lemonCurd = [
    {
      id: "egg",
      label: "3 egg + 1 eggehvite (hvis den er igjen)",
    },
    {
      id: "sugar",
      label: "2dl sukker",
    },
    {
      id: "cream",
      label: "2dl matfløte",
    },
    {
      id: "cornstarch",
      label: "4-5ss maizena",
    },
    {
      id: "lemon",
      label: "4 sitroner",
    },
  ];
  return (
    <main className="flex flex-col gap-4 p-1 pt-4 items-center">
      <h1 className="text-4xl font-bold">Sitronpai</h1>

      <div className="w-full px-4 py-2 md:max-w-lg bg-secondary rounded">
        <h2 className="text-2xl text-primary font-bold pb-2">Bunn</h2>
        <ul>
          {dough.map((item) => (
            <li key={item.id} className="flex gap-2 items-center py-1">
              <Checkbox id={item.id} className="rounded"/>
              <label>{item.label}</label>
            </li>
          ))}
        </ul>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Fremgangsmåte</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-1">
                <li>
                  Ha alt i en bolle og kna det til en jevn deig.
                </li>
                <li>
                  Smør paiformen med smør og press deigen jevnt ut i formen.
                </li>
                <li>
                  La deigen stå kaldt i formen i minst 30 min.
                </li>
                <li>
                  Stek bunnen i <b>10-15 min</b> på nederste rille (<b>180 grader</b>)
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full px-4 py-2  md:max-w-lg bg-secondary rounded">
        <h2 className="text-2xl text-primary font-bold pb-2">Fyll</h2>
        <ul>
          {lemonCurd.map((item) => (
            <li key={item.id} className="flex gap-2 items-center py-1">
              <Checkbox id={item.id} className="rounded" />
              <label>{item.label}</label>
            </li>
          ))}
        </ul>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">Fremgangsmåte</AccordionTrigger>
            <AccordionContent>
              Stekes på nederste rille i ca. 20 min på 180 grader
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
