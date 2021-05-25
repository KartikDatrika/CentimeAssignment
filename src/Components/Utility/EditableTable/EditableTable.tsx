import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../../../State-Management/configureStore';
import { addRow, deleteRow, editRow } from '../../../State-Management/ExpenditureVisualization/expenditure-action-creators';
import { EG_EXPENDITURE, EG_INCOME } from '../../../State-Management/ExpenditureVisualization/expenditure-action-reducer';

export default function EditableTable(props: {translateColumnNames: boolean}) {

    const data = useSelector((state: IAppState) => state.expenditureData.data);
    const dispatch = useDispatch();

    const { t } = useTranslation();
    
    const onAddClick = () => {
        addRow(dispatch, data);
    }
    const onEditClick = (rowId: number, columnId: number, value: any) => {
        value = isNaN(Number(value)) ? value : Number(value);
        editRow(dispatch, data, rowId, columnId, value as Number);
    }
    const onDeleteClick = (rowId: number) => {
        deleteRow(dispatch, data, rowId);
    }

    return (

        data && data.length > 0 ?
            <div className={"table-container"}>
                <table className="table table-borderless"> 
                    <thead>
                        <tr>
                            {data[0].map((header: any, index: number) =>
                                <td className="columnName" key={index + "td"}> {props.translateColumnNames ? t(header) : header} </td>
                            )}
                            <td><button className="btn btn-success" key={"add"} type="button" onClick={onAddClick}>ADD</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.slice(1,).map((flow: any[], rowId) => <tr>
                            {flow.map((cell: any, columnId) => 
                                <td>
                                    <input className="form-control" 
                                        value={(cell === EG_INCOME ||  cell === EG_EXPENDITURE) ? "" : cell} 
                                        placeholder={(cell === EG_INCOME || cell === EG_EXPENDITURE) ? cell : ""} 
                                        onChange={(e) => onEditClick(rowId + 1, columnId, e.target.value)}>
                                    </input></td>)}
                                <td>
                                <button className="btn btn-danger" type="button" onClick={() => onDeleteClick(rowId + 1)}>DEL</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div> : null
    )
}
