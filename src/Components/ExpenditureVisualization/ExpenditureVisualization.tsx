import { useEffect } from 'react'
import { ReactGoogleChartProps } from 'react-google-charts/dist/types';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../../State-Management/configureStore';
import { fetchDataFromServer } from '../../State-Management/ExpenditureVisualization/expenditure-action-creators';
import GoogleChart from '../Charts/GoogleChart';
import LanguageSwitcher from '../Utility/LanguageSwitcher/LanguageSwitcher';
import EditableTable from '../Utility/EditableTable/EditableTable';

export default function ExpenditureVisualization() {

    const data = useSelector((state: IAppState) => state.expenditureData.data);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchDataFromServer(dispatch, 'http://localhost:3001/flows');
    }, [])

    let chartProps: ReactGoogleChartProps = {
        chartType: "Sankey",
        height: 500,
        data
    }

    const chart = data.length > 0 ? <GoogleChart {...chartProps} /> : null;

    return (
        <div className="container">
            <LanguageSwitcher/>
            <EditableTable translateColumnNames={true}/>
            {chart}
        </div>
    )
}
