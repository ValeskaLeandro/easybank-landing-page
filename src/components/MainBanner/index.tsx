import { Description } from "../../styles/global";
import MainButton from "../Button";
import { H1, ImageContainer, Section } from "./styled";

export default function MainBanner() {
  return(
    <>
      <Section>
        <div className="container">
          <div className="left-content">
            <div className="content">
              <H1>Next generation digital banking</H1>
              <Description>  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Description>
              <MainButton text="Request Invite"/>
            </div>
          </div>
        </div>
        <ImageContainer>
            <img src="./image-mockups.png" alt="Smartphones" />
        </ImageContainer>
      </Section>
      
    </>
  )
}