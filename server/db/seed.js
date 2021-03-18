/**
 * seed script to create user so they can login
 */
const mongoose = require("mongoose");

require("../../models/User");

const User = mongoose.model("User");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/WowRealtor",
	async (error) => {
		await User.create({ email: "admin@gmail.com", password: "123123" });
		await User.create({ email: "alex@gmail.com", password: "123123" });

		await mongoose.disconnect();
	}
);
