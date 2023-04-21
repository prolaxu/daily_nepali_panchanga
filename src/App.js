import React,{useState,useEffect} from 'react';
import {
  eng_to_nep
} from './utils/nepali_num';
import {
  bs,
  today_np
} from './utils/bs';

const Row=({row})=>{
  return (
    <div className="row">
        <div className="key">{row.title}</div>
        <div className="value">{row.value}</div>
    </div>
  );
}
const AllRows=({panchang})=>{
  let  rows = [];
  panchang.forEach((row,index)=>{
    rows.push(<Row row={row} key={index}/>);
  });
  return rows;
}
function App() {
  const [panchang,setPanchang]=useState([]);
  const today=today_np();
  const [year,setYear]=useState(today[0]);
  const [month,setMonth]=useState(today[1]);
  const [day,setDay]=useState(today[2]);
  
  useEffect(()=>{
    fetch(`https://raw.githubusercontent.com/prolaxu/nepali-panchang-json-db/main/${year}/${month}/${day}.json`)
    .then(res=>res.json())
    .then(data=>{
      setPanchang(data);
    })
  },[year,month,day]);


  // Years component
  const Years=({year,setYear})=>{
    const years=[];
    for(let  i=2078;i<=2090;i++){
      years.push(<option value={i} key={i} selected={year === i}>{eng_to_nep(i)}</option>);
    }
    return <select onChange={
      e=>{
        setYear(e.target.value);
      }
    }>{years}</select>;
  }
  // Months component
  const Months=({month,setMonth})=>{
    const months=[];
    for(let  i=1;i<=12;i++){
      months.push(<option value={i} key={i} selected={month === i}>{eng_to_nep(i)}</option>);
    }
    return <select onChange={
      e=>{
        setMonth(e.target.value);
      }
    }>{months}</select>;
  }
  // Days component
  const Days=({day,setDay})=>{
    const days=[];
    const days_in_month=bs[year][month-1];
    for(let  i=1;i<=days_in_month;i++){
      days.push(<option value={i} key={i} selected={day === i}>{eng_to_nep(i)}</option>);
    }

    return <select onChange={
      e=>{
        setDay(e.target.value);
      }
    }>{days}</select>;
  }

  return (
    <div className="container">
      <h1>नेपाली पंचांग</h1>
      <div className="panchang-card">
        <div className="panchang-card-body">
            <AllRows panchang={panchang}/>
        </div>
      </div>
        <div className="panchang-card-footer">
        <Years year={year} setYear={setYear} />
        <Months month={month} setMonth={setMonth} />
        <Days day={day} setDay={setDay} />
        </div>
    </div>
  );
}

export default App;
