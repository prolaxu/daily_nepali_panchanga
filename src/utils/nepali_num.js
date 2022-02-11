// array of neplai number 0 to 9
const nepali_num=['०','१','२','३','४','५','६','७','८','९'];
// convert english number to nepali number
const eng_to_nep=num=>{
    let nep='';
    let num_str=num.toString();
    for(let i=0;i<num_str.length;i++){
        nep+=nepali_num[num_str[i]];
    }
    return nep;
}
// convert nepali number to english number
const nep_to_eng=num=>{
    let eng='';
    let num_str=num.toString();
    for(let i=0;i<num_str.length;i++){
        eng+=nepali_num.indexOf(num_str[i]);
    }
    return eng;
}
export {eng_to_nep,nep_to_eng};