const input = Array.from(document.querySelectorAll("input"));

function myFunction(e) {
    const checkedInputs = input.indexOf(this);
    console.log(checkedInputs);

    if (e.checked) {
        console.log(e);
    }
}

input.forEach(thatInput => thatInput.addEventListener("click", myFunction));
