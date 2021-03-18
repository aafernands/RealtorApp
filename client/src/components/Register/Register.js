import React from "react";
import { register, setEmail, setPassword, setName } from "../../redux/auth";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 300,
		textAlign: "center",
		backgroundColor: "white",
		color: "black",
		marginTop: "20%",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 20,
	},
	input: {
		marginTop: 10,
	},
}));

function UserRegister() {
	const classes = useStyles();
	const { email, password, errorMessage, authenticated, name } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		dispatch(register({ email, password, name }));
	};

	if (authenticated) {
		return <Redirect to="/" />;
	}

	return (
		<Container>
			<section className="display">
				<Card className={classes.root}>
					<h1 style={{ color: "black", textAlign: "center" }}>Register</h1>

					<CardContent>
						<React.Fragment>
							<TextField
								className={classes.input}
								label="Type your name"
								type="name"
								variant="outlined"
								id="outlined-basic"
								validate
								value={name}
								onChange={(e) => dispatch(setName(e.target.value))}
							/>
							<br />
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
							<br />

							<TextField
								className={classes.input}
								label="Type your password"
								type="password"
								id="outlined-basic"
								variant="outlined"
								validate
								value={password}
								onChange={(e) => dispatch(setPassword(e.target.value))}
							/>
							{errorMessage === "" ? null : <p>{errorMessage}</p>}
							<br />

							<Button
								className={classes.input}
								type="submit"
								value="Login"
								variant="contained"
								color="primary"
								onClick={handleSubmit}
							>
								Submit
							</Button>

							<br />
							<Button
								component={Link}
								to={"/login"}
								className={classes.input}
								variant="contained"
								color="primary"
							>
								Login
							</Button>
						</React.Fragment>{" "}
					</CardContent>
				</Card>
			</section>
		</Container>
	);
}

export default UserRegister;
