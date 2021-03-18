import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	welcomeMessage: {
		color: "white",
		fontSize: 15,
		fontFamily:
			"Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
}));

export default function UserWelcome() {
	const classes = useStyles();
	const { name } = useSelector((state) => state.auth);

	return <div className={classes.welcomeMessage}>Welcome {name} </div>;
}
