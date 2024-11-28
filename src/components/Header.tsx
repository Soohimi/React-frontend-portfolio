import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="bg-[#184a79] shadow-md w-full top-0 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex items-center h-16 w-full space-x-4">
          <li className="mr-auto">
            <Link to="/" className="flex items-center text-2xl font-bold text-[#D1DBE4] hover:text-[#db1bc8] transition duration-500">
              <FontAwesomeIcon icon={faCode} className="mr-2 text-[#00ffff]" /> 
              <span>Soheil Rahimi</span>
            </Link>
          </li>
          <li><Link to="/projects" className="text-[#D1DBE4] hover:text-[#db1bc8] transition duration-500">Projects</Link></li>
          <li><Link to="/about" className="text-[#D1DBE4] hover:text-[#db1bc8] transition duration-500">About</Link></li>
          <li><Link to="/contact" className="text-[#D1DBE4] hover:text-[#db1bc8] transition duration-500">Contact</Link></li>
          <li className="flex items-center space-x-4 ml-6">
            <a target="_blank" href="https://www.linkedin.com/in/soheil-rahimi-a59812264/" className="text-[#00ffff] text-2xl hover:text-[#db1bc8] transition duration-500" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            <a target="_blank" href="https://github.com/Soohimi" className="text-[#00ffff] text-2xl hover:text-[#db1bc8] transition duration-500" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="lg" /></a>
            <a target="_blank" href="YOUR_RESUME_URL" className="bg-[#db1bc8] text-white px-4 py-2 rounded-md hover:opacity-70 transition-colors cursor-pointer transition duration-500" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header