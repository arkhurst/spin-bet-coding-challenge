/**
 * @module molecules - Contains all derived styles used app-wise
 */

import styled from "styled-components";
import { FlexBetween, Button, FlexCenter } from "../atoms";

export const Header = styled(FlexBetween)`
  margin: 0px 30px;
`;

export const CloseButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.red.primary};
  font-size: 1.1rem;
`;

export const ModalContainer = styled(FlexCenter)`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
`;
