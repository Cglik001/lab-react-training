import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import './DriverCard.css'

const DriverCard = (props) => {


    const{name, children, img, car} = props




    return (
      <div className='container'>
        <div className="DriverCard">
          <div>
            <img src={img} alt="" style={{height: '110px', width: '110px', objectFit: 'cover', borderRadius:'50%'}}/>
          </div>
          <div className="infoDriver">
            <p id='driverName'>{name}</p>
            <p id='ratingCar'> {Array(5).fill().map((_,index) =>
              children >= index + 1 ? (
                <AiFillStar style={{ color: 'white'}}/>
              ) : (
                <AiOutlineStar style={{color:'white'}}/>
              )
              )} </p>
            <p id='carDetails'>{car.model} - {car.licensePlate}</p>
          </div>

        </div>

      </div>

    )


}

export default DriverCard
