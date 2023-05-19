import styled from "styled-components";
import { Button } from "@/components/atoms";

export const FilterButton = styled(Button)`
  background: black;
  color: white;
  font-size: 1.2rem;
  margin-top: 2vh;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const ModalInnerContainer = styled.div`
  background: white;
  border-radius: 5px;
  position: relative;
  width: 25vw;
  height: 42vh;
  color: #000;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45vw;
    height: 32vh;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 80vw;
    height: 45vh;
  }
`;

export const FilterItem = styled.div<{ active: boolean }>`
  padding: 15px 30px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#f2f2f2" : "unset")};
  &:hover {
    background: #f2f2f2;
  }
`;

export const FilterName = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const FilterCount = styled.div`
    background: #000};
    padding: 10px 30px;
    color: #fff;
`;
