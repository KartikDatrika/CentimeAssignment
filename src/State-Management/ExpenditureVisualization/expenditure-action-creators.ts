import { ADD_FLOW, DELETE_FLOW, EDIT_FLOW, GET_EXPENDITURE_DATA } from "./expenditure-action-types"

export const fetchDataFromServer = (dispatch: Function, url:string) => {
        try {
            fetch(url)
                .then((response) => response.json())
                    .then(data =>
                        dispatch({
                            type: GET_EXPENDITURE_DATA,
                            payload: {
                                data
                            }
                        })
                    )
        } catch (error) {
            console.log(error);
        }
}

export const addRow = (dispatch: Function, data:any[]) => {

    dispatch({
        type: ADD_FLOW,
        payload: {
            data
        }
    })
}

export const editRow = (dispatch: Function, data:any[], rowId: number, columnId: number, value:any) => {

    dispatch({
        type: EDIT_FLOW,
        payload: {
            data,
            x: rowId,
            y: columnId,
            value
        }
    })
}


export const deleteRow = (dispatch: Function, data:any[], rowId: number) => {

    dispatch({
        type: DELETE_FLOW,
        payload: {
            data,
            x: rowId
        }
    })
}

