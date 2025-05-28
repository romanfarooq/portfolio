import { reviews } from "@/constants/data";
import { Marquee } from "@/components/Marquee";
import { ReviewCard } from "@/components/ReviewCard";

const halfLength = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, halfLength);
const secondRow = reviews.slice(halfLength);

export function Testimonial() {
  return (
    <section className="mt-25 items-start px-5 sm:px-10 md:mt-35 lg:px-15">
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
    </section>
  );
}
