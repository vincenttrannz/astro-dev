import React from 'react'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='position-relative'>
      <div className='mountain-container'>
        <div className='mountain-highlight-border'></div>
        <div className='mountain-highlight'></div>
        <div className='mountain-dim w-100 bg-blackBG z-index-99'></div>
      </div>
      <div className='pb-4 pt-3 pt-md-1 bg-blackBG z-index-99'>
        <div className='container'>
          <div className='d-flex flex-column-reverse flex-md-row justify-content-between align-items-center'>
            <p className='fs-sm text-center opacity-50 mt-3 mt-md-0'>Design and Copyright © Vincent, All rights Reserved.</p>
            <div className="social">
              <Link href="https://www.facebook.com/vincenttrannz/">
                <a className='mx-2' target="_blank">
                  <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/vincenttrannz/">
                <a  className='mx-2'target="_blank">
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </Link>
              <Link href="https://www.instagram.com/vincenttrannz/">
                <a className='mx-2' target="_blank">
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </Link>
              <Link href="https://github.com/vincenttrannz">
                <a className='mx-2' target="_blank">
                  <i className="fa fa-github fa-2x" aria-hidden="true"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer