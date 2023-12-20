"use client"
import React, { useEffect, useState } from "react";
import "./Metrics.css"

export default function Metrics(){

    const [totalCustomers, setTotalCustomers] = useState('');
    const [totalBilling, setTotalBilling] = useState('');


    useEffect( () => {
        getDBTotalCustomers();
        getDBTotalInvoiceValue();
    }, []);

    const getDBTotalCustomers = () => {
        fetch('http://localhost:3001/getTotalCustomers')
        .then((response) => response.json())
        .then((data) => {
          setTotalCustomers(data[0]['COUNT(*)']);
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    const getDBTotalInvoiceValue = () => {
        fetch('http://localhost:3001/getTotalInvoiceValue')
        .then((response) => response.json())
        .then((data) => {
          const totalInvoiceValue = data[0].totalInvoiceValue;
          setTotalBilling(totalInvoiceValue);
          console.log(totalInvoiceValue);
        })
        .catch((error) => {
          console.error(error);
        });
    };
      

    return(
        <div className="metricsContainer">
            <div className="card">
                <div className="innerCard">
                    <div className="upperCard">
                        <div className="largeNumber">{totalCustomers}</div>
                        <div className="normalText">Total customers</div>
                    </div>
                    <br></br>
                    <div className="lowerCard">
                        <div className="flex gap-2">
                            <div className="smallText font-bold">missing customers for the target:</div>
                            <div className="smallText">410</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="smallText font-bold">goal:</div>
                            <div className="smallText">500 (18% progress)</div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="card">
                    <div className="innerCard">
                        <div className="upperCard">
                            <div className="largeNumber">${totalBilling}</div>
                            <div className="normalText">Total billing</div>
                        </div>
                        <br></br>
                        <div className="lowerCard">
                        <div className="flex gap-2">
                            <div className="smallText font-bold">missing invoice:</div>
                            <div className="smallText">$2800.40</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="smallText font-bold">goal:</div>
                            <div className="smallText">$108,000.00 (0.1% progress)</div>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}