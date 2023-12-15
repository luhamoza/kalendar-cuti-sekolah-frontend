const HolidayTable = ({ holidays }) => (
    <table className='holiday-table'>
        <thead>
        <tr>
            <th>Holiday Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Total Days</th>
        </tr>
        </thead>
        <tbody>
        {holidays.map(holiday =>
            <tr key={holiday.name}>
                <td data-label="" className="holiday-name-cell">{holiday.name}</td>
                <td data-label="Start Date" >{holiday.dateStart}</td>
                <td data-label="End Date" >{holiday.dateEnd}</td>
                <td data-label="Total Days" >{holiday.totalDays}</td>
            </tr>
        )}
        </tbody>
    </table>
);

export default HolidayTable;
