import React from 'react';

const Form = () => {
    return (
			<div
				data-aos="fade-up"
				data-aos-easing="linear"
				data-aos-duration="1000
			"
				data-aos-delay="50"
				className="my-5 lg:my-20 flex  flex-col gap-5 justify-center items-center p-10 w-full" id='contact'>
				<h2 className="text-3xl text-orange-300">Contact With me</h2>
				<form
					className="flex flex-col gap-5  w-[400px]"
					action="https://formsubmit.co/et.srabon@gmail.com"
					method="POST">
					<input
						type="text"
						name="name"
						className="input input-bordered w-full "
						placeholder="Your Name"
						required
					/>
					<input
						type="email"
						name="email"
						className="input input-bordered w-full "
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						className="textarea textarea-secondary"
						placeholder="Message"
						required></textarea>
					<button className="btn btn-outline" type="submit">
						Send
					</button>
				</form>
			</div>
		);
};

export default Form;