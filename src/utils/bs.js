import {ADToBS}  from "bikram-sambat-js"
// arrays of days in nepali calender fron 2078 to 2090
const bs={
    '2078': [ 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365 ],
    '2079': [ 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365 ],
    '2080': [ 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365 ],
    '2081': [ 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366 ],
    '2082': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
    '2083': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
    '2084': [ 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
    '2085': [ 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366 ],
    '2086': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
    '2087': [ 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366 ],
    '2088': [ 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365 ],
    '2089': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
    '2090': [ 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365 ],
}
const today_np=()=>{
    const today=new Date();
    const year=today.getFullYear();
    const month=today.getMonth()+1;
    const day=today.getDate();
    return ADToBS(`${year}-${month}-${day}`).split('-');
}
export {
    bs,
    today_np
}