import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validationSchema"; // Your validation schema
import TextInput from "./TextInput";
import SubmitButton from "./SubmitButton";
import { Box } from "@mui/material";


/*
mode: "onBlur":

This tells react-hook-form to trigger validation when an input field loses focus (onBlur event). Essentially, each time the user interacts with a field and then clicks away or presses tab, react-hook-form will validate that particular field.
*/

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Trigger validation on field blur (focus out)
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box mb={2}>
        <TextInput
          {...register("name")}
          label="Name"
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
      </Box>

      <Box mb={2}>
        <TextInput
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </Box>

      <Box mb={2}>
        <TextInput
          {...register("message")}
          label="Message"
          multiline
          rows={4}
          error={!!errors.message}
          helperText={errors?.message?.message}
        />
      </Box>

      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};

export default ContactForm;
