import React from 'react';

const Projects = () => {
    return (
			<div>
				<h1 className="text-4xl font-bold my-4">My Projects</h1>
				<div className="card card-compact w-96 bg-base-100 shadow-xl">
					<figure>
						<img src="https://placeimg.com/400/225/arch" alt="Shoes" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Projects;