import { ref, computed } from 'vue'  
// 13.7K (gzipped: 5.5K)

export const collapsed = ref(false)
export const toggleSidebar = () => (collapsed.value = !collapsed.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebar_width = computed(
    () => `${collapsed.value? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
