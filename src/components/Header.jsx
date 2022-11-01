import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import styles from './Header.module.css';

const PlanetsHeader = () => {
  const { setFilter } = useContext(PlanetsContext);

  return (
    <div id={ styles.container }>
      <img
        alt="Star Wars logotype"
        src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
        className="align-self-center pt-5 pb-5"
        id={ styles.image }
      />
      <div className="input-group flex-nowrap pb-4" id={ styles.searchBarContainer }>
        <input
          className="form-control"
          id={ styles.searchBar }
          name="input"
          type="text"
          placeholder="Search a planet"
          aria-describedby="addon-wrapping"
          data-testid="name-filter"
          onChange={ (e) => setFilter({ name: e.target.value }) }
        />
      </div>
    </div>
  );
};

export default PlanetsHeader;
