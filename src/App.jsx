import React from 'react';
import './App.css';
import PlanetsTable from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';
import PlanetsHeader from './components/Header';
import FiltersMenu from './components/Filters';
// import ViewFilters from './components/SelectedFilters';
/* import FiltersHandler from './components/HandleFilters'; */

function App() {
  return (
    <PlanetsProvider>
      <PlanetsHeader />
      <FiltersMenu />
      {/* <ViewFilters /> */}
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
