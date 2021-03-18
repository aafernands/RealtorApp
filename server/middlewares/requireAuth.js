const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");

//make sure user is passin along the token
/**
 * [2.3]
 * this is the  express middelware
 * we validate validate the token to make sure it is valid and is not modify
 * 
 * 
 * if invalid then they will get redirect to login page
 * else continue route path
 */
module.exports = (req, res, next) => {

  //destructure authorization from request headers
	const { authorization } = req.headers;

  //if no headers, user isn't logged in, give an error
	if (!authorization) {
    return res.redirect("/login")
		return res.status(401).send({ error: "You must be logged in" });
	}

  //extract token from authorization request
  const token = authorization.replace("Bearer ", "");
  
  //verify that token is using secret key
	jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
		if (err) return res.status(401).send({ error: "You must be logged in" });
    const { userId } = payload;
    const user = await User.findById(userId);
    req.user = user;
    next();
	});
};
