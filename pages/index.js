import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <h1 style={{ marginLeft: '1rem' }}>Kunstblumen-Shop</h1>
      </header>
      <p>Willkommen im Kunstblumen-Shop! Hier finden Sie elegante und langlebige Kunstblumen.</p>
      <section style={{ marginTop: '2rem' }}>
        <ProductCard 
          id="flower001"
          name="Rosenarrangement"
          price="120.00"
          description="Elegantes Kunstblumen-Gesteck in Rot."
          image="/images/rose.jpg"
        />
      </section>
    </main>
  );
}