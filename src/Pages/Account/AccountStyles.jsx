import styled from "styled-components";
import { motion } from "framer-motion";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BallContainer = styled(motion.div)`
  position: absolute;
  top: -24rem;
  left: -1.6rem;
  width: 50%;
  height: 19.2rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #091a7a, #3366ff);
`;

export const BoxContainer = styled.div`
  position: relative;
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: solid 1px #3366ff;
  overflow: hidden;
`;

export const ControlBtn = styled(motion.div)`
  position: absolute;
  margin-top: 9.6rem;
  left: 3.2rem;
`;

export const BoxIconBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  & p {
    position: absolute;
    font-size: 1.3rem;
    left: 3.2rem;
    color: #ffff;
  }
`;

export const ArrowIconBtn = styled.img`
  height: 3.2rem;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(138deg)
    brightness(101%) contrast(101%);
`;

export const ControlBtnName = styled.h1`
  position: absolute;
  left: 1.6rem;
  font-size: 1.3rem;
  color: #ffff;
  letter-spacing: 0.16rem;
`;

export const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  height: 16rem;
  width: 100%;
`;

export const ImageLogin = styled.img`
  width: 70%;
  block-size: auto;
  aspect-ratio: 2/1.5;
  object-fit: contain;
  object-position: center bottom;
`;

export const InitialTitle = styled.h1`
  color: #3366ff;
  background-size: 100%;
`;

export const BallBottom = styled(motion.div)`
  position: absolute;
  bottom: -64rem;
  height: 48rem;
  width: 120%;
  border-radius: 50% 50% 0 0;
  background: #0b1016;
  /* background: linear-gradient(90deg, #232526, #414345); */
  /*  background: linear-gradient(45deg, #232526, #414345); */
  /* background: linear-gradient(45deg, #091a7a, #3366ff); */
`;

export const ContainerBtnsBall = styled(motion.div)`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.6rem;
  position: relative;
  width: 100%;
`;

export const InitialBtns = styled(motion.button)`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6rem;
  letter-spacing: 0.16rem;
  color: ${(props) => (props.primary ? "#ffff" : "#091a7a")};
  padding: 0.8rem;
  width: 25.6rem;
  border-radius: 3.2rem;
  border: solid 0.24rem ${(props) => (props.primary ? "#ffff" : "#3366ff")};
  box-shadow: 0 0.96rem 3.2rem -0.8rem rgba(0, 0, 0, 0.4);
  background: ${(props) =>
    props.primary ? "#ffff" : "linear-gradient(45deg, #091a7a, #3366ff)"};
  opacity: 1;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  &:hover {
    color: ${(props) => (props.primary ? "#091a7a" : "#ffff")};
    border: solid 0.24rem ${(props) => (props.primary ? "#3366ff" : "#ffff")};
  }
`;

export const BtnRegisterOrLogin = styled(InitialBtns)`
  margin-top: 1.5rem;
`;

export const SpanAnimateBtn = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3.3rem;
  z-index: -1;
  background: ${(props) =>
    props.primary ? "linear-gradient(45deg, #091a7a, #3366ff)" : "#ffff"};
  transition: 0.3s;
  ${InitialBtns}:hover & {
    top: -100%;
    transition: 0.3s;
  }
  ${BtnRegisterOrLogin}:hover & {
    top: -100%;
    transition: 0.3s;
  }
`;
