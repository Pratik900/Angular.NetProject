using AngularClient.API.Data;
using AngularClient.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularClient.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] //api/clients
    public class ClientsController : Controller
    {
        private readonly ClientDbContext _ClientDbContext;

        public ClientsController(ClientDbContext clientDbContext) 
        {
            _ClientDbContext = clientDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllClients()
        {
            var clients = await _ClientDbContext.Clients.ToListAsync();
            return Ok(clients);
        }

        [HttpPost]
        public async Task<IActionResult> AddClients([FromBody] Client clientsrequest)
        {
            clientsrequest.Id = Guid.NewGuid();
            await _ClientDbContext.Clients.AddAsync(clientsrequest);
            await _ClientDbContext.SaveChangesAsync();
            return Ok(clientsrequest);
        }
    }
}
