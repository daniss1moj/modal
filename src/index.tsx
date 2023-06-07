import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/BasierCircle/BasierCircle-Regular.ttf";
import "./fonts/BasierCircle/BasierCircle-SemiBold.ttf";
import "./App.css";
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<CssBaseline />
		<App />
	</React.StrictMode>,
);
