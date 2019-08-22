import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { SubNav, SubNavProduct } from '../styles';
import SubNavbarItems from './SubNavbarItems';
import data from '../data';


const SubNavbar = () => {
    const arr = window.location.href.split("/");
    const page = arr[3];
    const lightBg = (page === 'ipad' || page === 'watch' || page === 'music') ? true : false;
    
    return (
        <SubNav light={lightBg}>
            <SubNavProduct>
                <Switch>
                    <Route path="/mac" exact render={() => <SubNavbarItems product="mac" data={data.macData}/>} />
                    <Route path="/ipad" exact render={() => <SubNavbarItems product="ipad" data={data.ipadData} />} />
                    <Route path="/iphone" exact render={() => <SubNavbarItems product="iphone" data={data.iphoneData} />} />
                    <Route path="/watch" exact render={() => <SubNavbarItems product="watch" data={data.watchData} />} />
                    <Route path="/tv" exact render={() => <SubNavbarItems product="tv" data={data.tvData} />} />
                    <Route path="/music" exact render={() => <SubNavbarItems product="music" data={data.musicData} />} />
                    <Route path="/support" exact render={() => <SubNavbarItems product="support" data={[]} />} />
                </Switch>
            </SubNavProduct>
        </SubNav>
    );
}

export default withRouter(SubNavbar);