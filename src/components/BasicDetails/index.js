import { useState } from 'react';

const Basics = ({ next, handleChange, values }) => {
    const [chooseAnswer, setChooseAnswer] = useState({
        age:"",
        height:"",
        weight:"",
        gender:"",
        pregnant:"",
        contraceptive:""
    });

    let { heading, questions } = values;

    let { age, height, weight, gender } = chooseAnswer;
    
    const continueStep = (e) => {
        e.preventDefault();
        if(age && height && weight && gender){
            handleChange(values);
            next();
        }
    }

    const changeHandler = (e) => {
        let { value, id } = e.target;
        if(value){
            questions.find(ele => {
                if(ele.id === id){
                    ele.value = value;
                    return;
                }
            })
        }
        setChooseAnswer({
            ...chooseAnswer,
            [id]:value
        });
    }

    return (
        <div style={{ width:"700px", margin:"0 auto" }}>
            <div style={{ margin:"10px 0px" }}>{heading.toUpperCase()}</div>
            {
                questions.map((ele, i) => {
                    let { id, label, type, placeholder, validators, options, dependentOn, dependentValue, value } = ele;
                    let { min, max, isRequired } = validators;
                    
                    switch(type){
                        case 'dropdown':{
                            let list = questions.filter(ele => ele.id === dependentOn)[0];
                            if( list && dependentValue){
                                if(gender === 'M' || gender === ''){
                                    return;
                                }
                                if(chooseAnswer[`${list.id}`] === dependentValue){
                                    return (
                                        <>
                                            <label style={{ margin:'10px 0px', display:"block" }}>{label}</label>
                                            <select id={id} onChange={changeHandler} style={{padding:"10px", width:"100%", cursor:"pointer"}} required={isRequired}>
                                                {options && options.map(ele => {
                                                    return (
                                                        <option key={ele.key} value={ele.key}>{ele.label}</option>
                                                    )
                                                })}
                                            </select>
                                        </>
                                    )
                                }else{
                                    return;
                                }
                            }else{
                                return (
                                    <>
                                        <label style={{ margin:'10px 0px', display:"block" }}>{label}</label>
                                        <select id={id} onChange={changeHandler} style={{padding:"10px", width:"100%", cursor:"pointer"}} required={isRequired}>
                                            {options && options.map(ele => {
                                                return (
                                                    <option key={ele.key} value={ele.key}>{ele.label}</option>
                                                )
                                            })}
                                        </select>
                                    </>
                            )
                        }
                        }
                        case 'number':{
                            return (
                                <>
                                    <label style={{ margin:'10px 0px' }}>{label}</label>
                                    <input style={{ display:'block', padding:"10px", width:"100%", marginBottom:"5px"}}
                                        key={i} type={type} placeholder={placeholder} id={`${id}`} 
                                        minLength={min} maxLength={max} required={isRequired} onChange={changeHandler} />
                                </>
                            )
                        }
                    }
                })
            }
            <button type="submit" onClick={continueStep} style={{ padding:"10px", margin:"15px 0px", width:"30%", display:"block", cursor:"pointer" }}>Next</button>
        </div>
    )
}

export default Basics;