interface SocialMediaProps {
  href: string
  src: string
  alt: string
}

export default function SocialMedia({ href, src, alt }: SocialMediaProps) {
  return (
    <a
      className="hover:scale-105 transition-all duration-150"
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      <img className="w-8" src={src} alt={alt} />
    </a>
  )
}
