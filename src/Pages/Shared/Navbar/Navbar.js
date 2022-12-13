import React, { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);


	const menuItems = (
		<React.Fragment>
			<li>
				<Link to="/" spy={true} smooth={true} offset={-100} duration={500}>
					Home
				</Link>
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
				<Link to="resume" spy={true} smooth={true} offset={-100} duration={500}>
					Resume
				</Link>
			</li>
			{/* <li>
				<a href="Resume of Srabon.pdf" download="Resume of Srabon.pdf">
					Resume
				</a>
			</li> */}
		</React.Fragment>
	);
	return (
		<nav className="fixed bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-md  z-50 w-full px-5 py-2 flex justify-between items-center right-0">
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
