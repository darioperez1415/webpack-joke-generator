const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="joke-container"></div>
    <div id="button-container"></div>
    `;
};

export default domBuilder;
