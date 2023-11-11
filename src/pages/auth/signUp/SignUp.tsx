import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Box, Stack, Button, Typography, Divider, Card } from "@mui/material";
import { get } from "lodash";

import { ControlledInput } from "components/form";
import { Facebook, Google } from "assets/icons";
import { client } from "services/api";

const SignUp = () => {
  const formStore = useForm();

  const { handleSubmit } = formStore;

  const submitHandler = handleSubmit((data) => {
    client.post("signup", {
      name: get(data, "name"),
      email: get(data, "email"),
      key: get(data, "username"),
      secret: "2892678138d8d793a28fc49055095d8b",
    });
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
                    label="Your name"
                    name="name"
                    placeholder="Enter your username"
                  />
                  <ControlledInput
                    label="Your email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ControlledInput
                    label="Your username"
                    name="username"
                    placeholder="Enter your username"
                  />
                </Stack>
                <Box>
                  <Button fullWidth variant="contained" type="submit">
                    Button
                  </Button>
                  <Typography textAlign="center" mt="12px">
                    Already signed up?
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
