import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, removeFavorite } from "../redux/auth";
import MyCarousel from "../components/Carousel/MyCarousel";

import "../App.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "relative",
		padding: "0 15px",
	},
	container: {
		paddingLeft: 0,
		paddingRight: 0,
		paddingBottom: 100,
	},
	carousel: {
		position: "relative",
		marginBottom: 50,
	},
	welcomeMessage: {
		color: "white",
		fontFamily:
			"Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
		fontWeight: "bold",
		fontSize: "25px",
		margin: 0,
		marginTop:20
	},
	Mycarousel: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "#000",
		opacity: ".7",
		zIndex: 3,
	},
}));
function Landing() {
	const classes = useStyles();
	const [search, setSearch] = useState({
		state: "NY",
		city: "",
		result: [],
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const { authenticated } = useSelector((state) => state.auth);

	const handleInputChange = (event) => {
		const { value, name } = event.target;

		console.log(event.target);

		console.log(value, name);
		setSearch((state) => ({
			...state,
			[name]: value,
		}));
	};

	const searchProperties = (state, city) => {
		API.search(state, city).then((result) => {
			console.log(result);
			const propertyWithImage = result.data.filter(
				(property) => property.thumbnail
			);
			setSearch((state) => ({ ...state, result: propertyWithImage }));
		});
	};
	const handleFormSubmit = (event) => {
		event.preventDefault();
		searchProperties(search.state, search.city);
	};

	const handleBtnClick = (property, isRemoved) => {
		if (authenticated === false) {
			return history.push("/login");
		}
		if (isRemoved) {
			return API.deleteProperty(property.listing_id).then((result) => {
				alert("Property Removed!");
				dispatch(removeFavorite(property.listing_id));
			});
		}

		/**
		 * [2]
		 * click event handler to save favorite property
		 */
		API.saveProperty(property).then((result) => {
			/**
			 * [2.6] 
			 * got resposne from server
			 * property is saved to database
			 */
			alert("Property Saved!");
			dispatch(setFavorite(property.listing_id));
		});
	};

	useEffect(() => {
		API.search(search.state, "Manhattan").then((result) => {
			const propertyWithImage = result.data.filter(
				(property) => property.thumbnail
			);

			setSearch((state) => ({
				...state,
				result: propertyWithImage.slice(0, 4),
			}));
		});
	}, []);

	return (
		<Container align="center" maxWidth={false} className={classes.container}>
			<section className="display">
				<div className={classes.carousel}>
					<MyCarousel className={classes.Mycarousel} />
					<div className="SearchBar">
						<Typography
							variant="h4"
							gutterBottom
							className={classes.welcomeMessage}
						>
							"Welcome to WOW Realtor! <br></br>
							<span style={{ fontSize: "15px" }}>
								To start enter the desired location below."
							</span>
						</Typography>
						<SearchBar
							state={search.state}
							city={search.city}
							handleInputChange={handleInputChange}
							handleFormSubmit={handleFormSubmit}
						/>
					</div>
				</div>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Grid container spacing={3}>
								{search.result.map((property, index) => (
									<Grid key={index} item xs={12} md={6} lg={3}>
										<PropertyCard
											property={property}
											onClick={handleBtnClick}
										/>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				</div>
			</section>
		</Container>
	);
}
export default Landing;
