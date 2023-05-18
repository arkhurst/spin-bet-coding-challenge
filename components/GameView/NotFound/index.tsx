import { CautionIcon } from "@/components/Icons";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

const Description = styled.span`
  font-size: 1.3rem;
  font-weight: 200;
`;

export const NotFoundWell = () => {
  return (
    <>
      <CautionIcon />
      <Title>Not Found</Title>
      <Description>
        Sorry, we couldn’t find the game you’re looking for.
      </Description>
    </>
  );
};
