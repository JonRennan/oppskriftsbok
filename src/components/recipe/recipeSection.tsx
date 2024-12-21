import { RotateCcw } from "lucide-react";
import Ingredient from "~/components/recipe/ingredient";
import Procedure from "~/components/recipe/procedure";
import { Button } from "~/components/ui/button";
import { type IngredientType, type RecipeSectionType } from "~/types";

interface RecipeSectionProps {
  section: RecipeSectionType;
  resetSection: (
    sectionId: number,
  ) => void;
  onClickIngredient: (
    sectionId: number,
    ingredientId: string,
    checked: boolean,
  ) => void;
}

export default function RecipeSection({
  section,
  resetSection,
  onClickIngredient,
}: RecipeSectionProps) {
  return (
    <div
      key={section.name}
      className="w-full rounded bg-secondary px-4 py-2 md:max-w-lg"
    >
      <div className="flex justify-between">
        <h2 className="pb-2 text-2xl font-bold text-primary">{section.name}</h2>
        <Button size="icon" variant="secondary" className="text-primary" onClick={() => resetSection(section.id)}>
          <RotateCcw />
        </Button>
      </div>
      <ul>
        {section.ingredients.map((ingredient: IngredientType) => (
          <Ingredient
            key={ingredient.id}
            ingredient={ingredient}
            sectionId={section.id}
            onClick={onClickIngredient}
          />
        ))}
      </ul>
      <Procedure steps={section.steps} />
    </div>
  );
}
