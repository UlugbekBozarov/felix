import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
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
import axios from "axios";

import { CalendarDate, CloseCircle, Link } from "assets/icons";
import { ControlledInput } from "components/form";
import { Alert, Spinner } from "components/common";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "430px",
};

interface BookResponseType {
  id?: string | undefined;
  title?: string | undefined;
  author?: string | undefined;
  cover?: string | undefined;
  published?: number | undefined;
  pages?: number | undefined;
}

const BooksAddOrEditModal = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      id,
      title,
      author,
      cover,
      published,
      pages,
    }: BookResponseType) => {
      return axios.post("https://0001.uz/books", {
        id,
        title,
        author,
        cover,
        published,
        pages,
      });
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
    mutate({
      id: bookId,
      title: get(data, "title"),
      author: get(data, "author"),
      cover: get(data, "cover"),
      published: get(data, "published") ? +get(data, "published") : undefined,
      pages: get(data, "pages") ? +get(data, "pages") : undefined,
    });
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
                    label="Title"
                    name="title"
                    rules={{ required: true }}
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
