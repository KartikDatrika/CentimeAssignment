import React from 'react';
import { render } from '@testing-library/react';
import GoogleChart from './GoogleChart';
import { ReactGoogleChartProps } from 'react-google-charts/dist/types';

describe('Google Chart Test Suite', () => {
  it('Google Chart is rendering without any error !', () => {
    let chartProps: ReactGoogleChartProps = {
      chartType: "Sankey",
      height: 500,
      data:["Inflow", "Outflow", "Amount"]
    }
    const { container } = render(<GoogleChart {...chartProps} />);
    expect(container).toMatchSnapshot();
  });
})
