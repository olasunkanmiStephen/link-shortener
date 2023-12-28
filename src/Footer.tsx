import {A} from "@solidjs/router";
import {For, createSignal} from "solid-js";
import FbLogo from "../assets/images/icon-facebook.svg";
import TwitterLogo from "../assets/images/icon-twitter.svg";
import PinterestLogo from "../assets/images/icon-pinterest.svg";
import InstagramLogo from "../assets/images/icon-instagram.svg";

const featureLinks = [
 {
  title: "Link Shortening",
 },
 {
  title: "Branded Links",
 },
 {
  title: "Analytics",
 },
];

const resourceLinks = [
 {
  title: "Blog",
 },
 {
  title: "Developers",
 },
 {
  title: "Support",
 },
];

const companyLinks = [
 {
  title: "About",
 },
 {
  title: "Our Team",
 },
 {
  title: "Careers",
 },
 {
  title: "Contact",
 },
];

const socialLinks = [
 {
  title: "Facebook",
  icon: FbLogo,
 },
 {
  title: "Twitter",
  icon: TwitterLogo,
 },
 {
  title: "Pinterest",
  icon: PinterestLogo,
 },
 {
  title: "Instagram",
  icon: InstagramLogo,
 },
];
export function Footer() {
 const [featLinks] = createSignal(featureLinks);
 const [resLinks] = createSignal(resourceLinks);
 const [compLinks] = createSignal(companyLinks);
 const [social] = createSignal(socialLinks);
 return (
  <section class="text-shortly-gray w-full py-8 ">
   <div
    id="footer-links"
    class="py-6 w-full space-y-12 text-center sm:flex items-baseline justify-between text-white"
   >
    <h4 class="text-white text-4xl py-4">Shortly</h4>
    <div class="space-y-5">
     <h5>Features</h5>
     <For each={featLinks()}>
      {(link, _i) => (
       <A id="footer-link" href="#" class="text-grayish-violet">
        {link.title}
       </A>
      )}
     </For>
    </div>
    <div class="space-y-5">
     <h5>Resources</h5>
     <For each={resLinks()}>
      {(link, _i) => (
       <A id="footer-link" href="#" class="text-grayish-violet">
        {link.title}
       </A>
      )}
     </For>
    </div>

    <div class="space-y-5">
     <h5>Company</h5>
     <For each={compLinks()}>
      {(link, _i) => (
       <A id="footer-link" href="#" class="text-grayish-violet">
        {link.title}
       </A>
      )}
     </For>
    </div>

    <div class="flex justify-center items-center space-x-4 text-xl">
     <For each={social()}>
      {(link, _i) => (
       <a href="#" class="text-white">
        <img src={link.icon} alt="" />
       </a>
      )}
     </For>
    </div>
   </div>
  </section>
 );
}
