function changeButtonText() {
    const paragraph = document.getElementById("textInput");
    const button = document.getElementById("changeButton");
    button.innerHTML = paragraph.innerHTML;
  }