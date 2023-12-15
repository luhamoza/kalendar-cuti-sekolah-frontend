const GroupHeader = ({ group, session, states }) => (
    <>
        <h2>Group: {group}</h2>
        <p>Session: {session}</p>
        <p>State: {states.join(', ')}</p>
    </>
);

export default GroupHeader;
