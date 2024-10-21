import "vue-toast-notification/dist/theme-sugar.css"
import { useToast } from "vue-toast-notification"
export default defineNuxtPlugin((nuxtApp) => {
    const toast = useToast({ position: "bottom-right" })
    // return { provide: { toast } }
    nuxtApp.provide("toast", toast)
})
