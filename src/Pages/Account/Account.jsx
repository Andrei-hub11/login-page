import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import {
  AppContainer,
  BoxContainer,
  BallContainer,
  ControlBtn,
  ControlBtnName,
  BoxIconBtn,
  BallBottom,
  ImageContainer,
  ImageLogin,
  ArrowIconBtn,
  InitialTitle,
  ContainerBtnsBall,
} from "./AccountStyles";

import ImageMain from "../../images/image__main.png";
import IconArrow from "../../images/bx-left-arrow-alt (1).svg";

import { fieldsLogin, fieldsRegister } from "../../utils/formFields/fields";
import FormKit from "../../Components/FormKit/FormKit";
import Button from "../../Components/Button/Button";

function Account() {
  const [access, setAccess] = useState(false);
  const [initialForm, setInitialform] = useState(true);

  const handleStateForm = () => {
    setInitialform(!initialForm);
    setAccess(!access);
  };

  const animateBallBottom = () => {
    if (!access) return "animateOne";
    return initialForm ? "animateThree" : "animateTwo";
  };

  const renderForm = () => {
    if (!access) return;

    return !initialForm ? (
      <FormKit fields={fieldsLogin} text={"Login"} />
    ) : (
      <FormKit fields={fieldsRegister} text={"Registrar-se"} />
    );
  };

  const variantsBallBottom = {
    initial: { y: null },
    animateOne: { y: "-32rem", transition: { duration: 1.5 } },
    animateTwo: { y: "-44.8rem", width: "140%", transition: { duration: 1.5 } },
    animateThree: { y: "-56rem", width: "140%", transition: { duration: 1.5 } },
  };

  return (
    <AppContainer>
      <BoxContainer>
        <AnimatePresence>
          {access ? (
            <BallContainer
              initial={{ y: null }}
              animate={{ y: "16rem", transition: { duration: 1.5 } }}
              exit={{
                y: "-8rem",
                opacity: 0,
                transition: { duration: 1 },
              }}
            >
              <ControlBtn>
                <BoxIconBtn
                  onClick={() => {
                    setInitialform(true);
                    setAccess(false);
                  }}
                >
                  <ArrowIconBtn src={IconArrow} />
                  <p>Voltar</p>
                </BoxIconBtn>
                <ControlBtnName>
                  {initialForm ? "Registrar" : "Entrar"}
                </ControlBtnName>
              </ControlBtn>
            </BallContainer>
          ) : null}
        </AnimatePresence>

        <AnimatePresence>
          {!access && initialForm ? (
            <ImageContainer
              initial={{ y: 15, opacity: 0 }}
              animate={{
                opacity: [0, 0.3, 0.5, 0.7, 1],
                y: [10, 6, 0],
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
            {!access && initialForm ? (
              <ContainerBtnsBall>
                <Button
                  $primary={true}
                  $hasMarginTop={true}
                  initial={{ y: 10, opacity: 0 }}
                  transition={{ delay: 1.5 }}
                  animate={{
                    opacity: [0, 0.3, 0.5, 0.7, 1],
                    y: [10, 6, 4, 2, 1, 0],
                  }}
                  exit={{ x: -50, opacity: 0, transition: { duration: 1 } }}
                  onClick={handleStateForm}
                >
                  Entrar
                </Button>
                <Button
                  $primary={false}
                  initial={{ y: 10, opacity: 0 }}
                  transition={{ delay: 1.8 }}
                  animate={{
                    opacity: [0, 0.3, 0.5, 0.7, 1],
                    y: [10, 6, 4, 2, 1, 0],
                  }}
                  exit={{ x: 50, opacity: 0, transition: { duration: 1 } }}
                  onClick={() => setAccess(!access)}
                >
                  Criar conta
                </Button>
              </ContainerBtnsBall>
            ) : null}
          </AnimatePresence>
          <AnimatePresence>{renderForm()}</AnimatePresence>
        </BallBottom>
      </BoxContainer>
    </AppContainer>
  );
}

export default Account;
