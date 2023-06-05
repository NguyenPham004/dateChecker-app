import './App.css';
import React, {useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

function isValidDate(day, month, year) {
  if (year < 1 || year > 9999) {
    return false;
  }

  if (month < 1 || month > 12) {
    return false;
  }

  if (day < 1) {
    return false;
  }

  if (month === 2) {
    if (isLeapYear(year)) {
      return day <= 29;
    } else {
      return day <= 28;
    }
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return day <= daysInMonth[month - 1];
}

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleCheckValidity = () => {
    const isValid = isValidDate(parseInt(day), parseInt(month), parseInt(year));
    setIsValid(isValid);
  };

  return (
    <div className='form-box'>
      <form className='form'>
        <span className='title'>Date Time Checker</span>
        <div className='form-container'>
          <label>
            Day:
            <input type="number" value={day} onChange={(e) => setDay(e.target.value)} />
          </label><br/>
        </div>

        <div className='form-container'>
          <label>
            Month:
            <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
          </label><br/>
        </div>

        <div className='form-container'>
          <label>
            Year:
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
          </label><br/>
        </div>
        <button onClick={handleCheckValidity} >Check Validity</button>
          <div className='form-container'>
          {isValid !== null && (
            <p>{isValid ? `The date is ${day}/${month}/${year}.` : 'The date is invalid.'}</p>
          )}
          </div>
      </form>
    </div>
  );
}

export default App;






// function App() {
//   const [day, setDay] = useState('');
//   const [month, setMonth] = useState('');
//   const [year, setYear] = useState('');


//   const handleCheckDate = () => {
//     if (!day || !month || !year) {
//       alert('Vui lòng nhập đầy đủ thông tin ngày, tháng, năm!');
//       return;
//     }

//     const parsedDay = parseInt(day);
//     const parsedMonth = parseInt(month);
//     const parsedYear = parseInt(year);
//     let res = 0;

//     if (isNaN(parsedDay) || isNaN(parsedMonth) || isNaN(parsedYear)) {
//       alert('Vui lòng nhập đúng định dạng ngày, tháng, năm!');
//       return;
//     }

//     if (parsedMonth < 1 || parsedMonth > 12) {
//       alert('Tháng không hợp lệ!');
//       return;
//     }
//     if (parsedDay < 1 || parsedDay > 31) {
//       alert('Ngày không hợp lệ!');
//       return;
//     }
    
//     if ((parsedMonth === 4 || parsedMonth === 6 || parsedMonth === 9 || parsedMonth === 11) && parsedDay > 30) {
//       alert('Ngày không hợp lệ!');
//       return;
//     }
//     if ((parsedDay <= 29 && parsedMonth === 2) || (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 !== 0) {
//       alert('Năm nhuận!');
//     }
//     if (parsedMonth === 2 && parsedDay > 28 != (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 !== 0) {
//       alert('Ngày không hợp lệ!');
//       return;
//     }
//     alert(`Ngày ${parsedDay} tháng ${parsedMonth} năm ${parsedYear}`)

//   }

//   return (
//     <div className='form-box'>
//       <form className='form'>
//         <span className='title'>Date Time Checker</span>
//         <div className='form-container'>
//           {/* <label>Day </label> */}
//           <input type='text' placeholder='Day' className='input' value={day} onChange={(e) => setDay(e.target.value)} />
//         </div>
//         <div className='form-container'>
//           {/* <label>Month</label> */}
//           <input type='text' placeholder='Month' className='input' value={month} onChange={(e) => setMonth(e.target.value)} />
//           </div>
//         <div className='form-container'>
//           {/* <label>Year</label> */}
//           <input type='text' placeholder='Year' className='input' value={year} onChange={(e) => setYear(e.target.value)} />
//         </div>
//         <div >
//           <button onClick={handleCheckDate}>Check Date</button>
//         </div>
        
//       </form>
//     </div>
//   );
// }
// export default App;


