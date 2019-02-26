import React from 'react';
import { ItemImg, SubNavbarItemsDiv, SubNavbarItem, SubNavbarP } from '../styles';

const SubNavbarItems = (props) => {
    return (
        <div>
            <SubNavbarItemsDiv>
                {props.data.map(elem => 
                    <SubNavbarItem key={elem.name}>
                        <ItemImg src={elem.icon} alt={elem.name}/>
                        <SubNavbarP>{elem.name}</SubNavbarP>
                    </SubNavbarItem>
                )}
            </SubNavbarItemsDiv>
        </div>
    );
}

export default SubNavbarItems;