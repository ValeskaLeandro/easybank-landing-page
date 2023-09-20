import { CardContainer } from "./styled"

interface CardArticlesProps {
  img: string,
  author: string
  title: string,
  description: string
}
export default function CardArticles({img, author, title, description}: CardArticlesProps) {
  return(
    <CardContainer>
      <div className="image">
        <img src={img} alt={title} />        
      </div>
      <div className="infos">
        <span>By {author}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </CardContainer>
  )
}