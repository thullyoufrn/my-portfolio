import Item from './Item'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-2 px-12 flex justify-between items-center">
      <a
        href="/"
        className="px-4 py-2 border border-transparent hover:border-gray-300 rounded-xl"
      >
        <span className="font-bold text-lg">Thullyo.dev</span>
      </a>

      <ul className="flex gap-8 font-semibold items-center">
        <Item href="/" name="Home" />
        <Item href="/" name="Sobre" />
        <Item href="/" name="Projetos" />
        <Item href="/" name="Contato" />
      </ul>
    </nav>
  )
}
