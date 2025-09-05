const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        // adicionar um novo nome na lista de usuarios
        adicionarNovoUsuario('Maria');

        // retornar a lista de usuarios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();

        // comparar se o novo nome está no fim da lista de usuario
        expect(listaDeUsuarios.at(-1)).to.equal('Maria')
    })
})