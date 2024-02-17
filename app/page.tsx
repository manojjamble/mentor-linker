import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-black">Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </main>
  );
}
