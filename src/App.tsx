import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import './App.css';

function App() {
  const [date, setDate] = useState<any>(null);
  return (
    <div>
    <div className="card flex justify-content-center">
    <Button label="Check" icon="pi pi-check" />
    <br></br>
</div>
   <div className="card flex justify-content-center">
   <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
</div>

</div>
  );
}

export default App;
