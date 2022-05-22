import React from "react";
import Link from 'next/link';
import { GlobalContext } from '../_app';

export default function Social() {
  const global:any = React.useContext(GlobalContext);
  const FacebookURL = global.FacebookURL;
  const InstagramURL = global.InstagramURL;
  const LinkedinURL = global.LinkedinURL;
  const GithubURL = global.GithubURL;
  return (
    <div className="social">
      <Link href={FacebookURL}>
        <a target="_blank">
          <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href={LinkedinURL}>
        <a target="_blank">
          <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href={InstagramURL}>
        <a target="_blank">
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
      <Link href={GithubURL}>
        <a target="_blank">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </Link>
    </div>
  );
}
