import React from 'react';
import { Link } from 'react-router-dom';
import { TopNav, NavItem, TopNavContent } from '../styles';

const TopNavbar = () => {
    return (
        <TopNav>
            <TopNavContent>
                <Link to="/">
                    <NavItem>
                        <i className="fab fa-apple"/>
                    </NavItem>
                </Link>
                <Link to="/mac">
                    <NavItem>
                        Mac
                    </NavItem>
                </Link>

                <Link to="/ipad">
                    <NavItem>
                        iPad
                    </NavItem>
                </Link>

                <Link to="/iphone">
                    <NavItem>
                        iPhone
                    </NavItem>
                </Link>

                <Link to="/watch">
                    <NavItem>
                        Watch
                    </NavItem>
                </Link>

                <Link to="/tv">
                    <NavItem>
                        TV
                    </NavItem>
                </Link>

                <Link to="/music">
                    <NavItem>
                        Music
                    </NavItem>
                </Link>

                <Link to="/support">
                    <NavItem>
                        Support
                    </NavItem>
                </Link>

                <Link to="/">
                    <NavItem>
                        <i className="fas fa-search" />
                    </NavItem>
                </Link>

                <Link to="/">
                    <NavItem>
                        <i className="fas fa-shopping-bag" />
                    </NavItem>
                </Link>
            </TopNavContent>
        </TopNav>
    );
}

export default TopNavbar;
