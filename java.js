let res = document.getElementById('res')

let pais = ['chile', 'bolivia', 'brasil', 'argentina', 'paraguai']
let cidades = new Array('tijucas', 'sao jose', 'canelinha', 'itapema', 'nova trento')

pais.push('uruguai')
pais.unshift('colombia')
console.log(pais)
console.log(cidades)

pais.pop()
pais.shift()
console.log(pais)


function inserir(){

    pais.pop()
    pais.shift()

    res.innerHTML += pais + '<br>' + '<br>'
    res.innerHTML += cidades + '<br>'

}