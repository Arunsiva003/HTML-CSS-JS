const textArea = document.querySelector("textarea"),
fileName = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener("click", () =>{
    const blob = new Blob([textArea.value],{type: selectMenu.value})
    const fileurl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download=fileName.value;
    link.href=fileurl;
    link.click();


});