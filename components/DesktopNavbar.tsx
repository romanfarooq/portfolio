import Link from "next/link";

export function DesktopNavbar() {
  return (
    <nav className="flex items-center justify-between">
      <Link
        href="/"
        className="text-xl font-bold text-neutral-300 transition-colors hover:text-white"
      >
        Roman Farooq
      </Link>
      <ul className="flex flex-row items-center gap-6">
        {["home", "about", "work", "experience", "contact"].map((section) => (
          <li key={section} className="py-2">
            <a
              href={`#${section}`}
              className="text-base text-neutral-300 capitalize transition-colors hover:text-white"
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
