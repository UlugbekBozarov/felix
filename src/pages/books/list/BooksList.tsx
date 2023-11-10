import { Outlet, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import { Add, Delete, Edit } from "assets/icons";

import { StyledCard, StyledChip, StyledIconButton } from "./BooksList.style";

const BooksList = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/books/add");
  };

  return (
    <Box mx="100px">
      <Box display="flex" justifyContent="space-between" mt="36px">
        <Typography fontSize="36px" fontWeight={700} color="#fefefe">
          You’ve got{" "}
          <Typography
            component="span"
            fontSize="inherit"
            fontWeight="inherit"
            color="primary"
          >
            &nbsp;7 book
          </Typography>{" "}
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
          {[...Array.from({ length: 4 })].map((_, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <StyledCard>
                <Box p="32px">
                  <Typography variant="h6" fontWeight={600} mb="6px">
                    Raspberry Pi User Guide
                  </Typography>
                  <Typography fontSize="14px" mb="16px">
                    Lorem ipsum dolor sit amet consectetur. Nulla adipiscing
                    neque varius vestibulum magna in. Tortor quisque nisl congue
                    ut tellus sem id.
                  </Typography>
                  <Box display="flex" justifyContent="space-between">
                    <Typography fontSize="14px" fontWeight={500}>
                      Raspberry Pi User Guide
                    </Typography>
                    <StyledChip label="221 pages" />
                  </Box>
                </Box>
                <StyledIconButton
                  color="error"
                  variant="contained"
                  sx={{ borderBottomLeftRadius: 0 }}
                >
                  <Delete />
                </StyledIconButton>
                <StyledIconButton
                  color="primary"
                  variant="contained"
                  sx={{ top: "50px", borderTopLeftRadius: 0 }}
                >
                  <Edit />
                </StyledIconButton>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Outlet />
    </Box>
  );
};

export default BooksList;
