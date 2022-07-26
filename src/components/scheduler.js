import { useState } from 'react';
import { useReducer } from 'react';
import '../styles/Scheduler.scss';

const startHour = 8
const endHour = 16
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
var initialSchedule = {
    'Monday': [
        { name: 'CS101', from: { hr: 8, min: 30 }, to: { hr: 9, min: 55 } },
        { name: 'Lunch', from: { hr: 11, min: 0 }, to: { hr: 11, min: 50 } },
        { name: 'CS204', from: { hr: 13, min: 50 }, to: { hr: 15, min: 20 } }
    ],
    'Tuesday': [
        { name: 'CS101', from: { hr: 8, min: 15 }, to: { hr: 9, min: 45 } },
        { name: 'Lunch', from: { hr: 11, min: 0 }, to: { hr: 11, min: 50 } },
        { name: 'CS204', from: { hr: 13, min: 30 }, to: { hr: 15, min: 0 } }
    ],
    'Wednesday': [
        { name: 'Lunch', from: { hr: 10, min: 45 }, to: { hr: 11, min: 35 } },
        { name: 'EE403', from: { hr: 12, min: 10 }, to: { hr: 13, min: 40 } },
        { name: 'CS204', from: { hr: 14, min: 30 }, to: { hr: 15, min: 50 } }
    ],
    'Thursday': [
        { name: 'CS101', from: { hr: 8, min: 50 }, to: { hr: 9, min: 55 } },
        { name: 'Lunch', from: { hr: 11, min: 0 }, to: { hr: 11, min: 50 } }
    ],
    'Friday': [
        { name: 'CS101', from: { hr: 8, min: 30 }, to: { hr: 9, min: 55 } },
        { name: 'CS204', from: { hr: 10, min: 45 }, to: { hr: 12, min: 15 } },
        { name: 'Lunch', from: { hr: 12, min: 30 }, to: { hr: 13, min: 20 } }
    ]
}

function generateTimeSpanList() {
    let timeSpanList = [];
    let hour = startHour;
    let gap = 1;
    for (let i = 0; i < (endHour - startHour); i += gap) {
        let timeString = hour.toString().padStart(2,'0');
        timeString += ':00';
        timeSpanList.push(timeString);
        hour += gap;
    }
    return timeSpanList;
}

function getPositionOfEvent(from) {
    let size = (endHour - startHour) * 60;
    let start = (from.hr * 60 + from.min) - (startHour * 60);
    return start / size * 100;
}

function getWidthOfEvent(from, to) {
    let totalSize = (endHour - startHour) * 60;
    let size = (to.hr * 60 + to.min) - (from.hr * 60 + from.min)
    return size / totalSize * 100;
}

function Scheduler() {

    const timeSpanList = generateTimeSpanList();


    const [selectedWeekday, updateSelectedWeekday] = useState('Friday');
    const [selectedEvent, updateSelectedEvent] = useState(0);

    const getStyleForEvent = (lecture, day, position) => {
        let pos = getPositionOfEvent(lecture.from);
        let size = getWidthOfEvent(lecture.from, lecture.to);
        let bgColor = lecture.name !== 'Lunch' ? '#FFFFFF4F' : '#FFFFFF8F';
        let color = 'white';//lecture.name!='Lunch'?'#FFFFFF':'#9CA3A8';
        var styleObj = {
            left: pos + '%',
            width: size + '%',
            color: color,
            backgroundColor: bgColor,
            border: day === selectedWeekday && selectedEvent === position ? 'solid 2px white' : 'none'
        }
        return styleObj;
    }

    const mapScheduleAction = (prevSchedule, action) => {
        let newSchedule = {...prevSchedule};
        newSchedule[selectedWeekday][selectedEvent][action.timeType][action.timeUnit] = parseInt(action.value);
        return newSchedule;
    }

    const [schedule, modifySchedule] = useReducer(mapScheduleAction, initialSchedule);

    return (
        <>
            <div className="chart">
                <div className="row-heads">
                    <div className="row-title">
                        Days
                    </div>
                    <div className="row-contents">
                        {timeSpanList.map((time) => <span key={time} className="col-content">{time}</span>)}
                    </div>
                </div>
                {weekdays.map((day) =>
                    <div key={day+'row'} className="row-data">
                        <div className="row-title">
                            {day}
                        </div>
                        <div className="row-contents">
                            {timeSpanList.map((time) => <span key={time} className="col-content"></span>)}
                            {schedule[day].map((lecture, position) =>
                                <div key={position} className="gantt-event" style={getStyleForEvent(lecture, day, position)}
                                    onClick={() => { updateSelectedEvent(position); updateSelectedWeekday(day); }}>
                                    {lecture.name}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className='input-section'>
                <div className="input-group">
                    From-
                    <input className='input-time' type='number' name="start-hr" id="start-hr" 
                      value={schedule[selectedWeekday][selectedEvent].from.hr} 
                      onChange={(evt)=> modifySchedule({timeUnit:'hr',timeType:'from',value:evt.target.value}) }
                      min='8' max='14'/>
                    :
                    <input className='input-time' type='number' name="start-min" id="start-min"
                      value={schedule[selectedWeekday][selectedEvent].from.min}
                      onChange={(evt)=> modifySchedule({timeUnit:'min',timeType:'from',value:evt.target.value}) }
                      min='0' max='59'/>
                </div>
                <div className="input-group">
                    To-
                    <input className='input-time' type='number' name="end-hr" id="end-hr"
                      value={schedule[selectedWeekday][selectedEvent].to.hr}
                      onChange={(evt)=> modifySchedule({timeUnit:'hr',timeType:'to',value:evt.target.value}) }
                      min='9' max='15'/>
                    :
                    <input className='input-time' type='number' name="end-min" id="end-min" 
                      value={schedule[selectedWeekday][selectedEvent].to.min}
                      onChange={(evt)=> modifySchedule({timeUnit:'min',timeType:'to',value:evt.target.value}) }
                      min='0' max='59'/>
                </div>
            </div>
        </>
    )
}

export default Scheduler;