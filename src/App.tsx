import './App.css'
import { useEffect, useState, ChangeEvent } from 'react'
import SearchBox from './components/SearchBox'
import CardList from './pages/CardList'
import Spinner from './components/Spinner'
import ErrorBoundry from './components/ErrorBoundry'

import { getData } from './utils/data.utils'

export type Robot = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [robots, setRobots] = useState<Robot[]>([])
  const [filterRobots, setFilterRobots] = useState<Robot[]>([])
  const [searchfeild, setSearchfeild] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRobots = async () => {
      const users = await getData<Robot[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setRobots(users)
      setLoading(false)
    }

    getRobots()
  }, [])

  useEffect(() => {
    const newfilterdRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchfeild.toLowerCase())
    )
    setFilterRobots(newfilterdRobots)
  }, [robots, searchfeild])

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchfeild(e.target.value)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onChange} />
      <div style={{ borderTop: '3px solid black' }}>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </div>
    </div>
  )
}

export default App
