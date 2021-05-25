export const GET_EXPENDITURE_DATA = "GET_EXPENDITURE_DATA";

export const ADD_FLOW = "ADD_FLOW";

export const DELETE_FLOW = "DELETE_FLOW";

export const EDIT_FLOW = "EDIT_FLOW";

export interface IExpenditureAction {
    type: typeof GET_EXPENDITURE_DATA | typeof ADD_FLOW | typeof DELETE_FLOW | typeof EDIT_FLOW,
    payload: any,
}
