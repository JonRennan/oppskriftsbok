import { Checkbox } from "~/components/ui/checkbox";
import { type IngredientType } from "~/types";

interface IngredientProps {
  ingredient: IngredientType;
  sectionId: number;
  onClick: (sectionId: number, ingredientId: string, checked: boolean) => void;
}

export default function Ingredient({
  ingredient,
  sectionId,
  onClick,
}: IngredientProps) {
  return (
    <li className="flex items-center gap-2 py-1">
      <Checkbox
        id={ingredient.id}
        checked={ingredient.checked}
        onCheckedChange={(checked) =>
          onClick(sectionId, ingredient.id, checked as boolean)
        }
        className="rounded"
      />
      <label>{ingredient.label}</label>
    </li>
  );
}
