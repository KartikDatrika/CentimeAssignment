import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import EditableTable from './EditableTable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addRow, deleteRow, editRow } from '../../../State-Management/ExpenditureVisualization/expenditure-action-creators';
jest.mock('../../../State-Management/ExpenditureVisualization/expenditure-action-creators', () => ({
    addRow: jest.fn(),
    deleteRow: jest.fn(),
    editRow: jest.fn()
}));

describe('EditableTable Test Suite', () => {
    let mockStore = {} as any;
    let store: any;
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
        store = mockStore({ expenditureData: { data: response.json } });
    })

    it('Editable Table is rendering without error', () => {
        const { container } = render(<Provider store={store}><EditableTable translateColumnNames={false} /></Provider>);
        expect(container).toMatchSnapshot();
    });


    it('Editable Table is rendering with one add and 2 delete buttons.', () => {
        const {getAllByRole } = render(<Provider store={store}><EditableTable translateColumnNames={false} /></Provider>);
        const buttons = getAllByRole("button");
        const addButton = buttons[0];
        const delButton1 = buttons[1];
        const delButton2 = buttons[2];
        expect(addButton.className).toEqual("btn btn-success");
        expect(delButton1.className).toEqual("btn btn-danger");
        expect(delButton2.className).toEqual("btn btn-danger");
    });

    it('on add/delete buttons click expected action creators are triggered.', () => {
        const { getAllByRole } = render(<Provider store={store}><EditableTable translateColumnNames={false} /></Provider>);
        const buttons = getAllByRole("button");
        const addButton = buttons[0];
        addButton.click();
        expect(addRow).toBeCalled();
        const delButton = buttons[1];
        delButton.click();
        expect(deleteRow).toBeCalled();
    });

    it('on changing table cell and edit action creator is triggered.', () => {
        const { getByDisplayValue } = render(<Provider store={store}><EditableTable translateColumnNames={false} /></Provider>);
        const inputCell = getByDisplayValue("Stocks");
        fireEvent.change(inputCell, {target: {value: "1"}});
        expect(editRow).toBeCalled();
    });
})

