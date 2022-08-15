import '../styles/Footer.scss';


function Footer () {

  return (
    <div className='footer-section'>
        <a href="https://www.linkedin.com/in/sudhanshujain982/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/blacksag" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://leetcode.com/sudhanshujain982/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-code" aria-hidden="true" style={{'fontWeight':'bold'}}></i>
        </a>
        <a href="mailto:sudhanshujain982@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope" aria-hidden="true"></i>
        </a>
    </div>
  )
}

export default Footer
