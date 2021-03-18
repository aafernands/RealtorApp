import React from "react";
// import "../styles/search.css";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	formControl: {
		width: "60%",
		height: "20%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
		color: "white",
	},
	button: {
		width: "20%",
		margin: 0,
	},
	searchState: {
		// marginLeft: 15,
		// textAlign: "left",
		color: "black",
	},
	searchCity: {
		color: "white",
		padding: "-0px",
	},
	stateSelect: {
		backgroundColor: "white",
		marginTop: "10px",
		paddingBottom: 0,
		paddingTop: 0,
	},
	cityInput: {
		backgroundColor: "white",
		width: "60%",
		"& input": {
			textAlign: "center",
			padding: "10px",
		},
	},
}));

function SearchForm(props) {
	const classes = useStyles();
	// const [setSearch] = React.useState("");

	// const handleInputChange = (event) => {
	// 	setSearch(event.target.value);
	// };

	return (
		<div>
			<FormControl size="small" className={classes.formControl}>
				{/* <InputLabel
					className={classes.searchState}
					id="demo-simple-select-outlined-label"
				>
					Select a state
				</InputLabel> */}

				<Select
					name="state"
					className={classes.stateSelect}
					variant="outlined"
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={props.state}
					onChange={props.handleInputChange}
				>
					{/* <select
					name="state"
					id="state"
					onChange={props.handleInputChange}
					className="form-control"
				> */}
					<MenuItem value={"AL"}>Alabama</MenuItem>
					<MenuItem value={"AK"}>Alaska</MenuItem>
					<MenuItem value={"AZ"}>Arizona</MenuItem>
					<MenuItem value={"AR"}>Arkansas</MenuItem>
					<MenuItem value={"CA"}>California</MenuItem>
					<MenuItem value={"CO"}>Colorado</MenuItem>
					<MenuItem value={"CT"}>Connecticut</MenuItem>
					<MenuItem value={"DE"}>Delaware</MenuItem>
					<MenuItem value={"DC"}>District of Columbia</MenuItem>
					<MenuItem value={"FL"}>Florida</MenuItem>
					<MenuItem value={"GA"}>Georgia</MenuItem>
					<MenuItem value={"HI"}>Hawaii</MenuItem>
					<MenuItem value={"ID"}>Idaho</MenuItem>
					<MenuItem value={"IL"}>Illinois</MenuItem>
					<MenuItem value={"IN"}>Indiana</MenuItem>
					<MenuItem value={"IA"}>Iowa</MenuItem>
					<MenuItem value={"KS"}>Kansas</MenuItem>
					<MenuItem value={"KY"}>Kentucky</MenuItem>
					<MenuItem value={"LA"}>Louisiana</MenuItem>
					<MenuItem value={"ME"}>Maine</MenuItem>
					<MenuItem value={"MD"}>Maryland</MenuItem>
					<MenuItem value={"MA"}>Massachusetts</MenuItem>
					<MenuItem value={"MI"}>Michigan</MenuItem>
					<MenuItem value={"MN"}>Minnesota</MenuItem>
					<MenuItem value={"MS"}>Mississippi</MenuItem>
					<MenuItem value={"MO"}>Missouri</MenuItem>
					<MenuItem value={"MT"}>Montana</MenuItem>
					<MenuItem value={"NE"}>Nebraska</MenuItem>
					<MenuItem value={"NV"}>Nevada</MenuItem>
					<MenuItem value={"NH"}>New Hampshire</MenuItem>
					<MenuItem value={"NJ"}>New Jersey</MenuItem>
					<MenuItem value={"NM"}>New Mexico</MenuItem>
					<MenuItem value={"NY"}>New York</MenuItem>
					<MenuItem value={"NC"}>North Carolina</MenuItem>
					<MenuItem value={"ND"}>North Dakota</MenuItem>
					<MenuItem value={"OH"}>Ohio</MenuItem>
					<MenuItem value={"OK"}>Oklahoma</MenuItem>
					<MenuItem value={"OR"}>Oregon</MenuItem>
					<MenuItem value={"PA"}>Pennsylvania</MenuItem>
					<MenuItem value={"RI"}>Rhode Island</MenuItem>
					<MenuItem value={"SC"}>South Carolina</MenuItem>
					<MenuItem value={"SD"}>South Dakota</MenuItem>
					<MenuItem value={"TN"}>Tennessee</MenuItem>
					<MenuItem value={"TX"}>Texas</MenuItem>
					<MenuItem value={"UT"}>Utah</MenuItem>
					<MenuItem value={"VT"}>Vermont</MenuItem>
					<MenuItem value={"VA"}>Virginia</MenuItem>
					<MenuItem value={"WA"}>Washington</MenuItem>
					<MenuItem value={"WV"}>West Virginia</MenuItem>
					<MenuItem value={"WI"}>Wisconsin</MenuItem>
					<MenuItem value={"WY"}>Wyoming</MenuItem>
				</Select>
			</FormControl>

			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					onChange={props.handleInputChange}
					value={props.city}
					name="city"
					type="text"
					className={classes.cityInput}
					placeholder="Enter city"
					id="city"
					variant="outlined"
				/>
			</form>

			{/* <input
					onChange={props.handleInputChange}
					value={props.city}
					name="city"
					type="text"
					className="form-control"
					placeholder="Enter city"
					id="city"
				/> */}

			<Button
				className={classes.button}
				onClick={props.handleFormSubmit}
				variant="contained"
				color="primary"
				className={classes.button}
			>
				Search
			</Button>
		</div>
	);
}

export default SearchForm;
