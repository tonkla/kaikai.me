import { writable } from 'svelte/store'

export const drawerStore = writable({ init: false, show: false })
export const userStore = writable(null)
