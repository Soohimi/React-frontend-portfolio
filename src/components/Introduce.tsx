function Introduce() {
  return (
    <section id="intro" className="bg-[#184a79] text-white px-4 py-16 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Intro Section */}
        <div className="mb-48">
          <p className="text-[#db1bc8] text-xl mb-4">Hi, my name is 
            <span className="text-white font-bold text-2xl ml-2">Soheil Rahimi</span>
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            I am a programmer
          </h1>
          
          <p className="text-xl text-gray-300 mb-4">
            I do full stack development using Javascript and also train web developers.
          </p>
          
          <p className="text-xl text-gray-300">
            Currently, I'm creating{" "}
            <a 
              href="" 
              className="text-[#db1bc8] hover:text-white transition duration-300"
            >
              AI-based CRM.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduce