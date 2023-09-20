import { FooterContainer, SocialMedia } from "./styled";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BsPinterest, BsYoutube } from "react-icons/bs";
import MainButton from "../Button";


export default function Footer() {
  return(
    <FooterContainer>
      <div className="container">
      <div className="social">
        <div className="logo">
          <img src="./logo-white.svg" alt="Logo Easybank" />
        </div>
        <SocialMedia>
          <a href="#"><AiFillFacebook /></a>
          <a href="#"><BsYoutube /></a>
          <a href="#"><AiOutlineTwitter /></a>
          <a href="#"><BsPinterest /></a>
          <a href="#"><AiOutlineInstagram /></a>
        </SocialMedia>
      </div>

      <div className="col-1">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div className="col-2">
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="copy">
        <MainButton text="Request Invite" />
        <p>&copy; Valeska Leandro. All Rights Reserved</p>
      </div>
      </div>
    </FooterContainer>
  )
}