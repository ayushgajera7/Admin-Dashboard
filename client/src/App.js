import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
<<<<<<< HEAD
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
=======
import Products from "scenes/products"

>>>>>>> e180b28aa9ee6005d606aefa706e17da2a65ce3b
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
<<<<<<< HEAD
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
=======
              <Route path="/products" element={<Products />} />
>>>>>>> e180b28aa9ee6005d606aefa706e17da2a65ce3b
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
