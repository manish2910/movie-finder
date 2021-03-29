import { useEffect, useState } from 'react';

const Smoke = ({ next, prev, handleChange, values, finalValue }) => {
    const [chooseAnswer, setChooseAnswer] = useState({});

    let { heading, questions } = values;

    const continueStep = (e) => {
        e.preventDefault();
        let { smoking, noofcigratte, whenquitsmoking } = chooseAnswer;

        if(smoking === 'Y'){
            if(noofcigratte){
                questions.find(ele => {
                    if(ele.id === "noofcigratte"){
                        ele.value = noofcigratte;
                        return;
                    }
                });
                handleChange(values);
            }
            return;
        }

        if(smoking === ''){
            return;
        }

        if(smoking === 'Q'){
            if(whenquitsmoking){
                handleChange(values);
            }
            return;
        }

        if(smoking === 'N'){
            handleChange(values);
        }
    }

    const previousStep = (e) => {
        prev();
    }

    const changeHandler = (e) => {
        let { value, id } = e.target;

        questions.find(ele => {
            if(ele.id === id){
                ele.value = value;
                return;
            }else{
                if(!ele.primary){
                    ele.value = ''
                }
                return;
            }
        });

        setChooseAnswer({
            ...chooseAnswer,
            [id]:value
        });
    }

    useEffect(() => {
        let obj = {}
        questions.forEach(ele => {
            let id = ele.id;
            obj = {...obj, [id]:ele.value};
        });
        setChooseAnswer(obj);
    }, []);

    console.log(finalValue);
    
    return (
        <div style={{ width:"700px", margin:"0 auto" }}>
            <div style={{ margin:"10px 0px" }}>{heading.toUpperCase()}</div>
            {
                questions.map((ele, i) => {
                    let { id, label, options, type, value, dependentOn, dependentValue } = ele;
                    
                    switch(type){
                        case "dropdown":{
                            let list = questions.filter(ele => ele.id === dependentOn)[0];

                            if(list && dependentValue){
                                if(chooseAnswer[`${list.id}`] === dependentValue){
                                    return (
                                        <>
                                            <label style={{ margin:'10px 0px', display:"block" }}>{label}</label>
                                            <select id={id} onChange={changeHandler} style={{padding:"10px", width:"100%", cursor:"pointer"}}>
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
                                        <select id={id} onChange={changeHandler} style={{padding:"10px", width:"100%", cursor:"pointer"}}>
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
                        case "range":{
                            let list = questions.filter(ele => ele.id === dependentOn)[0];

                            let { min, max } = ele.validators;

                            if(list && dependentValue){
                                if(chooseAnswer[`${list.id}`] === dependentValue){
                                    return (
                                        <>
                                            <label style={{ margin:'10px 0px', display:"block" }}>{label}</label>
                                            <input style={{ width:"100%", cursor:"pointer" }} type={type} id={id} 
                                                 onChange={changeHandler} min={min} max={max} 
                                                defaultValue={value} 
                                            />
                                        </>
                                    )
                                }else{
                                    return;
                                }
                            }
                        }
                    }
                })
            }
            <button onClick={previousStep} style={{ padding:"10px", margin:"15px 0px", width:"30%", display:"inline-block", cursor:"pointer" }}>Previous</button>
            <button onClick={continueStep} 
                style={{ padding:"10px", margin:"15px 0px", width:"30%", display:"inline-block", cursor:"pointer" }} 
                disabled={chooseAnswer.disabled}>SUBMIT</button>
            <div>{JSON.stringify(finalValue)}</div>
        </div>
    )
}

export default Smoke;