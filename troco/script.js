function calculate() {

    let buy = document.querySelector(".valueBuy").value
    let send = document.querySelector(".valueSend").value
    let res = document.querySelector(".result")

    let sum = send - buy

    if (sum != "") {
        let coinOneReal = 1 * sum
        let coinFiftyCents = coinOneReal * 2
        let coinTwentyFCents = coinOneReal * 4
        let coinTenCents = coinOneReal * 10
        let coinFiveCents = coinOneReal * 20

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='https://o.remove.bg/downloads/30ce8980-ff7b-46d5-b705-38374f4d6458/moeda_brasil_1_real_2009_mbc_2527_1_e1a15cf343470c3b5e7bff3c9006ceb2-removebg-preview.png'" + ">" + "<span class='resultText'>" + coinOneReal + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='https://images.tcdn.com.br/img/img_prod/726147/moeda_brasil_50_centavos_2017_sob_2235_1_7690c989eb3465b521cf2c6bbc1b8ed2.png'" + ">" + "<span class='resultText'>" + coinFiftyCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='https://o.remove.bg/downloads/010c328e-0b81-43f5-bbc7-5e85b1851926/25_Centavos_T_wholly_inside_stripes_Deodoro_da_Fonseca-removebg-preview.png'" + ">" + "<span class='resultText'>" + coinTwentyFCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='https://o.remove.bg/downloads/c45172e9-ab45-481f-8130-3d5c95eec8c9/moeda_brasil_10_centavos_2020_fc_897_1_983c4a066920a2c70e5ab063adbf1c14-removebg-preview.png'" + ">" + "<span class='resultText'>" + coinTenCents + " moedas" + "</span>" + "</div>"

        res.innerHTML += "<div class='resultCoins'>" + "<img class='coin' src='https://images.tcdn.com.br/img/img_prod/726147/moeda_brasil_5_centavos_2010_fc_67_1_90281e93fc55c57f24cced8589ac0fb0.jpeg'" + ">" + "<span class='resultText'>" + coinFiveCents + " moedas" + "</span>" + "</div>"

        document.querySelector(".valueBuy").value = ""
        document.querySelector(".valueSend").value = ""

    } else {
        alert("Você precisa entregar o dinheiro correto.")
    }
}