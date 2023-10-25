import { getUsers } from "../api/getUsers";

import { createUser } from "./createUser";
import { createElement } from "../utils/utils";

import { User } from "../entity/index";

interface CreateUsersListParams {
	dateForm: HTMLFormElement;
	startDateInput: HTMLInputElement;
	endDateInput: HTMLInputElement;
}

export function createUsersList({ dateForm, startDateInput, endDateInput }: CreateUsersListParams): HTMLDivElement {
	const resultsDiv = createElement('div', { id: 'results', class: 'results' }, []);

	dateForm.addEventListener('submit', async (e: Event) => {
		e.preventDefault();

		try {
			const response: User[] = await getUsers(startDateInput, endDateInput);

			if (response) {
				resultsDiv.innerHTML = '';
				response.forEach((user: User) => resultsDiv.appendChild(createUser(user)));
			}
		} catch (error) {
			resultsDiv.innerHTML = 'No results found';
		}
	});

	return <HTMLDivElement>resultsDiv;
}
