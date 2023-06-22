import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {ChakraProvider} from '@chakra-ui/react'
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import FeedContextProviderComponent from "../src/Context/FeedContext";


const clientID ="843719929899-uk2oj7enod1pl9pnuptagp2lqjv6an5i.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="843719929899-uk2oj7enod1pl9pnuptagp2lqjv6an5i.apps.googleusercontent.com">
        <Provider store={store}>
          <FeedContextProviderComponent>
            <App />
          </FeedContextProviderComponent>
        </Provider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
