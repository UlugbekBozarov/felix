import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Add } from "assets/icons";

const BooksList = () => {
  const { palette } = useTheme();
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
              <Card>
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
                    <Chip
                      label="221 pages"
                      sx={{
                        height: "20px",
                        fontSize: "12px",
                        background: "#EFE6FD",
                        color: palette?.primary?.main,
                      }}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BooksList;
