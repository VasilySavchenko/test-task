import { createMainSection } from './components/creatMainSection';

export const root = document.getElementById('root')!;

document.addEventListener('DOMContentLoaded', () => {

  const mainPage = createMainSection();

  mainPage.render();
});
