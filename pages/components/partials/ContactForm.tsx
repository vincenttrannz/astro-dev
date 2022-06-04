import React, { useState } from 'react'

type Props = {}

const ContactForm = (props: Props) => {
  const [contact, setContact] = useState({
    send: false,
    text: '',
    email: '',
    name: ''
  })

  return (
    <form
      className="col-md-12"
      >
        <div className="row">
          <div className="col-md-6 px-0">
            <input
              id="name"
              name="name"
              className="form-control"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="col-md-6 ps-md-2 px-0 mt-2 mt-md-0">
            <input
              id="email"
              name="email"
              className="form-control"
              type="text"
              placeholder="Email"
              required
            />
          </div>
          <div className="col-md-12 mt-2 px-0">
            <textarea
              name="text"
              id="text"
              style={{ minHeight: '150px' }}
              className="form-control"
              placeholder="Message"
              rows={5}
              required
            ></textarea>
          </div>
          <input
            id="submit"
            className="btn btn-main mt-2 d-flex w-auto mx-auto"
            type="submit"
            value="SEND A MESSAGE"
          />
        </div>
      </form>
  )
}

export default ContactForm