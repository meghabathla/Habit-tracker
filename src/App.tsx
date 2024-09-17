import store from "./store/store";
import "./App.css";
import { Provider } from "react-redux";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography>Habit Tracker</Typography>
      </Container>
    </Provider>
  );
}

export default App;
