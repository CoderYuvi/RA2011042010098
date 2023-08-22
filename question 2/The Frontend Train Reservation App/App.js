import React from 'react';

function TrainSchedule() {
  const schedules = [
    {
      id: 1,
      trainNumber: 'TR123',
      departureTime: '08:00 AM',
      destination: 'City A',
    },
    {
      id: 2,
      trainNumber: 'TR456',
      departureTime: '10:30 AM',
      destination: 'City B',
    },
    {
      id: 3,
      trainNumber: 'TR789',
      departureTime: '01:15 PM',
      destination: 'City C',
    },
  ];
  return (
    <div>
      <h2>Train Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.trainNumber}</td>
              <td>{schedule.departureTime}</td>
              <td>{schedule.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainSchedule;
