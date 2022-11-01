import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function ColumnOptions(props) {
  const { options } = useContext(PlanetsContext);
  const { setColuna } = props;

  return (
    <div className="input-group">
      <select
        className="form-select"
        name="column-filter"
        defaultValue="population"
        id="column"
        onChange={ (e) => setColuna(e.target.value) }
        data-testid="column-filter"
      >
        {options.map(
          (eachOption, index) => (
            <option key={ index } value={ eachOption }>{ eachOption }</option>
          ),
        )}
      </select>
    </div>
  );
}

ColumnOptions.propTypes = {
  setColuna: PropTypes.string,
}.isRequired;

export default ColumnOptions;

/* Trocar render abaixo por map de nova array de opcoes *
<option value="population">population</option>
<option value="orbital_period">orbital_period</option>
<option value="diameter">diameter</option>
<option value="rotation_period">rotation_period</option>
<option value="surface_water">surface_water</option> */
