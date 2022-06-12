import React from 'react'
import ContactForm from '../components/partials/ContactForm'
import cn from 'classnames'

type Props = {}

const Contact = (props: Props) => {
  const contactData = [
    {
      "phone": "+64 22 157 5362"
    },
    {
      "map-marker": "Wellington, New Zealand"
    },
    {
      "envelope": "nz.vincent.tran@gmail.com"
    }
  ]

  const contactDataClassNames = cn("contact__information__item d-flex flex-column align-items-center");

  return (
    <div className='container position-relative py-9'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='font--gothic fs-1'>GET IN TOUCH</h2>
        <p className='text-center'>Thanks for visiting my page. Please leave me a message</p>
      </div>
      <div className='contact__information my-4'>
        {
          contactData.map((item, i) => {
            return (
              <div key={i} className={contactDataClassNames}>
                <i className={`fa fa-${Object.keys(item)} fa-icon-default fa-icon-default--size-lg mb-2`} aria-hidden="true"></i>
                { 
                  Object.values(item).toString().includes('.com') 
                  ?
                  <p className='fs-sm'><a className='link-white' href={`mailto:${Object.values(item)}`}>{Object.values(item)}</a></p>
                  :
                  Object.values(item).toString().includes('+64')
                  ?
                  <p className='fs-sm'><a className='link-white' href={`tel:${Object.values(item)}`}>{Object.values(item)}</a></p>
                  :
                  <p className='fs-sm'>{Object.values(item)}</p>
                }
              </div>
            )
          })
        }
      </div>
      <div className='col-lg-6 mx-auto'>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact