import { Header, ImageAndText } from "./components";

export default function App() {
  return (
    <div className="max-w-[2000px] mx-auto flex flex-col pt-10 sm:pt-16 md:pt-20 px-4 sm:px-10 lg:px-32">
      <Header />
      <main className="mt-10">
        <section className="flex flex-col gap-10">
          <ImageAndText />
          <ImageAndText />
          <ImageAndText />
          <ImageAndText />
        </section>
      </main>
    </div>
  );
}
