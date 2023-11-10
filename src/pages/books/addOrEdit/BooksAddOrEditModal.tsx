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

import { CalendarDate, CloseCircle, Link } from "assets/icons";
import { ControlledInput } from "components/form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "430px",
};

const BooksAddOrEditModal = () => {
  const navigate = useNavigate();

  const formStore = useForm();

  const { handleSubmit } = formStore;

  const handleClose = () => {
    navigate(-1);
  };

  const submitHandler = handleSubmit((data) => {
    console.log("Data: ", data);
  });

  return (
    <form onSubmit={submitHandler}>
      <FormProvider {...formStore}>
        <Modal open onClose={handleClose}>
          <Box sx={style}>
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
                    label="Title"
                    name="title"
                    placeholder="Enter your title"
                  />
                  <ControlledInput
                    label="Author"
                    name="author"
                    placeholder="Enter your author"
                  />
                  <ControlledInput
                    label="Cover"
                    name="cover"
                    startAdornment={<Link />}
                    placeholder="Enter your cover"
                  />
                  <ControlledInput
                    label="Published"
                    name="published"
                    startAdornment={<CalendarDate />}
                    placeholder="Enter your published"
                  />
                  <ControlledInput
                    label="Pages"
                    name="pages"
                    startAdornment={<CalendarDate />}
                    placeholder="Enter your pages"
                  />
                </Stack>
                <Stack direction="row" spacing="12px">
                  <Button fullWidth variant="outlined" onClick={handleClose}>
                    Close
                  </Button>
                  <Button fullWidth variant="contained">
                    Submit
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Box>
        </Modal>
      </FormProvider>
    </form>
  );
};

export default BooksAddOrEditModal;
