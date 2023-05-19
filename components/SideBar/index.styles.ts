import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray.sidebar};
  height: 100vh;
  padding-left: 20px;
`;
export const HeaderTitle = styled.h1`
  margin-top: 5vh;
  font-size: 1.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderDescription = styled.div`
  margin-top: 1vh;
  font-size: 1rem;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.gray.primary};
  font-weight: 400;
`;

export const ContentContainer = styled.div`
  margin-top: 1vh;
  height: 75vh;
  overflow-y: scroll;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
