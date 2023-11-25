const api_key = "0af7ceff20ce2b15d86181e9"
const url = "https://v6.exchangerate-api.com/v6/"+api_key


const currencyOne = document.getElementById("currency-one")
const currencyTwo = document.getElementById("currency-two")
const listOne = document.getElementById("list-one")
const listTwo = document.getElementById("list-two")
const amount = document.getElementById("amount")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")



fetch(url + "/codes")
    .then(res => res.json())
    .then(data => {
        const items = data.supported_codes
        let options;
        for(let item of items){
             options += `<option value="${item[0]}">${item[1]}</option>`
             
        }
        listOne.innerHTML = options
        listTwo.innerHTML = options
    })


calculate.addEventListener("click",function(){
    const doviz1 = currencyOne.value
    const doviz2 = currencyTwo.value
    const miktar = amount.value
    
    fetch(url + "/latest/" + doviz1)
        .then(res => res.json())
        .then(data => {
            const sonuc =(data.conversion_rates[doviz2] * miktar).toFixed(3)
        result.innerHTML = `
        <div class="card border-success">
            <div class="card-body text-center fs-1">
                ${miktar} ${doviz1} = ${sonuc} ${doviz2} 
            </div>
    </div>
        `
    })
})