import React from "react";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useNavigation } from "@react-navigation/core";
import { Button, Div } from "react-native-magnus";
import FormInput from "../../components/form/FormInput";

const SignInForm = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitData = (data) => {
    if (!isValidPhoneNumber(data.phone, "IN")) {
      setError("phone", {
        type: "manual",
        message: "Enter a valid phone number",
      });
    }
    git;
    console.table(data);
  };
  const nav = useNavigation();
  return (
    <Div {...props}>
      <FormInput
        control={control}
        name="phone"
        rules={{
          required: true,
        }}
        errors={errors}
        errorMessage="Phone Required"
        label="Enter your phone number"
        placeHolder="Phone"
      />
      <Button
        title="Submit"
        onPress={handleSubmit((data) => {
          console.log(data);
          nav.navigate("UserProfile");
        })}
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
