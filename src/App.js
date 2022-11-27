import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CardList from './pages/CardList'
import Scroll from './components/Scroll'
import Spinner from './components/Spinner'
import ErrorBoundry from './components/ErrorBoundry'

const App = () => {
  const [robots, setRobots] = useState([])
  const [filterRobots, setFilterRobots] = useState([])
  const [searchfeild, setSearchfeild] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRobots = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      const users = await res.data
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

  const onChange = (e) => {
    setSearchfeild(e.target.value)
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='tc'>
      <Header title='RoboFriends' searchChange={onChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filterRobots} />
        </ErrorBoundry>
      </Scroll>
      {/* <CardList robots={robots} searchfeild={searchfeild} /> */}
    </div>
  )
}

export default App
