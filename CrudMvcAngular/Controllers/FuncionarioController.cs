using CrudMvcAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudMvcAngular.Controllers
{
    public class FuncionarioController : Controller
    {
        #region Método para Adicionar Funcionário - CREATE

        // POST Funcionario/AdicionarFuncionario
        [HttpPost]
        public JsonResult AdicionarFuncionario(Funcionario funcionario)
        {
            if (funcionario != null)
            {
                using (var db = new FuncionariosEntities())
                {
                    db.Funcionarios.Add(funcionario);
                    db.SaveChanges();

                    return Json(new { success = true });
                }
            }
            return Json(new { success = false });
        }

        #endregion

        #region Método para Listar Funcionário - READ

        // GET Funcionario/GetFuncionario
        [HttpGet]
        public JsonResult GetFuncionario()
        {
            using( var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionario = db.Funcionarios.ToList();

                return Json(listarFuncionario, JsonRequestBehavior.AllowGet);
            }
        }

        #endregion

        #region Método para Atualizar funcionario - UPDATE
        [HttpPost]
        public JsonResult AtualizarFuncionario(Funcionario funcionario)
        {
            using(var db =  new FuncionariosEntities())
            {
                var funcionarioAtualizado = db.Funcionarios.Find(funcionario.FuncionarioId);
                
                if (funcionarioAtualizado == null)
                {
                    return Json(new { success = false });
                }
                else
                {
                    funcionarioAtualizado.Nome = funcionario.Nome;
                    funcionarioAtualizado.Email = funcionario.Email;
                    funcionarioAtualizado.Departamento = funcionario.Departamento;
                    funcionarioAtualizado.Cargo = funcionario.Cargo;

                    db.SaveChanges();
                    
                    return Json(new { success = true });
                }
            }
        }
        #endregion

        #region Método para excluir funcionario - DELETE
        [HttpPost]
        public JsonResult ExcluirFuncionario(int funcionarioId)
        {
            using(var db = new FuncionariosEntities())
            {
                var funcionario = db.Funcionarios.Find(funcionarioId);
                if( funcionario == null)
                {
                    return Json(new { success = false });
                }

                db.Funcionarios.Remove(funcionario);
                db.SaveChanges();

                return Json(new { success = true });
            }
        }
        #endregion
    }
}