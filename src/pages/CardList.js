import Card from '../components/Card'

const CardList = ({ robots }) => {
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

// id={robots[0].id} name={robots[0].name} email={robots[0].email}

export default CardList
