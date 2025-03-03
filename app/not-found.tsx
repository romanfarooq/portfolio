import Link from "next/link";
import { BiErrorCircle } from "react-icons/bi";

export default function NotFound() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <BiErrorCircle className="mb-4 text-6xl text-gray-800 dark:text-gray-200" />
      <h2 className="mb-4 text-2xl font-medium">404 - Page Not Found</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
      >
        Go Home
      </Link>
    </div>
  );
}
