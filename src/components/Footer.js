import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);

  return (
    <footer className='footer wrapper' ref={footerRef}>
      <h1 ref={footerHeadlineRef}>Karate Dojo</h1>
      <p>© {new Date().getFullYear()} Karate Dojo | All rights reserved.</p>
    </footer>
  );
};

export default Footer;
