import { ReactGoogleChartProps } from 'react-google-charts/dist/types';
import Chart from 'react-google-charts';

export default function GoogleChart(props: ReactGoogleChartProps) {
    
    return (
        <div className="mt-5 mb-5">
            <Chart
                {...props}
            ></Chart>
        </div>
    )
}
