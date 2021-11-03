import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Button, Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";
import { auth } from "../../utils/firebase";
import { Regex } from "../../constants/regex";

const SignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    const { email, password } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Div {...props}>
      <FormInput
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: Regex.emailPattern,
        }}
        errors={errors}
        errorMessage="Phone/Email Required"
        label="Enter your phone number or email address"
        placeHolder="Phone/Email"
      />
      <FormInput
        control={control}
        name="password"
        rules={{ required: true }}
        errors={errors}
        errorMessage="Password Required"
        label="Enter your password"
        placeHolder="Password"
        mt={40}
        isPass={true}
      />

      <Button
        title="Submit"
        onPress={handleSubmit((data) => handleSignUp(data))}
        bg="primary"
        w="100%"
        h={55}
        mt={40}
      >
        Submit
      </Button>
    </Div>
  );
};

export default SignInForm;
