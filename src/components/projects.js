import '../styles/Projects.scss';

const projs = [
    {
        name: "Balls",
        image: "balls.png",
        desc: [
            `Multiplayer game build using Web based game Engine - Playcanvas built on top of WebGL.`,
            `Central Server communicates with all the clients to sync their states using Web Sockets.`
        ],
        urls: {
            Server: "https://glitch.com/edit/#!/balls-server",
            Live: "https://playcanv.as/p/0903d1e5/",
        }
    },
    {
        name: "TO-DOs",
        image: "todos.png",
        desc: [
            `A To-Do List application made using Vanilla JavaScript following MVC Architecture.`,
            `Project is used to promote open source contribution in GitHub's Hacktober Fest`
        ],
        urls: {
            Source: "https://github.com/blacksag/To-Dos",
            Live: "https://blacksag.github.io/To-Dos/",
        }
    },
    {
        name: "URL Shortner",
        image: "urlshortner.png",
        desc: [
            `Microservice for providing a short URL for a given URL. The service use MongoDB as database.`
        ],
        urls: {
            Source: "https://github.com/blacksag/url-shortner",
            Live: "https://prong-justice.glitch.me/",
        }
    },
    {
        name: "Draw Yourself",
        image: "drawdoodles.gif",
        desc: [
            `A windows application using .NET to create doodles and save them so that they can be drawn later.`,
            `The doodles data is saved as JSON with each stroke and its respective time.`
        ],
        urls: {
            Source: "https://github.com/blacksag/DrawYourself",
        }
    },
]

function getProjects() {
    return projs.map((proj,index)=> 
        <div className="proj-card" key={index}>
            <div className="proj-image">
                <img src={require(`../assets/projects/${proj.image}`)} alt={proj.name} />
                {/* <div style={{width:'300px',height:'200px',background:'white'}}>{proj.image}</div> */}
            </div>
            <div className="proj-desc">
                <h3>{proj.name}</h3>
                <ul>
                    {proj.desc.map((desc,num) => 
                            <li key={num}>{desc}</li>
                    )}
                </ul>
                <p>
                    {Object.keys(proj.urls).map((urlType) => 
                        <a key={urlType} href={proj.urls[urlType]} target="_blank" rel="noopener noreferrer">
                            {urlType} &nbsp;
                            <i className="fa fa-external-link" style={{'fontSize': '14px'}} aria-hidden="true"></i>
                        </a>
                    )}
                </p>
            </div>
        </div>)
}

function Projects() {
    return(
        <div className="projects-section">
            <div className="head">
                <h1>Work</h1>
                <p>Things I've made or learned in my journey so far.</p>
            </div>

            {getProjects()}
        </div>
    )
}

export default Projects;