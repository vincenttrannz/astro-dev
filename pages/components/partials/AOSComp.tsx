import React from 'react'

type Props = {
  AOSAnimation?: string;
  AOSDelay?: string;
  AOSOffset?: string;
  AOSDuration?: string;
  AOSRepeat?: boolean;
  className?: string;
  id?: string;
  children: JSX.Element[] | JSX.Element;
}

const AOSComp = ({ AOSAnimation, AOSDelay, AOSOffset, AOSDuration, AOSRepeat, className, id, children }: Props) => {
  return (
    <div
      id={id}
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