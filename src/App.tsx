import { Refine } from "@pankod/refine-core";
import {
  ThemeProvider,
  DarkTheme,
  CssBaseline,
  GlobalStyles,
  RefineSnackbarProvider,
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import CustomersList from "./pages/customers/list";

export default () => {
  const globalStyles = {
    html: { WebkitFontSmoothing: "auto" },
  };

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <RefineSnackbarProvider>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(import.meta.env.VITE_SERVER_URL)}
          notificationProvider={notificationProvider}
          Layout={Layout}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[{ name: "customers", list: CustomersList }]}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};
