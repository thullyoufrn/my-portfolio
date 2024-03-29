import { TechStack } from '../../models/TechStack'
import SocialMedia from '../SocialMedia'
import Callout from './Callout'
import { TechLogo } from './TechLogo'

export default function MainSection() {
  return (
    <section className="flex-1 h-screen flex justify-center items-center">
      <div className="flex flex-col gap-20 items-center">
        <Callout />

        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-8 max-w-lg mr-5">
            <h1 className="text-5xl font-extrabold">
              Desenvolvedor Front-End React👋
            </h1>

            <p className="font-medium text-gray-500">
              Olá, eu sou Thullyo Damasceno. Um apaixonado Desenvolvedor
              Front-End React situado em Natal, RN. 📍
            </p>

            <div className="flex gap-4 items-center">
              <SocialMedia
                href="https://www.linkedin.com/in/thullyo-damasceno-375083231/"
                src="/linkedin.svg"
                alt="LinkedIn logo"
              />

              <SocialMedia
                href="https://github.com/thullyoufrn"
                src="/github.svg"
                alt="Github logo"
              />

              <SocialMedia
                href="https://www.youtube.com/channel/UCDFPS3zybKPDgO4hPLVrJFQ"
                src="/youtube.png"
                alt="YouTube logo"
              />
            </div>
          </div>

          <img
            className="max-w-xs rounded-photo border border-gray-300"
            src="/me.jpg"
            alt="Me"
          />
        </div>

        <div className="flex justify-around flex-1">
          {TechStack.map(({ src, label }, index) => {
            return (
              <div
                key={index}
                className="w-28 flex flex-col items-center rounded-xl border border-transparent hover:border-gray-300 p-4 transition-all duration-75"
              >
                <div className="flex flex-1 justify-center items-center">
                  <TechLogo src={src} alt={label} />
                </div>

                <span className="text-xs font-medium text-gray-500 mt-4 cursor-default">
                  {label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
