import { createForm } from "./createForm";
import { createUsersList } from "./createUsersList";
import { getFormData } from "../helpers/getFormData";

import { root } from "../index";

export function createMainSection() {

  return {
    render() {
      root.appendChild(createForm())
      root.appendChild(createUsersList(getFormData()))
    },
    remove() {
      root.innerHTML = '';
    },
  };
}
