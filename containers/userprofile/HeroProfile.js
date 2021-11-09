import React from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, Div, Icon, Text } from "react-native-magnus";
import ImageBox from "../../components/ImageBox";
import SubTitle from "../../components/SubTitle";

const HeroProfile = (props) => {
  const nav = useNavigation();
  return (
    <Div {...props}>
      <Div flexDir="row" justifyContent="space-between">
        <Button
          bg="white"
          rounded={15}
          w={40}
          h={40}
          mt={4}
          mr={15}
          onPress={() => nav.goBack()}
        >
          <Icon name="chevron-left" fontFamily="Entypo" />
        </Button>
        <ImageBox
          bg="white"
          flexDir="column"
          rounded={15}
          w={40}
          h={40}
          mt={4}
          mr={15}
          p={5}
          src={require("./img/pen.png")}
        />
      </Div>
      <Div flexDir="row" alignItems="baseline">
        <ImageBox
          rounded={15}
          w={125}
          h={125}
          flex="1"
          src={require("./img/ProfilePicture.png")}
          top={65}
        />
        <Div
          flexDir="row"
          justifyContent="space-around"
          flex="1"
          alignItems="center"
        >
          <Div flexDir="column" alignItems="center">
            <Text fontSize={35}>11</Text>
            <SubTitle color="black" fontSize={11} fontWeight="50" opacity="0.8">
              Listed
            </SubTitle>
          </Div>
          <Div flexDir="column" alignItems="center">
            <Text fontSize={35}>10</Text>
            <SubTitle color="black" fontSize={11} fontWeight="50" opacity="0.8">
              Donated
            </SubTitle>
          </Div>
          <Div flexDir="column" alignItems="center">
            <Text fontSize={35}>5</Text>
            <SubTitle color="black" fontSize={11} fontWeight="50" opacity="0.8">
              Recieved
            </SubTitle>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default HeroProfile;
