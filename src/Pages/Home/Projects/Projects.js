
import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
   	const [advertises, setAdvertises] = useState([]);
		useEffect(() => {
			fetch('data.json')
				.then((res) => res.json())
				.then((data) => {
					setAdvertises(data);
				});
        }, []);
    
    return (
			<>
				<h1 className="text-4xl font-bold my-5">My Projects</h1>
				<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{advertises.map((advertise) => (
						<Project key={advertise.id} advertise={advertise} />
					))}
				</div>
			</>
		);
};

export default Projects;