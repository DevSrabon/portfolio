import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
const Project = ({ advertise }) => {
    console.log(advertise);
    const { img, rating, stack, title, website } = advertise;
	return (
		<div>
			<div className="card card-compact w-96 bg-base-100 shadow-xl">
				<figure className="h-[200px] overflow-auto scrollbar-hide">
					<img className="w-full" src={img} alt="Shoes" />
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
					<div className="card-actions justify-end">
						<a href={website}>
							<button className="btn btn-outline">See More</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;