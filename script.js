let input = document.querySelector("input");
document.querySelectorAll('button').forEach(button => {
    button.addEventListener("click", (e) => {
        let str = e.target.innerHTML;
        if (str == "C") {
            input.value = ''
        }
        else if (str === "=") {
            try {
                input.value = eval(input.value)
            }
            catch {
                input.value = "Error"
            }
        }
        else {
            input.value += str;
        }
    })
})