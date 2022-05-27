import './Rating.css'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Rating = (props) => {

  const{children} = props



  return (
    <div className="Ratings">
     <p id='stars'> {Array(5).fill().map((_,index) =>
      children >= index + 1 ? (
        <AiFillStar style={{ color: 'black'}}/>
       ) : (
        <AiOutlineStar style={{color:'black'}}/>
       )
      )} </p>
    </div>

  )
}


export default Rating;
