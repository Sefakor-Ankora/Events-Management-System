import React from 'react'
import {
   ,
  } from 'react-hooks-helper';
import Signin from '../components/Login/Signin';
import Register from '../components/Login/Register';

  useStep

const defaultData = {
  email: '',
  password: '',
};
const steps = [
  { id: "names" },
  { id: "register" },
  { id: "review" },
  { id: "submit" },
]





const Stepforms = () => {
    const [formData, setForm] = useForm(defaultData);
const { step, navigation } = useStep({
  steps,
  intialSteps:0,
});

switch(step.id) {
  case "names" :
    return <Signin/ >;
    case "register" :
      return <Register/ >; 

}





  return (
    <div>
     <Signin />
      <Register/>
    </div>
  )
}

export default Stepforms;



