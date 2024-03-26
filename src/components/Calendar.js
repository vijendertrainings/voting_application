//the calendar component
const Calendar=({feed_data})=>{    
    return (
        <>
            <div className="rounded-lg mb-2 p-2 bg-white shadow-lg">
                <p>Calendar Post 1</p>
                {/* <p>Second query message = {feed_data[1].query_title}</p> */}
            </div>
            <div className="rounded-lg mb-2 p-2  bg-white shadow-lg">
                <p>Calendar Post 2</p>
                {/* <p>Second query message = {feed_data[1].query_title}</p> */}
            </div>
        </>
    );
}

export default Calendar;