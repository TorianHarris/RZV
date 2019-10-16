import React from "react";
import { Provider } from 'react-redux'
import store from './Store';

import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import Test from "./Test";
import * as serviceWorker from "./serviceWorker";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>,
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
