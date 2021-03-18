import React from "react";
import ResetPassword from "../components/ForgotPassword/ForgotPassword";
import Container from "@material-ui/core/Container";

function ForgotPassword() {
	return (
		<Container align="center" maxWidth={false}>
			<ResetPassword />
		</Container>
	);
}

export default ForgotPassword;
