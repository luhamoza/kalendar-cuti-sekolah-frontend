import { useEffect, useState } from 'react';
import './../style/App.css';
import GroupHeader from './GroupHeader';
import HolidayTable from './HolidayTable';

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
            <main className='main-content'>
                {groups.map(group =>
                    <div key={group.group} className='group'>
                        <GroupHeader group={group.group} session={group.session} states={group.state} />
                        <div className="table-responsive">
                            <HolidayTable holidays={group.holidays} />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
