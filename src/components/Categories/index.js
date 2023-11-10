import 'index.css'

const Categories = prop => {
  const {categoriesList} = prop
  const {name} = categoriesList

  return (
    <li>
      <div className="list-container">
        <p className="list-name">{name}</p>
      </div>
    </li>
  )
}
export default Categories
