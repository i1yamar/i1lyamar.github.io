import { useState } from 'react'
import Cat from '../images/cat.png'

const Card = ({
  uptitle,
  name,
  taste,
  weight,
  servings,
  toys,
  note,
  description,
  descDisabled,
  disabled,
}) => {
  const [selected, setSelected] = useState(false)
  const [hoverSelected, setHoverSelected] = useState(false)
  const selectedHandler = () => {
    if (disabled) {
      return false
    }
    selected ? setSelected(false) : setSelected(true)
  }
  const mouseEnterHandler = () => {
    if (disabled) {
      return false
    }
    if (selected) {
      setHoverSelected(true)
    }
  }
  const mouseLeaveHandler = () => {
    if (selected) {
      setHoverSelected(false)
    } else if (!selected) {
      setHoverSelected(false)
    }
  }
  return (
    <div
      className={`app-col ${selected ? 'selected' : ''} ${
        disabled ? 'disabled' : ''
      }`}
    >
      <div
        className="app-card"
        onClick={selectedHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        {selected && hoverSelected ? (
          <p className="app-card__uptitle accent">Котэ не одобряет?</p>
        ) : (
          <p className="app-card__uptitle">{uptitle}</p>
        )}
        <h2 className="app-card__title">
          {name}
          <span>{taste}</span>
        </h2>
        <ul className="app-card__pack">
          <li>{servings}</li>
          <li>{toys}</li>
          {note != null ? <li>{note}</li> : false}
        </ul>
        <img className="app-card__img" src={Cat} alt="Котик" />
        <p className="app-card__weight">
          <span>{weight}</span> кг
        </p>
      </div>
      {disabled ? (
        <p className="app-card__status yellow">{descDisabled}</p>
      ) : selected ? (
        <p className="app-card__status">{description}</p>
      ) : (
        <p className="app-card__status">
          Чего сидишь? Порадуй котэ,{' '}
          <a onClick={selectedHandler} href="#!">
            купи.
          </a>
        </p>
      )}
    </div>
  )
}

export default Card
