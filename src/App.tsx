import { Refine } from "@pankod/refine-core";
import {
  ThemeProvider,
  DarkTheme,
  CssBaseline,
  GlobalStyles,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

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
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
        />
      </RefineSnackbarProvider>
    </ThemeProvider>
  );
};
