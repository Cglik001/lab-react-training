import './Greetings.css'

const Greetings = (props) => {
  const {lang, children} = props

  const greetingText = (lang) => {

    if(lang === 'de') {
      return "Hallo"
    } else if(lang === 'fr'){
      return "Bonjour"
    }
  }

  return (
    <div className="greeting">
      <p>{greetingText(lang)} {children}</p>
    </div>
  )
}

export default Greetings;
