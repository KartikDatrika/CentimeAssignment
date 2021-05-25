
export const amountInDifferentLanguages: any =
    { "Afrikaans": "Bedrag", "Bulgarian": "сума", "Croatian": "iznos", "Czech": "množství", "Danish": "beløb", "Dutch": "aantal", "French": "quantité", "German": "Menge", "Greek": "ποσό", "Hindi": "कुल धनराशि", "Japanese": "量", "Korean": "분량", "Russian": "количество", "Serbian": "Iznos", "Slovak": "množstvo", "Spanish": "importe", "Swedish": "belopp", "Thai": "ปริมาณ", "Turkish": "miktar", "Vietnamese": "lượng" }
export const inflowInDifferentLanguages: any =
    { "Afrikaans": "Invloei", "Bulgarian": "Приток", "Croatian": "uticanje", "Czech": "přítok", "Danish": "Tilstrømning", "Dutch": "Instroom", "French": "Inflow", "German": "Inflow", "Greek": "εισροή", "Hindi": "प्रवाह", "Japanese": "流入", "Korean": "유입", "Russian": "приток", "Serbian": "Priliv", "Slovak": "prítok", "Spanish": "afluencia", "Swedish": "tillflöde", "Thai": "กระแส", "Turkish": "Girişi", "Vietnamese": "Inflow" }
export const outflowInDifferentLanguages: any =
    { "Afrikaans": "Uitvloei", "Bulgarian": "изтичане", "Croatian": "OTJECANJE", "Czech": "odtok", "Danish": "Udstrømning", "Dutch": "voortvloeien", "French": "sortie", "German": "Abfluss", "Greek": "εκροή", "Hindi": "बहिर्वाह", "Japanese": "流出", "Korean": "유출", "Russian": "истечение", "Serbian": "Odliv", "Slovak": "Odtok", "Spanish": "flujo", "Swedish": "utflöde", "Thai": "กระแส", "Turkish": "Çıkış", "Vietnamese": "Dòng chảy ra" }

export const getLanguageLocales = () => {
    var langs = require('langs');
    const languages: any[] = langs.all();
    let languageLocale = {} as any;
    languages.forEach((l: any) => {
        let languageName = l.name;
        if (languageName in amountInDifferentLanguages) languageLocale[languageName] = l[1]
    });
    return languageLocale;
}



