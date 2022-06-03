import React from 'react'

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
  return (
    <div className='container position-relative py-6' id="contact">
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='font--gothic fs-1'>GET IN TOUCH</h2>
        <p>Thanks for visiting my page. Please leave me a message</p>
      </div>
      <div className='contact__information my-4'>
        {
          contactData.map((item, i) => {
            return (
              <div key={i} className="contact__information__item d-flex flex-column align-items-center">
                <i className={`fa fa-${Object.keys(item)} fa-icon-default--lg mb-2`} aria-hidden="true"></i>
                { 
                  Object.values(item).toString().includes('.com') 
                  ?
                  <p><a href={`mailto:${Object.values(item)}`}>{Object.values(item)}</a></p>
                  :
                  Object.values(item).toString().includes('+64')
                  ?
                  <p><a href={`tel:${Object.values(item)}`}>{Object.values(item)}</a></p>
                  :
                  <p>{Object.values(item)}</p>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Contact