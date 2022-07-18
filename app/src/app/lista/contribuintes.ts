export interface Contribuinte {
 id: Number,
 nome: String,
 email: String,
 cpf: String,
 telefone: Number,
 celular: Number,
enderecos: {
    rua: String,
    numero: Number,
    bairro: String,
    cidade: String,
    cep: Number,
    estado: String,
    pais: String,
}
}