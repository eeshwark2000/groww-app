import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './BankDetails.css'
function BankDetails() {
    let { ifsc } = useParams();
    const { data } = useSelector(state => state.Fetchalldata);
    const a = data.filter((bank) => {
        return bank.ifsc === ifsc;
    })[0];
    return (
        <div className="container d-flex justify-content-md-center mt-5">
            <div className="card col-8 px-5">
                <div className="card-body">
                    <div className="row justify-content-md-center mt-3" style={{ width: '100%' }}>
                        <div className="col heading">
                            BANK DETAILS
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3" style={{ width: '100%' }}>
                        <div className="col-sm-6">
                            <span className="mr-3 field">BANK NAME: </span><span className="value">{a?.bank_name}</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="mr-3 field">BANK ID: </span><span className="value">{a?.bank_id}</span>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3" style={{ width: '100%' }}>
                        <div className="col-sm-6">
                            <span className="mr-3 field">BRANCH NAME: </span><span className="value">{a?.bank_name}</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="mr-3 field">IFSC CODE: </span><span className="value">{a?.ifsc}</span>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3" style={{ width: '100%' }}>
                        <div className="col-sm-6">
                            <span className="mr-3 field">CITY NAME: </span><span className="value">{a?.city}</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="mr-3 field">DISTRICT NAME: </span><span className="value">{a?.district}</span>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-3" style={{ width: '100%' }}>
                        <div className="col-sm-6">
                            <span className="mr-3 field">ADDRESS: </span><span className="value">{a?.address}</span>
                        </div>
                        <div className="col-sm-6">
                            <span className="mr-3 field">STATE NAME: </span><span className="value">{a?.state}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankDetails
