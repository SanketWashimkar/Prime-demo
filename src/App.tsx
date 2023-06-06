import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import './App.css';

function App() {
  const [date, setDate] = useState<any>(null);
  const [checked, setChecked] = useState<any>(false);
  return (
    <div>
    <div className="card flex justify-content-center">
    <Button label="Check" icon="pi pi-check" />
    <br></br>
</div>
   <div className="card flex justify-content-center">
   <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon />
</div>
<br></br>
<div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} />
        </div>


</div>
  );
}

export default App;
