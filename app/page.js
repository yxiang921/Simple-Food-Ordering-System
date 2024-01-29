import { Banner, Cart, Hero } from "@/components";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="hero">
      <Banner />
      <Hero />
      <Toaster 
        position="top-center"
      />
    </main>
  );
}
