import Image from "next/image";
import { useTranslations } from "next-intl";

export function ReviewCard({ review }: { review: string }) {
  const t = useTranslations("testimonials.reviews");

  return (
    <article className="bg-indigo to-storm hover:bg-royal h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-50/10 bg-gradient-to-r p-4 duration-200 hover:-translate-y-1">
      <header className="flex flex-row items-center gap-2">
        <Image
          src={`https://robohash.org/${review}`}
          alt={`${t(`${review}.name`)}'s profile`}
          width={32}
          height={32}
          className="rounded-full bg-white/10"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-white">
            {t(`${review}.name`)}
          </h3>
          <p className="text-xs font-medium text-white/40">
            {t(`${review}.username`)}
          </p>
        </div>
      </header>
      <blockquote className="mt-2 text-sm">{t(`${review}.body`)}</blockquote>
    </article>
  );
}
