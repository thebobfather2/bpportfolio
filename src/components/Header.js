import React from 'react';
import Navbar from './Navbar';

export default function Header(props) {

    const { currentPage, handlePageChange } = props;
    
    return (
        <>
            <header>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
        </>
    )
}