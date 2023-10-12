export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-12 flex justify-between items-center">
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
  )
}
