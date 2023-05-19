/**
 * @module atoms - Contains all base styles
 */

import styled from "styled-components";

interface MarginProps {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export const Margin = styled.div<Partial<MarginProps>>`
  margin-top: ${(props) => props.top ?? 0}px;
  margin-bottom: ${(props) => props.bottom ?? 0}px;
  margin-left: ${(props) => props.left ?? 0}px;
  margin-right: ${(props) => props.right ?? 0}px;
`;

export const MediumSizeText = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const DateText = styled.span<{ status: string }>`
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-top: 15px;
  color: ${({ theme, status }) => {
    switch (status) {
      case "FT":
        return theme.colors.green.primary;
      case "Canceled":
        return theme.colors.red.primary;
      case "-":
        return theme.colors.primary;
      default:
        return theme.colors.yellow.deep;
    }
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
