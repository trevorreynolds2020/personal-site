
export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "Spotify Sentiment Analysis",
            name: "Spotify Sentiment Analysis",
            subtitle: "under construction",
            description: "Does Spotify know how to recommend you new music? No? Well you're in luck! With SSA you can generate playlists based on your music taste. <br/><br/>Built to analysis both lyrics and music patterns.<br/><br/>This app does exactly the same thing as Spotify, in terms of displaying a users playlists, with an additional option to generate the type of playlist the user wants to  (cheerful, melancholy, etc). The recommendation takes into account the users listening history to perform the analysis. Furthermore, it gives the user the option upload the playlist directly to their account.",
            links: [ { name: "Email me to see the code ;)", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "React" , "Django" , "JS" ],
            imgSmall: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/spotify.png?alt=media&token=56f5f7ca-e177-4e8c-a788-03dc2fadbe10',
            img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/spotify.png?alt=media&token=56f5f7ca-e177-4e8c-a788-03dc2fadbe10',
            highlight: true
        },
        {
            id: "KSRE Survey",
            name: "KSRE Survey",
            subtitle: "Tracks productivity among agents in the K-State Research and Extension department",
            description: "Ever since the world shutdown and everyone started working remotely the need for productivity tracking has become more important than ever.<br/><br/>This application is used to track information about the day-to-day life of an extension agent.<br/><br/>Part of the data collected with this tool is reported to the local government. The other portion of data is meant for extension agents to evaluate their progress within the community.",
            links: [ 
                { url: "https://github.com/trevorreynolds2020/ksre-survey", name: "Open project", icon: "fab fa-github"},
                { url: "https://ksre-survey.herokuapp.com/", name: "Play around with it", icon: "fas fa-external-link-alt"}
            ],
            secondaryLinks: [ 
            ],
            labels: [ "React" , ".NET" , "JS" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/ksre.png?alt=media&token=f4a607d7-9b78-43b6-9f65-4b60ac3d7a03",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/ksre-direct.png?alt=media&token=0ceb5207-9d08-43a7-84a5-3dc411fc22ea",
            highlight: true
        },
       
        {
            id: "Dino Diner",
            name: "Dino Diner",
            subtitle: "Point of Sale software for a fictious dinosaur restaurant.",
            description: "Home to famous Steakosaurus Burger! <br/><br/>Friendly user interface for cashiers to quickly check out customers.<br/><br/>Semester long project in CIS 400 - Object-Oriented Design, Implementation, and Testing",
            links: [ {url: "https://github.com/trevorreynolds2020/dino-diner", name: "Here's my code", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "C#" , "XML" , ".NET"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/dino-real.jpeg?alt=media&token=aa9e8f66-23a8-4937-ae62-3c4bbad4c9c2",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/dino.png?alt=media&token=77d2ad9f-9077-49f6-81ac-1ccac5009b93",
            highlight: true
        },
        {
            id: "CSTA",
            name: "CSTA",
            subtitle: "Displays Computer Science standards for students in Kansas K-12",
            description: "Computer Science is an emerging field with more and more opportunities sprouting up every day! The Computer Science Teachers Association (CSTA) is dedicated to preparing students interested in CS to achieve great things before college or the work force.<br/><br/> This site lists of CSTA's standards for students K-12 in Kansas.<br/><br/>Developed in CIS 526 - Web Development.",
            links: [ {url: "https://github.com/trevorreynolds2020/CIS526-website", name: "Here's my code", icon: "fab fa-github"} ],
            secondaryLinks: [ {url: "https://kansas-cs-standards.herokuapp.com/", name: "Check out the site", icon: "fas fa-external-link-alt"} ],
            labels: [ "Node.js" , "JS" ],
            imgSmall:  'https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/csta.png?alt=media&token=d94c4da3-1095-40d9-8722-51d9364a700c',
            img: 'https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/csta.png?alt=media&token=d94c4da3-1095-40d9-8722-51d9364a700c',
            highlight: true
        },
        {
            id: "2019 NBA Playoff Predictor",
            name: "2019 NBA Playoff Predictor",
            subtitle: "Basic ML using playoff data",
            description: "Predicts the average number of points a team will score based on their current playoff performance. <br/><br/>9/10 simulations have the Golden State Warriors winning the playoffs. However, this algorithm doesn't account for injuries and Kawhi going off. GO RAPTORS!",
            links: [ {url: "https://colab.research.google.com/drive/1ORQjEjs5BiAy-e6de8MZqhEpdkzXS0nK?usp=sharing", name: "Code", icon: "fab fa-google"} ],
            secondaryLinks: [ ],
            labels: [ "Python"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/nbalogo.jpeg?alt=media&token=75e01893-8326-46a6-bfa4-83865afc2233",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/kawhi.jpeg?alt=media&token=ace716bd-e636-4db2-b453-18abf62c1dd3",
            highlight: false
        },
        {
            id: "GO",
            name: "GO",
            subtitle: "Classic Chinese board game.",
            description: "Invented more than 2,500 years and now it's on your phone!<br/><br/>Not fully functional. You can use black/white squares as game pieces to capture territory.",
            links: [ {url: "https://github.com/trevorreynolds2020/go", name: "Check it out", icon: "fab fa-github"} ],
            secondaryLinks: [  ],
            labels: [ "Flutter" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/go.jpeg?alt=media&token=d4701895-3164-49db-9a1a-eea9077791c9",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/go.jpeg?alt=media&token=d4701895-3164-49db-9a1a-eea9077791c9",
            highlight: false
        },
        {
            id: "Tic Tac Toe",
            name: "Tic Tac Toe",
            subtitle: "Simple mobile game",
            description: "Built this to get my feet wet in mobile development.",
            links: [ {url: "https://github.com/trevorreynolds2020/tic_tac_toe", name: "Open project", icon: "fab fa-github"} ],
            secondaryLinks: [ ],
            labels: [ "Flutter" ],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/ttt-real.jpg?alt=media&token=d7e95b9d-d9a2-47b2-9dbd-5f51d2ec0927",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/ttt-real.jpg?alt=media&token=d7e95b9d-d9a2-47b2-9dbd-5f51d2ec0927",
            highlight: false
        },
        {
            id: "Farmers Market",
            name: "Farmers Market",
            subtitle: "Website for local farmers to market their products",
            description: "Made this with a team of fellow students to kick off my senior project class.<br/><br/>Nothing crazy just getting some experience with Angular.",
            links: [ {url: "https://github.com/ahess1999/farmers-market-app", name: "Give it a look", icon: "fab fa-github"}],
            secondaryLinks: [ ],
            labels: [ "Angular" , "TS"],
            imgSmall: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/farm.jpeg?alt=media&token=04e202ae-45f7-4660-8f28-0d229f78536f",
            img: "https://firebasestorage.googleapis.com/v0/b/personal-site-b601f.appspot.com/o/farmers.png?alt=media&token=410ff660-d80c-4315-b9e8-02dcaff26f81",
            highlight: false
        },
        
        
       
          ] ) )
}