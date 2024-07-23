    using AngularClient.API.Models;
    using Microsoft.EntityFrameworkCore;

    namespace AngularClient.API.Data
    {
        public class ClientDbContext : DbContext
        {
        public ClientDbContext(DbContextOptions<ClientDbContext> options)
            : base(options)
        {
        }

            public DbSet<Client> Clients { get; set; }
        }


    }
