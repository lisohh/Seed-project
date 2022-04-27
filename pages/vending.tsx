import Head from "next/head";
//html의 head와는 다르다~ link도 다르다~
import styled from "@emotion/styled";

const GreenH2 = styled("h2")`
  color: green;

  span {
    color: tomato;
  }
`;

const Card = styled("div")`
  border-radius: 2rem;
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
`;

export default function Vending() {
  return (
    <div className="container">
      <Head>
        <title>Seed Vending-machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>!!!!!씨앗 자판기!!!!!</h1>
        <Card>
          <GreenH2>
            토끼풀 씨앗
            <span> 탐정토끼 님이 기증 </span>
          </GreenH2>
        </Card>
        <span> 탐정토끼 님이 기증 </span>
      </main>
    </div>
  );
}
