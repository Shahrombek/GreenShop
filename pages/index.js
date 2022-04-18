import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => router.push("/home")}
          sx={{
            textTransform: "capitalize",
            color: "white",
            background: "rgb(70, 163, 88)",
            "&:hover": { background: "rgb(70, 163, 88)" },
            px: 2,
            mb: 2,
            borderRadius: "6px",
          }}
        >
          <Typography>Go Home</Typography>
        </Button>
      </Box>
    </>
  );
}
