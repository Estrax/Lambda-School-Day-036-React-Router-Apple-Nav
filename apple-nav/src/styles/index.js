import styled from 'styled-components';

export const TopNav = styled.nav`
    height: 50px;
    background: rgb(45, 45, 45);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TopNavContent = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const NavItem = styled.div`
    color: white;
    text-decoration: none;
    &:hover {
        color: rgb(146, 146, 146);
    }
`;