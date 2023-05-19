import { MediumSizeText } from "../atoms";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

export const CountryText = styled.span`
  font-size: 1.2rem;
  letter-spacing: 3px;
`;

export const LeagueText = styled(MediumSizeText)`
  margin-top: 15px;
`;

export const ScoresText = styled.span`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
`;

export const TeamsContainer = styled.span`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 40% auto 40%;
  width: 50vw;
`;

export const HomeTeamNameText = styled.span`
  font-size: 1.6rem;
  margin-right: 50px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AwayTeamNameText = styled.span`
  font-size: 1.6rem;
  margin-left: 70px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProgressContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
