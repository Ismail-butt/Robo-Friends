import Card from '../components/Card'

import { Robot } from '../App'

type CardListProps = {
  robots: Robot[]
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  )
}

export default CardList
