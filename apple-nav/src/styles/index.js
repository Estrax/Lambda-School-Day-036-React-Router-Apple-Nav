import styled from 'styled-components';

export const TopNav = styled.nav`
    height: 50px;
    background: rgb(51, 51, 51);
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

export const SubNav = styled.div`
    background: ${props => props.light ? "rgb(230, 230, 230)" : "rgb(45, 45, 45)"};
    color: ${props => props.light ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"};
`;

export const SubNavProduct = styled.div`
    width: 70%;
    margin: 0 auto;
`;

export const SubNavbarItemsDiv = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: space-between;
`;

export const ItemImg = styled.img`
    width: 100%;
    height: 50px;
`;

export const SubNavbarItem = styled.div`
    
`;

export const SubNavbarP = styled.p`
    margin: 10px auto;
    font-size: 12px;
    text-align: center;
`;