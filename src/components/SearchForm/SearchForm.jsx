import css from '../styles/movies.module.css';

function SearchForm({ handleFormSubmit, handleInputValue }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input className={css.input} id="input" onChange={handleInputValue} />
      <button className={css.searchBtn}>Search</button>
    </form>
  );
}

export default SearchForm;
