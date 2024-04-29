import '../timeline.css';
import React from 'react';
import timelineElements from './../timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <div className='main-container'>
            <VerticalTimeline>
                {
                    timelineElements.map(element => (
                        <VerticalTimelineElement
                        key={element.id}
                        date={element.date}
                        dateClassName="date"
                        className="custom-timeline-element" 
                        >
                            <h3 className="vertical-timeline-element-title" 
                            style={{ marginRight: `${-200-(element.title.length*14)}px` }} // Attempted fix at continuing issue
                            >{element.title}</h3>
                            <p>{element.description}</p>
                        </VerticalTimelineElement>
                    ))
                }
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;