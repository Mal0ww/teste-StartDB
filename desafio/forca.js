class Forca{

  constructor(palavra){
    this.palavra = palavra.toLowerCase(); //garantir que todas as letras serao minusculas.
    this.corretas = Array(palavra.length);
    this.vidas = 6;
    this.letrasChutadas = [];
    this.__inicializador();
  }

  __inicializador(){ // metodo interno para iniciar a palavra com '_';
    for(var i = 0; i<this.corretas.length; i++){
      this.corretas[i] = '_';
    }
  }

  chutar(palpite)
  {
    var letra = palpite.toLowerCase();  //para evitar perde vidas por letras maisculas, mas corretas,
                                        //ja que a comparacao e case sensitive
    if((!this.palavra.includes(letra)) && letra.length == 1 && (!this.letrasChutadas.includes(letra)))
    {
      this.letrasChutadas.push(letra);
      this.vidas--;
    }
    else if(this.palavra.includes(letra) && letra.length == 1 && (!this.letrasChutadas.includes(letra)))
    {
      this.letrasChutadas.push(letra);
      for(var i = 0; i<this.palavra.length; i++){
        if(this.palavra[i] == letra){
          this.corretas.splice(i, 1, letra);
        }
      }
    }
  }

  buscarEstado() {  
    if(this.vidas == 0){
      return "perdeu";
    }
    else if((!this.corretas.includes("_")) && this.vidas >= 1){
      return "ganhou";
    }
    else{
      return "aguardando chute"
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo(){
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.corretas, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
