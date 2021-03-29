import { useEffect, useState } from 'react';

const Diet = ({ next, prev ,handleChange, values }) => {
    const [chooseAnswer, setChooseAnswer] = useState({
        id:"",
        group:"",
        key:[],
        modalValue:""
    });

    let { heading, questions } = values;
    let { group, key, id, modalValue } = chooseAnswer;

    const continueStep = (e) => {
        e.preventDefault();
        if(key && key.length != 0){
            questions.find(ele => {
                if(ele.id === id){
                    ele?.options.find(el => {
                        if(key.includes(el.key)){
                            if(modalValue && 'value' in el){
                                el.value = modalValue;
                            }
                            el.isChecked = true;
                        }
                    })
                }
            });
            handleChange(values);
            next();
        }
    }

    const previousStep = (e) => {
        e.preventDefault();
        prev();
    }

    const handleClick = (e, id) => {
        if(e.group === group){
            if(!key.includes(e.key)){
                if(e.modal && modalValue === ''){
                    let others = prompt("Enter Text");
                    if(others.trim()){
                        setChooseAnswer({
                            ...chooseAnswer,
                            id,
                            modalValue:others,
                            key:[...key, e.key]
                        });
                    }
                }else{
                    setChooseAnswer({
                        ...chooseAnswer,
                        id,
                        key:[...key, e.key]
                    });
                }
            }
        }else{
            if(e.modal && modalValue === ''){
                let others = prompt("Enter Text");
                if(others.trim()){
                    setChooseAnswer({
                        ...chooseAnswer,
                        id,
                        modalValue:others,
                        group:e.group,
                        key:[e.key]
                    });
                }
            }else{
                setChooseAnswer({
                    ...chooseAnswer,
                    id,
                    group:e.group,
                    key:[e.key]
                })
            }
        }
    }

    useEffect(() => {
        console.log(chooseAnswer);
    },[chooseAnswer])

    return (
        <div style={{ width:"700px", margin:"0 auto" }}>
            <div style={{ margin:"10px 0px" }}>{heading.toUpperCase()}</div>
            {questions.map((ele, i) => {
                let { id, options } = ele;
                return options.map((el, i) => (
                        <div key={i} onClick={handleClick.bind(null, el, id)} 
                            style={key.includes(el.key) ? { border:'1px solid blue', margin:"8px 0px", padding:"10px", borderRadius:"10px", cursor:"pointer" } : { border:'1px solid lightgrey', margin:"8px 0px", padding:"10px", borderRadius:"10px", cursor:"pointer" }}>
                            <div>{el.label}</div>
                            <p>{el.text}</p>
                        </div>
                ))
            })}
            <button onClick={previousStep} style={{ padding:"10px", margin:"15px 0px", width:"30%", display:"inline-block", cursor:"pointer" }}>Previous</button>
            <button onClick={continueStep} style={{ padding:"10px", margin:"15px 0px", width:"30%", display:"inline-block", cursor:"pointer" }}>Next</button>
        </div>
    )
}

export default Diet;