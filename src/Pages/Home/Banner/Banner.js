import React from 'react';
import Typewriter from "typewriter-effect";
import { Player} from "@lottiefiles/react-lottie-player";

const Banner = () => {

    return (
			<div className="hero">
				<div className="hero-content grid sm:grid-cols-1 md:grid-cols-2 gap-10 ">
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
							Hi, I' <span className="text-orange-400">SRABON BARUA</span>
							<div className="flex gap-3 justify-center mt-2">
								I'm a
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
								download="Resume of Srabon.pdf">
								Download Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Banner;