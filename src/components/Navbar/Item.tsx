interface ItemProps {
  name: string
  href: string
}

export default function Item({ name, href }: ItemProps) {
  return (
    <a
      href={href}
      className="px-4 py-2 border border-transparent hover:border-gray-300 rounded-xl"
    >
      <li>{name}</li>
    </a>
  )
}
