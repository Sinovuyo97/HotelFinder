using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PerfectPractice.Models
{
    public class AuthenticationContext:IdentityDbContext
    {
        public AuthenticationContext(DbContextOptions options):base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; } 
        public DbSet<StockModel> stockModels { get; set; }
        public DbSet<CartProductModel> cartProducts { get; set; }
    }
}
