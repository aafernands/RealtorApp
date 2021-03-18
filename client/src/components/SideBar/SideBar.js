import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth";
import { useHistory } from "react-router-dom";
import UserWelcome from "../UserWelcome/UserWelcome";

function Sidebar() {
	const { authenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogout = async (event) => {
		event.preventDefault();
		dispatch(logout());
		history.push("/login");
	};
	return (
		<aside className="sidebar">
			<nav className="nav">
				<ul>
					<li>
						<NavLink
							to="/"
							exact
							activeStyle={{
								color: "#fff",
							}}
						>
							Home
						</NavLink>
					</li>
					{authenticated === true && (
						<li>
							<NavLink
								exact
								to="/listings"
								activeStyle={{
									color: "#fff",
								}}
							>
								My Listings
							</NavLink>
						</li>
					)}
					<li>
						<NavLink
							exact
							to="/about"
							activeStyle={{
								color: "#fff",
							}}
						>
							About
						</NavLink>
					</li>
					{authenticated === true && (
						<li>
							<UserWelcome />
							<a href="#" onClick={handleLogout}>
								Sign Out
							</a>
						</li>
					)}
					{authenticated === false && (
						<li>
							<NavLink
								exact
								to="/login"
								activeStyle={{
									color: "#fff",
								}}
							>
								Login
							</NavLink>
						</li>
					)}
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
