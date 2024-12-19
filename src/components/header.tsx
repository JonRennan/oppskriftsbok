import { ModeToggle } from "~/components/mode-toggle";

export default function Header() {
  return (
    <header>
      <div className="absolute right-4 top-4">
        <ModeToggle />
      </div>
    </header>
  );
}
