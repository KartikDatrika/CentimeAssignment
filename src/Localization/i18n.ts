import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLanguageLocales, amountInDifferentLanguages, inflowInDifferentLanguages, outflowInDifferentLanguages } from './locales';


const getResources = () => {
    let resources = {} as any;
    let languageLocale = getLanguageLocales();
    Object.keys(amountInDifferentLanguages).forEach((language) => 
        resources[languageLocale[language]] = {
            translation: {
                Amount: amountInDifferentLanguages[language],
                InFlow: inflowInDifferentLanguages[language],
                OutFlow: outflowInDifferentLanguages[language]
            }
        }
    )
    return resources;
};

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: getResources()
    });



export default i18n;
