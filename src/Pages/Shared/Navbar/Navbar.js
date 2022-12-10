import React, { useState } from "react";
import { Link } from "react-router-dom";
import SrabonImg from "../../../assets/srabon.jpg";


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);


	const menuItems = (
		<React.Fragment>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<a href="Resume of Srabon.pdf" download="Resume of Srabon.pdf">Resume</a>
			</li>
		</React.Fragment>
	);
	return (
		<nav className="navbar bg-base-100 flex justify-between">
			<div className="navbar-start">
				<div className="dropdown">
					<label
						onClick={() => setIsOpen(!isOpen)}
						tabIndex={0}
						className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block w-5 h-5 stroke-current">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</label>
					{isOpen && (
						<ul
							onClick={() => setIsOpen(!isOpen)}
							tabIndex={1}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							{menuItems}
						</ul>
					)}
				</div>
				<Link
					to="/"
					className="btn btn-ghost normal-case text-slate-400 text-3xl">
					PORTFOLIO
				</Link>
			</div>
			<div className="navbar-end hidden  font-bold lg:flex">
				<ul className="menu menu-horizontal p-0 text-slate-400">{menuItems}</ul>
			</div>
		</nav>
	);
};

export default Navbar;
