import {
	Card,
	Typography,
	IconButton,
	ThemeProvider,
	Box,
	Divider,
	InputBase,
	FormControl,
	InputLabel,
	FormHelperText,
} from "@mui/material";
import theme from "./theme";
import EditIcon from "./assets/EditIcon";
import { useState } from "react";
import SecurityPreferencesModal from "./components/SecurityPreferencesModal";

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<Box display="flex" justifyContent="center" alignItems="center" height="100vh">
				<Box
					sx={{
						maxWidth: 785,
						width: "100%",
						padding: "40px",
						display: "flex",
						flexDirection: "column",
						gap: "24px",
						background: "#FFFFFF",
						borderRadius: "16px",
					}}>
					<Box display="flex" justifyContent="space-between">
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: "20px",
								lineHeight: "28px",
								color: "#151B26",
							}}>
							Security Preferences
						</Typography>
						<IconButton onClick={handleOpenModal}>
							<EditIcon />
						</IconButton>
					</Box>
					<Box padding="16px">
						<Divider />
						<Box display="flex" justifyContent="space-between" marginY="16px">
							<Typography className="label">Password</Typography>
							<Typography className="label">*******</Typography>
						</Box>
						<Divider />
					</Box>
				</Box>
			</Box>
			<SecurityPreferencesModal open={isModalOpen} onClose={handleCloseModal} />
		</ThemeProvider>
	);
}

export default App;
