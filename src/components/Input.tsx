import { Visibility, VisibilityOff } from "@mui/icons-material";
import { InputBase, InputAdornment, InputProps, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const StyledInput = styled(InputBase)(({ theme }: { theme: any }) => ({
	fontWeight: 500,
	fontSize: "14px",
	lineHeight: "20px",
	borderBottom: "1px solid #ABB6BD",
	"&.MuiInputBase-root": {
		paddingBottom: "16px",
	},
	"& .MuiInputBase-input::placeholder": {
		fontWeight: 400,
		fontSize: "16px",
		lineHeight: "24px",
		color: "#ABB6BD",
	},
}));

const Input = ({ type, ...restProps }: InputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<StyledInput
			{...restProps}
			type={type === "password" ? (showPassword ? "text" : "password") : type}
			endAdornment={
				type === "password" && (
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={() => setShowPassword(!showPassword)}
							edge='end'>
							{showPassword ? (
								<VisibilityOff
									sx={{
										color: "#CCD6DD",
									}}
								/>
							) : (
								<Visibility
									sx={{
										color: "#CCD6DD",
									}}
								/>
							)}
						</IconButton>
					</InputAdornment>
				)
			}
		/>
	);
};

export default Input;
