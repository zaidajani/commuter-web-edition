const add = document.getElementById("add");
const headers = document.getElementById("headerid");
let headercount = 1;
const send = document.getElementById("send");
const editorvar = document.getElementById("editor");

add.addEventListener("click", () => {
  const addHeaders = document.getElementById("addHeaders");

  let string = `
  <div class="input-group my-2">
    <input type="text" class="form-control" placeholder="Key" id="parameterKey${headercount + 1}"/>
    <input type="text" class="form-control" placeholder="Value" id="parameterValue${headercount + 1}"/>
    <button type="button" class="btn btn-danger deleteheader">
      Remove
    </button>
  </div>
  `;
  let paramElement = getElementFromString(string);
  addHeaders.appendChild(paramElement);
  let deleteHeader = document.getElementsByClassName("deleteheader");
  for (item of deleteHeader) {
    item.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  }
  headercount++;
});

function getElementFromString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "application/json",
  lineNumbers: true,
  autoRefresh: true,
  autoCloseBrackets: true,
});

editor.setSize("100%", "250px");

editor.setValue("{\n\t\n}");
setTimeout(() => {
  editor.refresh();
}, 1);

send.addEventListener("click", () => {
  console.log(editor.getValue());
  for (let i = 0; i < headercount; i++) {
    console.log(document.getElementById("parameterKey" + headercount).value + ' : ' + document.getElementById("parameterValue" + headercount).value);
  }
});

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
