import React from 'react'
import './footer.css';
import LinkedinOutlined from '@ant-design/icons';
import { StarOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="Footer">
        <span className="name">
            Inshorts Clone Made by - <a className = "linkedin" href="https://www.linkedin.com/in/jayant-verma-13062001/">Jayant Verma</a>
        </span>
        <hr style={{width : '95%'}}></hr>
        <div className="icon-wrapper">
           <a className = "linkedin" href="https://www.linkedin.com/in/jayant-verma-13062001/"><i className="fab fa-linkedin fa-2x"></i></a>
           <a href="https://www.instagram.com/jayantverma.js/" className="instagram" > <i className="fab fa-instagram-square fa-2x"></i></a>
           <a href="https://github.com/iamvermajayant" className="github"><i className="fab fa-github-square fa-2x"></i></a>
        </div>
    </div>
  )
}

export default Footer