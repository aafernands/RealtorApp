import React from "react";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import NotFavoritedIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Delete from "@material-ui/icons/Delete";
import MoreInfo from "@material-ui/icons/Info";
import { useSelector, useDispatch } from "react-redux";
import { markAsViewed } from "../../redux/auth";
import CheckCircle from "@material-ui/icons/CheckCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	popover: {
		pointerEvents: "none",
	},
	paper: {
		padding: theme.spacing(1),
	},
	root: {
		maxWidth: 300,
		height: "100%",
		backgroundColor: "#312450",
		color: "white",
		size: 10,
		fontFamily: "",
	},
	media: {
		height: 140,
		color: "white",
	},
	NotFavoritedIcon: {
		alignItems: "right",
		cursor: "pointer",
		color: "white",
	},
	favoriteIcon: {
		alignItems: "right",
		cursor: "pointer",
		color: "#F65959",
	},
	trashCan: {
		cursor: "pointer",
		color: "white",
		alignItems: "right",
	},

	Button: {
		color: "white",
		cursor: "pointer",
	},
	PropertyCard: {
		marging: 0,
	},
	checkedProperty: {
		position: "absolute",
		top: 5,
		right: 5,
		color: "#24b527",
	},

	cardDetails: {
		fontSize: "12px",
		alignItems: "center",
		padding: 20,
		fontFamily:
			"Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
	propertyPrice: {
		alignContent: "center",
		width: "100%",
	},
}));

function PropertyCard({ property, onClick, onListing }) {
	//Mouse Over Interaction
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	// Set Favorite and mark as Viewd
	const dispatch = useDispatch();
	const { favorite, propertyViewed } = useSelector((state) => state.auth);
	const isFavorite = favorite.indexOf(property.listing_id) > -1;
	const hasViewed = propertyViewed.indexOf(property.listing_id) > -1;
	console.log("******************** propertyViewed **********************");
	console.log(propertyViewed);
	const handleMoreClick = async (url) => {
		await dispatch(markAsViewed(property.listing_id));
		window.location.href = url;
	};

	return (
		<Card align="center" className={classes.root}>
			<CardActionArea>
				{hasViewed === true && (
					<CheckCircle className={classes.checkedProperty} />
				)}
				<CardMedia className={classes.media} image={property.thumbnail} />
				<CardContent className={classes.cardDetails}>
					<Grid container spacing={3}>
						<div className={classes.propertyPrice}>
							<h3>Beds: {property.beds}</h3>
							<h3>Baths: {property.baths}</h3>
						</div>
						<div className={classes.propertyPrice}>
							<h3>
								$
								{property.price
									.toFixed()
									.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
							</h3>
							<h3>Size: {property.building_size?.size || 0} sqft</h3>
						</div>

						<h3>
							Address: {property.address.line}, {property.address.city},{" "}
							{property.address.state_code} {property.postal_code}
						</h3>
					</Grid>
				</CardContent>
			</CardActionArea>
			<CardActions style={{ textAlign: "center", backgroundColor: "#1c152e" }}>
				<div>
					<MoreInfo
						aria-owns={open ? "mouse-over-popover" : undefined}
						aria-haspopup="true"
						onMouseEnter={handlePopoverOpen}
						onMouseLeave={handlePopoverClose}
						className={classes.Button}
						// href={property.rdc_web_url}
						variant="outlined"
						onClick={() => handleMoreClick(property.rdc_web_url)}
					>
						More Info
					</MoreInfo>
					<Popover
						id="mouse-over-popover"
						className={classes.popover}
						classes={{
							paper: classes.paper,
						}}
						open={open}
						anchorEl={anchorEl}
						anchorPosition={{ top: -50, left: 0 }}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						onClose={handlePopoverClose}
						disableRestoreFocus
					>
						<Typography>Get more info</Typography>
					</Popover>

					{onListing && (
						<Delete
							className={classes.trashCan}
							size="small"
							color="primary"
							onClick={() => onClick(property)}
						>
							Delete
						</Delete>
					)}
					{!onListing && isFavorite === false && (
						<NotFavoritedIcon
							className={classes.NotFavoritedIcon}
							size="small"
							color="primary"
							onClick={() => onClick(property)}
						></NotFavoritedIcon>
					)}
					{!onListing && isFavorite === true && (
						<FavoriteIcon
							className={classes.favoriteIcon}
							size="small"
							color="primary"
							onClick={() => {
								onClick(property, "remove");
							}}
						></FavoriteIcon>
					)}
				</div>
			</CardActions>
		</Card>
	);
}

export default PropertyCard;
