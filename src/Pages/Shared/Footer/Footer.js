import React from 'react';
import { Link } from 'react-scroll';
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
			<footer className="footer footer-center p-10 text-base-content rounded">
				<div className="grid grid-flow-col gap-4">
					<Link className="link link-hover" to="about">
						About me
					</Link>
					<Link className="link link-hover" to="contact">
						Contact
					</Link>
				</div>
				<div>
					<div className="grid grid-flow-col gap-4">
						<a href="https://www.linkedin.com/in/srabon-barua/">
							<FaFacebookF className="w-7 h-7 hover:text-blue-700" />
						</a>
						<a href="https://github.com/DevSrabon">
							<AiFillGithub className="w-7 h-7 hover:text-blue-700" />
						</a>
						<a href="https://www.facebook.com/srabon.barca/">
							<FaLinkedin className="w-7 h-7 hover:text-blue-700" />
						</a>
					</div>
				</div>
				<div>
					<p>Copyright © 2022 - All right reserved by Srabon Barua</p>
				</div>
			</footer>
		);
};

export default Footer;