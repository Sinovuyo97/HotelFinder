using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerfectPractice.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PerfectPractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly AuthenticationContext _stockModel; 

        public StockController(AuthenticationContext stockModel)
        {
            _stockModel = stockModel;
        }
        [HttpGet]
        public async Task<ActionResult<List<StockModel>>> Get()
        {
            return Ok(await _stockModel.stockModels.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StockModel>> Get(int id)
        {
            var stock = await _stockModel.stockModels.FindAsync(id);
            if (stock == null)
                return BadRequest("Bad request");
            return  stock;
        }
        [HttpPost]
        public async Task<ActionResult<List<StockModel>>> AddProduct(StockModel res)
        {
            _stockModel.stockModels.Add(res);
            await _stockModel.SaveChangesAsync();
            return Ok(await _stockModel.stockModels.ToListAsync());
        }
    }
}
