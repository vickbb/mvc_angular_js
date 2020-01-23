using CrudMvcAngular.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CrudMvcAngular.Controllers
{
    public class FuncionaroiController : Controller
    {
        #region Método para Listar Funcionário - READ
        public JsonResult GetFuncionario()
        {
            using( var db = new FuncionariosEntities())
            {
                List<Funcionario> listarFuncionario = db.Funcionarios.ToList();

                return Json(listarFuncionario, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
    }
}