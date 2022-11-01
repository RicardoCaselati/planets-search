import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import mockAPI from './mock'
import PlanetsProvider from '../context/PlanetsProvider';
import userEvent from '@testing-library/user-event';


describe('', () => {
  it('Testa maior que', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI),
    });
    render(<PlanetsProvider><App /></PlanetsProvider>);

    const colunaObj = screen.getByTestId('column-filter')
    const operadorObj = screen.getByTestId('comparison-filter')
    const valorObj = screen.getByTestId('value-filter')
    const filtrarButton = screen.getByTestId('button-filter')

    expect(colunaObj).toBeInTheDocument()
    expect(operadorObj).toBeInTheDocument()
    expect(valorObj).toBeInTheDocument()

    userEvent.selectOptions(colunaObj, 'diameter')
    userEvent.selectOptions(operadorObj, 'maior que')
    userEvent.type(valorObj, '100000')

    userEvent.click(filtrarButton)

    const remainPlanet = await screen.findByText(/Bespin/i)
    expect(remainPlanet).toBeInTheDocument()

  })

  it('Testa menor que', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI),
    });
    render(<PlanetsProvider><App /></PlanetsProvider>);

    const colunaObj = screen.getByTestId('column-filter')
    const operadorObj = screen.getByTestId('comparison-filter')
    const valorObj = screen.getByTestId('value-filter')
    const filtrarButton = screen.getByTestId('button-filter')

    expect(colunaObj).toBeInTheDocument()
    expect(operadorObj).toBeInTheDocument()
    expect(valorObj).toBeInTheDocument()

    userEvent.selectOptions(colunaObj, 'population')
    userEvent.selectOptions(operadorObj, 'menor que')
    userEvent.type(valorObj, '1001')

    userEvent.click(filtrarButton)

    const remainPlanet = await screen.findByText(/Yavin IV/i)
    expect(remainPlanet).toBeInTheDocument()

    
  })

  it('Testa igual a', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI),
    });
    render(<PlanetsProvider><App /></PlanetsProvider>);

    const colunaObj = screen.getByTestId('column-filter')
    const operadorObj = screen.getByTestId('comparison-filter')
    const valorObj = screen.getByTestId('value-filter')
    const filtrarButton = screen.getByTestId('button-filter')

    expect(colunaObj).toBeInTheDocument()
    expect(operadorObj).toBeInTheDocument()
    expect(valorObj).toBeInTheDocument()

    userEvent.selectOptions(colunaObj, 'surface_water')
    userEvent.selectOptions(operadorObj, 'igual a')
    userEvent.type(valorObj, '1')

    userEvent.click(filtrarButton)

    const remainPlanet = await screen.findByText(/Tatooine/i)
    expect(remainPlanet).toBeInTheDocument()
  })
  
  it('Testa igual a', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockAPI),
    });
    render(<PlanetsProvider><App /></PlanetsProvider>);

    const inputObj = screen.getByTestId('name-filter')

    expect(inputObj).toBeInTheDocument()

    userEvent.type(inputObj, 'Alderaan')

    const remainPlanet = await screen.findByText(/Alderaan/i)
    expect(remainPlanet).toBeInTheDocument()
  })

})
