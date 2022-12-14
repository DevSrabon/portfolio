
import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
   	const [advertises, setAdvertises] = useState([]);
		useEffect(() => {
			fetch("data.json")
				.then((res) => res.json())
				.then((data) => {
					setAdvertises(data);
				});
		}, []);
    
    return (
			<>
				<h1 className="text-4xl font-bold mt-10 md:mt-28">My Projects</h1>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
					{advertises.map((advertise) => (
						<Project key={advertise.id} advertise={advertise} />
					))}
				</div>
			</>
		);
};

export default Projects;