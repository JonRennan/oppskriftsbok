import Ingredient from "~/components/recipe/ingredient";
import Procedure from "~/components/recipe/procedure";
import { type IngredientType, type RecipeSectionType } from "~/types";

interface RecipeSectionProps {
  section: RecipeSectionType;
  onClickIngredient: (
    sectionId: number,
    ingredientId: string,
    checked: boolean,
  ) => void;
}

export default function RecipeSection({
  section,
  onClickIngredient,
}: RecipeSectionProps) {
  return (
    <div
      key={section.name}
      className="w-full rounded bg-secondary px-4 py-2 md:max-w-lg"
    >
      <h2 className="pb-2 text-2xl font-bold text-primary">{section.name}</h2>
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
