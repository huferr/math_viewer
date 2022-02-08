import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { FullPage, Input, Modal, OptionList } from "../../components";
import { NavigateTo } from "../../services";
import { Heading, HeadingSmall, Paragraph, Subtitle } from "../../styles";
import { userRanking, UserRankingTypes } from "../../data/userRanking";

export const Viewer: React.FC = () => {
  const navigation = useNavigation();
  const goBack = () => NavigateTo("dashboard", navigation, {}); 
  const [openOnboardingModal, setOpenOnboardingModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const quickSearch = (array: UserRankingTypes[], search: string ) => 
    array.filter((item) => item.user.toLocaleLowerCase().includes(String(search.toLocaleLowerCase())));

  const handleUsers = (
    quickSearch(userRanking, searchValue).map((item: UserRankingTypes) => <OptionList hasArrow key={item.user} content={item.user} />)
  );

  useEffect(() => {
    setTimeout(() => setOpenOnboardingModal(true), 500);
  },[]);
  
  return (
    <>
      <FullPage onPressGoBack={goBack}>
        <HeadingSmall
          green
          italic
          textAlign="center"
          marginTop={30}
        >
        Viewer
        </HeadingSmall>

        <Subtitle textAlign="center" marginTop={40} marginBottom={40}>Choose any formula to see what it represents.</Subtitle>
        <Input placeholder="Search for formulas" type="search" value={searchValue} onChangeText={setSearchValue} />
        
        {handleUsers}
        
        <Modal isOpen={openOnboardingModal} onClose={() => setOpenOnboardingModal(false)}>
          <Heading bold textAlign="center">Welcome to</Heading>
          <Heading green textAlign="center">Viewer</Heading>
          <Paragraph marginTop={20}>
            With
            {" "}
            <Paragraph green>Viewer</Paragraph>
            {" "}
            you will see what the numbers and functions can
            {" "}
            <Paragraph green>show</Paragraph>
            {" "}
            us
            {" "}
            <Paragraph green>visually</Paragraph>
            . It is <Paragraph green>awesome</Paragraph>!
          </Paragraph>
        </Modal>
      </FullPage>
    </>
  );
};