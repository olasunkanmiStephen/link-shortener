import {CTA} from "./components/CTA";
import {StatisticsCard} from "./components/Card";
import {Footer} from "./components/Footer";
import {FormSection} from "./components/Form";
import {Hero} from "./components/Hero";
import {Navbar} from "./components/Navbar";
import {Toaster} from "solid-toast";

function App() {
 return (
  <div>
   <Toaster />
   <div
    id="header-container"
    style={{width: "min(80%, 1440px)", margin: "0 auto"}}
   >
    <Navbar />
    <Hero />
   </div>
   <main class="bg-very-light-gray">
    <div
     id="main-container"
     class="flex flex-col items-center pb-[20vmin]"
     style={{width: "min(80%, 1440px)", margin: "0 auto"}}
    >
     <FormSection />
     <StatisticsCard />
    </div>
   </main>
   <section id="cta-section" class="">
    <div id="cta-wrapper" class="bg-[#3b3054f0]">
     <div
      id="cta-container"
      style={{width: "min(80%, 1440px)", margin: "0 auto"}}
     >
      <CTA />
     </div>
    </div>
   </section>
   <footer class="bg-very-dark-violet">
    <div
     id="footer-container"
     class="flex flex-col items-center"
     style={{width: "min(80%, 1440px)", margin: "0 auto"}}
    >
     <Footer />
    </div>
   </footer>
  </div>
 );
}

export default App;
