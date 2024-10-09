import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { CoffeesProvider } from "./context/CoffeesContext";
import { Router } from "./routes";
import { CartProvider } from "./context/CartContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartProvider>
          <CoffeesProvider>
            <Router />
          </CoffeesProvider>
        </CartProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


