import React from "react";
import Link from 'next/link'

export default function Social() {
  return (
    <div className="social">
      <Link href="https://www.facebook.com/vincenttrannz/">
        <a target="_blank">
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/vincenttrannz/">
        <a target="_blank">
          <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href="https://www.instagram.com/vincenttrannz/">
        <a target="_blank">
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href="https://github.com/vincenttrannz">
        <a target="_blank">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
    </div>
  );
}
