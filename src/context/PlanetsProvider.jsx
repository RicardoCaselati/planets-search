import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanets from '../services/StarWarsApi';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]); // cria o "state" e funcao para manipula-lo
  const [filterByName, setFilter] = useState({ name: '' });
  const [filtersMenu, setfiltersMenu] = useState([]);
  const [deleteColumn, setDeleteColumn] = useState('');
  const optionToRender = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [options, setOptions] = useState(optionToRender);

  const fetchPlanetsFunction = async () => {
    const recievedPlanets = await fetchPlanets();
    recievedPlanets.forEach((planet) => delete (planet.residents));
    setPlanets(recievedPlanets);
  };

  useEffect(() => {
    fetchPlanetsFunction();
  }, []);

  const store = {
    planets,
    filterByName,
    setFilter,
    filtersMenu,
    setfiltersMenu,
    deleteColumn,
    setDeleteColumn,
    options,
    setOptions,
  };

  return (
    <PlanetsContext.Provider value={ store }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default PlanetsProvider;
