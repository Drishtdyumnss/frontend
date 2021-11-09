import React from "react";
import Layout from "../components/wrappers/Layout";
import ProfileLayout from "../containers/userprofile/ProfileLayout";

const UserProfile = () => {
  return (
    <Layout bg="white">
      <ProfileLayout />
    </Layout>
  );
};

export default UserProfile;
