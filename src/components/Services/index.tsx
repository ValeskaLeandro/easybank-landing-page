import { Description, Title } from "../../styles/global";
import CardService from "../CardService";
import { CardsContainer, ServicesContainer } from "./styled";

export default function Services() {
  return(
    <ServicesContainer>
        <div className="container">
      <div className="titles">
        <Title>Why choose Easybank?</Title>
        <Description>
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
        </Description>
      </div>
      <CardsContainer>
          <CardService 
          icon="./icons/icon-online.svg" 
          title="Online Banking"
          description=" Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world." 
        />
        <CardService 
          icon="./icons/icon-budgeting.svg" 
          title="Simple Budgeting"
          description="See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits." 
        />
        <CardService 
          icon="./icons/icon-onboarding.svg" 
          title="Fast Onboarding"
          description="We don’t do branches. Open your account in minutes online and start taking control of your finances right away." 
        />
        <CardService 
          icon="./icons/icon-api.svg" 
          title="Open API"
          description="  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier." 
        />
      </CardsContainer>
        </div>
    </ServicesContainer>
  )
}