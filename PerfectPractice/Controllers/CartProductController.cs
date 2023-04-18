using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PerfectPractice.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PerfectPractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartProductController : ControllerBase
    {
        private readonly AuthenticationContext _cartModel;

        public CartProductController(AuthenticationContext cartModel)
        {
            _cartModel = cartModel;
        }
        [HttpGet]
        public async Task<ActionResult<List<CartProductModel>>> Get()
        {
            return Ok(await _cartModel.cartProducts.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CartProductModel>> Get(int id)
        {
            var carts = await _cartModel.cartProducts.FindAsync(id);
            if (carts == null)
                return BadRequest("Bad request");
            return carts;
        }
        [HttpPost]
        public async Task<ActionResult<List<CartProductModel>>> AddProduct(CartProductModel res)
        {
            _cartModel.cartProducts.Add(res);
            await _cartModel.SaveChangesAsync();
            return Ok(await _cartModel.cartProducts.ToListAsync());
        }
    }
}
