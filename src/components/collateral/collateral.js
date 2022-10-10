import React, { useState } from 'react';
import './collateral.scss'
import FadeInOut from '../../FadeInOut';
import binance from '../../images/binance.png';
import bitcoin from '../../images/bitcoin.png';
import ethereum from '../../images/ethereum.png';
import chainlink from '../../images/chainlink.png';
import tether from '../../images/tether.png';
import uniswap from '../../images/uniswap.png';
const Collateral = () => {
    const [selectedCollatereal, setSelectedCollatereal] = useState('');
    const [requiredLTV, setRequiredLTV] = useState('60%');
    const [requiredCollateral, setRequiredCollateral] = useState('BTC 2.143');
    const [amountBorrow, setAmountBorrow] = useState('');
    return (
      <div id="collateral">
        <h3 className="m-5">COLLATERAL</h3>
        <p className="pt-3">Select Asset to Put As Collateral</p>
        <div className="d-flex justify-content-around w-100 py-5">
          <div
            className={
              selectedCollatereal != 'binance'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('binance')}
          >
            <img src={binance} alt="binance" height={100} />
          </div>
          <div
            className={
              selectedCollatereal != 'bitcoin'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('bitcoin')}
          >
            <img src={bitcoin} alt="bitcoin" height={100} />
          </div>
          <div
            className={
              selectedCollatereal != 'ethereum'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('ethereum')}
          >
            <img src={ethereum} alt="ethereum" height={100} />
          </div>
          <div
            className={
              selectedCollatereal != 'chainlink'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('chainlink')}
          >
            <img src={chainlink} alt="chainlink" height={100} />
          </div>
          <div
            className={
              selectedCollatereal != 'tether'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('tether')}
          >
            <img src={tether} alt="tether" height={100} />
          </div>
          <div
            className={
              selectedCollatereal != 'uniswap'
                ? 'assets'
                : 'assets assetSelected'
            }
            onClick={() => setSelectedCollatereal('uniswap')}
          >
            <img src={uniswap} alt="uniswap" height={100} />
          </div>
        </div>
        <FadeInOut show={selectedCollatereal} duration={500}>
          <p className="pt-5 text-center">Required LTV</p>
          <p className="requiredLTV">{requiredLTV}</p>
          <p className="pt-5 text-center">Amount to Borrow in </p>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              $
            </span>
            <input
              className="form-control "
              onChange={(e) => setAmountBorrow(e.target.value)}
              value={amountBorrow}
            />
          </div>
          <p className="pt-5 text-center">Collateral Required in</p>
          <p className="requiredCollateral">{requiredCollateral}</p>

          <h4 className="p-5">PAYMENT TERMS</h4>
        </FadeInOut>
      </div>
    );
}
 
export default Collateral;