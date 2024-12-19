import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Checkbox } from "~/components/ui/checkbox";
import { dough, lemonCurd, type RecipeSection, type Ingredient, type PrepStep } from "~/types";

export default function HomePage() {
  const recipeSections = [dough, lemonCurd]
  return (
    <main className="flex flex-col items-center gap-4 p-1 pt-4">
      <h1 className="text-4xl font-bold">Sitronpai</h1>

      {recipeSections.map((section: RecipeSection) => (
        <div key={section.name} className="w-full rounded bg-secondary px-4 py-2 md:max-w-lg">
          <h2 className="pb-2 text-2xl font-bold text-primary">
            {section.name}
          </h2>
          <ul>
            {section.ingredients.map((ingredient: Ingredient) => (
              <li key={ingredient.id} className="flex items-center gap-2 py-1">
                <Checkbox
                  id={ingredient.id}
                  checked={ingredient.checked}
                  className="rounded"
                />
                <label>{ingredient.label}</label>
              </li>
            ))}
          </ul>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-xl">
                Fremgangsmåte
              </AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col gap-1">
                  {section.steps.map((step: PrepStep) =>(
                    <li key={step.id} dangerouslySetInnerHTML={{__html: step.label}}/>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </main>
  );
}
