import { createElement } from "../utils/utils";
import { CONTACT_ICONS } from "../image/index";
import { User } from "../entity/index";

export function createUser(user: User) {

	return createElement('div', { class: 'user' }, [
		createElement('h2', {}, [`${user.firstname} ${user.lastname}`]),
		createElement('p', {}, [
			createElement("img", { src: CONTACT_ICONS.email, class: 'user-icon', loading: 'lazy'  }),
			`Email: ${user.email}`
		]),
		createElement('p', {}, [
			createElement("img", { src: CONTACT_ICONS.phone, class: 'user-icon' , loading: 'lazy'  }),
			`Phone: ${user.phone}`
		]),
		createElement('p', {}, [
			createElement("img", { src: CONTACT_ICONS.birthday, class: 'user-icon' , loading: 'lazy'  }),
			`Birthday: ${user.birthday}`
		]),
		createElement('p', {}, [
			createElement("img", { src: `${CONTACT_ICONS[user.gender]}`, class: 'user-icon' , loading: 'lazy'  }),
			`Gender: ${user.gender}`
		]),
		createElement('p', {}, [
			createElement("img", { src: CONTACT_ICONS.site, class: 'user-icon' , loading: 'lazy'  }),
			`Website: ${user.site}`
		]),
	]);
}
