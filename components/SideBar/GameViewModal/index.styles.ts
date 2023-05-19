import styled from "styled-components";
import { Header, ModalContainer } from "@/components/molecules";
import { Margin } from "@/components/atoms";

export const ViewerModalContainer = styled(ModalContainer)`
  display: none;
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`;

export const ModalInnerContainer = styled.div`
  background: white;
  border-radius: 5px;
  position: relative;
  width: 25vw;
  height: 42vh;
  color: #000;
  display: none;
  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    width: 45vw;
    height: 32vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    width: 90vw;
    height: 45vh;
  }
`;

export const CountryText = styled.span`
  letter-spacing: 3px;
`;

export const LeagueText = styled.span`
  font-size: 1.5rem;
  margin-top: 15px;
`;

export const GameModalHeader = styled(Header)`
  margin-top: 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TeamScoresContainer = styled.div`
  margin-top: 40px;
  width: 80vw;
`;

export const TeamScores = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  & > span {
    font-size: 1.5rem;
  }
`;

export const GameStatus = styled(Margin)<{ status: string }>`
  font-size: 1.5rem;
  color: ${({ theme, status }) => {
    switch (status) {
      case "FT":
        return theme.colors.green.primary;
      default:
        return theme.colors.yellow.deep;
    }
  }};
`;
