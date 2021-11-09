import React from "react";

import { Div } from "react-native-magnus";
import HeroProfile from "./HeroProfile";
import ProfileForm from "./ProfileForm";

const ProfileLayout = () => {
  return (
    <Div>
      <HeroProfile />
      <ProfileForm />
    </Div>
  );
};

export default ProfileLayout;
