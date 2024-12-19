// Types
export class Recipe {
  id: number;
  userId: string | null;
  name: string | null;
  description: string | null;

  constructor(
    id: number,
    userId: string | null,
    name: string | null,
    description: string | null,
  ) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.description = description;
  }
}

export class RecipeSection {
  id: number;
  recipeId: number | null;
  name: string | null;
  description: string | null;
  ingredients: Ingredient[];
  steps: PrepStep[];

  timestamp: number;

  constructor(
    id: number,
    recipeId: number | null,
    name: string | null,
    description: string | null,
    ingredients: Ingredient[],
    steps: PrepStep[],
    timestamp = Date.now(),
  ) {
    this.id = id;
    this.recipeId = recipeId;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.steps = steps;
    this.timestamp = timestamp;
  }
}

export class Ingredient {
  id: string;
  label: string;
  checked: boolean;

  constructor(id: string, label: string, checked = false) {
    this.id = id;
    this.label = label;
    this.checked = checked;
  }
}

export class PrepStep {
  id: number;
  recipeSectionId: number;
  label: string;
  order: number;

  constructor(
    id: number,
    recipeSectionId: number,
    label: string,
    order: number,
  ) {
    this.id = id;
    this.recipeSectionId = recipeSectionId;
    this.label = label;
    this.order = order;
  }
}

// Recipes

export const lemonPie: Recipe = new Recipe(1, null, "Sitronpai", null);

export const dough: RecipeSection = new RecipeSection(1, 1, "Bunn", "Paibunn", [
  new Ingredient("wheat", "3dl hvetemel"),
  new Ingredient("sugar", "2ss sukker"),
  new Ingredient("butter", "125g smør (romtemperert)"),
  new Ingredient("egg", "1 eggeplomme"),
  new Ingredient("lemon", "skall fra sitronene som skal brukes i fyllet"),
], [
  new PrepStep(1, 1, "Ha alt i en bolle og kna det til en jevn deig.", 0),
  new PrepStep(2, 1, "Smør paiformen med smør og press deigen jevnt ut i formen.", 1),
  new PrepStep(3, 1, "La deigen stå kaldt i formen i <b>minst 30 min</b>.", 2),
  new PrepStep(4, 1, "Stek bunnen i <b>10-15 min</b> på nederste rille <b>180 grader</b>.", 3),
]);

export const lemonCurd: RecipeSection = new RecipeSection(
  2,
  1,
  "Fyll",
  "Sitronfyll",
  [
    new Ingredient("egg", "3 egg + 1 eggehvite (hvis den er igjen)"),
    new Ingredient("sugar", "2dl sukker"),
    new Ingredient("cream", "2dl matfløte"),
    new Ingredient("cornstarch", "4-5ss maizena"),
    new Ingredient("lemon", "4 sitroner"),
  ],[
    new PrepStep(1, 2, "Stekes på nederste rille i <b>ca. 20 min</b> på <b>180 grader</b>", 0),
    new PrepStep(2, 2, "Fyllet skal ikke være helt fast når paien taes ut ovnen, det skal stivne mens paien kjøler seg ned på benken.", 1),
    new PrepStep(3, 2, "<b>Tips:</b> Paien smaker enda bedre etter å ha stått kaldt en god stund, gjerne til dagen etter.", 2),
  ]
);
