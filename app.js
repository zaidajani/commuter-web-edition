const add = document.getElementById("add");
const headers = document.getElementById("headerid");
let headercount = 1;

add.addEventListener("click", () => {
  const addHeaders = document.getElementById('addHeaders');

  let string = `
  <div class="input-group my-2">
    <input type="text" class="form-control" placeholder="Key" />
    <input type="text" class="form-control" placeholder="Value" />
    <button type="button" class="btn btn-danger deleteheader">Remove</button>
  </div>
  `
  let paramElement = getElementFromString(string);
  addHeaders.appendChild(paramElement);
  let deleteHeader = document.getElementsByClassName('deleteheader');
  for (item of deleteHeader) {
      item.addEventListener('click', (e) => {
          e.target.parentElement.remove();
      })
  }
  headercount++;
});

function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

// const { requestEditor, updateResponseEditor } = setupEditors()

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
