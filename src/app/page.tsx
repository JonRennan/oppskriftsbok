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
      label: "4-5ss maisenna",
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
        <h2 className="text-2xl text-primary font-bold">Bunn</h2>
        <ul>
          {dough.map((item) => (
            <li key={item.id} className="flex gap-2 items-center">
              <Checkbox id={item.id} className="rounded"/>
              <label>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full px-4 py-2  md:max-w-lg bg-secondary rounded">
        <h2 className="text-2xl text-primary font-bold">Fyll</h2>
        <ul>
          {lemonCurd.map((item) => (
            <li key={item.id} className="flex gap-2 items-center">
              <Checkbox id={item.id} className="rounded" />
              <label>{item.label}</label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
