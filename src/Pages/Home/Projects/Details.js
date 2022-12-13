import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const id = useLoaderData();
    const id2 = parseInt(id);
    const [data, setData] = useState([]);
    useEffect(() => {
			fetch("data.json")
				.then((res) => res.json())
                .then((data) => {
					setData(data);
				});
    }, [id2]);
    const result = data.find(see => see.id ===id2)
    console.log(result)
    return (
        <div>
            {}
        </div>
    );
};

export default Details;