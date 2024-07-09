import { FC } from "react";
import { Box, Card, Chip, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { get } from "lodash";

import { Delete, Edit } from "assets/icons";

import { BooksType } from "../BooksList";
import { StyledBox, StyledIconButton } from "./BookCard.style";
import { Alert } from "components/common";

const BookCard: FC<BooksType> = ({ book, status }) => {
  const handleEdit = () => {
    toast.custom((t) => (
      <Alert t={t} title="Lorem ipsum">
        Apini ishlatib bo'lmadi shuning uchun oddiygina message chiqaryabman
      </Alert>
    ));
  };

  const handleDelete = () => {
    toast.custom((t) => (
      <Alert t={t} type="error" title="Lorem ipsum">
        Apini ishlatib bo'lmadi shuning uchun oddiygina message chiqaryabman
      </Alert>
    ));
  };

  return (
    <StyledBox position="relative">
      <Card>
        <Box p="32px">
          <Typography variant="h6" fontWeight={600} mb="6px">
            {get(book, "title")}
          </Typography>
          <Box mb="16px">
            <Typography>
              Cover:&nbsp;
              <Typography component="span" color="info.main">
                <a
                  href={get(book, "cover")}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {get(book, "cover")}
                </a>
              </Typography>
            </Typography>
            <Typography>Pages: &nbsp;{get(book, "pages")}</Typography>
            <Typography>Published: &nbsp;{get(book, "published")}</Typography>
            <Typography>Isbn: &nbsp;{get(book, "isbn")}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography fontSize="14px" fontWeight={500}>
              {book?.author}&nbsp;/&nbsp;
              {`${new Date(book?.published || "").getFullYear()}-year`}
            </Typography>
            <Chip
              color={
                status === 0 ? "error" : status === 1 ? "warning" : "success"
              }
              label={
                status === 0 ? "New" : status === 1 ? "Reading" : "Finished"
              }
            />
          </Box>
        </Box>
      </Card>
      <StyledIconButton
        color="error"
        variant="contained"
        onClick={handleDelete}
        sx={{
          borderBottomRightRadius: { xs: 0, lg: "4px" },
          borderBottomLeftRadius: { lg: 0 },
        }}
      >
        <Delete />
      </StyledIconButton>
      <StyledIconButton
        color="primary"
        variant="contained"
        onClick={handleEdit}
        sx={{
          top: "50px",
          borderTopRightRadius: { xs: 0, lg: "4px" },
          borderTopLeftRadius: { lg: 0 },
        }}
      >
        <Edit />
      </StyledIconButton>
    </StyledBox>
  );
};

export default BookCard;
