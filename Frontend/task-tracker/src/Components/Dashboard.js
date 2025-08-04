// import React from 'react'

// export default function Dashboard() {
//   const userName = localStorage.getItem("username")

//   function showTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     const currentTime = `${hours}:${minutes}:${seconds}`
//     console.log(currentTime);
// }

// // Update every second
// setInterval(showTime, 1000);
  
//   return (
//     <div className="dashboard-container">
//       <div className='greeting'><h1>Hello <span>{userName}</span> {`time: ${currentTime}`}</h1></div>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const userName = localStorage.getItem("username");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    function showTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }

    // Show time immediately and then update every second
    showTime();
    const timer = setInterval(showTime, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-container">
      <div className='greeting'>
        <h1>Hello <span>{userName}</span> {`Time: ${currentTime}`}</h1>
      </div>
    </div>
  );
}
