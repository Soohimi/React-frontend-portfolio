function Project() {
  return (
    <div className="bg-[#171717] text-white">
      <section id="projects" className="max-w-5xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects I'm Proud of</h2>
        
        {/* Project 1 */}
        <article className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h4 className="text-[#db1bc8] text-xl mb-2">Latest Project</h4>
            <h3 className="text-2xl font-bold mb-4">Pich cafe</h3>
            <p className="mb-6 text-gray-300">
              Description of the project. This should be fairly concise while also describing 
              the key components that you developed or worked on. It can be as long as you 
              need it to be but should at least be a few sentences long.
            </p>
            <h4 className="text-xl mb-2">Technologies used include:</h4>
            <ul className="flex gap-4 text-[#db1bc8]">
              <li>HTML</li>
              <li>CSS</li>
              <li>SVG</li>
            </ul>
          </div>
          <img 
            src="/Photos/project1.png" 
            alt="image of latest project"
            className="md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </article>

        {/* Project 2 */}
        <article className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h4 className="text-[#db1bc8] text-xl mb-2">Portfolio Project</h4>
            <h3 className="text-2xl font-bold mb-4">Kasra's Portfolio</h3>
            <p className="mb-6 text-gray-300">
              Description of the project. This should be fairly concise while also describing 
              the key components that you developed or worked on. It can be as long as you 
              need it to be but should at least be a few sentences long.
            </p>
            <h4 className="text-xl mb-2">Technologies used include:</h4>
            <ul className="flex gap-4 text-[#db1bc8]">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <img 
            src="/Photos/project2.png" 
            alt="image of portfolio project"
            className="md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </article>

        {/* Project 3 */}
        <article className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h4 className="text-[#db1bc8] text-xl mb-2">First Project</h4>
            <h3 className="text-2xl font-bold mb-4">YouTube Clone</h3>
            <p className="mb-6 text-gray-300">
              Description of the project. This should be fairly concise while also describing 
              the key components that you developed or worked on. It can be as long as you 
              need it to be but should at least be a few sentences long.
            </p>
            <h4 className="text-xl mb-2">Technologies used include:</h4>
            <ul className="flex gap-4 text-[#db1bc8]">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <img 
            src="Photos/project3.png" 
            alt="image of YouTube clone project"
            className="md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          />
        </article>
      </section>
    </div>
  )
}

export default Project