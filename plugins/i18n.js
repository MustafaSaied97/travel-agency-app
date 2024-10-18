import { createI18n } from "vue-i18n"
import ar from "@/locales/ar.json"
import en from "@/locales/en.json"

export default defineNuxtPlugin(({ vueApp }) => {
    const defaultLocale = "ar"
    const appLocale = useCookie("appLocale")
    if (!appLocale.value) appLocale.value = defaultLocale
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        silentTranslationWarn: true,
        locale: appLocale.value,
        messages: {
            ar,
            en,
        },
    })

    vueApp.use(i18n)
})
