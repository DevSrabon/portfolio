import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner />
            <Projects />
            <About/>
            <Form/>
        </div>
    );
};

export default Home;