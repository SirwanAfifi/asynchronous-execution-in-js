using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AsyncJavaScript.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Date()
        {
            var data = Enumerable.Range(0, 10000);

            return Json(data, JsonRequestBehavior.AllowGet);
        }
        
    }
}