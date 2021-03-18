# Login

## [1] Login page. Collect user email / password. On submit we dispatch to login action to redux

[CLIENT: Login.js](./client/src/components/Login/Login.js)

```html
<TextField
    label="Type your email"
    type="email"
	/>
<TextField
    label="Type your password"
    type="password">
    />

<Button
    type="submit"
    onClick={() => dispatch(login({ email, password }))}>
    Login
</Button>
```

## [1.1] Redux dispatcher / post the request to send email and password to the server

[CLIENT: auth.js](./client/src/redux/auth.js)

```js
export const login = ({ email, password }) => (dispatch, getState) => {
	API.auth({ email, password }).then((response) => {
		// ...
	});
};
```

[CLIENT: API.js](./client/src/utils/API.js)

```js
function auth(data) {
	return axios.post(`/signin`, data);
}
```

## [1.2 - 1.6] Server route to handle the signin request

[SERVER: authRoute.js](./server/routes/authRoutes.js)

```js
router.post("/signin", async (req, res) => {
	// data from client
	const { email, password } = req.body;

	// make sure email and password exists
	if (!email || !password) {
		return res.status(422).send({ error: "Must provide email and password" });
	}

	// fetch database to see if user email exists
	const user = await User.findOne({ email });
	if (!user) {
		//if no user with this email found, return error
		return res.status(422).send({ error: "Invalid password or email" });
	}

	try {
		// validation: compare password
		await user.comparePassword(password);

		// create jtw/token and store userId and name in the token
		const token = jwt.sign(
			{
				userId: user._id,
				name: user.name,
			},
			"MY_SECRET_KEY"
		);

		// send jwt back to the client
		res.send({ token });
	} catch (err) {
		// ... handle error request
	}
});
```

## [1.7] Receive response from server ( contain the assigned jwt token )

[CLIENT: auth.js](./client/src/redux/auth.js)

```js
export const login = ({ email, password }) => (dispatch, getState) => {
	API.auth({ email, password }).then((response) => {
		// got response from server
		// response.data = jwt/token

		// dispatch login action
		dispatch({
			type: "LOGIN",
			payload: response.data,
		});
	});
};
```

## [1.8] Token saved to localStorage so when user refresh they stay login

[CLIENT: auth.js](./client/src/redux/auth.js)

```js
// redux reducer
// LOGIN ACTION

// save token to localStorage
localStorage.setItem("token", action.payload.token);

// decode token to get user name to save in redux state
const { name } = jwt.decode(action.payload.token);

return {
	...auth,
	token: action.payload.token,
	authenticated: true, // set to true for login
	name,
};
```

# Save favorite - requires user authentication

## [2] click event handler to save or delete favorite property

[CLIENT: Landing.js](./client/src/pages/Landing.js)

```js
const handleBtnClick = (property, isRemoved) => {
	if (authenticated === false) {
		return history.push("/login");
	}

	if (isRemoved) {
		// .. remove save property
	}

	// pass in property we want to save
	API.saveProperty(property).then((result) => {
		alert("Property Saved!");
		dispatch(setFavorite(property.listing_id));
	});
};
```

## [2.1] send a PUT request to the server

[CLIENT: API.js](./client/src/utils/API.js)

```js
function saveProperty(property) {
	// get token from local storage and store in Authorization headers

	const token = localStorage.getItem("token");
	return axios.put(
		`/api/properties`,
		{ property }, // property data to send to server
		{ headers: { Authorization: "Bearer " + token } } // header token
	);
}
```

## [2.2] this is the server route to handle the save favorite request. it required login (requireAuth - middelware)

[SERVER: property.js](./server/routes/property.js)

```js
router.put("/api/properties", requireAuth, (req, res) => {
	// ...
});
```

## [2.3] this is the express middelware. we validate validate the token to make sure it is valid and is not modify

[SERVER: requireAuth.js](./server/middlewares/requireAuth.js)

```js
module.exports = (req, res, next) => {
	// get authorization header
	const { authorization } = req.headers;

	// if no headers, user isn't logged in, give an error
	if (!authorization) {
		return res.redirect("/login");
		return res.status(401).send({ error: "You must be logged in" });
	}

	// extract token from authorization request
	const token = authorization.replace("Bearer ", "");

	// verify that token is using secret key
	jwt.verify(token, "MY_SECRET_KEY", async (err, payload) => {
		if (err) return res.status(401).send({ error: "You must be logged in" });
		const { userId } = payload;
		const user = await User.findById(userId);
		req.user = user;
		next();
	});
};
```

## [2.4 - 2.5] update database user with the new favorite property

[SERVER: property.js](./server/routes/property.js)

```js
router.put("/api/properties", requireAuth, (req, res) => {
	// property from body
	const property = req.body.property;

	// update database user with the new favorite property
	User.updateOne({ _id: req.user._id }, { $push: { properties: property } })
		.then(() => {
			// update successfuly
			// return to the client side / response back to the client
			res.json({ data: "saved" });
		})
		.catch((err) => {
			// ... handle error
		});
});
```

## [2.6] got response from server. property is saved to database

[CLIENT: Landing.js](./client/src/pages/Landing.js)

```js
const handleBtnClick = (property, isRemoved) => {
	// ...

	API.saveProperty(property).then((result) => {
		// we got the response from the server

		// show alert "Property Saved!"
		alert("Property Saved!");

		// update redux state
		dispatch(setFavorite(property.listing_id));
	});
};
```
