import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className="bg-[#184a79] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 min-h-[200px] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8 font-['SF_Pro_Display',_sans-serif] text-center">
          Soheil Rahimi · Intern
        </h2>
        <ul className="flex justify-center gap-8">
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/soheil-rahimi-a59812264/" className="text-[#00ffff] hover:text-[#db1bc8] transition duration-500">
              <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Soohimi" className="text-[#00ffff] hover:text-[#db1bc8] transition duration-500">
              <FontAwesomeIcon icon={faGithub} className="text-4xl" />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="mailto:your-email@example.com" className="text-[#00ffff] hover:text-[#db1bc8] transition duration-500">
              <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer