import type { User } from "$lib/types/user";
import { writable } from "svelte/store";

export let user = writable<User>({nickname: "", password: ""});