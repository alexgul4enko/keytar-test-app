


(function(){
    const input  = document.getElementById('pass')
    const saveBtn  = document.getElementById('change')
    const out  = document.getElementById('show-pass')
    const getBtn  = document.getElementById('get')


    document.getElementById('findCredentials').addEventListener('click', window.keytar.findCredentials)
    document.getElementById('findPassword').addEventListener('click', window.keytar.findPassword)


    saveBtn.addEventListener('click', function(){
        const val = input.value
        if(val) {
            window.keytar.setPassword( val)
        } else {
            window.keytar.deletePassword()
        }

    })

    getBtn.addEventListener('click', function(){
        window.keytar.getPassword().then(value=>{
            out.innerHTML = value
        })

    })
})()