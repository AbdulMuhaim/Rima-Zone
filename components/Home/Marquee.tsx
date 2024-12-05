import { cn } from "@/lib/utils";
import { Marquee } from "../UI/Marque";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://i0.wp.com/thetoolspace.com/wp-content/uploads/2022/06/the-tool-space-dewalt-logo-1.jpg?fit=1290%2C726&ssl=1",
  },

  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://aw1.imgix.net/aw/_content/site/aistr/BRAND%20PICS/Hitachi-Power-Tools-Logo-Red-Green-01.png?auto=format",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8crLvE57pnpbf4XWxo-RZ9a9q-Aju9-0mApoCUPJeHRinoyxZS5Tr7vaq9LVk87iML8&usqp=CAU",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.logotypes101.com/logos/824/A6FDD03B38A347FF4C671F366BB6D3F1/Bosch_lbgex.jpg",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPu8p7AEYBHqNc88IjrNas7n5Z3xWC3yD3ecGr8qYppkzvj_Lq3ckSwd6WOltBbYgVhI&usqp=CAU",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6lqKJ7N9cRDSH1ggeq8zmESpvRxYfFHP5g&s",
  },
  {
    name: "James",
    username: "@1",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://banner2.cleanpng.com/20180905/eba/kisspng-3m-singapore-adhesive-tape-logo-brand-1713943911080.webp",
  },
  {
    name: "James",
    username: "@2",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://www.lgnewsroom.com/wp-content/uploads/2021/07/lg-logo_.png",
  },
  {
    name: "James",
    username: "@3",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://alfanarprojects.com/media/zr4dflfl/alfanar-es.png",
  },
  {
    name: "James",
    username: "@4",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn0.iconfinder.com/data/icons/car-brands/550/Mitsubishi_logo-512.png",
  },
  {
    name: "James",
    username: "@5",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://ssd2.s3.amazonaws.com/9x64sz6rzo6hxcxdmo07a4x6eyta",
  },
  {
    name: "James",
    username: "@6",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://banner2.cleanpng.com/20180921/rzy/kisspng-logo-makita-brand-vector-graphics-portable-network-makita-logo-vector-ai-pdf-free-graphics-downlo-1713935984306.webp",
  },
  {
    name: "James",
    username: "@7",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/01/caterpillar-logo-freelogovectors.net_.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >


      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          alt="image" 
          src={img}
          quality={100}
          objectFit="cover"
          width={100}
          height={100}
         />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
