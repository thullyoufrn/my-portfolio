import { TechLogo } from './TechLogo'
import { TechStack } from './TechStack'

export function App() {
  return (
    <main className="h-screen flex flex-col">
      <nav className="py-4 px-12 flex justify-between items-center">
        <a href="/">
          <span className="font-bold text-lg">Thullyo.dev</span>
        </a>

        <ul className="flex gap-8 font-semibold items-center">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>About</li>
          </a>
          <a href="/">
            <li>Projects</li>
          </a>
          <a href="/">
            <li>Contact</li>
          </a>
        </ul>
      </nav>

      <section className="flex-1 max-w-full flex justify-center items-center">
        <div className="flex flex-col gap-20">
          <div className="flex gap-5 justify-center items-center">
            <div className="flex flex-col gap-8 max-w-md">
              <h1 className="text-5xl font-extrabold">
                Front-End React Developer👋
              </h1>

              <p>
                Hi, I&apos;m Thullyo Damasceno. A passionate Front-End React
                Developer based in Natal, Brazil. 📍
              </p>

              <div className="flex gap-4 items-center">
                <a
                  className="hover:scale-105 transition-all duration-150"
                  target="_blank"
                  href="https://www.linkedin.com/in/thullyo-damasceno-375083231/"
                  rel="noreferrer"
                >
                  <img
                    className="w-8"
                    src="../public/linkedin.svg"
                    alt="LinkedIn logo"
                  />
                </a>

                <a
                  className="hover:scale-105 transition-all duration-150"
                  target="_blank"
                  href="https://github.com/thullyoufrn"
                  rel="noreferrer"
                >
                  <img
                    className="w-8"
                    src="../public/github.svg"
                    alt="Github logo"
                  />
                </a>
              </div>
            </div>

            <img
              className="max-w-xs rounded-full border border-gray-300"
              src="../public/me.jpg"
              alt="Me"
            />
          </div>

          <div className="flex gap-5 items-center">
            <span className="font-semibold">Tech Stack</span>

            <div className="h-10 w-px bg-gray-900"></div>

            <div className="flex gap-10 justify-center flex-1">
              {TechStack.map(({ src, label }, index) => {
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex flex-1 justify-center items-center">
                      <TechLogo src={src} alt={label} />
                    </div>

                    <span className="text-sm mt-4">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
