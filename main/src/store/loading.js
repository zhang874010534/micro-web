import {ref} from 'vue'
let loadingStatus = ref(false )

export const changeLoading = type => loadingStatus.value = type
