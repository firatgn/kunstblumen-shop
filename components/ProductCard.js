import Image from "next/image";

export default function ProductCard({ id, name, price, description, image }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', maxWidth: '300px' }}>
      <Image src={image} alt={name} width={300} height={200} style={{ borderRadius: '8px' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>{price} ₺</strong></p>
      <button style={{ padding: '0.5rem 1rem', background: '#008060', color: 'white', border: 'none', borderRadius: '4px' }}>
        In den Warenkorb
      </button>
    </div>
  );
}