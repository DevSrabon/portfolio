import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
    const id = useLoaderData();
    const id2 = parseInt(id);
    const [data, setData] = useState([]);
    useEffect(() => {
			fetch("fake.json")
				.then((res) => res.json())
                .then((data) => {
					setData(data);
				});
    }, [id2]);
    const result = data.filter(see => see.id ===id2)
    
    return (
        <div>
            {result.map(detail => <Detail key={detail.id} detail={ detail} />)}
        </div>
    );
};

export default Details;