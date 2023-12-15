import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [groups, setGroups] = useState(null);

    useEffect(() => {
        fetch('https://kalendar.onrender.com/holidays')
            .then(response => response.json())
            .then(data => setGroups(data))
            .catch(err => console.error(err));
    }, []);

    if (!groups) {
        return 'Loading...';
    }

    return (
        <div className='app'>
            <header className='app-header'>
                <h1>Kalendar Cuti Sekolah</h1>
            </header>
            <main>
                {groups.map(group =>
                    <div key={group.group}>
                        <h2>Group: {group.group}</h2>
                        <p>Session: {group.session}</p>
                        <p>State: {group.state.join(', ')}</p>
                        <div className="table-responsive">
                            <table className='holiday-table'>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Total Days</th>
                                </tr>
                                </thead>
                                <tbody>
                                {group.holidays.map(holiday =>
                                    <tr key={holiday.name}>
                                        <td data-label="" className="holiday-name-cell">{holiday.name}</td>
                                        <td data-label="Start Date">{holiday.dateStart}</td>
                                        <td data-label="End Date">{holiday.dateEnd}</td>
                                        <td data-label="Total Days">{holiday.totalDays}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
