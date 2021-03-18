import React, { useState } from "react";
import { MenuList } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import UserWelcome from "../UserWelcome/UserWelcome";
import { useHistory } from "react-router-dom";
import { logout } from "../../redux/auth";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexGrow: 1,
	// 	position: "relative",
	// 	zIndex: 2,
	// },

	menuButton: {
		marginRight: theme.spacing(2),
	},

	root: {
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
		flexGrow: 1,
		backgroundColor: "red",
	},
	drawer: {
		width: 300,
		background: "#312450",
	},
	fullList: {
		width: "auto",
	},
	linkColor: {
		color: "white",
	},
	iconStyle: {
		color: "white",
	},
	socialIcons: {
		textAlign: "justify",
	},
	outlined: {
		"&:hover": {
			backgroundColor: "#35C37D",
		},
	},
	toolBar: {
		backgroundColor: "#5e42a6",
	},
	loginToolBar: {
		textAlign: "right",
		listStyle: "none",
		width: "100%",
		textDecoration: "none",
		fontSize: "15px",
		marginBottom: "10px",
		marginRight: "20px",
	},
	logOutIcon: {
		position: "absolute",
		top: 25,
		right: 15,
		fontSize: "20px",
	},
	sigOutButton: {
		cursor: "pointer",
	},
}));

function NavTabs({ onToggle }) {
	const { authenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		setIsOpen(open);
	};
	const handleLogout = async (event) => {
		event.preventDefault();
		dispatch(logout());
		history.push("/login");
	};

	return (
		<div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar className={classes.toolBar}>
						<IconButton
							onClick={toggleDrawer(true)}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						{authenticated === true && (
							<div className={classes.loginToolBar}>
								<UserWelcome />
								<div className={classes.sigOutButton}>Sign Out</div>{" "}
								<ExitToAppIcon
									className={classes.logOutIcon}
									href="#"
									onClick={handleLogout}
								></ExitToAppIcon>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>

			<Drawer
				classes={{ paper: classes.drawer }}
				open={isOpen}
				onClose={toggleDrawer(false)}
			>
				<div
					className={classes.fullList}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						<List className={classes.linkColor}>
							<ListItem button component={Link} to="/">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"HOME"} />
							</ListItem>
							{authenticated === true && <hr></hr>}
							{authenticated === true && (
								<ListItem button component={Link} to="/listings">
									<ListItemIcon>
										<FavoriteIcon
											activeStyle={{
												color: "#fff",
											}}
											className={classes.iconStyle}
										/>
									</ListItemIcon>
									<ListItemText primary={"MY LISTINGS"} />
								</ListItem>
							)}
							<hr></hr>
							<ListItem button component={Link} to="/about">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"ABOUT"} />
							</ListItem>
							<hr></hr>
							{authenticated === false && (
								<ListItem button component={Link} to="/login">
									<ListItemIcon>
										<VpnKeyIcon className={classes.iconStyle} />
									</ListItemIcon>
									<ListItemText primary={"Sign In"} />
								</ListItem>
							)}
							{authenticated === true && (
								<ListItem button component={Link} to="#" onClick={handleLogout}>
									<ListItemIcon>
										<ExitToAppIcon className={classes.iconStyle} />
									</ListItemIcon>
									<ListItemText primary={"Sign Out"} />
								</ListItem>
							)}
							<hr></hr>
						</List>
					</MenuList>
				</div>
			</Drawer>
		</div>
	);
}

export default NavTabs;
