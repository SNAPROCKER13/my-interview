import logo from './logo.svg';
import './App.css';

import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import DateTimes from './DateTimes';

function App() {
  return (
    <div className="App">

        <div className="select-doctors">

          <div className="group-selected">
            <div className="selected">
              <select style={{width:'100%', padding:"10px 0 10px 0"}}>
                <option>คุณหมอสมมติ ทดสอบ</option>
              </select>
            </div>

            <div className='group-image'>
              <h2>ทันตแพทย์</h2>

              <div className='image'></div>
            </div>
          
            <div className="box">
              เวลาเข้างาน 09:00 - 19:00 น.
            </div>
          </div>

          <div className="datetimes">
            <DateTimes></DateTimes>
          </div>

        </div>
      


        <div className="room">

          <div className="profile">

            <div>
              <h2>วันที่ 30 ม.ค. 2564</h2>
            </div>

            <div className="money">
              <h5>รายได้ทั้งหมด 0.00 บาท</h5>
              <button style={{borderColor:"orange", backgroundColor:'white', width:'50px', height:'40px', boxShadow:'1px 1px 2px orange', borderRadius:'3px', margin:"0px 0px 0px 10px"}}></button>
            </div>
           
          </div>

          <div className="group-room">
            <div className="room1">
              <Room1></Room1>
            </div>
            <div className="room2">
              <Room2></Room2>
            </div>
            <div className="room3">
              <Room3></Room3>
            </div>
          </div>

        
          
        </div>
    </div>
  );
}

export default App;
