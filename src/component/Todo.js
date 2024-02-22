import React, { useState } from 'react'
import { SlCalender } from "react-icons/sl";
import { LuUserCircle2 } from "react-icons/lu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Todo = () => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleIconClick = () => {
        setCalendarOpen(!calendarOpen);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setCalendarOpen(true);
    };
    return (
        <>
            <div className='todo-task col-12' style={{ display: 'flex' }}>
                <div className='todo-task-title col-4' >
                    <div className='title-container col-12' style={{ display: 'flex' }}>
                        <h3 className='col-4'>Task : todo</h3>
                        <div className='task-date col-4' style={{ display: 'flex', paddingTop: '5px' }}><SlCalender onClick={handleIconClick} />
                            {calendarOpen && (
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    inline // To show the calendar inline
                                />
                            )}
                            <select style={{ height: '20px', border: 'none', backgroundColor: 'var(--body-color)' }}>
                                <option selected>Today</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                        <div className='select-users col-4' style={{ alignItems: 'center', textAlign: 'center', display: 'flex' }} >
                            <LuUserCircle2 />
                            <div className='col-12'>
                                <select style={{ border: 'none', backgroundColor: 'var(--body-color)' }}>
                                    <option selected>All Members</option>
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='tables-container col-12'>
                <div className='task-table col-9' style={{ marginTop: '30px' }}>
                    <div className='table-container col-12'>
                        <table className="col-12" >
                            <tr>
                                <th className='col-4' style={{ textAlign: 'left' }}>TASK</th>
                                <th className='col-2' style={{ textAlign: 'left' }}>CLIENT</th>
                                <th className='col-2' style={{ textAlign: 'left' }}>START</th>
                                <th className='col-2' style={{ textAlign: 'left' }}>DUE</th>
                                <th className='col-2' style={{ textAlign: 'left' }}>STATUS</th>
                            </tr>
                            <tr className="col-12">
                                <td className='col-4' style={{ padding: '9px 9px 9px 0' }}>SNP-EN(US)Team Lead Review</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}></td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Jan-05-203</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Jan-08-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}><button className='col-6' style={{ borderRadius: '10px' }}>No status</button></td>
                            </tr>
                            <tr className="col-12">
                                <td className='col-4' style={{ padding: '9px 9px 9px 0' }}>SNP-EN(US)File Extension</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}></td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Jan-06-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Jan-08-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}><button className='col-6' style={{ borderRadius: '10px' }}>No status</button></td>
                            </tr>
                            <tr className="col-12">
                                <td className='col-4' style={{ padding: '9px 9px 9px 0' }}>Biz Formation-Prepare & Apply for EIN Number-Task</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}></td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Nov-03-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Nov-03-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}><button className='col-6' style={{ borderRadius: '10px' }}>No status</button></td>
                            </tr>
                            <tr className="col-12">
                                <td className='col-4' style={{ padding: '9px 9px 9px 0' }}>SNP-EN(US)Team Lead Review</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}></td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Feb-06-2024</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Feb-09-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}><button className='col-6' style={{ borderRadius: '10px' }}>No status</button></td>
                            </tr>
                            <tr className="col-12">
                                <td className='col-4' style={{ padding: '9px 9px 9px 0' }}>SNP-EN(US)Team Lead Review</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}></td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Feb-06-2024</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}>Feb-09-2023</td>
                                <td className='col-2' style={{ padding: '9px 9px 9px 0' }}><button className='col-6' style={{ borderRadius: '10px' }}>No status</button></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo