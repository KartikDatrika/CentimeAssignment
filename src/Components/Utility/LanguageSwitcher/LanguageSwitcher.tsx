import { getLanguageLocales } from '../../../Localization/locales';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    let languageLocales = getLanguageLocales();
    return (
        <div className="mb-5">
            <label className="columnName">Translate to</label>
            <select className="form-control" data-testid={"select"} onChange={(event) => i18n.changeLanguage(event.target.value)}>
                <option data-testid="select-option"key={"en"} value={"en"}>English</option>
                {Object.keys(languageLocales).map(ll => <option data-testid="select-option" key={ll} value={languageLocales[ll]}>{ll}</option>)}
            </select>
        </div>
    )
}
