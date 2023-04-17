const toggleElement = document.getElementById('toggle');
const workflowElement = document.getElementById('workflow-price')
const workflowPlusElement = document.getElementById('workflow-plus-price')
toggleElement.checked = true;
toggleElement.addEventListener("change", (e) =>
{
if(toggleElement.checked == true){
workflowElement.innerHTML ="203";
workflowPlusElement.innerHTML="301";
toggleElement.checked = false;
}
else{
    workflowElement.innerHTML ="19";
    workflowPlusElement.innerHTML="29";
    console.log('lol')
    toggleElement.checked = true;
}
})