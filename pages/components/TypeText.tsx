import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function TypeText() {
  const Text = useRef<HTMLSpanElement>(null);  
  useEffect(() => {
    const options = {
      strings: [
        "Hello, I'm Vincent",
        "I'm a Web Developer",
        "I love Photography",
        "and traveling :)",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      backDelay: 2500,
    };
    new Typed(Text.current!, options)
  }, [])

  return (
    <h1><span className="element" ref={Text}></span></h1>
  )
}
