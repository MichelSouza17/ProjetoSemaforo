const vermelho = document.getElementById ( 'vermelho' );
const amarelo = document.getElementById ( 'amarelo' );
const verde = document.getElementById ( 'verde' );
const automatico = document.getElementById ( 'automatico' );

function vermelholigado () {
        semaf.src = './imagens/vermelho.png';
}

function amareloligado () {
        semaf.src = './imagens/amarelo.png';
}

function verdeligado () {
    semaf.src = './imagens/verde.png';
}

let imagem = 0;

function automaticoligado () {
    
    setInterval(function (){
        if (imagem == 0){
            semaf.src = './imagens/vermelho.png';
            imagem = 1
        }else if(imagem == 1){
            semaf.src = './imagens/amarelo.png';
            imagem = 2
        }else if(imagem == 2){
            semaf.src = './imagens/verde.png';
            imagem = 0
        }
    }, 1000);
    }
    

vermelho.addEventListener ( 'click', vermelholigado );
amarelo.addEventListener ( 'click', amareloligado );
verde.addEventListener ( 'click', verdeligado );
automatico.addEventListener ( 'click', automaticoligado );

