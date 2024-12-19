// Types
export class RecipeType {
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

export class RecipeSectionType {
  id: number;
  recipeId: number | null;
  name: string | null;
  description: string | null;
  ingredients: IngredientType[];
  steps: PrepStepType[];

  timestamp: number;

  constructor(
    id: number,
    recipeId: number | null,
    name: string | null,
    description: string | null,
    ingredients: IngredientType[],
    steps: PrepStepType[],
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

export class IngredientType {
  id: string;
  label: string;
  checked: boolean;

  constructor(id: string, label: string, checked = false) {
    this.id = id;
    this.label = label;
    this.checked = checked;
  }
}

export class PrepStepType {
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

export const lemonPie: RecipeType = new RecipeType(1, null, "Sitronpai", null);

export const dough: RecipeSectionType = new RecipeSectionType(1, 1, "Bunn", "Paibunn", [
  new IngredientType("wheat", "3dl hvetemel"),
  new IngredientType("sugar", "2ss sukker"),
  new IngredientType("butter", "125g smør (romtemperert)"),
  new IngredientType("egg", "1 eggeplomme"),
  new IngredientType("lemon", "skall fra sitronene som skal brukes i fyllet"),
], [
  new PrepStepType(1, 1, "Ha alt i en bolle og kna det til en jevn deig.", 0),
  new PrepStepType(2, 1, "Smør paiformen med smør og press deigen jevnt ut i formen.", 1),
  new PrepStepType(3, 1, "La deigen stå kaldt i formen i <b>minst 30 min</b>.", 2),
  new PrepStepType(4, 1, "Stek bunnen i <b>10-15 min</b> på nederste rille <b>180 grader</b>.", 3),
]);

export const lemonCurd: RecipeSectionType = new RecipeSectionType(
  2,
  1,
  "Fyll",
  "Sitronfyll",
  [
    new IngredientType("egg", "3 egg + 1 eggehvite (hvis den er igjen)"),
    new IngredientType("sugar", "2dl sukker"),
    new IngredientType("cream", "2dl matfløte"),
    new IngredientType("cornstarch", "4-5ss maizena"),
    new IngredientType("lemon", "4 sitroner"),
  ],[
    new PrepStepType(1, 2, "Stekes på nederste rille i <b>ca. 20 min</b> på <b>180 grader</b>", 0),
    new PrepStepType(2, 2, "Fyllet skal ikke være helt fast når paien taes ut ovnen, det skal stivne mens paien kjøler seg ned på benken.", 1),
    new PrepStepType(3, 2, "<b>Tips:</b> Paien smaker enda bedre etter å ha stått kaldt en god stund, gjerne til dagen etter.", 2),
  ]
);
