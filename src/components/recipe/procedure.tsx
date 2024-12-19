import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { type PrepStepType } from "~/types";

interface ProcedureProps {
  steps: PrepStepType[];
}

export default function Procedure({ steps }: ProcedureProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">Fremgangsmåte</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-1">
            {steps.map((step: PrepStepType) => (
              <li
                key={step.id}
                dangerouslySetInnerHTML={{ __html: step.label }}
              />
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
