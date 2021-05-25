import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import ExpenditureVisualization from './ExpenditureVisualization';
import { Provider } from 'react-redux';
import configureStore from '../../State-Management/configureStore';

describe('ExpenditureVisualization Test Suite', () => {
  let mockStore = {} as any;
  let response: Response = {
    json: [
      [
        "InFlow",
        "OutFlow",
        "Amount"
      ],
      [
        "Stocks",
        "Savings",
        25
      ],
      [
        "Gold",
        "Savings",
        10
      ]]
  } as any;
  beforeAll(() => {
    mockStore = configureStore();
    jest.spyOn(window, 'fetch');
  })

  it('ExpenditureVisualization is rendering with editable table having 3 rows !', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => (response.json),
    })
    const { container, getAllByRole } = render(<Provider store={mockStore}><ExpenditureVisualization /></Provider>);
    await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));
    expect(container).toMatchSnapshot();
    const b = getAllByRole("button");
    expect(b).toHaveLength(3);
  });

  it('on Add row gets added , on del row gets deleted and can edit the cell !', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => (response.json),
    })
    const { getByDisplayValue, getAllByRole } = render(<Provider store={mockStore}><ExpenditureVisualization /></Provider>);
    await waitFor(() => expect(window.fetch).toHaveBeenCalledTimes(1));
    const rows = getAllByRole("button");
    const add = rows[0];
    const del = rows[1];
    add.click()
    expect(getAllByRole("button")).toHaveLength(4);
    del.click()
    expect(getAllByRole("button")).toHaveLength(3);
    const inputCell = getByDisplayValue("Stocks");
    expect(fireEvent.change(inputCell, { target: { value: "stocks" } }));
  });

  it('on api fail app renders without crash', () => {
    const { container} = render(<Provider store={mockStore}><ExpenditureVisualization /></Provider>);
    expect(container).toMatchSnapshot();
  })
})
