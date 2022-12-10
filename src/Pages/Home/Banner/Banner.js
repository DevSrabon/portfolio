import React from 'react';
import SrabonImg from '../../../assets/srabon.jpg'
import Typewriter from "typewriter-effect";
const Banner = () => {
    return (
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row lg:gap-20 ">
					<img
						src={SrabonImg}
						className="max-w-sm rounded-lg shadow-2xl"
						alt="srabon"
					/>
					<div>
						<h1 className="lg:text-4xl text-3xl font-bold">
							HI, I am <span className="text-orange-400">SRABON BARUA</span>
							<div className="flex gap-3">
								a
								<span className="text-orange-400">
									<Typewriter
										options={{
											strings: [
												"Front End Developer.",
												"Web Developer.",
												"MERN Developer.",
											],
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
							</div>
						</h1>
						<p className='mt-4'>
							I am a web developer with an amazing ability to develop websites
							that are both functional and aesthetically pleasing. I have a
							strong under-standing of web standards and best practices, and I
							am passionate about creating websites that users will find easy to
							use and visually appealing.
						</p>
						<a className='btn btn-outline mt-4' href="Resume of Srabon.pdf" download="Resume of Srabon.pdf">
							Download Resume
						</a>
					</div>
				</div>
			</div>
		);
};

export default Banner;