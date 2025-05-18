import Image from "next/image";
import { Marquee } from "@/components/Marquee";
import { reviews, type Review } from "@/constants/data";

const halfLength = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, halfLength);
const secondRow = reviews.slice(halfLength);

const ReviewCard = ({ img, name, body, username }: Review) => {
  return (
    <figure className="bg-indigo to-storm hover:bg-royal h-full w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-50/10 bg-gradient-to-r p-4 duration-200 hover:-translate-y-1">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={img}
          alt={`${name}'s profile`}
          width={32}
          height={32}
          className="rounded-full bg-white/10"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="mt-25 items-start px-5 sm:px-10 md:mt-35 lg:px-15">
      <h2 className="text-3xl font-bold md:text-4xl">Hear From My Clients</h2>
      <div className="relative mt-12 flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-primary pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-primary pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </div>
  );
}
