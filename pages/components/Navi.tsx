import React from 'react'
import Link from 'next/link'

type Props = {}

const Navi = (props: Props) => {
  const sections:string[] = ['Home', 'Skills', 'Portfolios', 'Gallery', 'Contact'];
  return (
    <nav className='nav-container'>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <Link href="/">
            <a className='logo'>
              Vincent
            </a>
          </Link>
          <ul className="nav-container__menu px-0 my-0">
            {
              sections.map((section:string) => {
                return (
                  <li key={section}>
                    <Link href={`#${section.toLowerCase()}`}>
                      <a className='smoothScroll'>
                        {section}
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navi