import React from 'react';
import './Page.css'; // Assuming you have a corresponding CSS file for styles
import { useParams } from 'react-router-dom'; // Import for accessing route parameters

function Page() {
  // Use useParams hook to access machine ID from the route
  const { machineId } = useParams();

  // Data for each machine (assuming data is fetched or managed elsewhere)
  const machineData = [
    {
      id: 1,
      img: 'path/to/image1.jpg', // Replace with actual image paths
      title: 'The 1kvar Machine',
      description:
        'This page provides information about the 1kvar machine and helps solve your queries related to it.',
    },
    {
      id: 2,
      img: 'path/to/image2.jpg',
      title: 'The 2kvar Machine',
      description: `Reactive Power Compensation: The 150 kVAR panel provides automatic or manual reactive power compensation, reducing the lagging power factor caused by inductive loads.
        Durability: Designed with high-quality materials to withstand harsh environments, ensuring reliable operation even under continuous heavy load conditions.
        Automatic Power Factor Correction (APFC): Equipped with APFC relays to monitor and regulate the power factor in real time.
        Capacitor Bank Integration: The panel houses capacitor banks with a total reactive power of 150 kVAR, which are switched on or off based on the system's demand.
        User-Friendly Interface: Comes with a clear control panel, display units, and indicators for real-time monitoring of parameters such as:
        - Power factor
        - Voltage and current levels
        - Load variations.
        Safety Mechanisms: Integrated with overload protection, short-circuit protection, and temperature monitoring to ensure safe operation.`,
    },
    // ... other machines
  ];

  // Find the machine data matching the route parameter (machineId)
  const selectedMachine = machineData.find((machine) => machine.id === parseInt(machineId));

  if (!selectedMachine) {
    return <div>Machine not found!</div>; // Handle case where machine ID is invalid
  }

  return (
    <div className="page-container">
      <img src={selectedMachine.img} alt={selectedMachine.title} />
      <h1>{selectedMachine.title}</h1>
      <hr />
      <p>{selectedMachine.description}</p>
    </div>
  );
}

export default Page;