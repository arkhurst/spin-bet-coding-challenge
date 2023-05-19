import { GameView } from "@/components/GameView";
import { Sidebar } from "@/components/SideBar";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  width: 100vw;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  row-gap: 2vh;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: 35% 65%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 100%;
  }
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>Spin Bet Test</title>
      </Head>
      <Container>
        <GridContainer>
          <Sidebar />
          <GameView />
        </GridContainer>
      </Container>
    </>
  );
}
