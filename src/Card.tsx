import {For, createSignal} from "solid-js";
import BrandCardImg from "../assets/images/icon-brand-recognition.svg";
import DetailedRecordsImg from "../assets/images/icon-detailed-records.svg";
import FullyCustomizableImg from "../assets/images/icon-fully-customizable.svg";

const cardContents = [
 {
  id: 1,
  image: BrandCardImg,
  title: "Brand Recognition",
  content:
   " Boost your brand recognition with each click. Generic links don't \
    mean a thing. Branded links help instil confidence in your content.",
 },
 {
  id: 2,
  image: DetailedRecordsImg,
  title: "Detailed Records",
  content:
   "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
 },
 {
  id: 3,
  image: FullyCustomizableImg,
  title: "Fully Customizable",
  content:
   " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
 },
];

export function StatisticsCard() {
 const [statCards] = createSignal(cardContents);
 return (
  <section class="z-5">
   <div
    id="title-section"
    class="text-center space-y-4 pb-20 flex flex-col items-center"
   >
    <h2>Advanced Statistics</h2>
    <p class="text-grayish-violet sm:w-1/2">
     Track how your links are performing across the web with our advanced
     statistics dashboard.
    </p>
   </div>
   <div
    id="stat-cards"
    class="grid grid-row-3 sm:grid-row-1 sm:grid-cols-3 gap-20 z-10"
   >
    <For each={statCards()}>
     {(card, i) => (
      <article
       class="bg-white relative flex flex-col items-center px-6 pt-2 pb-8 rounded-xl text-center "
       id={`card-${i()}`}
      >
       <div
        id="card-img"
        class="bg-very-dark-blue rounded-full p-4 -translate-y-12"
       >
        <img src={card.image} alt={card.title} />
       </div>
       <h3 class="pb-4">{card.title}</h3>
       <p class="text-grayish-violet">{card.content}</p>
      </article>
     )}
    </For>
   </div>
  </section>
 );
}
