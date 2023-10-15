const pass = document.querySelector("input#pass")
const confirmPass = document.querySelector('input#confirm-pass')
const submitButton = document.querySelector('button[form="sign-up"]')
const labelConfirmPass =document.querySelector('label[for="confirm-pass"]')

function checkPass() {
    return pass.value!==confirmPass.value
}

confirmPass.addEventListener('change',()=> {
    if(checkPass()){
        labelConfirmPass.classList.add("label-confirm-pass")
        confirmPass.classList.add("confirm-pass-invalid")
    } else {
        labelConfirmPass.classList.remove("label-confirm-pass")
        confirmPass.classList.remove("confirm-pass-invalid")
    }
})

submitButton.addEventListener('click',(e)=> {
    if(checkPass()) {
        e.preventDefault()
    }
})