import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
	root: {
		// flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: "white",
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="fixed" color="primary" position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						aria-label="menu"
						color="inherit"
					></IconButton>
					<div className={classes.title}>
						<Button color="inherit" href="/">
							WOW REALTOR
						</Button>
					</div>

					<Button color="inherit" href="/">
						HOME
					</Button>
					<Button color="inherit" href="/listings">
						MY LISTINGS
					</Button>

					<Button color="inherit" href="/login">
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
