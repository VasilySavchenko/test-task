type FormData = {
	dateForm: HTMLFormElement;
	startDateInput: HTMLInputElement;
	endDateInput: HTMLInputElement;
};

export function getFormData(): FormData {
	return {
		dateForm: document.getElementById('dateForm') as HTMLFormElement,
		startDateInput: document.getElementById('startDate') as HTMLInputElement,
		endDateInput: document.getElementById('endDate') as HTMLInputElement,
	};
}
