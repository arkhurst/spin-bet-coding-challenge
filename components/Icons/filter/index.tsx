import styled from "styled-components";

const IconSVG = styled.svg`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

export const FilterIcon = () => {
  return (
    <IconSVG
      aria-label="Filter Icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 15"
      strokeWidth={1.5}
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
      />
    </IconSVG>
  );
};
