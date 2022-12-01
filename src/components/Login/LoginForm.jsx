import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ImageMain from "../images/image__main.jpg";
import IconArrow from "../images/bx-left-arrow-alt (1).svg";

const BoxContainer = styled.div`
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

const BallContainer = styled(motion.div)`
  position: absolute;
  top: -15rem;
  left: -1rem;
  width: 50%;
  height: 12rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #091a7a, #3366ff);
`;

const ControlBtn = styled(motion.div)`
  position: absolute;
  margin-top: 6rem;
  left: 2rem;
`;

const BoxIconBtn = styled.div`
  display: inline-flex;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  & p {
    position: absolute;
    left: 2rem;
    top: -0.4rem;
    color: #ffff;
  }
`;

const ArrowIconBtn = styled.img`
  height: 2rem;
  filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(138deg)
    brightness(101%) contrast(101%);
`;

const ControlBtnName = styled.h1`
  position: absolute;
  left: 1rem;
  font-size: 0.9rem;
  color: #ffff;
  letter-spacing: 0.1rem;
`;

const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  height: 16rem;
  width: 100%;
`;

const ImageLogin = styled.img`
  width: 70%;
  block-size: auto;
  aspect-ratio: 2/1.5;
  object-fit: contain;
  object-position: center bottom;
`;

const InitialTitle = styled.h1`
  color: #3366ff;
  background-size: 100%;
`;

const BallBottom = styled(motion.div)`
  position: absolute;
  bottom: -40rem;
  height: 30rem;
  width: 120%;
  border-radius: 50% 50% 0 0;
  background: #0b1016;
  /* background: linear-gradient(90deg, #232526, #414345); */
  /*  background: linear-gradient(45deg, #232526, #414345); */
  /* background: linear-gradient(45deg, #091a7a, #3366ff); */
`;

const ContainerBtnsBall = styled(motion.div)`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  position: relative;
  width: 100%;
`;

const InitialBtns = styled(motion.button)`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  color: ${(props) => (props.primary ? "#ffff" : "#091a7a")};
  padding: 0.5rem;
  width: 10rem;
  border-radius: 2rem;
  border: solid 0.15rem ${(props) => (props.primary ? "#ffff" : "#3366ff")};
  box-shadow: 0 0.6rem 2rem -0.5rem rgba(0, 0, 0, 0.4);
  background: ${(props) =>
    props.primary ? "#ffff" : "linear-gradient(45deg, #091a7a, #3366ff)"};
  opacity: 1;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;

  &:hover {
    color: ${(props) => (props.primary ? "#091a7a" : "#ffff")};
    border: solid 0.15rem ${(props) => (props.primary ? "#3366ff" : "#ffff")};
  }
`;

const BtnRegisterOrLogin = styled(InitialBtns)`
  margin-top: 0.5rem;
`;

const SpanAnimateBtn = styled(motion.span)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
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

const FormContainer = styled(motion.form)`
  margin-top: 6rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  overflow: hidden;
`;

const Input = styled.input`
  width: 20rem;
  height: 2rem;
  outline: none;
  border: 0.15rem solid #ffff;
  color: #ffff;
  padding: 0px 10px;
  letter-spacing: 0.1rem;
  border-radius: 2rem;
  transition: all 200ms ease-in-out;
  background: linear-gradient(45deg, #232526, #414345);
  font-size: 12px;
  caret-color: #ffff;

  &::placeholder {
    color: #ffff;
  }

  &:focus {
    outline: none;
    border: 0.15rem solid #3366ff;
  }
`;

