const Inputs = document.getElementById('input-container')
const AllInputs = document.querySelectorAll('#input-container input')

let index = 0

Inputs.addEventListener('keyup', (e) => {
    if (index < 0) {
        index = 0
    } else if (index >= AllInputs.length) {
        index = AllInputs.length - 1
    }
    AllInputs[index].value = e.key

    if (!isNaN(e.key) && index < (AllInputs.length - 1)) {
        setTimeout(() => {
            index++
            AllInputs[index].focus()
        }, 1)
    } else if (isNaN(e.key) && index > 0) {
        setTimeout(() => {
            index--
            AllInputs[index].focus()
        }, 1)
    }
})
