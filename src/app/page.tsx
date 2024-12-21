"use client";

import { useEffect, useState } from "react";
import RecipeSection from "~/components/recipe/recipeSection";
import { dough, lemonCurd, type RecipeSectionType } from "~/types";

export default function HomePage() {
  const [recipe, setRecipe] = useState<RecipeSectionType[]>([dough, lemonCurd]);

  useEffect(() => {
    if (window) {
      const localeValue = localStorage.getItem("recipe");
      if (localeValue != null) {
        setRecipe(JSON.parse(localeValue) as RecipeSectionType[]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(recipe));
  }, [recipe]);

  function toggleIngredient(
    sectionId: number,
    ingredientId: string,
    checked: boolean,
  ) {
    setRecipe((currentRecipe) => {
      return currentRecipe.map((section) => {
        if (section.id === sectionId) {
          const ingredients = section.ingredients.map((ingredient) => {
            if (ingredient.id === ingredientId) {
              return { ...ingredient, checked };
            }
            return ingredient;
          });
          return { ...section, ingredients };
        }
        return section;
      });
    });
  }

  function resetSection(
    sectionId: number,
  ) {
    setRecipe((currentRecipe) => {
      return currentRecipe.map((section) => {
        if (section.id === sectionId) {
          const ingredients = section.ingredients.map((ingredient) => {
              return { ...ingredient, checked: false };
          });
          return { ...section, ingredients };
        }
        return section;
      });
    });
  }

  return (
    <main className="flex flex-col items-center gap-4 p-1 pt-4">
      <h1 className="text-4xl font-bold">Sitronpai</h1>

      {recipe.map((section: RecipeSectionType) => (
        <RecipeSection
          section={section}
          resetSection={resetSection}
          onClickIngredient={toggleIngredient}
          key={section.id}
        />
      ))}
    </main>
  );
}
