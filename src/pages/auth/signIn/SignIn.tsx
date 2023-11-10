import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Stack, Button, Typography, Divider, Card } from "@mui/material";

import { ControlledInput } from "components/form";
import { Facebook, Google } from "assets/icons";

const SignIn = () => {
  const formStore = useForm();

  const { handleSubmit } = formStore;

  const submitHandler = handleSubmit((data) => {
    console.log("Data: ", data);
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
                <Stack spacing={2} my="36px">
                  <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    startIcon={<Google />}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    color="inherit"
                    startIcon={<Facebook />}
                  >
                    Continue with Facebook
                  </Button>
                  <Divider
                    sx={{ mt: "26px !important", mb: "10px !important" }}
                  >
                    OR
                  </Divider>
                  <ControlledInput
                    label="Your username"
                    name="username"
                    placeholder="Enter your username"
                  />
                  <ControlledInput
                    label="Your email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ControlledInput
                    type="password"
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </Stack>
                <Box>
                  <Button fullWidth variant="contained">
                    Button
                  </Button>
                  <Typography textAlign="center" mt="12px">
                    Already signed up?{" "}
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
