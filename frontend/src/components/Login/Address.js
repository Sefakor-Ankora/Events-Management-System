import React from 'react';
import { useForm } from "react-hook-form";


export const Address = ({ formData, setForm, navigation }) => {
  const {email,password,confirmpassword} = formData;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);


  return (
       <form onSubmit={handleSubmit(onSubmit)}>
       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Registration</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email"
                  ref={register({required: true, pattern: /^\S+@\S+$/i})}
                  placeholder="example@gmail.com"
                  id="email"
                  value= {email}
                  onChange={setForm}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  ref={register({ required: true, minLength: 10, pattern: /\d+/ })}
                  id="password"
                  value= {password}
                  placeholder="Password here"
                  onChange={setForm}
                />
              </div>
                <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="confirmpassword">Confirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="confirmpassword"
                  id="password"
                  value= {confirmpassword}
                  required={true}
                  onChange={setForm}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Back"
                color="primary"
                style={{marginRight: '1rem'}}
                onClick={() => navigation.previous()}
              />
               <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Next"
                onClick={() => navigation.next()}
              />
              <div/>
            </div>
          </div>
        </main>
      </article>
    </form>
  );
}
export default Address;
