using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectBank.Data;

using ProjectBank.Models;

namespace ProjectBank.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }
        
        [HttpGet("user")]
        public async Task<IActionResult> GetUser()
        {
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

            if (userId == null)
                return Unauthorized("User ID not found");

            var user = await _context.Users.FindAsync(int.Parse(userId));

            if (user == null)
                return NotFound("User not found");

            return Ok(new
            {
                user.UserId,
                user.Name,
                user.Surname,
                user.Login,
                user.Email,
                user.CreatedAt
            });
        }
        
    }
}