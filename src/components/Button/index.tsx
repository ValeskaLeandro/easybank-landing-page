import { Button } from "./styled";

interface ButtonProps {
  text: string;
}

export default function MainButton ({text}: ButtonProps) {
  return(
    <Button>{text}</Button>
  )
}