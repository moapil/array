let res = document.getElementById('res')

let pais = [' chile ', ' bolivia ', ' brasil ', ' argentina ', ' paraguai ']
let cidades = new Array(' tijucas', ' sao jose', ' canelinha', ' itapema', ' nova trento')

// pais.push('uruguai')
// pais.unshift('colombia')
// console.log(pais)
// console.log(cidades)

// pais.pop()
// pais.shift()
// console.log(pais)

// console.log(pais.indexOf('brasil'))

let nome_pais = document.getElementById('nome_pais')
let incluir = document.getElementById('incluir')

incluir.addEventListener('click', ()=>{
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
})

// function inserir(){

//     pais.splice(3,0, " estados unidos", " deus")
//     pais.splice(4,1,)

//     // pais.pop()
//     // pais.shift()

//     res.innerHTML += pais + '<br>' + '<br>'
//     res.innerHTML += cidades + '<br>'

// }