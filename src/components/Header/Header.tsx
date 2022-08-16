import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import logo from '../../images/logo.png';
import Search from "../Search/Search";
import './Header.css'


const Header: FC = () => {
    return (
        <div className={'header'}>
            <NavLink to={'movies'}><img src={logo} alt="logo"/></NavLink>
           <div className={'header-search'}> <Search/></div>
        </div>
    );
};

export default Header;
