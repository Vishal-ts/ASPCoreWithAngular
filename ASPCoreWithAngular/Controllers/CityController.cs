using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPCoreWithAngular.Interfaces;
using ASPCoreWithAngular.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPCoreWithAngular.Controllers
{
    [Route("api/[controller]")]
    public class CityController : Controller
    {
        private readonly IEmployee objcity;

        public CityController(IEmployee _objcity)
        {
            objcity = _objcity;
        }

        [HttpGet]
        [Route("Index")]
        public IEnumerable<City> Index()
        {
            return objcity.GetCities();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Employee employee)
        {
            return objcity.AddEmployee(employee);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Employee Details(int id)
        {
            return objcity.GetEmployeeData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Employee employee)
        {
            return objcity.UpdateEmployee(employee);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objcity.DeleteEmployee(id);
        }

        [HttpGet]
        [Route("GetCityList")]
        public IEnumerable<City> Details()
        {
            return objcity.GetCities();
        }
    }
}