function LoginForm() {
  const [register, setRegister] = useState(false);
  const [initialForm, setInitialform] = useState(true);

  const renderRegisterorLogin = () => {
    if (!register) return;

    return !initialForm ? (
      <FormContainer
        initial={{ y: 50, opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.5, 0.7, 1],
          y: [10, 8, 6, 4, 3, 2, 1, 0],
          transition: { duration: 1.5, delay: 1 },
        }}
        exit={{
          y: [0, 5, 10, 15, 20, 30, 40],
          opacity: 0,
          transition: { duration: 1 },
        }}
      >
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <BtnRegisterOrLogin>
          Entrar
          <SpanAnimateBtn />
        </BtnRegisterOrLogin>
      </FormContainer>
    ) : (
      <FormContainer
        initial={{ y: 50, opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0.5, 0.7, 1],
          y: [10, 8, 6, 4, 3, 2, 1, 0],
          transition: { duration: 1.5, delay: 0.5 },
        }}
        exit={{
          y: [0, 5, 10, 15, 20, 30, 40],
          opacity: 0,
          transition: { duration: 1 },
        }}
      >
        <Input type="email" placeholder="E-mail" />
        <Input type="text" placeholder="Nome completo" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirmação de senha" />
        <BtnRegisterOrLogin>
          Registrar-se
          <SpanAnimateBtn />
        </BtnRegisterOrLogin>
      </FormContainer>
    );
  };

  const handleStateForm = () => {
    setInitialform(!initialForm);
    setRegister(!register);
  };

  const animateBallBottom = () => {
    if (!register) return "animateOne";
    return initialForm ? "animateThree" : "animateTwo";
  };

  const variantsBallBottom = {
    initial: { y: null },
    animateOne: { y: "-20rem", transition: { duration: 1.5 } },
    animateTwo: { y: "-28rem", width: "140%", transition: { duration: 1.5 } },
    animateThree: { y: "-36rem", width: "140%", transition: { duration: 1.5 } },
  };

  return (
    <BoxContainer>
      <AnimatePresence>
        {register ? (
          <BallContainer
            initial={{ y: null }}
            animate={{ y: "10rem", transition: { duration: 1.5 } }}
            exit={{
              y: "-5rem",
              opacity: 0,
              transition: { duration: 1 },
            }}
          >
            <ControlBtn>
              <BoxIconBtn
                onClick={() => {
                  setInitialform(true);
                  setRegister(false);
                }}
              >
                <ArrowIconBtn src={IconArrow} />
                <p>Back</p>
              </BoxIconBtn>
              <ControlBtnName>
                {initialForm ? "Registrar" : "Entrar"}
              </ControlBtnName>
            </ControlBtn>
          </BallContainer>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {!register && initialForm ? (
          <ImageContainer
            initial={{ y: 50, opacity: 0 }}
            animate={{
              opacity: [0, 0.3, 0.5, 0.7, 1],
              y: [10, 6, 4, 2, 1, 0],
              transition: { duration: 1.5, delay: 0.5 },
            }}
            exit={{ y: -50, opacity: 0, transition: { duration: 1 } }}
          >
            <ImageLogin src={ImageMain} />
            <InitialTitle>Bem-vindo (a) ao Pentágono</InitialTitle>
          </ImageContainer>
        ) : null}
      </AnimatePresence>
      <BallBottom
        variants={variantsBallBottom}
        initial="initial"
        animate={animateBallBottom()}
      >
        <AnimatePresence>
          {!register && initialForm ? (
            <ContainerBtnsBall>
              <InitialBtns
                primary="true"
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 1.5 }}
                animate={{
                  opacity: [0, 0.3, 0.5, 0.7, 1],
                  y: [10, 6, 4, 2, 1, 0],
                }}
                exit={{ x: -50, opacity: 0, transition: { duration: 1 } }}
                onClick={handleStateForm}
              >
                Entrar <SpanAnimateBtn primary="true" />
              </InitialBtns>
              <InitialBtns
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 1.8 }}
                animate={{
                  opacity: [0, 0.3, 0.5, 0.7, 1],
                  y: [10, 6, 4, 2, 1, 0],
                }}
                exit={{ x: 50, opacity: 0, transition: { duration: 1 } }}
                onClick={() => setRegister(!register)}
              >
                Criar conta <SpanAnimateBtn />
              </InitialBtns>
            </ContainerBtnsBall>
          ) : null}
        </AnimatePresence>
        <AnimatePresence>{renderRegisterorLogin()}</AnimatePresence>
      </BallBottom>
    </BoxContainer>
  );
}

export default LoginForm;
