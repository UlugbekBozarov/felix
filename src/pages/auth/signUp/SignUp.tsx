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
import { get } from "lodash";

import { ControlledInput } from "components/form";
import { setAuthorizationKey, setAuthorizationSecret } from "services/storage";
import { useCustomMutation } from "hooks";
import { Alert } from "components/common";

const formNames = {
  username: "username",
  password: "password",
  confirmPassword: "confirmPassword",
};

const SignUp = () => {
  const formStore = useForm();

  const { handleSubmit, setError } = formStore;

  const { mutateAsync, isPending } = useCustomMutation({
    path: "signup",
    method: "POST",
  });

  const submitHandler = handleSubmit(async (data) => {
    if (
      get(data, formNames.password) === get(data, formNames.confirmPassword)
    ) {
      mutateAsync({
        data: {
          name: get(data, formNames.username),
          key: get(data, formNames.username),
          secret: get(data, formNames.password),
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
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isPending}
                    startIcon={
                      isPending && (
                        <CircularProgress size="16px" color="inherit" />
                      )
                    }
                  >
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
