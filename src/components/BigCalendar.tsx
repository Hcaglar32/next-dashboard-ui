"use client"
import {Calendar, momentLocalizer, View, Views} from 'react-big-calendar';
import moment from 'moment'
import {calendarEvents} from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from 'react';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = React.useState<View>(Views.WORK_WEEK);

    const handleonChangeView=(selectedView: View) =>{
        setView(selectedView);
    }

    return(
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week","day"]}
            view={view}
            onView={handleonChangeView}
            style={{ height: "100%" }}
            min={new Date(0,0,0,8,0,0)}
            max={new Date(0,0,0,17,0,0)}
            defaultDate={new Date(2025,7,25)}
        />
    )
}

export default BigCalendar;