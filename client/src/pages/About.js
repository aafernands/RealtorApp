import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import francisc from "../assets/images/francis.png";
import alexs from "../assets/images/alexs.png";
import anitas from "../assets/images/anitas.png";
import erikimgs from "../assets/images/erikimgs.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 225,
		textAlign: "center",
		backgroundColor: "#312450",
		color: "white",
	},
	media: {
		height: 140,
	},
	favoriteIcon: {
		cursor: "pointer",
		width: theme.spacing(3),
		height: theme.spacing(3),
		background: "#1D0F11",
		color: "white",
		padding: 10,
	},
	avatar: {
		// position: "absolute",
		// bottom: "50%",
		width: theme.spacing(20),
		height: theme.spacing(20),
		margin: theme.spacing(2),
	},
	CardActions: {
		display: "block",
	},
	listingsContainer: {
		border: "0.5px solid gray",
		padding: 20,
	},
}));

function AboutUs(property, onFavoriteClick) {
	const classes = useStyles();

	return (
		<Container align="center" maxWidth={false}>
			<section className="display">
				<div className="title">
					<h1
						style={{
							padding: 20,
							fontFamily:
								"Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
						}}
					>
						Meet the Team
					</h1>
				</div>
				<div className={classes.listingsContainer}>
					<Grid container spacing={4}>
						<Grid align="center" item xs={12} md={4} lg={4}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardContent>
										<h2>Francis</h2>
										<div className="img-size">
											<Avatar
												className={classes.avatar}
												src={francisc}
												alt="Francis"
											/>
										</div>
									</CardContent>
								</CardActionArea>
								<CardActions className={classes.CardActions}>
									<GitHubIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace("https://github.com/mrpagz")
										}
									></GitHubIcon>
									<LinkedInIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace(
												"http://www.linkedin.com/in/francis-roy-balasabas-21a5a5196"
											)
										}
									></LinkedInIcon>
								</CardActions>
							</Card>
						</Grid>
						<Grid align="center" item xs={12} md={4} lg={4}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardContent>
										<h2>Anitta</h2>
										<div className="img-size">
											<Avatar
												className={classes.avatar}
												src={anitas}
												alt="Anitta"
											/>
										</div>
									</CardContent>
								</CardActionArea>
								<CardActions className={classes.CardActions}>
									<GitHubIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace("https://github.com/Anitta29")
										}
									></GitHubIcon>
									<LinkedInIcon
										className={classes.favoriteIcon}
										onClick={() => window.location.replace("#")}
									></LinkedInIcon>
								</CardActions>
							</Card>
						</Grid>
						<Grid align="center" item xs={12} md={4} lg={4}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardContent>
										<h2>Erik Ulerio</h2>
										<div className="img-size">
											<Avatar
												className={classes.avatar}
												src={erikimgs}
												alt="Erik"
											/>
										</div>
									</CardContent>
								</CardActionArea>
								<CardActions className={classes.CardActions}>
									<GitHubIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace("https://github.com/Erikulerio")
										}
									></GitHubIcon>
									<LinkedInIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace(
												"https://www.linkedin.com/in/erik-ulerio-a58878b2"
											)
										}
									></LinkedInIcon>
								</CardActions>
							</Card>
						</Grid>
						<Grid align="center" item xs={12} md={4} lg={4}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardContent>
										<h2>Alex Fernandes</h2>
										<div className="img-size">
											<Avatar
												className={classes.avatar}
												src={alexs}
												alt="Alex Fernandes"
											/>
										</div>
									</CardContent>
								</CardActionArea>
								<CardActions className={classes.CardActions}>
									<GitHubIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace("https://github.com/aafernands")
										}
									></GitHubIcon>
									<LinkedInIcon
										className={classes.favoriteIcon}
										onClick={() =>
											window.location.replace(
												"https://www.linkedin.com/in/aafernands/"
											)
										}
									></LinkedInIcon>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</div>
			</section>
		</Container>
	);
}

export default AboutUs;
