import './App.css';
import React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleCheckDate = () => {
    if (!day || !month || !year) {
      alert('Vui lòng nhập đầy đủ thông tin ngày, tháng, năm!');
      return;
    }

    const parsedDay = parseInt(day);
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear)) {
      alert('Vui lòng nhập đúng định dạng ngày, tháng, năm!');
      return;
    }

    if ((parsedYear % 4 === 0 && parsedYear % 100 === 0) || parsedYear % 400 === 0) {
      alert('Năm nhuận!');
    }

    if (parsedMonth < 1 || parsedMonth > 12) {
      alert('Tháng không hợp lệ!');
      return;
    }
    if (parsedDay < 1 || parsedDay > 31) {
      alert('Ngày không hợp lệ!');
      return;
    }
    if (parsedMonth === 2 && parsedDay > 28) {
      alert('Ngày không hợp lệ!');
      return;
    }
    if ((parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11) && parsedDay > 30) {
      alert('Ngày không hợp lệ!');
      return;
    }


  }

  return (
    <div className='input-container'>
      <h1>Date Time Checker</h1>
      <div>
        <label>Day: </label>
        <input type='text' value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div>
        <label>Month</label>
        <input type='text' value={month} onChange={(e) => setMonth(e.target.value)} />
        </div>
      <div>
        <label>Year</label>
        <input type='text' value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
      <div>
        <button onClick={handleCheckDate}>Check Date</button>
        </div>
      </div>
  );
}
export default App;
