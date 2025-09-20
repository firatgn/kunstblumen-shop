import Image from "next/image";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <Image src="/Becalla.png" alt="Logo" width={150} height={150} />
        <h1 style={{ marginLeft: '1rem' }}>Becalla Flowers</h1>
      </header>
      <p>Çok yakında sizin için buradayız.</p>
    </main>
  );
}