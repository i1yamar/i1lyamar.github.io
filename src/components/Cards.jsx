import Card from './Card'
import products from '../data.js'

const Cards = () => {
  return products.map((product) => (
    <Card
      id={product.id}
      uptitle={product.uptitle}
      name={product.name}
      taste={product.taste}
      weight={product.weight}
      servings={product.servings}
      toys={product.toys}
      note={product.note}
      description={product.description}
      descDisabled={product.descDisabled}
      disabled={product.disabled}
      key={product.id}
    />
  ))
}

export default Cards
