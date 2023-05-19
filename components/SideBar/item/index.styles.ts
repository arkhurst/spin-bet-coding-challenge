import { Margin } from "@/components/atoms";
import styled from "styled-components";

interface StatusTextProps {
  status: string;
}

export const StatusText = styled.div<StatusTextProps>`
  font-size: 0.8rem;
  color: ${({ theme, status }) => {
    switch (status) {
      case "ENDED":
        return theme.colors.green.primary;
      case "CANCELED":
        return theme.colors.red.primary;
      case "UPCOMING":
        return theme.colors.primary;
      default:
        return theme.colors.yellow.deep;
    }
  }};
`;

export const StatusContainer = styled(Margin)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div<{ isActive: boolean }>`
  padding: 20px 10px;
  margin-bottom: 13px;
  background: #2e2e2e;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  transition: background 0.35s ease-in;
  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme.colors.white}` : "unset"};
  &:hover {
    background: black;
  }
`;

export const TeamScoresContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-right: 5px;
`;

export const TeamScores = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;
