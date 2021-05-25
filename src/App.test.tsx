import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import './Localization/i18n';

describe('App Test Suite', () => {
  it('App is rendering without any error !', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('App is rendering with Centime logo !', () => {
    const { getAllByAltText } = render(<App />);
    expect(getAllByAltText('logo')).toBeDefined();
  });
})
