import React from 'react';
import Typewriter from "typewriter-effect";
import { Player} from "@lottiefiles/react-lottie-player";
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const Banner = () => {

    return (
			<div className="hero " id="/">
				<div className="hero-content flex-col lg:flex-row-reverse pt-16 lg:gap-20 ">
					<div
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="1000">
						<Player
							autoplay
							loop
							src="https://assets3.lottiefiles.com/packages/lf20_ne6kcqfz.json"></Player>
					</div>
					<div
						data-aos="fade-left"
						data-aos-easing="linear"
						data-aos-duration="1000">
						<h1 className="lg:text-4xl text-2xl font-bold">
							Hi, I'm <span className="text-orange-400">SRABON BARUA</span>
							<div className="flex gap-3 justify-center mt-2">
								a
								<span className="text-orange-400 ">
									<Typewriter
										options={{
											strings: [
												"Front End Developer.",
												"Web Developer.",
												"MERN Stack Developer.",
											],
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
							</div>
						</h1>
						<div className="text-justify">
							<p className="mt-4 text-justify">
								I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 6
								months of learning/working experience.
							</p>
							<a
								className="btn btn-outline mt-4 "
								href="Resume of Srabon.pdf"
								download="Resume of Srabon.pdf"
								id="resume">
								Download Resume
							</a>
							<div className="grid grid-flow-col gap-4 mt-5 w-10 ">
								<a href="https://www.linkedin.com/in/srabon-barua/">
									<FaFacebookF className="w-7 h-7 hover:scale-[1.5]" />
								</a>
								<a href="https://github.com/DevSrabon">
									<AiFillGithub className="w-7 h-7 hover:scale-[1.5]" />
								</a>
								<a href="https://www.facebook.com/srabon.barca/">
									<FaLinkedin className="w-7 h-7 hover:scale-[1.5]" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;