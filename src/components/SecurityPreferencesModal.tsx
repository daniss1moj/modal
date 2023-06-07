import {
	Box,
	FormControl,
	IconButton,
	InputLabel,
	Modal,
	Typography,
	FormHelperText,
	TextField,
	Button,
} from "@mui/material";
import { MODAL_BASE_STYLES } from "../constants";
import CrossIcon from "../assets/CrossIcon";
import Input from "./Input";
import * as Yup from "yup";
import { Formik } from "formik";

interface IProps {
	open: boolean;
	onClose: () => void;
}

const LAST_NAME = "Schwarzenegger";

const SecurityPreferencesSchema = Yup.object().shape({
	currentPassword: Yup.string()
		.min(12, "Must be at least 12 characters")
		.matches(/.*[a-zA-Z].*/, "Must include at least one letter")
		.matches(/.*[A-Z].*/, "Must contain at least one capitalized letter")
		.matches(/.*[^a-zA-Z0-9].*/, "Must include at least one symbol"),
	newPassword: Yup.string()
		.min(12, "Must be at least 12 characters")
		.matches(/.*[a-zA-Z].*/, "Must include at least one letter")
		.matches(/.*[A-Z].*/, "Must contain at least one capitalized letter")
		.matches(/.*[^a-zA-Z0-9].*/, "Must include at least one symbol")
		.test("no-last-name", "Cannot contain last name", (value) => {
			if (value) {
				const regex = new RegExp(LAST_NAME, "i");
				return !regex.test(value);
			}
			return true;
		}),

	confirmNewPassword: Yup.string()
		.min(12, "Must be at least 12 characters")
		.matches(/.*[a-zA-Z].*/, "Must include at least one letter")
		.matches(/.*[A-Z].*/, "Must contain at least one capitalized letter")
		.matches(/.*[^a-zA-Z0-9].*/, "Must include at least one symbol")
		.test("no-last-name", "Cannot contain last name", (value) => {
			if (value) {
				const regex = new RegExp(LAST_NAME, "i");
				return !regex.test(value);
			}
			return true;
		}),
});

const initialValuesSecurity = {
	currentPassword: "",
	newPassword: "",
	confirmNewPassword: "",
};

const SecurityPreferencesModal = ({ open, onClose }: IProps) => {
	return (
		<Modal
			onClose={onClose}
			open={open}
			sx={{
				"& .MuiModal-backdrop": {
					backgroundColor: "rgba(30, 30, 30, 0.3)",
				},
			}}>
			<Box
				display='flex'
				flexDirection='column'
				alignItems='center'
				textAlign='center'
				sx={{
					...MODAL_BASE_STYLES,
					padding: "40px",
				}}>
				<Box display='flex' justifyContent='space-between' alignItems='center' width='100%'>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: "24px",
							lineHeight: "32px",
						}}>
						Security Preferences
					</Typography>
					<IconButton onClick={onClose}>
						<CrossIcon />
					</IconButton>
				</Box>
				<Formik
					initialValues={initialValuesSecurity}
					validationSchema={SecurityPreferencesSchema}
					onSubmit={(values) => {
						console.log(values);
					}}>
					{({ values, errors, handleBlur, handleChange, handleSubmit }) => {
						const isDisableBtn = Object.values(errors).length > 0;
						return (
							<form onSubmit={handleSubmit} style={{ width: "100%" }}>
								<Box
									display='flex'
									flexDirection='column'
									gap='24px'
									paddingTop='24px'
									width='100%'>
									<Box
										display='flex'
										flexDirection='column'
										width='100%'
										textAlign='left'
										gap='8px'>
										<InputLabel htmlFor='currentPassword'>Current password</InputLabel>
										<Input
											id='currentPassword'
											name='currentPassword'
											type='password'
											placeholder='Your password'
											value={values.currentPassword}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{errors.currentPassword && (
											<FormHelperText
												sx={{
													color: "red",
												}}>
												{errors.currentPassword}
											</FormHelperText>
										)}
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='100%'
										textAlign='left'
										gap='8px'>
										<InputLabel htmlFor='newPassword'>New password</InputLabel>
										<Input
											id='newPassword'
											name='newPassword'
											type='password'
											placeholder='Enter your new password'
											value={values.newPassword}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{errors.newPassword && (
											<FormHelperText
												sx={{
													color: "red",
												}}>
												{errors.newPassword}
											</FormHelperText>
										)}
									</Box>
									<Box
										display='flex'
										flexDirection='column'
										width='100%'
										textAlign='left'
										gap='8px'>
										<InputLabel htmlFor='confirmNewPassword'>Confirm new password</InputLabel>
										<Input
											id='confirmNewPassword'
											name='confirmNewPassword'
											type='password'
											placeholder='Enter your new password'
											value={values.confirmNewPassword}
											onBlur={handleBlur}
											onChange={handleChange}
										/>
										{errors.confirmNewPassword && (
											<FormHelperText
												sx={{
													color: "red",
												}}>
												{errors.confirmNewPassword}
											</FormHelperText>
										)}
									</Box>
									<Button
										type='submit'
										variant='outlined'
										disabled={isDisableBtn}
										sx={{
											alignSelf: "flex-end",
										}}>
										Change My password
									</Button>
								</Box>
							</form>
						);
					}}
				</Formik>
			</Box>
		</Modal>
	);
};

export default SecurityPreferencesModal;
