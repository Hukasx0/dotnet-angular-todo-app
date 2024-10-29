using dotnet_angular_todo_app.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_angular_todo_app.Server.Data
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options) 
        {
            
        }

        public DbSet<TodoItem> Todos { get; set; }
    }
}
