import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Pagination.css";
import Table from "./Table";
import Spinner from '../images/Spinner.gif'
import Empty from '../images/Empty.png'
function Pagination({ category, search, data }) {
    const { loading } = useSelector(state => state.Fetchalldata);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);

    const [pageNumberLimit, setpageNumberLimit] = useState(10);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(data?.filter(bank => {
        return bank[category].toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }).length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.filter(bank => {
        return bank[category].toUpperCase().indexOf(search.toUpperCase()) !== -1;
    }).slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });



    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

  

    return (
        <>
            {
                loading ? (<div className="d-flex justify-content-center">
                    <div style={{ margin: 'auto', display: 'block' }}>
                        <img src={Spinner} alt="...Loading" />
                    </div>
                </div>) : currentItems.length!==0 ? (
                    <>
                        <Table currentItems={currentItems} category={category} />
                        <div className="d-flex justify-content-center">
                            <ul className="pageNumbers">
                                <li>
                                    <button
                                        className="button button2"
                                        onClick={handlePrevbtn}
                                        disabled={currentPage === pages[0] ? true : false}
                                    >
                                        Prev
                                    </button>
                                </li>
                                {pageDecrementBtn}
                                {renderPageNumbers}
                                {pageIncrementBtn}

                                <li>
                                    <button
                                        onClick={handleNextbtn}
                                        className="button button2"
                                        disabled={currentPage === pages[pages.length - 1] ? true : false}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>

                        </div>
                    </>) : (
                    <div className="d-flex mt-4 justify-content-center">
                        <div style={{ margin: 'auto', display: 'block'  }}>
                            <img src={Empty} alt="...Bad Request" style={{width:'100%'}} />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Pagination;