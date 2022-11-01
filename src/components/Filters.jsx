import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import ColumnOptions from './Options';
import styles from './Filters.module.css';

const FiltersMenu = () => {
  const {
    filtersMenu,
    setfiltersMenu,
  } = useContext(PlanetsContext);
  const [coluna, setColuna] = useState('population');
  const [operador, setOperador] = useState('maior que');
  const [valor, setValor] = useState('0');
  const { options, setOptions } = useContext(PlanetsContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newState = {
      coluna,
      operador,
      valor,
    };

    function searchFilter() {
      return filtersMenu
        .some((filter) => filter.coluna === newState.coluna);
    }

    // const newOptionsArray = [...options];

    function deleteFilterOption(optionToDelete) {
      const remainOptions = options
        .filter((eachOption) => eachOption !== optionToDelete);
      setOptions(remainOptions);
      setColuna(remainOptions[0]);
    }

    if (searchFilter() === false) {
      let newFiltersArray = [...filtersMenu];
      newFiltersArray = [...newFiltersArray, newState];
      console.log(newFiltersArray);
      setfiltersMenu(newFiltersArray);
      deleteFilterOption(coluna);
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={ handleSubmit }
        className="d-flex flex-row justify-content-between align-items-center"
      >
        <div
          className="d-flex flex-row align-items-center mb-3"
        >
          Coluna
          <ColumnOptions setColuna={ setColuna } />
        </div>
        <label
          htmlFor="comparison-filter"
          className="d-flex flex-row align-items-center mb-3 mx-2"
        >
          Operador
          <select
            className="form-select"
            defaultValue="maior que"
            id="comparison-filter"
            onChange={ (e) => setOperador(e.target.value) }
            data-testid="comparison-filter"
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <input
          className="form-control mb-3 mx-2"
          id={ styles.inputText }
          name="input"
          value={ valor }
          placeholder="Search a Planet"
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setValor(e.target.value) }
        />
        <button
          className="btn btn-outline-warning mb-3"
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
    </div>
  );
};

export default FiltersMenu;
