import { Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { get } from "lodash";

import { Add } from "assets/icons";
// import { useCustomQuery } from "hooks";

import BookCard from "./card/BookCard";
import { useEffect, useState } from "react";

export type BooksType = {
  book: {
    id: number;
    isbn: string;
    title: string;
    cover?: string | undefined;
    author?: string | undefined;
    published?: number | undefined;
    pages?: number | undefined;
  };
  status: number;
};

const staticBooks = [
  {
    book: {
      id: 19,
      isbn: "9781118464465",
      title: "Raspberry Pi User Guide",
      cover: "http://url.to.book.cover",
      author: "Eben Upton",
      published: 2012,
      pages: 221,
    },
    status: 0,
  },
  {
    book: {
      id: 20,
      isbn: "9781118464466",
      title: "Raspberry Pi User Guide",
      cover: "http://url.to.book.cover",
      author: "Eben Upton",
      published: 2012,
      pages: 221,
    },
    status: 1,
  },
  {
    book: {
      id: 21,
      isbn: "9781118464467",
      title: "Raspberry Pi User Guide",
      cover: "http://url.to.book.cover",
      author: "Eben Upton",
      published: 2012,
      pages: 221,
    },
    status: 2,
  },
];

// const path = "books";

const BooksList = () => {
  const navigate = useNavigate();

  const [status, setStatus] = useState<"pending" | "success">("pending");

  // const { data, status } = useCustomQuery({
  //   url: `${path}`,
  //   onSuccess: (response) => {
  //     console.log("Response: ", response);
  //   },
  // });

  const handleAdd = () => {
    navigate("/add");
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus("success");
    }, 3000);
  }, []);

  return (
    <Container>
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
        <Grid container spacing="24px">
          {status === "pending"
            ? [...Array.from({ length: 4 })].map((_, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card>
                    <Box p="32px">
                      <Typography variant="h6" fontWeight={600} mb="10px">
                        <Skeleton width="60%" animation="wave" />
                      </Typography>
                      <Typography fontSize="14px" mb="16px">
                        <Skeleton width="80%" animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton width="70%" animation="wave" />
                      </Typography>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Skeleton height="20px" width="60%" animation="wave" />
                        <Skeleton height="40px" width="25%" animation="wave" />
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))
            : staticBooks.map((book: BooksType, index: number) => (
                <Grid item xs={12} md={6} lg={4} key={get(book, "book.id")}>
                  <BookCard {...book} />
                </Grid>
              ))}
        </Grid>
      </Box>
      <Outlet />
    </Container>
  );
};

export default BooksList;
