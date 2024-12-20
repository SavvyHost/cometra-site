import MainLayout from "@/components/templates/MainLayout";
import { WishlistProvider } from "@/contexts/WishlistContext";
import "@/styles/globals.css";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
const theme = createTheme({
  typography: {
    // fontFamily: Roboto.style.fontFamily,
  },
  direction: "ltr",
});
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AppCacheProvider {...props}>
        <ThemeProvider theme={theme}>
          <WishlistProvider>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </WishlistProvider>
        </ThemeProvider>
      </AppCacheProvider>
    </QueryClientProvider>
  );
}
