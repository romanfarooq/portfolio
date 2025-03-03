import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-50">
        <ImSpinner8 className="absolute inset-0 m-auto text-4xl text-gray-700 dark:text-gray-300" />
      </div>
      <h2 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
        Loading...
      </h2>
    </div>
  );
}
