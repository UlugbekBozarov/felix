import { Dispatch, FC, SetStateAction } from "react";
import { Box, Card, Chip, CircularProgress, Typography } from "@mui/material";
import toast from "react-hot-toast";
import { get } from "lodash";

import { Delete, Edit } from "assets/icons";
import { Alert } from "components/common";
import { useCustomMutation } from "hooks";

import { StyledBox, StyledIconButton } from "./BookCard.style";

type BookCardProps = {
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
  setReRender: Dispatch<SetStateAction<boolean>>;
};

const BookCard: FC<BookCardProps> = ({ book, status, setReRender }) => {
  const { mutateAsync, isPending } = useCustomMutation({
    path: `books/${get(book, "id")}`,
    method: "DELETE",
  });

  const handleEdit = () => {
    toast.custom((t) => (
      <Alert t={t} title="Lorem ipsum">
        Apini ishlatib bo'lmadi shuning uchun oddiygina message chiqaryabman
      </Alert>
    ));
  };

  const handleDelete = () => {
    mutateAsync({})
      .then((response) => {
        if (get(response, "isOk", false)) {
          toast.custom((t) => (
            <Alert t={t} description={String(get(response, "message"))} />
          ));
          setReRender((prev: boolean) => !prev);
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
              {book?.published
                ? new Date(book?.published || "").getFullYear()
                : "-"}
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
        disabled={isPending}
        sx={{
          borderBottomRightRadius: { xs: 0, lg: "4px" },
          borderBottomLeftRadius: { lg: 0 },
        }}
      >
        {isPending ? <CircularProgress /> : <Delete />}
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
