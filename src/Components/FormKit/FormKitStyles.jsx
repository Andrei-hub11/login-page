import styled from "styled-components";
import { motion } from "framer-motion";

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

export const FormContainer = styled(motion.form)`
  margin-top: 6rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  overflow: hidden;
`;

export const Input = styled.input`
  width: 32rem;
  height: 3.2rem;
  outline: none;
  border: ${(props) =>
    props.$iserror == "true" ? ".2rem solid #ff0000" : ".2rem solid #fff"};
  color: #ffff;
  padding: 18px 15px;
  letter-spacing: 0.2rem;
  border-radius: 2rem;
  transition: all 200ms ease-in-out;
  background: #0b1016;
  font-size: 1.3rem;
  font-weight: 400;
  caret-color: #ffff;
  &::placeholder {
    color: #ffff;
  }
  &:focus {
    outline: none;
    border: 0.2rem solid #3366ff;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: #ffff;
    -webkit-box-shadow: 0 0 0 5rem #0b1016 inset;
  }
`;

export const InputControl = styled.div`
  top: 1rem;
  padding: 0.1rem 0;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const LabelInput = styled.label`
  position: absolute;
  top: -0.3rem;
  left: 1.5rem;
  font-size: 1rem;
  display: block;
  transition: 0.2s;
  color: #fff;
  padding: 0 0.6rem;
  background: #0b1016;
  text-align: center;
  pointer-events: none;

  ${Input}:placeholder-shown + & {
    font-size: 1.4rem;
    cursor: text;
    top: 1.2rem;
    left: 1.8rem;
    color: #80868b;
    font-weight: 400;
  }

  ${Input}:focus + & {
    top: -0.3rem;
    left: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const VisiblePassword = styled.img`
  position: absolute;
  top: 1rem;
  right: 2rem;
  height: 2rem;
  cursor: pointer;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg)
    brightness(105%) contrast(101%);
`;

export const ErrorMsg = styled.small`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ff0000;
  bottom: -1.5rem;
`;

export const BtnContainerRemberMe = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
  letter-spacing: 0.2rem;
  gap: 1rem;

  & p {
    color: #fff;
    font-size: 1.3rem;
  }
`;

export const Checkbox = styled.input`
  border: none;

  &:checked {
    color: blue;
  }
`;
