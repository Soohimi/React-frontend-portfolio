function About() {
  return (
    <div className="min-h-screen bg-[#8a508f]">
      <section id="about" className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          Soheil Rahimi
        </h2>
        <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 space-y-8">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-200">
              Just the highlights
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Description of the project. This should be fairly concise while also describing 
              the key components that you developed or worked on. It can be as long as you 
              need it to be but should at least be a few sentences long. Be sure to include 
              specific links anywhere in the description. A link looks like{' '}
              <a className="text-blue-400 hover:text-blue-300 transition-colors underline">this</a>, 
              and multiple links look{' '}
              <a className="text-blue-400 hover:text-blue-300 transition-colors underline">like this</a>{' '}
              and{' '}
              <a className="text-blue-400 hover:text-blue-300 transition-colors underline">like this</a>.
            </p>
            <div>
              <h4 className="text-2xl font-semibold text-gray-200 mb-6">
                My favorite technologies include:
              </h4>
              <ul className="space-y-4">
                {['HTML', 'CSS', 'UX'].map((tech) => (
                  <li key={tech} className="flex items-center text-gray-300">
                    <svg 
                      className="w-5 h-5 text-blue-400 mr-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <img 
              src="/Photos/Soohimi.jpeg"
              alt="Soohimi"
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-shadow duration-300"
            />
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;