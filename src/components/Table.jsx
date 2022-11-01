import React, { useEffect, useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const PlanetsTable = () => {
  const {
    planets, filterByName, filtersMenu } = useContext(PlanetsContext);
  const inputedPlanet = filterByName.name;

  useEffect(() => {
    // console.log('teste');
  }, [filtersMenu]);

  function setSymbols(coluna, operador, valor) {
    // if (!valor) return true;
    if (coluna === 'unknown') return false;
    switch (operador) {
    case 'maior que':
      return Number(coluna) > Number(valor);
    case 'menor que':
      return Number(coluna) < Number(valor);
    case 'igual a':
      return Number(coluna) === Number(valor);
    default:
      return true;
    }
  }

  function analysisData() {
    let newPlanets = [...planets];

    newPlanets = newPlanets.filter((p) => p.name.includes(inputedPlanet));

    filtersMenu.forEach((eachFilter) => {
      newPlanets = newPlanets.filter(
        (p) => setSymbols(p[eachFilter.coluna],
          eachFilter.operador, eachFilter.valor),
      );
    });
    return newPlanets;
  }

  const filteredPlanetsToRender = analysisData();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface_water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {/* { combinedFilters().map((planet) => { */}
          { filteredPlanetsToRender.map((planet) => {
            const {
              name,
              rotation_period: rotation,
              orbital_period: orbital,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surface,
              population,
              films,
              created,
              edited,
              url,

            } = planet;
            return (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotation}</td>
                <td>{orbital}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surface}</td>
                <td>{population}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
                <td>{url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlanetsTable;
