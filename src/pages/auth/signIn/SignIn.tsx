import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import {
  Box,
  Stack,
  Button,
  Typography,
  Card,
  CircularProgress,
} from "@mui/material";
import toast from "react-hot-toast";
import CryptoJS from "crypto-js";
import { get } from "lodash";

import { ControlledInput } from "components/form";
import { setAuthorizationKey, setAuthorizationSecret } from "services/storage";
import { useCustomMutation } from "hooks";
import { Alert } from "components/common";

const formNames = {
  username: "username",
  password: "password",
};

const SignIn = () => {
  const formStore = useForm();

  const { handleSubmit } = formStore;

  const { mutateAsync, isPending } = useCustomMutation({
    path: "myself",
    method: "GET",
  });

  const submitHandler = handleSubmit((data) => {
    mutateAsync({
      headers: {
        Key: get(data, formNames.username),
        Sign: CryptoJS.MD5(
          `GET/myself${get(data, formNames.password)}`
        ).toString(),
      },
    })
      .then((response) => {
        if (get(response, "isOk", false)) {
          setAuthorizationKey(get(response, "data.key"));
          setAuthorizationSecret(get(response, "data.secret"));
          window.location.href = "/";
        } else {
          toast.custom((t) => (
            <Alert
              t={t}
              type="error"
              description={String(get(response, "message"))}
            />
          ));
        }
      })
      .catch((error) => {
        toast.custom((t) => (
          <Alert t={t} type="error" description={String(error)} />
        ));
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
                  Sign In
                </Typography>
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
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={isPending}
                    startIcon={
                      isPending && (
                        <CircularProgress size="16px" color="inherit" />
                      )
                    }
                  >
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
