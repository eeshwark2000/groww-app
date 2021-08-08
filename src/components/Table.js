import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AiFillStar } from "react-icons/ai";
import { BiStar } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { initliked, likeunlikeitem } from '../actions/searchAction';
function Table({ currentItems }) {
    let history = useHistory();
    const dispatch = useDispatch();
    const { liked } = useSelector((state) => {
        return state.Fetchalldata
    });
    const fav = (bank) => {
        var p = false;
        for (let i = 0; i < liked.length; i++) {
            if (JSON.stringify(liked[i]) === JSON.stringify(bank)) {
                p = true;
                break;
            }
        }
        if (p) {
            return <AiFillStar style={{ color: '#FFD700', fontSize: '25px' }} />
        } else { return <BiStar style={{ color: '#FFD700', fontSize: '25px' }} /> }
    }
    useEffect(() => {
        if(!liked.length){
        dispatch(initliked());}
    }, [])
    var info = currentItems?.map((bank) => {
            return (

                <tr key={bank.ifsc} >
                    <td onClick={() => { dispatch(likeunlikeitem(bank)) }}>{fav(bank)}</td>
                    <td onClick={() => { history.push(`/bank-details/${bank.ifsc}`); }}>{bank.bank_name}</td>
                    <td onClick={() => { history.push(`/bank-details/${bank.ifsc}`); }}>{bank.bank_id}</td>
                    <td onClick={() => { history.push(`/bank-details/${bank.ifsc}`); }}>{bank.branch}</td>
                    <td onClick={() => { history.push(`/bank-details/${bank.ifsc}`); }}>{bank.ifsc}</td>
                    <td onClick={() => { history.push(`/bank-details/${bank.ifsc}`); }}>{bank.state}</td>
                </tr>);
        })
    return (
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">BANK NAME</th>
                        <th scope="col">BANK ID</th>
                        <th scope="col">BRANCH</th>
                        <th scope="col">IFSC CODE</th>
                        {/* <th scope="col">ADDRESS</th> */}
                        <th scope="col">STATE</th>
                    </tr>
                </thead>
                <tbody>
                    {info}
                </tbody>
            </table>
        </div>
    )
}

export default Table
