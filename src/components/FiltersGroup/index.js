import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onChangeCategory,
    onChangeRating,
    onClickClear,
    onChangeTitleSearch,
  } = props

  const onClickClearFilters = () => {
    onClickClear()
  }

  const onChangeTitle = event => {
    // console.log(event.key)
    if (event.key === 'Enter') {
      onChangeTitleSearch(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-con">
        <input
          type="search"
          onKeyDown={onChangeTitle}
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>
      <h1 className="category-name">Category</h1>
      <ul className="category-ul-con">
        {categoryOptions.map(each => {
          const onClickCategory = () => {
            onChangeCategory(each.categoryId)
          }

          return (
            <li key={each.categoryId} className="category-li-con">
              <button
                type="button"
                onClick={onClickCategory}
                className="category-btns"
              >
                <p className="category-text">{each.name}</p>
              </button>
            </li>
          )
        })}
      </ul>

      <h1 className="rating-name">Rating</h1>
      <ul className="ratings-ul-con">
        {ratingsList.map(each => {
          const onClickRating = () => {
            onChangeRating(each.ratingId)
          }
          return (
            <li key={each.ratingId} className="ratings-li-con">
              <button className="img-btn" onClick={onClickRating} type="button">
                <img
                  src={each.imageUrl}
                  className="ratings-imgs"
                  alt={`rating ${each.ratingId}`}
                />
              </button>
              <p>& up</p>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        onClick={onClickClearFilters}
        className="clear-filters"
      >
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
