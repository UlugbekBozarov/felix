import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import {
  Box,
  Button,
  Card,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";
import { get } from "lodash";

import { CloseCircle, Link } from "assets/icons";
import { ControlledInput } from "components/form";
import { Alert, Spinner } from "components/common";
import { useCustomMutation } from "hooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "430px",
};

const formNames = {
  isbn: "isbn",
};

const BooksAddOrEditModal = () => {
  const navigate = useNavigate();

  const {
    // mutateAsync,
    isPending,
  } = useCustomMutation({
    url: "books",
    method: "POST",
    onSuccess: () => {
      navigate(-1);
    },
    onError: (error) => {
      toast.custom((t) => (
        <Alert
          t={t}
          type="error"
          title={String(get(error, "code"))}
          description={error?.message}
        />
      ));
    },
  });

  const formStore = useForm();

  const { handleSubmit } = formStore;

  const handleClose = () => {
    navigate(-1);
  };

  const submitHandler = handleSubmit((data) => {
    // mutateAsync({
    //   [formNames.isbn]: get(data, formNames.isbn),
    // });
    toast.custom((t) => (
      <Alert t={t} title="Lorem ipsum">
        Apini ishlatib bo'lmadi shuning uchun oddiygina message chiqaryabman
      </Alert>
    ));
  });

  return (
    <Modal open onClose={handleClose}>
      <Box sx={style}>
        <FormProvider {...formStore}>
          <form onSubmit={submitHandler}>
            <Card>
              <Box p="24px 28px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb="28px"
                >
                  <Typography variant="h6" fontWeight={600}>
                    Create a book
                  </Typography>
                  <IconButton onClick={handleClose}>
                    <CloseCircle color="#151515" />
                  </IconButton>
                </Box>
                <Stack spacing="16px" mb="28px">
                  <ControlledInput
                    label="Isbn"
                    name={formNames.isbn}
                    startAdornment={<Link />}
                    rules={{
                      required: true,
                      minLength: {
                        value: 13,
                        message: "Must be 13 characters long",
                      },
                      maxLength: {
                        value: 13,
                        message: "Must be 13 characters long",
                      },
                    }}
                    placeholder="-------------"
                  />
                </Stack>
                <Stack direction="row" spacing="12px">
                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={handleClose}
                    disabled={isPending}
                  >
                    Close
                  </Button>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      console.log("Hello");
                    }}
                    disabled={isPending}
                    startIcon={
                      isPending && <Spinner color="inherit" size={16} />
                    }
                  >
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Card>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
};

export default BooksAddOrEditModal;
