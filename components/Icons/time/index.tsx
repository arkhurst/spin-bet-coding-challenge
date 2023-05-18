import styled from "styled-components";

const Icon = styled.svg<{ status: string }>`
  height: 25px;
  width: 25px;
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

export const TimeIcon = ({ status }: { status: string }) => {
  return (
    <Icon
      aria-label="Game Icon"
      status={status}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 7l4.76 3.45l-1.76 5.55h-6l-1.76 -5.55z" />
      <path d="M12 7v-4m3 13l2.5 3m-.74 -8.55l3.74 -1.45m-11.44 7.05l-2.56 2.95m.74 -8.55l-3.74 -1.45" />
    </Icon>
  );
};
