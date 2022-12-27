import Image from 'next/image'
import HeroImage from '../public/home-hero-dbr-desktop-bg.webp';

export default function Hero() {

  return (
    <div className="">
      <Image
        src={ HeroImage }
        alt="Picture of the author"
        width={ 1440 }
      />
    </div>
  )
}
