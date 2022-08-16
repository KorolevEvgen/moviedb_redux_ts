import React, {FC, useState} from 'react';

import {IPagination} from "../../interfaces/pagination.interface";
import {useAppDispatch} from "../../hooks";
import './Pagination.css'

export const Pagination: FC<IPagination> = ({currentPage, totalMoviesPage, pageChange}) => {
    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(10)

    const dispatch = useAppDispatch();

    const pages = [];

    const onAddNextPages = () => {
        if (endPage + 10 <= totalMoviesPage) {
            setStartPage(startPage + 10)
            setEndPage(endPage + 10)
        }
    }

    const onRemovesPages = () => {
        if (endPage - 10 > 0) {
            setStartPage(startPage - 10)
            setEndPage(endPage - 10)
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
    }

    const onPageChanged = (page: number) => {
        dispatch(pageChange({page}))
    }


    return (
        <div className={'pagination'}>
            <div onClick={onRemovesPages} className={'pagination-btn'}>Previous</div>
            {
                pages.map(item => <div key={item}
                                       className={`pagination-pages ${currentPage === item && 'active-page'}`}
                                       onClick={() => {
                                           onPageChanged(item)
                                       }}>{item}</div>)
            }

            <div onClick={onAddNextPages} className={'pagination-btn'}>Next</div>

        </div>
    );
};

export default Pagination;
