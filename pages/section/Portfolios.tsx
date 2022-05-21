import React from 'react'
import AOSComp from '../components/partials/AOSComp';
import Planet from '../components/Planet';

type Props = {}

const Portfolios = (props: Props) => {
  return (
    <AOSComp className='container position-relative py-6'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2 className='font--gothic fs-1 m-0'>PORTFOLIOS</h2>
        <div className='portfolios__container w-100'>
          <div className='portfolios__slider'>
            <h3>Projects</h3>
          </div>
          <Planet/>
        </div>
      </div>
    </AOSComp>
  )
}

export default Portfolios;