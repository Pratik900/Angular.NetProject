namespace AngularClient.API.Models
{
    public class Client
    {
        public Guid Id { get; set; }
        public string? FName { get; set; }
        public string? LName { get; set; }
        public long Contact { get; set; }
        public int? Working { get; set; }
    }
}
