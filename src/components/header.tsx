import { ModeToggle } from "~/components/mode-toggle";

export default function Header() {
  return (
    <header className="flex w-full justify-center">
      <div className="relative w-full md:max-w-xl">
        <ModeToggle className="absolute right-3 top-4" />
      </div>
    </header>
  );
}
