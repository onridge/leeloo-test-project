import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Title } from './styles';

interface HeaderProps {
    title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="SpaceX Explorer" />
            </Link>

            <Title>{title}</Title>
        </Container>
    );
};

export default Header;
