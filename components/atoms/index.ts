import styled from "styled-components";

interface MarginProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export const Margin = styled.div<MarginProps>`
  margin-top: ${(props) => props.top ?? 0}px;
  margin-bottom: ${(props) => props.bottom ?? 0}px;
  margin-left: ${(props) => props.left ?? 0}px;
  margin-right: ${(props) => props.right ?? 0}px;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 30px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.red.primary};
  cursor: pointer;
  font-size: 1.1rem;
`;
