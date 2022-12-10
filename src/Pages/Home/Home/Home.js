import React from 'react';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <Form/>
        </div>
    );
};

export default Home;