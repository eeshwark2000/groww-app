import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Fetchalldata, initliked } from '../actions/searchAction';
import './Filter.css'
import Pagination from './Pagination';
function Fav() {
    const dispatch = useDispatch();
    const [state, setstate] = useState({
        category: 'ifsc',
        city: 'BANGALORE',
        search: ''
    }) 
    const [temp, settemp] = useState([])
    const {liked} = useSelector(state => state.Fetchalldata)
    const handleInputs = (e) => {
        setstate({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    useEffect(() => {
        if(liked.length===0){
        dispatch(initliked());}
    }, [])

    useEffect(() => {
        console.log("vfvbvbfcvb",temp)
        settemp(liked?.filter((bank)=>{
            return bank.city===state.city
        }));
        
    }, [state.city,liked])
    
    return (
        <>
        <div className="filters d-flex justify-content-between mt-2">

            <div className="input-container mt-2">
                <input type='text'
                    name='search'
                    value={state.search}
                    onChange={handleInputs} 
                    placeholder="Enter Searh Query"/>
            </div>
            <div className="category d-flex">
                <div className="ctype" style={{ marginRight: '20px' }}>
                    <select className="form-select"
                        name="city"
                        onChange={handleInputs}
                        value={state.city}
                        aria-label="Default select example"
                        defaultValue="BANGALORE">
                        <option value="BANGALORE">BANGALORE</option>
                        <option value="MUMBAI">MUMBAI</option>
                        <option value="DELHI">DELHI</option>
                        <option value="PUNE">PUNE</option>
                        <option value="CHENNAI">CHENNAI</option>
                    </select>
                </div>
                <div className="cvalue">
                    <select className="form-select" 
                        name="category" 
                        onChange={handleInputs} 
                        value={state.category} 
                        aria-label="Default select example"
                        defaultValue="ifsc">
                        <option value="ifsc">IFSC</option>
                        <option value="branch">BRANCH</option>
                        <option value="city">CITY</option>
                        <option value="bank_name">BANK NAME</option>
                    </select>
                </div>
            </div>
        </div>
        <Pagination  category={state.category} search={state.search} data={temp}/>
        </>
    )
}

export default Fav
