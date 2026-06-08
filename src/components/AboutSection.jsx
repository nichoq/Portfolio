export default function AboutSection() {
  return (
    <section id="about" className="relative z-10">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <p className="text-aurora-cyan font-mono text-sm mb-2">01 / About</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-aurora-cyan to-aurora-purple rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12 items-center relative">
          {/* Photo Container */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group z-10 origin-center transform-gpu scale-[1.08] sm:scale-[1.12] lg:scale-[1.14] xl:scale-[1.18]">
              {/* Decorative border glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-pink opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-aurora-cyan via-aurora-purple to-aurora-pink opacity-25 group-hover:opacity-60 transition-opacity duration-500 blur-md -z-10" />

              {/* Main Photo Frame */}
              <div className="w-72 h-[23rem] sm:w-80 sm:h-[26rem] lg:w-[22rem] lg:h-[28rem] xl:w-96 xl:h-[30rem] rounded-2xl bg-dark-800 border border-glass-border overflow-hidden relative shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Nicholas Jere Quizo"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-3 space-y-6 relative z-20">
            <div className="relative overflow-hidden rounded-2xl border border-aurora-cyan/20 bg-glass-light px-5 py-4 shadow-lg shadow-aurora-cyan/5 backdrop-blur-md">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-aurora-cyan via-aurora-purple to-aurora-pink" />
              <p className="pl-2 text-lg md:text-xl font-semibold leading-relaxed text-white">
                I enjoy building software that turns ideas into{' '}
                <span className="gradient-text">experiences people can actually use.</span>
              </p>
            </div>

            <p className="text-gray-400 text-base leading-relaxed">
              As a <span className="text-white font-semibold">Computer Science student</span>, I've spent much of my time working on the frontend side of development--designing interfaces, improving user experiences, and creating applications that feel intuitive and accessible. I enjoy bridging the gap between functionality and usability, making sure that what gets built is not only technically sound but also easy to interact with.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              Through projects like <span className="text-aurora-cyan">SimPathy</span>, <span className="text-aurora-cyan">MyRhythm</span>, and <span className="text-aurora-cyan">CareFlow</span>, I've worked closely with teams to transform concepts into working systems. Whether it's planning features, refining user flows, or developing interfaces, I enjoy contributing to the parts of a project that connect technology with the people using it.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              While <span className="text-white font-semibold">frontend development</span> and <span className="text-white font-semibold">UI/UX design</span> have been my primary focus, I'm currently expanding my knowledge of backend development to better understand how complete systems are designed and maintained. I'm also developing an interest in <span className="text-aurora-purple font-medium">cybersecurity</span>, with the goal of exploring how secure, reliable systems are built and protected.
            </p>

            <p className="text-gray-400 text-base leading-relaxed">
              For me, technology is a continuous learning process. Every project is an opportunity to explore new tools, improve existing skills, and gain a deeper understanding of how software can solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
