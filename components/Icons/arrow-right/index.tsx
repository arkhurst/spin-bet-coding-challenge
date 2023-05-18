import styled from "styled-components";

const Icon = styled.svg`
  height: 20px;
  width: 20px;
`;

export const ArrowRightIcon = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </Icon>
  );
};
