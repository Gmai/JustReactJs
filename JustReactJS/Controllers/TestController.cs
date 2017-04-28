using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace JustReactJS.Controllers
{
	public class TestController : Controller
	{
		// GET: Test
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult HelloWorld()
		{
			return View();
		}
		public ActionResult HelloWorldServerSide()
		{
			return View();
		}

		public ActionResult TextField()
		{
			return View();
		}
	}
}