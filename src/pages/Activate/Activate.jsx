import React, { useState } from 'react';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import { setAuth } from '../../store/authSlice';

const steps = {
    1: StepName,
    2: StepAvatar,
};

const Activate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];
    const [unMounted, setUnMounted] = useState(false);
    const [loading, setLoading] = useState(false);

    const history=useHistory();
    const dispatch=useDispatch();

   async function  onNext() {
        // // history.push('/rooms');
        // const avatar="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        // try {
        //     const { data } = await activate({ name, avatar });
        //     if (data.auth) {
        //         console.log("data after profile",data)
        //         if (!unMounted) {
        //             dispatch(setAuth(data));
        //         }
        //     }
        // } catch (err) {
        //     console.log(err);
        // } finally {
        //     setLoading(false);
        // }
        setStep(step + 1);
    }
    return (
        <div className="cardWrapper">
            <Step onNext={onNext}
            //  setUnMounted={setUnMounted}
             ></Step>
        </div>
    );
};

export default Activate;
