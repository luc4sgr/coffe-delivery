import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { CoffeesProvider } from "./context/CoffeesContext";
import { Router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { PurchaseDetailsProvider } from "./context/PurchaseDetailsContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
        <PurchaseDetailsProvider>
          <CoffeesProvider>
            <Router />
          </CoffeesProvider>
        </PurchaseDetailsProvider>
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


