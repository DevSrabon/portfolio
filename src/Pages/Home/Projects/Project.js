import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Projects.css'
const Project = ({ advertise }) => {
    const { img, rating, stack, title, website,id } = advertise;
	return (
		<div
			data-aos="fade-down"
			data-aos-easing="linear"
			data-aos-duration="1000
			"
			data-aos-delay="100"
			className="card card-compact bg-base-100 shadow-xl window">
			<figure className="h-[200px] ">
				<img className="w-full" src={img} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<div className="flex gap-52">
					<p className="flex gap-1">
						<AiOutlineHeart className="text-orange-500 text-2xl" />{" "}
						<span>{rating}</span>
					</p>
					<p>{stack}</p>
				</div>
				<div className="card-actions justify-between">
					<a href={website}>
						<button className="btn btn-outline">Live</button>
					</a>
					<Link to={`/${id}`}>
						<button className="btn btn-outline">More Details</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Project;