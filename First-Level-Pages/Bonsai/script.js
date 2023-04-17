let dropdownQuestionElementOne = document.getElementsByClassName('dropdown-question')[0];
let dropdownAnswerElementOne = document.getElementsByClassName('dropdown-answer')[0];
let dropdownQuestionElementTwo = document.getElementsByClassName('dropdown-question')[1];
let dropdownAnswerElementTwo = document.getElementsByClassName('dropdown-answer')[1];
let dropdownQuestionElementThree = document.getElementsByClassName('dropdown-question')[2];
let dropdownAnswerElementThree = document.getElementsByClassName('dropdown-answer')[2];
let dropdownQuestionElementFour = document.getElementsByClassName('dropdown-question')[3];
let dropdownAnswerElementFour = document.getElementsByClassName('dropdown-answer')[3];

dropdownAnswerElementOne.style.display="none";
dropdownAnswerElementTwo.style.display="none";
dropdownAnswerElementThree.style.display="none";
dropdownAnswerElementFour.style.display="none";
dropdownQuestionElementOne.addEventListener("click",(e) =>
{
    if(dropdownAnswerElementOne.style.display == "none"){
        dropdownAnswerElementOne.style.display = "block";
    }
    else{
        dropdownAnswerElementOne.style.display = "none";
    }
})
dropdownQuestionElementTwo.addEventListener("click",(e) =>
{
    if(dropdownAnswerElementTwo.style.display == "none"){
        dropdownAnswerElementTwo.style.display = "block";
    }
    else{
        dropdownAnswerElementTwo.style.display = "none";
    }
})
dropdownQuestionElementThree.addEventListener("click",(e) =>
{
    if(dropdownAnswerElementThree.style.display == "none"){
        dropdownAnswerElementThree.style.display = "block";
    }
    else{
        dropdownAnswerElementThree.style.display = "none";
    }
})
dropdownQuestionElementFour.addEventListener("click",(e) =>
{
    if(dropdownAnswerElementFour.style.display == "none"){
        dropdownAnswerElementFour.style.display = "block";
    }
    else{
        dropdownAnswerElementFour.style.display = "none";
    }
})
