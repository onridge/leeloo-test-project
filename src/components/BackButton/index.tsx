import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

import { Container } from './styles';

const BackButton: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container onClick={() => navigate(-1)}>
            <FaChevronLeft />
            <span>Go Back</span>
        </Container>
    );
};

export default BackButton;
