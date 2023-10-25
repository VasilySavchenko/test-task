import { User } from "../entity/index";

export async function getUsers(startDate: HTMLInputElement, endDate: HTMLInputElement): Promise<User[]> {
	const apiUrl = `https://fakerapi.it/api/v1/persons?_locale=en_US&start=${startDate.value}&end=${endDate.value}`;

	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		const { data } = await response.json();

		return data;
	} catch (error) {
		throw new Error("Not found!!!");
	}
}
