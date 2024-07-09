import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Stack, Button, Typography, Card } from "@mui/material";
import { get } from "lodash";

import { ControlledInput } from "components/form";
import { setAuthorizationKey, setAuthorizationSign } from "services/storage";

const formNames = {
  username: "username",
  password: "password",
  confirmPassword: "confirmPassword",
};

const SignUp = () => {
  const formStore = useForm();

  const { handleSubmit, setError } = formStore;

  const submitHandler = handleSubmit((data) => {
    if (
      get(data, formNames.password) === get(data, formNames.confirmPassword)
    ) {
      setAuthorizationKey("Mason19");
      setAuthorizationSign("MySecret19");
      window.location.href = "/";
    } else {
      setError(formNames.confirmPassword, {
        type: "manual",
        message: "Not the same as a password",
      });
    }
  });

  return (
    <FormProvider {...formStore}>
      <form onSubmit={submitHandler}>
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box width="100%" maxWidth="430px">
            <Card>
              <Box p="48px 28px">
                <Typography variant="h4" textAlign="center" fontWeight={600}>
                  Sign Up
                </Typography>
                <Stack spacing={2} my="36px">
                  <ControlledInput
                    label="Username"
                    name={formNames.username}
                    rules={{ required: true }}
                    placeholder="Enter your username"
                  />
                  <ControlledInput
                    type="password"
                    label="Password"
                    name={formNames.password}
                    rules={{
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters long",
                      },
                    }}
                    placeholder="Enter your password"
                  />
                  <ControlledInput
                    type="password"
                    label="Confirm password"
                    name={formNames.confirmPassword}
                    rules={{
                      required: true,
                      minLength: {
                        value: 6,
                        message: "Must be at least 6 characters long",
                      },
                    }}
                    placeholder="Enter your confirm password"
                  />
                </Stack>
                <Box>
                  <Button fullWidth variant="contained" type="submit">
                    Submit
                  </Button>
                  <Typography textAlign="center" mt="12px">
                    Already signed up?&nbsp;
                    <Link to="/" style={{ textDecoration: "initial" }}>
                      <Typography component="span" color="primary">
                        Go to sign in.
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default SignUp;
