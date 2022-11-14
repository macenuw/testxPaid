const toggleActiveOnClick = (selector, activeClass) => {
  const element = document.querySelector(selector);
  element.addEventListener('click', () => {
    element.classList.toggle(activeClass);
  })
}
export default toggleActiveOnClick;