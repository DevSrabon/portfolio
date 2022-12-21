import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);


	const menuItems = (
		<React.Fragment>
			<li>
				<a href="/" spy={true} smooth={true} offset={-100} duration={500}>
					Home
				</a>
			</li>
			<li>
				<Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
					About
				</Link>
			</li>
			<li>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}>
					Contact
				</Link>
			</li>
			<li>
				<a
					href="blogs"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}>
					Blogs
				</a>
			</li>
			<li>
				<Link to="resume" spy={true} smooth={true} offset={-100} duration={500}>
					Resume
				</Link>
			</li>
		</React.Fragment>
	);
	return (
		<nav className="fixed bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md  z-50 w-full px-6 py-3 flex justify-between items-center right-0 top-0">
			<div className="navbar-start flex">
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
				<a
					href="/"
					className="btn btn-ghost normal-case text-slate-400 text-3xl">
					SRABON
				</a>
			</div>
			<div className="navbar-end hidden  font-bold lg:flex">
				<ul className="menu menu-horizontal p-0 text-slate-400">{menuItems}</ul>
			</div>
		</nav>
	);
};

export default Navbar;
