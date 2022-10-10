import React, { useState } from 'react';
import './borrow.scss';
import dollar from '../../images/dollar.png';
import { useNavigate } from 'react-router-dom';
const Borrow = () => {
  const navigate = useNavigate();
  const[borrowAmount, setBorrowAmount] = useState('')
  return (
    <div id="borrowAsset">
      <h3>BORROW</h3>
      <p className="pt-5">Select Asset to Borrow</p>
      <img src={dollar} alt="dollar" height={40} />
      <div className="input-group m-5">
        <input
          type="text"
          className="form-control"
          id="floatingInputGroup1"
          placeholder="Enter Amount"
          onChange={(e) => setBorrowAmount(e.target.value)}
          value={borrowAmount}
        />

        <span
          className="input-group-text"
          style={
            borrowAmount == ''
              ? { backgroundColor: 'grey' }
              : { backgroundColor: '#459bb9' }
          }
          onClick={()=>{borrowAmount != '' ? navigate('/collateral') : null}}
        >
          NEXT
        </span>
      </div>
    </div>
  );
};

export default Borrow;
