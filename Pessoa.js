class Pessoa
{
    #nome
    #cpf
    #dataNasc

  /**
   * 
   * @param {string} pNome 
   * @param {number} pCpf 
   * @param {number} pDataNasc 
   */

    constructor(pNome, pCpf, pDataNasc ){
        this.#nome = pNome
        this.#cpf = pCpf
        this.#dataNasc = pDataNasc
    }
    get nome() {
        return this.#nome
    }

    get cpf() {
        return this.#cpf
    }

    get dataNasc() {
        return this.#dataNasc
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    set cpf(novoCpf) {
        this.#cpf = novoCpf
    }

    set dataNasc(novoDataNasc) {
        this.#dataNasc = novoDataNasc
    }

    calcularIdade(){
       return `O paciente ${this.#nome} tem ${2023 - this.#dataNasc} anos e seu CPF é ${this.#cpf}.`
    }
}

class Paciente extends Pessoa
{
    #convenio
    #nroConvenio

/**
 * 
 * @param {string} pConvenio 
 * @param {number} pNroConvenio 
 */

    constructor(pNome, pCpf, pDataNasc, pConvenio, pNroConvenio){
        super(pNome, pCpf, pDataNasc )
        this.#convenio = pConvenio
        this.#nroConvenio = pNroConvenio
    }
    get convenio() {
        return this.#convenio
    }

    get nroConvenio() {
        return this.#nroConvenio
    }

    set convenio(novoConvenio) {
        this.#convenio = novoConvenio
    }

    set nroConvenio(novoNroConvenio) {
        this.#nroConvenio = novoNroConvenio
    }

    solicitarConvenio(){
        return `O paciente ${this.nome} solicita uma consulta pelo convenio ${this.#convenio}.`
    }

    realizarExame(){
        return `${this.nome} quer realizar um exame pelo convenio ${this.convenio}, numero ${this.#nroConvenio}.`
    }
}

class Medico extends Pessoa
{
    #especializacao
    #nroRegistro
    #dtAdimissao

/**
 * 
 * @param {string} pEspecializacao 
 * @param {number} pNroRegistro 
 * @param {number} pDtAdimissao 
 */

    constructor(pNome, pCpf, pDataNasc, pEspecializacao, pNroRegistro,pDtAdimissao){
        super(pNome, pCpf, pDataNasc)
        this.#especializacao = pEspecializacao
        this.#nroRegistro = pNroRegistro
        this.#dtAdimissao = pDtAdimissao
    }

    get especializacao() {
        return this.#especializacao
    }

    get nroRegistro() {
        return this.#nroRegistro
    }

    get dtAdimissao() {
        return this.#dtAdimissao
    }

    set especializacao(novoEspecializacao) {
        this.#especializacao = novoEspecializacao
    }

    set nroRegistro(novoNroRegistro) {
        this.#nroRegistro = novoNroRegistro
    }

    set dtAdimissao(novoDtAdimissao) {
        this.#dtAdimissao = novoDtAdimissao
    }

    atenderConsulta(){
        return `O médico ${this.nome} está realizando uma consulta.`
    }

    emitirReceita(){
        return `${this.nome} está emitindo uma receita com o número de registro ${this.nroRegistro}.`
    }
}

let paciente = new Paciente('Henry',12345612345, 2002, 'São Lucas', 2134);
console.log(paciente.calcularIdade());
console.log(paciente.solicitarConvenio());
console.log(paciente.realizarExame());

paciente.nome = 'Paulo'
console.log(paciente.calcularIdade());
paciente.convenio = 'Unimed'
console.log(paciente.solicitarConvenio());
paciente.nroConvenio = 4567
console.log(paciente.realizarExame());



let medico = new Medico('Luiz', 12345612312, 1979, 'Ortopedista', 5678, 2010);
console.log(medico.atenderConsulta());
console.log(medico.emitirReceita());

medico.nome = 'Claudio'
console.log(medico.atenderConsulta());
medico.nroRegistro = 1234
console.log(medico.emitirReceita());