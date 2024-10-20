// src/composables/useScroll.js

import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScroll() {
    const isScrolled = ref(false);

    const handleScroll = () => {
        isScrolled.value = window.scrollY > 0; // Set to true if scrolled down
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });

    return {
        isScrolled,
    };
}
