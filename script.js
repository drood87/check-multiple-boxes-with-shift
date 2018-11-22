const input = Array.from(document.querySelectorAll("input"));
// input[1].checked = true;

// if (input[2].checked === false) {
//     alert("wassup");
// }

function myFunction(e) {
    if (e.shiftKey) {
        console.log(e.shiftKey);
    }
    if (this.checked) {
        const checkedInputs = input.filter(inputs => inputs.checked);
        console.log(checkedInputs);
    }
}

input.forEach(thatInput => thatInput.addEventListener("click", myFunction));
