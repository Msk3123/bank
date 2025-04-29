using Microsoft.EntityFrameworkCore;
using ProjectBank.Models;

namespace ProjectBank.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users => Set<User>();
    }
}