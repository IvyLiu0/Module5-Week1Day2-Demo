//functional example and adding Events
function clickbutton () {
  alert ("CLicked!!!!!!!");
}
const myelement = (
  <button onClick={clickbutton}>Click the button!</button>
);
  
  
  ReactDOM.render(myelement, document.getElementById('root'));