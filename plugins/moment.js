import moment from 'moment'


export default defineNuxtPlugin((nuxtApp) => {
  const defaultLocale = 'en' // Default locale
  const appLocale = useCookie('appLocale')
  if (!appLocale.value) {
    appLocale.value = defaultLocale
  }

  // Set moment locale based on the cookie
  moment.locale(appLocale.value)

  // Inject moment globally so you can use this.$moment in components
  nuxtApp.provide('moment', moment)
})
