import React from 'react'

type Props = {
  AOSAnimation?: string;
  AOSDelay?: string;
  AOSOffset?: string;
  AOSDuration?: string;
  AOSRepeat?: boolean;
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

const AOSComp = ({ AOSAnimation, AOSDelay, AOSOffset, AOSDuration, AOSRepeat, className, children }: Props) => {
  return (
    <div
      className={ className }
      data-aos={ AOSAnimation }
      data-aos-offset={ AOSOffset }
      data-aos-delay={ AOSDelay }
      data-aos-duration={ AOSDuration }
      data-aos-once={ String(!AOSRepeat) }
    >
      { children }
    </div>
  )
}

export default AOSComp