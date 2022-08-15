import '../styles/Experiments.scss';
import FractalTree from './fractal-tree';
import Scheduler from './scheduler';

function Experiments() {
    return(
        <div className="experiments-section">
            <div className="head">
                <h1>Experiments</h1>
                <p>Interactions, widgets and other things I have been tinkering with.</p>
            </div>

            <div className="project-card ">
                <h3 className='project-title'>
                    <i className="fa fa-caret-right" aria-hidden="true"></i>&nbsp;
                    Fractal Tree:
                </h3>
                <FractalTree/>
            </div>

            <div className="project-card">
                <h3 className='project-title'>
                    <i className="fa fa-caret-right" aria-hidden="true"></i>&nbsp;
                    Scheduler:
                </h3>
                <Scheduler/>
                <p>
                    A scheduler widget that graphically shows the time span of events. 
                    Events can be grouped into rows and for each of them width and position are calculated based on their time values. 
                    In the example above a <b>Professor's  Schedule</b> is shown. Each event (Lecture or Lunch) can be updated by <b>clicking it</b>. 
                    Other application for scheduler widget includes Movie Theatres, CPU Job Scheules or Activity Tracker.
                </p>
            </div>
        </div>
    )
}

export default Experiments;