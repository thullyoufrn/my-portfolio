import { ComponentProps } from 'react'

interface TechLogoProps extends ComponentProps<'img'> {
  src: string
  alt: string
}

export function TechLogo({ src, alt, ...props }: TechLogoProps) {
  return <img className={'w-10'} src={src} alt={alt} {...props} />
}
