import SearchBox from "./SearchBox"

const Header = ({title, searchChange}) => {
  return (
    <header>
        <h1 className="f1">{title}</h1>
        <SearchBox searchChange={searchChange} />
    </header>
  )
}

export default Header