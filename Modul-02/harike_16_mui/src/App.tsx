import { Box, Container, Typography, styled, Button } from "@mui/material";

// Membuat internal componen, harus import "styled" dulu
const JumbotronContainer = styled(Box)(()=>({
  border: "1px solid black",
  backgroundColor: "yellow",
}))

function App() {
  return (
    <Container
      sx={{
        backgroundColor: "blue",
        padding: "6px 64px"
      }}
    >
      <JumbotronContainer>
        <Typography variant="h1">Ini Material UI</Typography>
        <Button size="small" variant="contained">
          Click Me!
        </Button>
      </JumbotronContainer>
    </Container>
  )
}

export default App
