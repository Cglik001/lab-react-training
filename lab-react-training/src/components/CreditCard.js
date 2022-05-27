import './Creditcard.css'

import visalogo from '../img/Visa.png';
import masterCardlogo from '../img/Mastercard.png';



const CreditCard = (props) => {

  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  } = props


  function typeShow(type) {
    if (type === 'Visa') {
      return <img src = {visalogo} alt='Visa' style={{height: '20px', width: '50px', objectFit: 'fill'}}></img>
    } else if (type === 'Master Card') {
      return <img src = {masterCardlogo} alt='Master Card' style={{height: '30px', width: '40px', objectFit: 'fill'}}></img>
    }
  }

  function hideNumbers(number){
    let ccNumber = number;
    let lastFourDigits = ccNumber.substring(ccNumber.length -4);

    return `•••• •••• •••• ${lastFourDigits}`
  }

  return (
    <div className="Cards" style={{backgroundColor: bgColor, color: color }}>
      <div className="BankLogo">
        <p>{typeShow(type)}</p>
      </div>
      <div className = "Info">
        <p id="Number">{hideNumbers(number)}</p>
        <div className="DatesandBank">
          <p>Expires {expirationMonth}/{expirationYear}</p>
          <p>{bank}</p>
        </div>
        <p id="Owner">{owner}</p>
      </div>

    </div>
  )

}

export default CreditCard;
