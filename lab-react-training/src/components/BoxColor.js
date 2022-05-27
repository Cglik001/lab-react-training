import './BoxColor.css'

const BoxColor = (props) => {

    const{r,g,b} = props

    function componentToHex(c) {
      let hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r,g,b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }


    return (
       <div className='boxcolor' style={{backgroundColor:`rgb(${r},${g},${b})`}}>
         <p>rgb({r}, {g},{b})</p>
         <p>{rgbToHex(r,g,b)}</p>
       </div>

    )


}

export default BoxColor;
