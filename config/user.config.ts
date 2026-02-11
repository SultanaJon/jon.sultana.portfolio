export const userName: string = 'Jonathan Sultana';
export const userJobTitle: string = 'Senior Software Engineer';
export const userLocation: string = 'Michigan';

interface SocialLinks {
  email: string;
  github: string;
  linkedin: string;
}

export const userSocialLinks: SocialLinks = {
  email: 'jon.michael.sultana@gmail.com',
  github: 'https://github.com/SultanaJon',
  linkedin: 'https://www.linkedin.com/in/jonathan-sultana-29b56558/',
};

export const userCodeSnippet = `
var builder = WebApplication.CreateBuilder(args);

// Register user services
builder.Services.AddSingleton<IUserExperienceService, UserExperienceService>();
builder.Services.AddSingleton<IUserEducationService, UserEducationService>();
builder.Services.AddSingleton<IUserWeaknessService, UserWeaknessService>();
builder.Services.AddSingleton<IUserContactInfoService, UserContactInfoService>();

var app = builder.Build();

app.UseHttpsRedirection();

// API Endpoints
app.MapGet("/api/v1/user/{id}/experience", (string id, IUserExperienceService service) =>
{
    var experiences = service.GetExperience(id);
    return experiences != null 
        ? Results.Ok(experiences) 
        : Results.NotFound(new { message = $"No experience found for user {id}" });
});

app.MapGet("/api/v1/user/{id}/education", (string id, IUserEducationService service) =>
{
    var education = service.GetEducation(id);
    return education != null 
        ? Results.Ok(education) 
        : Results.NotFound(new { message = $"No education found for user {id}" });
});

app.MapGet("/api/v1/user/{id}/weaknesses", (string id, IUserWeaknessService service) =>
{
    var weaknesses = service.GetWeaknesses(id);
    return weaknesses != null 
        ? Results.Ok(weaknesses) 
        : Results.NotFound(new { message = $"No weaknesses found for user {id}" });
});

app.MapGet("/api/v1/user/{id}/contact-info", (string id, IUserContactInfoService service) =>
{
    var contactInfo = service.GetContactInfo(id);
    return contactInfo != null 
        ? Results.Ok(contactInfo) 
        : Results.NotFound(new { message = $"No contact info found for user {id}" });
});

app.Run();
`;

export const userStory = `
  I am a ${userJobTitle} who enjoys building both frontend 
  and backend applications that are fast, intuitive, and
  thoughtfully designed. Whether it's crafting user interfaces
  or architecting scalable APIs, I take pride in solving problems
  through clean, maintainable code. When I'm not deep in a code
  editor, you'll likely find me spending time with my family,
  exploring the natural beauty of Northern Michigan, or tearing
  through the trails on my mountain bike. Thanks for stopping by. 
  Before you go, be sure to check out my REST client for more
  information about me and any recent projects I've been working on!`;
