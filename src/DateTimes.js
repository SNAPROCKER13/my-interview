import {useState, useEffect } from "react"

const DateTimes = () => {
  
  const [arr,setArr] = useState([])
  
  useEffect(() => {
    table()
  }, [])

  const table = () => {
    let time = []
    for(let i=10; i <= 19; i++){
        if(i != 19){
        for(let y=0; y <= 45; y=y+15){  
          if(y == 0){
            time.push(`${i} : 00`)
          }else{
            time.push(`${i} : ${y}`)
          }
        }
      }else{
        time.push(`${i} : 00`)
      }
    }
    setArr(time)
    return 0
  }
  
  console.log(arr)

  return(
    <div>
      {arr.map((item,index)=>{
        return(
          <div key={index} style={{listStyle:"none"}} className="list" >
            <div className='times'>
              {item}
            </div>
            <div className='space'></div>
            <div className="box-times"></div>
          </div>
        )
      })}
    </div>
  )

}

export default DateTimes