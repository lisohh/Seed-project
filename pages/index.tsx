import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Seed Vending-machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>씨앗 자판기!</h1>
        <Image
          src="https://images.unsplash.com/photo-1629477842339-1013a88e5df4"
          alt="펩시 자판기의 사진"
          width={378}
          height={504}
        />
        <p>메세지</p>
        <Link href="/vending">씨앗 사러가기</Link>
      </main>
    </div>
  );
}
