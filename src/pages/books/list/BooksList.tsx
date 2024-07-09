import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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

import BookCard from "./card/BookCard";
import { useCustomQuery } from "hooks";

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

const BooksList = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [reRender, setReRender] = useState<boolean>(false);

  const { data, status } = useCustomQuery({
    path: "books",
    queryKey: `${location.pathname}${reRender}`,
    enabled: location.pathname === "/",
    onSuccess: (response) => {
      console.log("Response: ", response);
    },
  });
  console.log("data: ", status);

  const handleAdd = () => {
    navigate("/add");
  };

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
          {status === "pending" && location.pathname === "/" ? (
            [...Array.from({ length: 3 })].map((_, index) => (
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
          ) : (get(data, "data", []) || []).length ? (
            (get(data, "data", []) || []).map(
              (book: BooksType, index: number) => (
                <Grid item xs={12} md={6} lg={4} key={get(book, "book.id")}>
                  <BookCard setReRender={setReRender} {...book} />
                </Grid>
              )
            )
          ) : (
            <Grid
              item
              minHeight="400px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              xs={12}
            >
              <Typography color="error">No data :(</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      <Outlet />
    </Container>
  );
};

export default BooksList;
