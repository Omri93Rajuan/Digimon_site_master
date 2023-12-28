import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Router from "./routes/Router";
import { UserProvider } from "./users/providers/UserProvider";
import { SnackbarProvider } from "./providers/SnackbarProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider>

          <SnackbarProvider>
                <UserProvider>
        <Layout>
          <Router/>
        </Layout>
        </UserProvider>
        </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
  )
  
}

export default App;
