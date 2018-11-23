const input = document.querySelectorAll("input");
let lastChecked;

function handleClick(e) {
    // check if shift key was held down
    // AND check if they are checking it
    let inBetween = false; // flag variable
    if (e.shiftKey && this.checked) {
        console.log(this.checked);
        // go ahead and do what we please
        // loop over every single checkbox
        input.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

input.forEach(thatInput => thatInput.addEventListener("click", handleClick));
