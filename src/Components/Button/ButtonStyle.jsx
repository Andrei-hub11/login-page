import { motion } from "framer-motion";
import styled from "styled-components";

export const Btn = styled(motion.button)`
  margin-top: ${({ $hasMarginTop }) => ($hasMarginTop ? "1.5rem" : "")};
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  color: ${({ $primary }) => ($primary ? "#ffff" : "#091a7a")};
  padding: 0.8rem;
  width: 25.6rem;
  border-radius: 3.2rem;
  border: solid 0.24rem ${({ $primary }) => ($primary ? "#ffff" : "#3366ff")};
  box-shadow: 0 0.96rem 3.2rem -0.8rem rgba(0, 0, 0, 0.4);
  background: ${({ $primary }) =>
    $primary ? "#ffff" : "linear-gradient(45deg, #091a7a, #3366ff)"};
  opacity: 1;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  &:hover {
    color: ${({ $primary }) => ($primary ? "#091a7a" : "#ffff")};
    border: solid 0.24rem ${(props) => (props.$primary ? "#3366ff" : "#ffff")};
  }
`;

export const SpanAnimateBtn = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.3rem;
  z-index: -1;
  background: ${({ $primary }) =>
    $primary ? "linear-gradient(45deg, #091a7a, #3366ff)" : "#ffff"};
  transition: 0.3s;
  ${Btn}:hover & {
    top: -100%;
    transition: 0.3s;
  }
`;
