import { createTheme } from "@mui/material";

const theme = createTheme({
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "outlined" },
					style: {
						textTransform: "none",
						color: "#FFFFFF",
						backgroundColor: "#6DB353",
						borderRadius: "40px",
						fontWeight: 500,
						fontSize: "16px",
						lineHeight: "24px",
						padding: "16px 24px",
						width: "max-content",
						"&:hover": {
							backgroundColor: "#6DB353",
							color: "#FFFFFF;",
						},
						"&:disabled": {
							background: "#9EA9B0",
							color: "#CCD6DD",
						},
					},
				},
			],
		},
	},
	typography: {
		fontFamily: "Basier Circle, sans-serif",
	},
});

export default theme;
