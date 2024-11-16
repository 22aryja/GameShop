import type { User } from "$lib/types/user";
import { writable } from "svelte/store";

export let user = writable<User>({nickname: "", password: ""});

export const popup = writable<boolean>(false);
export const setPopupVisible = () => {
	popup.set(true);
	setTimeout(() => {
		popup.set(false);
	}, 3000);
};