import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
// Import types
import { Homepage } from '../../types/type'

interface TypeTextProp {
  className?: string;
  typetexts: Homepage['attributes']['TypeTexts'];
}

const TypeText: React.FC<TypeTextProp> = ({ typetexts, className }) => {
  const texts = typetexts.map(text => text.Text);  
  const TextContainer = useRef<HTMLSpanElement>(null);  
  useEffect(() => {
    const options = {
      strings: texts,
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      backDelay: 2500,
    };
    new Typed(TextContainer.current!, options)
  }, [])

  return (
    <h1 className={className}><span className="element" ref={TextContainer}></span></h1>
  )
}

export default TypeText;