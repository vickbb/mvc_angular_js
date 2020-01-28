/*
 * Responsavel por carregar os dados via http.get onde transformara os dados em JSON
*/

funcionarioApp.service('funcionarioService', function ($http) {

    // Método responsável por adicionar Funcionario: CREATE
    this.adicionarFuncionario = function (funcionario) {
        var request = $http({
            method: 'post',
            url: '/Funcionario/AdicionarFuncionario',
            data: funcionario
        }); 

        return request;
    }

    // Método responsável por listar todos os Funcionários: READ
    this.getTodosFuncionarios = function () {
        return $http.get("/Funcionario/GetFuncionario");
    }

    // Método responsável por atualizar Funcionário: UPDATE
    this.atualizarFuncionario = function (funcionario) {
        var request = $http({
            method: 'post',
            url: '/Funcionario/AtualizarFuncionario',
            data: funcionario
        });

        return request;
    }

});