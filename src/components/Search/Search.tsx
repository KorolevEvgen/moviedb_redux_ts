import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

import './Search.css'


const Search: FC = () => {
    const [searchInfo, setSearchInfo] = useState('');

    const onSearchInfo = (event: any) => {
        const request_array = event.target.value.split(',')
        setSearchInfo(request_array);
    };

    return (
        <div>
            <form action="" method="post" className="search">
                <input type="search" name="" placeholder="Search" className="input" onChange={onSearchInfo}/>

                <Link to={`/movies/search?q=${searchInfo}`}>
                    <input type="submit" name="" value="" className="submit"/>
                </Link>
            </form>
        </div>
    );
};

export default Search;
