/**
 * [1]
 * this component is the login page.
 * we collect user email / password to prepare to submit to server
 */
import React, { useState } from "react";
import { setEmail, forgotPassword } from "../../redux/auth";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		textAlign: "center",
		backgroundColor: "white",
		color: "black",
		marginTop: "20%",
		alignItems: "center",
		paddingTop: 40,
		paddingBottom: 40,
	},
	input: {
		marginTop: 10,
	},
}));

function Login() {
	const classes = useStyles();

	const { email, password, authenticated, errorMessage } = useSelector(
		(state) => state.auth
	);

	const [send, setSend] = useState(false);

	const dispatch = useDispatch();

	console.log({ authenticated });
	if (authenticated) {
		return <Redirect to="/" />;
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		API.forgotPassword(email).then((result) => {
			setSend(true);
		});
	};

	if (send) {
		return (
			<Container>
				<section className="display">
					<Card className={classes.root}>
						<h1 style={{ color: "black", textAlign: "center" }}>
							Forgot Password
						</h1>
						<span>Insturction has been send you your email</span>
						<CardContent>
							<React.Fragment>
								<br />
								<Link to="/login">Return to Sign in</Link>
							</React.Fragment>{" "}
						</CardContent>
					</Card>
				</section>
			</Container>
		);
	}

	return (
		<Container>
			<section className="display">
				<Card className={classes.root}>
					<h1 style={{ color: "black", textAlign: "center" }}>
						Forgot Password
					</h1>
					<span>
						Enter your email adress below and we will send you instruction on
						how to change your password
					</span>
					<CardContent>
						<React.Fragment>
							<TextField
								className={classes.input}
								label="Type your email"
								type="email"
								variant="outlined"
								id="outlined-basic"
								validate
								value={email}
								onChange={(e) => dispatch(setEmail(e.target.value))}
							/>

							{errorMessage === "" ? null : <p>{errorMessage}</p>}

							<br />
							<Button
								className={classes.input}
								type="submit"
								value="Send"
								variant="contained"
								color="primary"
								onClick={handleSubmit}
							>
								Send
							</Button>
							<br />
							<br />
							<br />
							<Link to="/login">Return to Sign in</Link>
						</React.Fragment>{" "}
					</CardContent>
				</Card>
			</section>
		</Container>
	);
}

export default Login;
