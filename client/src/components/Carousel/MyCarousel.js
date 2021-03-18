import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "./mycarousel.scss";
import { makeStyles } from "@material-ui/core/styles";
import image1 from "../Carousel/images/image1.jpg";
import image2 from "../Carousel/images/image2.jpg";
import image3 from "../Carousel/images/image3.jpg";
import image4 from "../Carousel/images/image4.jpg";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
	},
	overlay: {
		position: "absolute",
		width: "100%",
		height: "100%",
		backgroundColor: "#000",
		opacity: ".7",
		zIndex: 3,
	},
}));
function MyCarousel(images) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.overlay}></div>
			<AutoplaySlider
				animation="cubeAnimation"
				play={true}
				bullets={false} // remove the circle paging
				cancelOnInteraction={false} // should stop playing on user interaction
				interval={4000}
			>
				<img data-src={image1} alt="Property 1" />
				<div data-src={image2} alt="Property 2" />
				<div data-src={image3} alt="Property 3" />
				<div data-src={image4} alt="Property 4" />
			</AutoplaySlider>
		</div>
	);
}

export default MyCarousel;
