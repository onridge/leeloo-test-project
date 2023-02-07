import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Histories, Launches } from './pages';

const Paths: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/histories" element={<Histories />} />
            <Route path="/launches" element={<Launches />} />
        </Routes>
    );
};

export default Paths;
