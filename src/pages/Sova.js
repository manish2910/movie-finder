import React, { useState, useEffect } from 'react';
import Basics from '../components/BasicDetails';
import Smoke from '../components/SmokeDetails';
import Diet from '../components/DietDetails';
import sova from '../components/common/sova.json';

const Sova = () => {
    const [step, setStep] = useState(0);
    const [values, setValues] = useState([]);

    let { q } = sova;

    const nextStep = () => setStep(step + 1);

    const previousStep = () => setStep(step - 1);

    const changeHandler = val => {
        let newValues = [...values, val];
        setValues(newValues);
    }

    useEffect(() => {
        // console.log("useEffect ",values);
    },[values]);

    console.log(values);

    let globalData = [...q];
    let localData = globalData.splice(step, 1)[0];

    switch(step){
        case 0 : {
            return <Basics next={nextStep} handleChange={changeHandler} values={localData} />
        }
        case 1 : {
            return <Diet next={nextStep} handleChange={changeHandler} values={localData} prev={previousStep} />
        }
        case 2 : {
            return <Smoke next={nextStep} handleChange={changeHandler} values={localData} finalValue={values} prev={previousStep}/>
        }
    }
}

export default Sova;