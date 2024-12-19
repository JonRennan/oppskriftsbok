"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Checkbox } from "~/components/ui/checkbox";
import {
  dough,
  type Ingredient,
  lemonCurd,
  type PrepStep,
  type RecipeSection,
} from "~/types";

export default function HomePage() {
  const [recipe, setRecipe] = useState<RecipeSection[]>(() => {
    const localeValue = localStorage.getItem("recipe")
    if (localeValue == null) return [dough, lemonCurd]
    return JSON.parse(localeValue) as RecipeSection[]
  });

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe))
  }, [recipe]);

  function toggleIngredient(sectionId: number, ingredientId: string, checked: boolean) {
    setRecipe(currentRecipe => {
      return currentRecipe.map(section => {
        if (section.id === sectionId) {
          const ingredients = section.ingredients.map(ingredient => {
            if (ingredient.id === ingredientId) {
              return {...ingredient, checked}
            } return ingredient
          })
          return {...section, ingredients }}
        return section
      })})
  }

  return (
    <main className="flex flex-col items-center gap-4 p-1 pt-4">
      <h1 className="text-4xl font-bold">Sitronpai</h1>

      {recipe.map((section: RecipeSection) => (
        <div
          key={section.name}
          className="w-full rounded bg-secondary px-4 py-2 md:max-w-lg"
        >
          <h2 className="pb-2 text-2xl font-bold text-primary">
            {section.name}
          </h2>
          <ul>
            {section.ingredients.map((ingredient: Ingredient) => (
              <li key={ingredient.id} className="flex items-center gap-2 py-1">
                <Checkbox
                  id={ingredient.id}
                  checked={ingredient.checked}
                  onCheckedChange={checked => toggleIngredient(section.id, ingredient.id, checked as boolean)}
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
                  {section.steps.map((step: PrepStep) => (
                    <li
                      key={step.id}
                      dangerouslySetInnerHTML={{ __html: step.label }}
                    />
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
