import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';
import "./../../../Localization/i18n";

describe('Language Switcher Test Suite', () => {
    it('Language Switcher is rendering without any error !', () => {
        const { container } = render(<LanguageSwitcher/>);
        expect(container).toMatchSnapshot();
    });
    it('Options are available to change !', () => {
        const { getByTestId, getAllByTestId} = render(<LanguageSwitcher />);
        fireEvent.change(getByTestId("select"), {target: {value: 5}});
        let options = getAllByTestId("select-option");
        expect(options).toBeDefined();
    });
})
