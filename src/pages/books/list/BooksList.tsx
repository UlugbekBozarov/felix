import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Button,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { get } from "lodash";
import axios from "axios";
import { toast } from "react-hot-toast";

import { Add, Delete, Edit } from "assets/icons";
import { Alert } from "components/common";

import { StyledCard, StyledChip, StyledIconButton } from "./BooksList.style";

type BooksType = {
  id: number;
  isbn: string;
  title: string;
  cover?: string | undefined;
  author?: string | undefined;
  published?: number | undefined;
  pages?: number | undefined;
};

const BooksList = () => {
  const navigate = useNavigate();

  const { mutate, data, status } = useMutation({
    mutationFn: async ({
      method = "get",
      bookId,
    }: {
      method?: "get" | "delete";
      bookId?: string | undefined;
    }) => {
      if (method === "get") {
        return axios.get("https://0001.uz/books");
      } else {
        return axios.delete(`https://0001.uz/books/${bookId}`);
      }
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

  const handleAdd = () => {
    navigate("/add");
  };

  const handleEdit = (bookId: number) => () => {
    navigate(`/edit/${bookId}`);
  };

  const handleDelete = (bookId: number) => () => {
    mutate({
      method: "delete",
      bookId: String(bookId),
    });
  };

  useEffect(() => {
    mutate({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mx="100px">
      <Box display="flex" justifyContent="space-between" mt="36px">
        <Typography fontSize="36px" fontWeight={700} color="#fefefe">
          You’ve got
          <Typography
            component="span"
            fontSize="inherit"
            fontWeight="inherit"
            color="primary"
          >
            &nbsp;7 book
          </Typography>
        </Typography>
        <Stack direction="row" alignItems="center" spacing="24px">
          <TextField
            placeholder="Enter your name"
            sx={{
              minWidth: "320px",
              "& .MuiInputBase-root": {
                background: "#fefefe",
              },
            }}
          />
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={handleAdd}
            sx={{ width: "180px" }}
          >
            Create a book
          </Button>
        </Stack>
      </Box>
      <Box mt="12px">
        <Typography fontSize="20px" fontWeight={400} color="#fefefe">
          Your task today
        </Typography>
      </Box>
      <Box mt="36px">
        <Grid container spacing={2}>
          {status === "pending"
            ? [...Array.from({ length: 4 })].map((_, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <StyledCard>
                    <Box p="32px">
                      <Typography variant="h6" fontWeight={600} mb="6px">
                        <Skeleton width="70%" animation="wave" />
                      </Typography>
                      <Typography fontSize="14px" mb="16px">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton width="70%" animation="wave" />
                      </Typography>
                      <Box display="flex" justifyContent="space-between">
                        <Skeleton width="60%" animation="wave" />
                        <Skeleton width="25%" animation="wave" />
                      </Box>
                    </Box>
                  </StyledCard>
                </Grid>
              ))
            : status === "success"
            ? get(data, "data", []).map((book: BooksType, index: number) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <StyledCard>
                    <Box p="32px">
                      <Typography variant="h6" fontWeight={600} mb="6px">
                        {book?.title}
                      </Typography>
                      <Typography fontSize="14px" mb="16px">
                        Lorem ipsum dolor sit amet consectetur. Nulla adipiscing
                        neque varius vestibulum magna in. Tortor quisque nisl
                        congue ut tellus sem id.
                      </Typography>
                      <Box display="flex" justifyContent="space-between">
                        <Typography fontSize="14px" fontWeight={500}>
                          {book?.author}:&nbsp;
                          {`${new Date(
                            book?.published || ""
                          ).getFullYear()}-year`}
                        </Typography>
                        <StyledChip label={`${book.pages} pages`} />
                      </Box>
                    </Box>
                    <StyledIconButton
                      color="error"
                      variant="contained"
                      onClick={handleDelete(book?.id)}
                      sx={{ borderBottomLeftRadius: 0 }}
                    >
                      <Delete />
                    </StyledIconButton>
                    <StyledIconButton
                      color="primary"
                      variant="contained"
                      onClick={handleEdit(book?.id)}
                      sx={{ top: "50px", borderTopLeftRadius: 0 }}
                    >
                      <Edit />
                    </StyledIconButton>
                  </StyledCard>
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
      <Outlet />
    </Box>
  );
};

export default BooksList;
