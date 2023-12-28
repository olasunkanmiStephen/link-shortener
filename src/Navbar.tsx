import {A} from "@solidjs/router";
import ShortlyLogo from "../assets/images/logo.svg";
import {FaSolidBars} from "solid-icons/fa";
import {createSignal} from "solid-js";

export function Navbar() {
 const [mobileNav, setMobileNav] = createSignal<boolean>(false);

 return (
  <nav>
   <div id="navbar" class="flex justify-between">
    <div id="logo" class="flex items-center space-x-10">
     <img src={ShortlyLogo} alt="Shortly logo" />
     <div id="shortly-links" class="space-x-8 hidden md:flex items-center">
      <A href="/">Features</A>
      <A href="#">Pricing</A>
      <A href="#">Resources</A>
     </div>
    </div>

    <div id="nav-links" class="hidden md:flex items-center space-x-6 ">
     <A href="/">Login</A>
     <button>Sign Up</button>
    </div>

    <span
     class="md:hidden text-2xl"
     onClick={() => {
      setMobileNav((prev) => !prev);
      console.log(mobileNav());
     }}
    >
     <FaSolidBars />
    </span>
   </div>

   <div id="mobilenavbar" class={mobileNav() ? "flex mt-6" : "hidden"}>
    <div
     id="navcontainer"
     class="bg-dark-violet w-full text-white flex flex-col items-center space-y-6 py-8 rounded-xl text-lg"
    >
     <A href="#" class="text-white">
      Features
     </A>
     <A href="#" class="text-white">
      Pricing
     </A>
     <A href="#" class="text-white">
      Resources
     </A>
     <A href="#" class="text-white">
      Login
     </A>

     <button class="w-4/5">Sign Up</button>
    </div>
   </div>
  </nav>
 );
}
