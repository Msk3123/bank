using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using ProjectBank.Data;
using ProjectBank.Models;
using ProjectBank.Models.DTO;
using ProjectBank.Services;

namespace ProjectBank.Controllers.Auth
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly PasswordHasher<User> _passwordHasher;
        private readonly TokenService _tokenService;

        public AuthController(AppDbContext context, TokenService tokenService)
        {
            _context = context;
            _passwordHasher = new PasswordHasher<User>();
            _tokenService = tokenService;
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterUserDto request)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Login == request.Login);
            if (userExists)
            {
                return BadRequest("User with this login already exists");
            }

            var user = new User
            {
                Name = request.Name,
                Surname = request.Surname,
                Email = request.Email,
                Login = request.Login,
                PasswordHash = _passwordHasher.HashPassword(null, request.Password),
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User created successfully");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserDto request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Login == request.login);

            if (user == null)
            {
                Console.WriteLine("User not found");
                return BadRequest("User not found");
            }

            Console.WriteLine($"UserId: {user.UserId}");
            Console.WriteLine($"Login: {user.Login}");
            Console.WriteLine($"PasswordHash in DB: {user.PasswordHash}");
            Console.WriteLine($"Password from request: {request.password}");

            var result = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, request.password);

            if (result == PasswordVerificationResult.Failed)
            {
                Console.WriteLine("PASSWORD FAILED");
                return BadRequest("Invalid password");
            }

            Console.WriteLine("PASSWORD OK");

            var token = _tokenService.CreateToken(user);
            return Ok(new { token });
        }
        [HttpGet("user")]
        public async Task<IActionResult> GetUser()
        {
            var login = User.Identity?.Name;

            if (login == null)
                return Unauthorized("Користувач не авторизований");

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Login == login);

            if (user == null)
                return NotFound("Користувач не знайдений");

            return Ok(new
            {
                user.Login,
                user.Email,
                user.Name,
                user.Surname,
                user.UserId,
                user.CreatedAt,
                Balance = 0 // поки що баланс 0, потім зробиш реальний баланс
            });
        }
    }
    
}