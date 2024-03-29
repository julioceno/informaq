import {
  About,
  Contact,
  Footer,
  Header,
  Location,
  MainSection,
  PresentationService,
} from "./components";
import { services } from "./data";

export default function App() {
  return (
    <div className="max-w-[2000px] mx-auto flex flex-col gap-5 py-10 sm:pt-16 md:pt-20 px-4 sm:px-10 lg:px-32 relative">
      <Header />
      <main className="flex flex-col gap-36 mt-5">
        <section className="flex flex-col gap-10">
          <MainSection />
        </section>
        <section className="flex flex-col gap-10" id="services">
          {services.map((service, index) => (
            <PresentationService
              paragraphs={service.paragraphs}
              photo={service.photo}
              title={service.title}
              features={service.features}
              index={index}
              key={`${index}-${service.title}`}
            />
          ))}
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="location" className="mb-10  md:mb-20">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
}
