export default {
    fetchSocials: () => new Promise( (resolve, reject) => resolve( [
        {   
            name: "email",
            text: "reynolds8280@gmail.com",
            icon: "fas fa-envelope",
            url: "mailto:reynolds8280@gmail.com"
        },
        {
            name: "github",
            text: "",
            icon: "fab fa-github",
            url: "https://github.com/trevorreynolds2020"
        },
        {
            name: "linkedin",
            text: "",
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/trevor-reynolds-713400159/"
        }  
    ] ) )
}