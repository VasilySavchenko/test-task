import { createElement } from "../utils/utils";

export function createForm() {
	const currentDate = new Date().toISOString().split('T')[0];

	return createElement("div",{class: "container"},[createElement("h1",{class: "title"},["Date of Birthday"]),createElement('form', {id: 'dateForm', class: 'form'}, [
		createElement('label', {for: 'startDate', class: 'form-label'}, ['Start Date:']),
		createElement('input', {type: 'date', id: 'startDate', class: 'form-input', required: true , max: currentDate}),
		createElement('label', {for: 'endDate', class: 'form-label'}, ['End Date:']),
		createElement('input', {type: 'date', id: 'endDate', class: 'form-input', required: true, max: currentDate}),
		createElement('button', {type: 'submit', class: 'form-button'}, ['Submit']),])
	]);
}
