using Microsoft.AspNetCore.Mvc;
using Portfolio.Api.Models;
using System.Net;
using System.Net.Mail;

namespace Portfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IConfiguration _config;
    private readonly ILogger<ContactController> _logger;

    public ContactController(IConfiguration config, ILogger<ContactController> logger)
    {
        _config = config;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ContactMessage message)
    {
        if (string.IsNullOrWhiteSpace(message.Name) ||
            string.IsNullOrWhiteSpace(message.Email) ||
            string.IsNullOrWhiteSpace(message.Message))
            return BadRequest("All fields are required.");

        try
        {
            var host = _config["Smtp:Host"]!;
            var port = int.Parse(_config["Smtp:Port"] ?? "587");
            var user = _config["Smtp:Username"]!;
            var pass = _config["Smtp:Password"]!;
            var to   = _config["Smtp:ToEmail"]!;

            using var client = new SmtpClient(host, port)
            {
                EnableSsl = true,
                Credentials = new NetworkCredential(user, pass)
            };

            var mail = new MailMessage
            {
                From    = new MailAddress(user, "Portfolio Contact"),
                Subject = $"Portfolio Contact from {message.Name}",
                Body    = $"Name: {message.Name}\nEmail: {message.Email}\n\n{message.Message}",
                IsBodyHtml = false
            };
            mail.To.Add(to);

            await client.SendMailAsync(mail);
            _logger.LogInformation("Contact form submitted by {Email}", message.Email);
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send contact email");
            return StatusCode(500, "Failed to send message.");
        }
    }
}
