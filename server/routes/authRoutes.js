const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");

const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
	const { email, password, name } = req.body;
	try {
		const user = new User({ email, password, name });
		await user.save();
		const token = jwt.sign({ userId: user._id, name }, "MY_SECRET_KEY");
		res.send({ token });
	} catch (err) {
		return res.status(422).send(err.message);
	}
});

function makeid(length) {
	var result = "";
	var characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

router.post("/forgot-password", async (req, res) => {
	const { email } = req.body;
	try {
		// const user = await User.findOne({ email });

		// if (user) {
		// 	console.log("******************** user **********************");
		// 	console.log(user);
		// 	const resetCode = makeid(5);
		// 	user.resetPasswordCode = resetCode;
		// 	await user.save();

		// 	// send email to user with instruction to change password link
		// 	// http://localhost:3001/reset-password?code=1234
		// 	const resetLink = `${req.hostname}/reset-password?code=${resetCode}`;
		// 	console.log(("reset link: ", resetLink));
		// }

		res.status(200).send("OK");
	} catch (err) {
		return res.status(422).send(err.message);
	}
});

/**
 * [1.2]
 * this is the server route to handle the signin request.
 * we received the body "{ email, password }" from client
 */
// on submit from the login page will send request to this API
router.post("/signin", async (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);

	if (!email || !password) {
		//if no email or password provided, return error
		return res.status(422).send({ error: "Must provide email and password" });
	}

	/**
	 * [1.3]
	 * fetching database to see if user email exist
	 */
	//find user with thi email
	const user = await User.findOne({ email });
	if (!user) {
		//if no user with this email found, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}

	/**
	 * [1.4]
	 * validation: compare password
	 */
	//compare passwords
	try {
		// if success, generate token with user id
		await user.comparePassword(password);

		/**
		 * [1.5]
		 * create jwt (json web token) and store userId and name in the token
		 */
		const token = jwt.sign(
			{
				userId: user._id,
				name: user.name,

				// INFO:
				// passing from client so it is not hash
				// password: password,

				// this is from the database and it is hash
				// password2: user.password,
			}, // data you want to add into the token
			"MY_SECRET_KEY" // secreit key need to match when you are validing the token, secret token can be put into ENVIRONMENT VARIABLE so it is not expose
		);
		console.log(token);

		/**
		 * [1.6]
		 * send jwt back to the client
		 */
		res.send({ token });
	} catch (err) {
		//if not, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}
});

module.exports = router;
