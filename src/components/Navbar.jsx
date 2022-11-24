import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar relative">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        { navLinks.map((nav, index) => (
          <li key={ nav.id } className={`font-normal cursor-pointer text-[14px] md:text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0': 'mr-8 md:mr-10' }`}>
            <a href={`#${nav.id}`}>{ nav.title }</a>
          </li>
        )) }
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient my-2 rounded-xl sidebar absolute left-0 top-20 w-full`}>
          <ul className="list-none flex justify-center flex-col items-center flex-1">
            { navLinks.map((nav, index) => (
              <li key={ nav.id } className={`font-normal cursor-pointer text-[14px] text-white ${index === navLinks.length - 1 ? 'mb-0': 'mb-5' }`}>
                <a href={`#${nav.id}`}>{ nav.title }</a>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar