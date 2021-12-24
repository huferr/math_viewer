import React, { useState } from "react";
import { FullPage, InputPinCode } from "../../components";
import { TopIcon, Subtitle } from "./Register.styles";
import { useNavigation } from "@react-navigation/core";

export const VerifyEmail: React.FC = () => {

  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const [code, setCode] = useState("");
 
  return (
    <FullPage 
      whiteTitle="Verify your" 
      greenTitle="Email" 
      goBack
      onPressGoBack={() => goBack()}
      buttons
      onlyOneButton
      buttonSecondary
      buttonSecondaryTitle="Resend code"
      onPressSecondary={() => {}}
      verticalBounce={false}
    >
      <TopIcon green>∆</TopIcon>
      <Subtitle>Enter the verification code we sent you in your email
      </Subtitle>
      <InputPinCode
        secure
        size={5} 
        value={code} 
        onChange={setCode}
      />
    </FullPage>
  );
};