// function App() {
//   return (
//     <>
//       <h1>Veeresh Kumar | MCA </h1>  
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';

function SmartBulb() {
  const [isOn, setIsOn] = useState(false); // "isOn" remembers if the bulb is ON or OFF

  return (
    <div>
      <p>The bulb is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default SmartBulb