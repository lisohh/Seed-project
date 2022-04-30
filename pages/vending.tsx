import { GetServerSideProps } from "next";
import Head from "next/head";
//html의 head와는 다르다~ link도 다르다~
import styled from "@emotion/styled";
import { useState } from "react";

const MachineBox = styled.div`
  display: flex;
  item-align: center;
  width: 50rem;
  height: 140rem;
  background: beige;
`;

const Title = styled.h1`
  top: 2rem;
  display: flex;
  item-align: center;
  width: 20rem;
  height: 3rem;
  border: 0.5rem solid lightgreen;
  border-radius: 0.5rem;
  text-align: center;
  background: white;
`;
const GreenH2 = styled.h2`
  color: green;

  span {
    color: tomato;
  }
`;

const Card = styled.div`
  border-radius: 2rem;
  box-shadow: 2px 8px 8px -5px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
`;

//Seed 객체의 type들을 정해주기
type Seed = {
  name: string;
  image: string;
  price: number;
};

//Seed배열을 seedList에 넣어서 interface VendingProps에 넣어주기
interface VendingProps {
  seedList: Seed[];
}

export default function Vending({ seedList }: VendingProps) {
  // 1. 호주머니 number
  const [hojumoney, setHojumoney] = useState(10000); // useState(초기값)
  // 2. 입금액 number
  const [deposit, setDeposit] = useState(0);

  function insert(amount: number) {
    // 500
    // 호주머니에서 500원이...
    if (hojumoney >= amount) {
      setHojumoney((old) => old - amount);
      // 입금액으로 이동
      setDeposit((old) => old + amount);
    } else {
      alert("호주머니에 돈이 부족해요! ㅠㅠ");
    }
  }

  function refund() {
    // 환불하기 버튼을 누르면
    // 입금액을 호주머니로 이동
    setHojumoney((old) => old + deposit);
    // 입금액이 0이 되고
    setDeposit(0);
  }

  return (
    <MachineBox className="container">
      <Head>
        <title>Seed Vending-machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>!!!!!씨앗 자판기!!!!!</Title>

        <Card>
          {seedList.map((item) => (
            <GreenH2 key={item.name}>
              {item.name}
              <span> {item.price} </span>
            </GreenH2>
          ))}
        </Card>

        <div>입금액 : {deposit}</div>
        {[10, 50, 100, 500, 1000].map((amount) => (
          <button key={amount} onClick={() => insert(amount)}>
            {amount}
          </button>
        ))}
        <button onClick={() => refund()}>환불받기</button>
        <div>호주머니 : {hojumoney}</div>
      </main>
    </MachineBox>
  );
}

export const getServerSideProps: GetServerSideProps<VendingProps> = async (
  context
) => {
  // 데이터를 가져온다
  const response = await fetch(`http://localhost:4000/seeds`);
  const seedList = (await response.json()) as Seed[];

  return {
    props: { seedList },
  };
};

//오늘 배운거 - 4.30
//<상태 관리>
//상태 만드는 법
//상태 변경하는 방법
//불변식을 지키는 법 - 잔액이 없으면 입금이 안되게
//버튼에 상태 변경 함수를 연결
//여러개의 값을 map을 통해 렌더링
//여러개의 값을 json server에 저장해서
//getServerSideProps로 가져오고,
