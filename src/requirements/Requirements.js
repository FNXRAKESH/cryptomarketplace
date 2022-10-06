import React, { useState, useEffect } from 'react';
import FadeInOut from '../FadeInOut';
import './Requirements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faArrowRight,
  faCamera,
  faLock,
  faSearch,
  faUnlockKeyhole
} from '@fortawesome/free-solid-svg-icons';

var iti;

const bankList = [
  {
    bankLogo: '',
    bankName: '',
    bankURLL: ''
  }
];

const Requirements = () => {
  const [borrowAmount, setBorrowAmount] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [incomeDetails, setIncomeDetails] = useState('');
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [incomeDurationYears, setIncomeDurationYears] = useState('');
  const [incomeDurationMonths, setIncomeDurationMonths] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [dob, setDob] = useState('');
  const [reachYou, setReachYou] = useState('');
  const [bank, setBank] = useState('');
  const [verifyIdentity, setVerifyIdentity] = useState('');
  const [verifyIncomeOne, setVerifyIncomeOne] = useState('');
  const [verifyIncomeTwo, setVerifyIncomeTwo] = useState('');
  const [verifyAddress, setVerifyAddress] = useState('');
  const [borrowSelected, setBorrowSelected] = useState(true);
  const [creditScoreSelected, setCreditScoreSelected] = useState(false);
  const [employmentStatusSelected, setEmploymentStatusSelected] =
    useState(false);
  const [incomeDetailsSelected, setIncomeDetailsSelected] = useState(false);
  const [monthlyIncomeSelected, setMonthlyIncomeSelected] = useState(false);
  const [incomeDurationSelected, setIncomeDurationSelected] = useState(false);
  const [homeAddressSelected, setHomeAddressSelected] = useState(false);
  const [dobSelected, setDobSelected] = useState(false);
  const [reachYouSelected, setReachYouSelected] = useState(false);
  const [bankSelected, setBankSelected] = useState(false);
  const [verifyIdentitySelected, setVerifyIdentitySelected] = useState(false);
  const [verifyIncomeSelected, setVerifyIncomeSelected] = useState(false);
  const [verifyAddressSelected, setVerifyAddressSelected] = useState(false);
  const [preCheckSelected, setPreCheckSelected] = useState(true);

  useEffect(() => {
    if (reachYouSelected) {
      setTimeout(() => {
        var input = document.querySelector('#phoneno');
        iti = window.intlTelInput(input, {
          initialCountry: 'in'
        });
      }, 500);
    }
  }, [reachYouSelected]);
  const handleUplaod = () => {
    var fileSelector = document.querySelector('#verifyId')
    fileSelector.click();
   
  }
const handleUploadChange = (e) => {
  console.log(e.target.files[0]);
  var file = e.target.files[0];
  setVerifyIdentity(file);
  // var reader = new FileReader();
  // reader.readAsText(file, 'UTF-8');

  // // here we tell the reader what to do when it's done reading...
  // reader.onload = (readerEvent) => {
  //   var content = readerEvent.target.result; // this is the content!
  //   console.log(content);
  // };
};
  const handleUplaodIncomeOne= () => {
    var fileSelector = document.querySelector('#verifyIncomeOne');
    fileSelector.click();
  };
  const handleUploadIncomeOneChange = (e) => {
     console.log(e.target.files[0]);
     var file = e.target.files[0];
     setVerifyIncomeOne(file);
  }
   const handleUplaodIncomeTwo = () => {
     var fileSelector = document.querySelector('#verifyIncomeOne');
     fileSelector.click();
   };
   const handleUploadIncomeTwoChange = (e) => {
     console.log(e.target.files[0]);
     var file = e.target.files[0];
     setVerifyIncomeTwo(file);
  };
   const handleUplaodAddress = () => {
     var fileSelector = document.querySelector('#verifyAddress');
     fileSelector.click();
   };
   const handleUploadAddressChange = (e) => {
     console.log(e.target.files[0]);
     var file = e.target.files[0];
     setVerifyAddress(file);
   };

  return (
    <div id="borrow">
      {borrowSelected ? (
        <FadeInOut show={borrowSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">
              How Much Would You Like to Borrow
            </h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItem">
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('Under $500');
                  }}
                  style={
                    borrowAmount == 'Under $500'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Under $500</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('$501 - $1,500');
                  }}
                  style={
                    borrowAmount == '$501 - $1,500'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>$501 - $1,500</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('$1,501 - $3,000');
                  }}
                  style={
                    borrowAmount == '$1,501 - $3,000'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>$1,501 - $3,000</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('$3,001 - $5,000');
                  }}
                  style={
                    borrowAmount == '$3,001 - $5,000'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>$3,001 - $5,000</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('$5,001 - $7,500');
                  }}
                  style={
                    borrowAmount == '$5,001 - $7,500'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>$5,001 - $7,500</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setBorrowAmount('$7501 - $15,000');
                  }}
                  style={
                    borrowAmount == '$7501 - $15,000'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>$7501 - $15,000</p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setBorrowSelected(false);
                  setCreditScoreSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {creditScoreSelected ? (
        <FadeInOut show={creditScoreSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">
              What Is Your Estimated Credit Score?
            </h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItem">
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setCreditScore('Good (Over 650)');
                  }}
                  style={
                    creditScore == 'Good (Over 650)'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Good (Over 650)</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setCreditScore('Fair (550 - 650)');
                  }}
                  style={
                    creditScore == 'Fair (550 - 650)'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Fair (550 - 650)</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setCreditScore('Poor (Under 550)');
                  }}
                  style={
                    creditScore == 'Poor (Under 550)'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Poor (Under 550)</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setCreditScore('Current Bankruptcy');
                  }}
                  style={
                    creditScore == 'Current Bankruptcy'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Current Bankruptcy</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setCreditScore('No Credit / Unsure');
                  }}
                  style={
                    creditScore == 'No Credit / Unsure'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>No Credit / Unsure</p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setBorrowSelected(false);
                  setCreditScoreSelected(false);
                  setEmploymentStatusSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {employmentStatusSelected ? (
        <FadeInOut show={employmentStatusSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">What Is Your Employment Status?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItem">
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Employed');
                  }}
                  style={
                    employmentStatus == 'Employed'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Employed</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Temporary Layoff');
                  }}
                  style={
                    employmentStatus == 'Temporary Layoff'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Temporary Layoff</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Employment Insurance');
                  }}
                  style={
                    employmentStatus == 'Employment Insurance'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Employment Insurance</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Unemployment');
                  }}
                  style={
                    employmentStatus == 'Unemployment'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Unemployment</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Self-Employed');
                  }}
                  style={
                    employmentStatus == 'Self-Employed'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Self-Employed</p>
                </div>

                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Retired / Pension');
                  }}
                  style={
                    employmentStatus == 'Retired / Pension'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Retired / Pension</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setEmploymentStatus('Other');
                  }}
                  style={
                    employmentStatus == 'Other'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Other</p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setEmploymentStatusSelected(false);
                  setIncomeDetailsSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {incomeDetailsSelected ? (
        <FadeInOut show={incomeDetailsSelected} duration={500}>
          <div>
            <h1 className="text-center p-5 pb-0">Income Details</h1>
            <h1 className="text-center px-5 pb-5">Please Select One:</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItem">
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setIncomeDetails('I know My Annual Salary');
                  }}
                  style={
                    incomeDetails == 'I know My Annual Salary'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>I know My Annual Salary</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setIncomeDetails('I Know My Hourly Wage');
                  }}
                  style={
                    incomeDetails == 'I Know My Hourly Wage'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>I Know My Hourly Wage</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setIncomeDetails('I Know My Monthly Income');
                  }}
                  style={
                    incomeDetails == 'I Know My Monthly Income'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>I Know My Monthly Income</p>
                </div>
                <div
                  className="borrowValue"
                  onClick={(e) => {
                    setIncomeDetails('Other');
                  }}
                  style={
                    incomeDetails == 'Other'
                      ? {
                          backgroundColor: '#daebf1',
                          borderColor: '#459bb9',
                          borderWidth: 2,
                          borderStyle: 'solid'
                        }
                      : { backgroundColor: '#fff', borderWidth: 0 }
                  }
                >
                  <p>Other</p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setIncomeDetailsSelected(false);
                  setMonthlyIncomeSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {monthlyIncomeSelected ? (
        <FadeInOut show={monthlyIncomeSelected} duration={500}>
          <div>
            <h1 className="text-center  p-5 pb-0">
              What Is Your Monthly Income?
            </h1>
            <h1 className="text-center px-5 pb-5">
              Before Taxes &amp; Deductions
            </h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItemInput">
                <label htmlFor="basic-url" className="form-label">
                  Round to Nearest Dollar
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon3">
                    $
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Monthly Income"
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    value={monthlyIncome}
                  />
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setMonthlyIncomeSelected(false);
                  setIncomeDurationSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {incomeDurationSelected ? (
        <FadeInOut show={incomeDurationSelected} duration={500}>
          <div>
            <h1 className="text-center  p-5 pb-0">How Long Have You Been</h1>
            <h1 className="text-center px-5 pb-5">Receiving This Income?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItemInputTwo">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Monthly Income"
                    onChange={(e) => setIncomeDurationYears(e.target.value)}
                    value={incomeDurationYears}
                  />
                  <span className="input-group-text" id="basic-addon3">
                    Years
                  </span>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Monthly Income"
                    onChange={(e) => setIncomeDurationMonths(e.target.value)}
                    value={incomeDurationMonths}
                  />
                  <span className="input-group-text" id="basic-addon3">
                    Months
                  </span>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setIncomeDurationSelected(false);
                  setHomeAddressSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {homeAddressSelected ? (
        <FadeInOut show={homeAddressSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">What Is Your Home Address?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItemInputThree">
                <input
                  type="text"
                  className="form-control"
                  placeholder="My Home Address"
                  onChange={(e) => setHomeAddress(e.target.value)}
                  value={homeAddress}
                />
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setHomeAddressSelected(false);
                  setDobSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {dobSelected ? (
        <FadeInOut show={dobSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">What Is Your Date Of Birth?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItemInputThree">
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}
                />
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setDobSelected(false);
                  setReachYouSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {reachYouSelected ? (
        <FadeInOut show={reachYouSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">How can We Reach You?</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItemInputFour">
                <p className="pb-3">
                  We will call you as soon as you complete your application or
                  during the next business day if completed outside of normal
                  business hours.
                </p>
                <p className="fw-bold">
                  When you tap "Continue", Spring Financial will send a text
                  with a verification code. Message and data rates may apply.
                </p>
                <input
                  id="phoneno"
                  name="phoneno"
                  type="tel"
                  className="form-control"
                  onChange={(e) => setReachYou(iti.getNumber())}
                  value={reachYou}
                  placeholder="Phone number"
                />
                <div class="form-check py-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="code"
                    checked
                  />
                  <label class="form-check-label" for="code">
                    Send me a code by text message
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="code" />
                  <label class="form-check-label" for="code">
                    Call me with a code
                  </label>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setReachYouSelected(false);
                  setBankSelected(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {bankSelected ? (
        <FadeInOut show={bankSelected} duration={500}>
          <div>
            <h1 className="text-center p-5 pb-0">
              Which Bank Do You Currently Use?
            </h1>
            <p className="pb-4 text-center">
              In order to get the faster approval for the highest amount
              possible we need to verify your banking details
            </p>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="borrowItem p-3">
                <div className="security">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <h6 className="text-center">Connect to your institution</h6>
                <p className="text-center">
                  <small>
                    Select an institution below to authorize a secure connection
                  </small>
                </p>
                <div class="input-group mb-3 shadow-sm">
                  <span class="input-group-text" id="basic-addon2">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
                <div
                  className="bankList d-flex align-items-center mb-3"
                  onClick={() => {
                    setBankSelected(false);
                    setBank(true);
                    setVerifyIdentitySelected(true);
                  }}
                >
                  <div className="bankLogo"></div>
                  <div className="flex-grow-1 ps-3">
                    <h6 className="m-0">Bank Name</h6>
                    <p className="m-0">
                      <small>Bank URL</small>
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div
                  className="bankList d-flex align-items-center mb-3"
                  onClick={() => {
                    setBankSelected(false);
                    setBank(true);
                    setVerifyIdentitySelected(true);
                  }}
                >
                  <div className="bankLogo"></div>
                  <div className="flex-grow-1 ps-3">
                    <h6 className="m-0">Bank Name</h6>
                    <p className="m-0">
                      <small>Bank URL</small>
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div
                  className="bankList d-flex align-items-center mb-3"
                  onClick={() => {
                    setBankSelected(false);
                    setBank(true);
                    setVerifyIdentitySelected(true);
                  }}
                >
                  <div className="bankLogo"></div>
                  <div className="flex-grow-1 ps-3">
                    <h6 className="m-0">Bank Name</h6>
                    <p className="m-0">
                      <small>Bank URL</small>
                    </p>
                  </div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
            </div>
            <p className="text-center m-0 pt-5">
              In order to send you your money we will need to verify your
              banking.
            </p>
            <p className="text-center">
              If you do not have access to your online banking please{' '}
              <span className="text-info">click here</span>
            </p>
          </div>
        </FadeInOut>
      ) : null}
      {verifyIdentitySelected ? (
        <FadeInOut show={verifyIdentitySelected} duration={500}>
          <div>
            <h1 className="text-center p-5">Verify Your Indentity</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="verify">
                <p className="text-center">
                  Please upload an image of the front of your Government-Issued
                  photo Id to complete your loan application
                </p>
                <ul>
                  <li>All four corners should be visible</li>
                  <li>
                    Your image should have good lighting and should not be
                    blurry
                  </li>
                  <li>
                    You should be able to read all text on your image file
                  </li>
                </ul>
                <input
                  type="file"
                  className="d-none"
                  id="verifyId"
                  onChange={(e) => handleUploadChange(e)}
                />
                <div className="verifyId d-flex flex-column align-items-center p-5 mb-5">
                  <div
                    className="d-flex upload align-items-center px-5 py-3"
                    onClick={() => handleUplaod()}
                  >
                    <FontAwesomeIcon icon={faCamera} />
                    <h6 className="px-3 m-0">Upload Your ID</h6>
                  </div>
                  <p className="pt-2 m-0">
                    {verifyIdentity == '' ? 'No File Chosen' : ''}
                  </p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setVerifyIdentitySelected(false);
                  setVerifyIncomeSelected(true);
                }}
              >
                Continue
              </button>
              <p className="text-center pt-5">
                If you do not have your ID with you, you can upload it later and{' '}
                <span className="text-info">skip for now</span>.
              </p>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {verifyIncomeSelected ? (
        <FadeInOut show={verifyIncomeSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">Verify Your Income</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="verify">
                <p className="text-center">
                  We accept many types of income. Please upload any of the
                  following
                </p>
                <ul>
                  <li>Full-Time or Part-Time: Last 2 pay stubs</li>
                  <li>Self Employed: Last 2 notice of assessments.</li>
                  <li>Child Tax: 90 days of bank statements</li>
                  <li>
                    Disability: Disability statement showing long term and the
                    full amount.
                  </li>
                  <li>El: Record of employment.</li>
                </ul>
                <input
                  type="file"
                  className="d-none"
                  id="verifyIncomeOne"
                  onChange={(e) => handleUploadIncomeOneChange(e)}
                />
                <input
                  type="file"
                  className="d-none"
                  id="verifyIncomeTwo"
                  onChange={(e) => handleUploadIncomeTwoChange(e)}
                />
                <div className="verifyId d-flex flex-column align-items-center p-5 mb-5">
                  <div
                    className="d-flex upload align-items-center px-5 py-3"
                    onClick={() => handleUplaodIncomeOne()}
                  >
                    <FontAwesomeIcon icon={faCamera} />
                    <h6 className="px-3 m-0">Upload Your Income 1</h6>
                  </div>
                  <p className="pt-2 m-0">
                    {verifyIdentity == '' ? 'No File Chosen' : ''}
                  </p>
                </div>
                <div className="verifyId d-flex flex-column align-items-center p-5 mb-5">
                  <div
                    className="d-flex upload align-items-center px-5 py-3"
                    onClick={() => handleUplaodIncomeTwo()}
                  >
                    <FontAwesomeIcon icon={faCamera} />
                    <h6 className="px-3 m-0">Upload Your Income 2</h6>
                  </div>
                  <p className="pt-2 m-0">
                    {verifyIdentity == '' ? '(If required)' : ''}
                  </p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setVerifyAddressSelected(true);
                  setVerifyIncomeSelected(false);
                }}
              >
                Continue
              </button>
              <p className="text-center pt-5">
                If you do not have your paystubs with you, you can upload it
                later and <span className="text-info">skip for now</span>.
              </p>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {verifyAddressSelected ? (
        <FadeInOut show={verifyAddressSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">Verify Your Address</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="verify">
                <p className="pb-4 text-center">
                  Please upload an image of a recent bill or any piece of mail
                  with your name, address and a date within the last two months.
                  Most commonly this is a phone, internet or gas bill.
                </p>
                <input
                  type="file"
                  className="d-none"
                  id="verifyId"
                  onChange={(e) => handleUploadAddressChange(e)}
                />
                <div className="verifyId d-flex flex-column align-items-center p-5 mb-5">
                  <div
                    className="d-flex upload align-items-center px-5 py-3"
                    onClick={() => handleUplaodAddress()}
                  >
                    <FontAwesomeIcon icon={faCamera} />
                    <h6 className="px-3 m-0">Upload Proof of Address</h6>
                  </div>
                  <p className="pt-2 m-0">
                    {verifyIdentity == '' ? 'No File Chosen' : ''}
                  </p>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setVerifyAddressSelected(false);
                }}
              >
                Continue
              </button>
              <p className="text-center pt-5">
                If you do not have your address with you, you can upload it
                later and <span className="text-info">skip for now</span>.
              </p>
            </div>
          </div>
        </FadeInOut>
      ) : null}
      {preCheckSelected ? (
        <FadeInOut show={preCheckSelected} duration={500}>
          <div>
            <h1 className="text-center p-5">You're so close, Master</h1>
            <div className="d-flex flex-column align-items-center justify-content-center py-3">
              <div className="verify">
                <p className="pb-4 text-center">
                  You need to complete the following steps before you can get
                  approved for your loan.
                </p>
                <div className="preCheck">
                  <div
                    className={
                      dob != '' && verifyAddress !== '' && reachYou != ''
                        ? 'Success'
                        : 'failed'
                    }
                  >
                    <h5>Personal Details</h5>
                    <p>
                      {dob != '' && verifyAddress !== '' && reachYou != ''
                        ? ''
                        : 'Incomplete'}
                    </p>
                  </div>
                  <div className={bank != '' ? 'Success' : 'failed'}>
                    <h5>Bank Details</h5>
                    <p>{bank != '' ? '' : 'Incomplete'}</p>
                  </div>
                  <div className={verifyIdentity != '' ? 'Success' : 'failed'}>
                    <h5>Identity Verification</h5>
                    <p>{verifyIdentity != '' ? '' : 'Incomplete'}</p>
                  </div>
                  <div className={verifyIncomeOne != '' ? 'Success' : 'failed'}>
                    <h5>Income Verification</h5>
                    <p>{verifyIncomeOne != '' ? '' : 'Incomplete'}</p>
                  </div>
                  <div className={verifyAddress != '' ? 'Success' : 'failed'}>
                    <h5>Address Verification</h5>
                    <p>{verifyAddress != '' ? '' : 'Incomplete'}</p>
                  </div>
                </div>
              </div>
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setVerifyAddressSelected(false);
                }}
              >
                Take Me Back
              </button>
              <p
                className="btn btn-link text-info pt-3"
                type="button"
                onClick={() => {
                  setVerifyAddressSelected(false);
                }}
              >
                Submit Now and Upload Later
              </p>
              <h6 className="text-center pt-5">
                Benefits of Completing Your Application Now
              </h6>
              <div className='benefits pb-5'>
                <p>No branch visits required</p>
                <p>Completing an application doesn't affect your credit score</p>
                <p>Get your money within 24 hours</p>
              </div>
            </div>
          </div>
        </FadeInOut>
      ) : null}
    </div>
  );
};

export default Requirements;
