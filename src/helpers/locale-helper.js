import { store } from "../store";
import { setLang } from "../store/slices/locale-slice";

let langFile = (await import("./langs/en.json")).default;

export const langs = [
	{ code: "en", name: "English", countryCode: "gb" },
	{ code: "es", name: "Español", countryCode: "es" },
	{ code: "fr", name: "Français", countryCode: "fr" },
	{ code: "de", name: "Deutsch", countryCode: "de" },
	{ code: "it", name: "Italiano", countryCode: "it" },
	{ code: "pt", name: "Português", countryCode: "pt" },
	{ code: "tr", name: "Türkçe", countryCode: "tr" },
];

export const setCurrentLang = async (lang) => {
	langFile = (await import(`./langs/${lang.code}.json`)).default;

	store.dispatch(setLang(lang));

	console.log(langFile.about);
};

export const $t = (key) => {
    return langFile[key]
};
