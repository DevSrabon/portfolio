import React from 'react';
import SrabonImg from '../../../assets/srabon.jpg'
const About = () => {
    return (
			<div className="hero mt-20">
				<div className="hero-content flex-col lg:flex-row lg:gap-20 ">
					<img
						data-aos="fade-right"
						data-aos-easing="linear"
						data-aos-duration="1000"
						src={SrabonImg}
						className="sm:max-w-sm lg:max-w-lg  border-red-50 border-8 rounded-lg shadow-2xl"
						alt="srabon"
					/>
					<div
						data-aos="fade-left"
						data-aos-easing="linear"
						data-aos-duration="1000">
						<h1 className="lg:text-4xl text-3xl font-bold">About Me</h1>
						<p className="mt-4 text-justify">
							I am a self-motivated Full Stack Developer with knowledge in
							React.js, Node.js, Express.js, Google Authentication, MongoDB,
							JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive
							web development.
						</p>
					</div>
				</div>
			</div>
		);
};

export default About;