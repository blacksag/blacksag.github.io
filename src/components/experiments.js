import '../styles/Experiments.scss';
import FractalTree from './fractal-tree';
import Scheduler from './scheduler';

const projs = [
    {
        name: "proj 1",
        image: "img 1"
    },
    {
        name: "proj 2",
        image: "img 2"
    },
    {
        name: "proj 3",
        image: "img 3"
    },
    {
        name: "proj 4",
        image: "img 4"
    }
]

function getProjects() {
    return projs.map((proj,index)=> 
        <div className="card" key={index}>
            <div className="image">
                {/* <img src={aboutImage} alt="Sudhanshu-Jain" /> */}
                <div style={{width:'300px',height:'200px',background:'white'}}>{proj.image}</div>
            </div>
            <div className="parahs">
                <h5>{proj.name}</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad aliquid eligendi ullam quasi eos aperiam quaerat cumque, deserunt commodi iure consequuntur tempore similique cum doloremque incidunt quo, ratione reprehenderit.
                    Nostrum placeat molestias ullam repellat fugit quos officiis natus praesentium, inventore quia laboriosam eligendi quaerat at est hic autem esse! In totam sunt inventore commodi necessitatibus dolor repellat vel obcaecati.
                </p>
                <p>
                    Git &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Demo 
                </p>
            </div>
        </div>)
}

function Experiments() {
    return(
        <div className="experiments-section">
            <div className="head">
                <h1>Experiments</h1>
                <p>Interactions, widgets and other things I have been tinkering with.</p>
            </div>

            <div className="project-card ">
                <h3 className='project-title'>Fractal Tree:</h3>
                <FractalTree/>
            </div>

            <div className="project-card">
                <h3 className='project-title'>Scheduler:</h3>
                <Scheduler/>
                <p>
                    A scheduler widget that graphically shows the time span of events. 
                    Events can be grouped into rows and for each of them width and position are calculated based on their time values. 
                    In the example above a <b>Professor's  Schedule</b> is shown. Each event (Lecture or Lunch) can be updated by <b>clicking it</b>. 
                    Other application for scheduler widget includes Movie Theatres, CPU Job Scheules or Activity Tracker.
                </p>
            </div>

            <h1> Work in Progress.. </h1>
            {/*getProjects()*/}
        </div>
    )
}

export default Experiments;