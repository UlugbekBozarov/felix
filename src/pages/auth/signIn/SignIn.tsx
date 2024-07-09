import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Stack, Button, Typography, Card, Alert } from "@mui/material";

import { ControlledInput } from "components/form";
import { get } from "lodash";
import { setAuthorizationKey, setAuthorizationSign } from "services/storage";

const formNames = {
  username: "username",
  password: "password",
};

const SignIn = () => {
  const formStore = useForm();

  const { handleSubmit, setError } = formStore;

  const submitHandler = handleSubmit((data) => {
    if (
      get(data, formNames.username) === "demo" &&
      get(data, formNames.password) === "123456"
    ) {
      setAuthorizationKey("Mason19");
      setAuthorizationSign("MySecret19");
      window.location.href = "/";
    } else {
      setError(formNames.username, {
        type: "manual",
        message: "Username or password is incorrect",
      });
      setError(formNames.password, {
        type: "manual",
        message: "Username or password is incorrect",
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
                  Sign In
                </Typography>
                <Box>
                  <Alert severity="info">
                    Use username: 'demo' with password: '123456'
                  </Alert>
                </Box>
                <Stack spacing={2} my="36px">
                  <ControlledInput
                    label="Username"
                    name={formNames.username}
                    rules={{
                      required: true,
                    }}
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
                    placeholder="Repeat the password"
                  />
                </Stack>
                <Box>
                  <Button fullWidth type="submit" variant="contained">
                    Button
                  </Button>
                  <Typography textAlign="center" fontWeight="300" mt="12px">
                    Already signed up?&nbsp;
                    <Link to="/sign-up" style={{ textDecoration: "initial" }}>
                      <Typography component="span" color="primary">
                        Go to sign up.
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

export default SignIn;
