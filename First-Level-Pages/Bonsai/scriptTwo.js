const toggleElement = document.getElementById('toggle');
const workflowElement = document.getElementById('workflow-price');
const workflowPlusElement = document.getElementById('workflow-plus-price');

const priceTagElement = document.getElementById('normal-price-tag');
const plusPriceTagElement = document.getElementById('plus-price-tag');
toggleElement.checked = true;

toggleElement.addEventListener('change', e => {
  if (toggleElement.checked == true) {
    workflowElement.innerHTML = '203';
    workflowPlusElement.innerHTML = '301';
    priceTagElement.innerHTML = `$ <span>${workflowElement.innerHTML}</span> /YEAR`;
    plusPriceTagElement.innerHTML = `$ <span>${workflowPlusElement.innerHTML}</span> /YEAR`;
    toggleElement.checked = false;
  } else {
    workflowElement.innerHTML = '19';
    workflowPlusElement.innerHTML = '29';
    priceTagElement.innerHTML = `$ <span>${workflowElement.innerHTML}</span> /MONTH`;
    plusPriceTagElement.innerHTML = `$ <span>${workflowPlusElement.innerHTML}</span> /MONTH`;
    console.log('lol');
    toggleElement.checked = true;
  }
});
