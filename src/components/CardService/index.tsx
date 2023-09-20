import { CardContainer } from "./styled"

interface CardServiceProps {
  icon: string,
  title: string,
  description: string
}
export default function CardService({icon, title, description}: CardServiceProps) {
  return(
    <CardContainer>
      <div className="image">
        <img src={icon} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </CardContainer>
  )
}