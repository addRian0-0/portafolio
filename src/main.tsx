import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import { I18nextProvider } from "react-i18next";
import i18next from 'i18next';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

import "animate.css";
import ErrorPage from './error-page.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
]);

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} defaultNS={'translation'}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>,
)
