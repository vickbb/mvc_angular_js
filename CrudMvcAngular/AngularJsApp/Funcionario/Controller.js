/*
 * Responsavel por controlar os modulos de funcionarios
*/

funcionarioApp.controller('funcionarioCtrl', function ($scope, funcionarioService) {

    carregarFuncionarios();

    // Método responsável por adicionar propriedades do Funcionário
    $scope.adicionarFuncionario = function () {

        var funcionario = {
            funcionarioId: $scope.funcionarioId,
            nome: $scope.nome,
            email: $scope.email,
            departamento: $scope.departamento,
            cargo: $scope.cargo
        };

        var adicionarInformacoes = funcionarioService.adicionarFuncionario(funcionario);

        adicionarInformacoes.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário adicionado com sucesso!");

                $scope.limparDados();
            }
            else { alert("Funcionário não adicionado"); }
        },
            function () {
                alert("Erro ao tentar adicionar um novo funcionário na base de dados");
            });
    }

    // Método responável por carregar propriedades do Funcionário
    function carregarFuncionarios() {
        var listarFuncionarios = funcionarioService.getTodosFuncionarios();

        listarFuncionarios.then(function (d) {
            $scope.Funcionarios = d.data;
        },
            function () {
                alert("Ocorreu um erro ao listar todos os funcionários!");
            });
    }

    // Método responsavel por atualizar funcionario
    $scope.atualizarFuncionarioPorId = function (funcionario) {
        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
        $scope.AtualizadoEmail = funcionario.Email;
        $scope.AtualizadoDepartamento = funcionario.Departamento;
        $scope.AtualizadoCargo = funcionario.Cargo;
    }

    //Método responsavel por atualizar os dados do funcionario
    $scope.atualizarFuncionario = function () {
        var funcionario = {
            FuncionarioId: $scope.AtualizadoFuncionarioId,
            Nome: $scope.AtualizadoNome,
            Email: $scope.AtualizadoEmail,
            Departamento: $scope.AtualizadoDepartamento,
            Cargo: $scope.AtualizadoCargo
        };

        var atualizarInformacoes = funcionarioService.atualizarFuncionario(funcionario);
        atualizarInformacoes.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionário atualizado com sucesso!");
                $scope.limparDadosAtualizados();
            } else {
                alert("Funcionário não atualizado!");
            }
        }, function () {
            alert("Ocorreu um erro ao atualizar o funcionário na base de dados!");
        });
    }

    // Méto responsável por resgatar dados do funcionario para sua exclusão
    $scope.excluirFuncionarioPorId = function (funcionario) {
        $scope.AtualizadoFuncionarioId = funcionario.FuncionarioId;
        $scope.AtualizadoNome = funcionario.Nome;
    }

    //Método responsavel por excluir o funcionario pelo ID
    $scope.excluirFuncionario = function (AtualizadoFuncionarioId) {
        var excluirInformacoes = funcionarioService.excluirFuncionario($scope.AtualizadoFuncionarioId);
        excluirInformacoes.then(function (d) {
            if (d.data.success === true) {
                carregarFuncionarios();
                alert("Funcionario excluido com sucesso!");
            } else {
                alert("Funcionário não excluido!");
            }
        }, function () {
            alert("Ocorreu um erro ao tentar excluir o funcionário!")
        });
    }

    // Limpar os campos após inserção na base de dados
    $scope.limparDados = function () {

        $scope.funcionarioId = '';
        $scope.nome = '';
        $scope.email = '';
        $scope.departamento = '';
        $scope.cargo = '';

    }

    // Método responsável por limpar os dados após o funcionário ter sido atualizado
    $scope.limparDadosAtualizados = function () {
        $scope.AtualizadoFuncionarioId = '';
        $scope.AtualizadoNome = '';
        $scope.AtualizadoEmail = '';
        $scope.AtualizadoDepartamento = '';
        $scope.AtualizadoCargo = '';
    }

});