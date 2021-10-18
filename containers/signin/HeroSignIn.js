import React from "react";
import { useNavigation } from "@react-navigation/core";

import { Button, Div, Icon } from "react-native-magnus";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";

const HeroSignIn = (props) => {
  const nav = useNavigation();
  return (
    <Div {...props}>
      <Div flexDir="row" alignItems="center">
        <Button
          bg="white"
          rounded={15}
          w={40}
          h={40}
          mt={4}
          mr={15}
          onPress={() => nav.goBack()}
        >
          <Icon name="chevron-thin-left" fontFamily="Entypo" rounded={31} />
        </Button>
        <Title>Sign In</Title>
      </Div>
      <SubTitle fontSize={15}>Login with an existing account</SubTitle>
    </Div>
  );
};

export default HeroSignIn;
