import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-responsive-modal';
import axios from 'axios';
import ReactDOM from 'react-dom';



const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .required('Required'),
});


const Modalonclick = (props) => {
  console.log(props.link)
    const [state, setstate] = useState(false)
    const [button, setbutton] = useState(props.class)

    const onOpenModal = () => {
        setstate(true);
    }
    const onCloseModal = () => {
        setstate(false);
    }
    return (
        <div>
        <button className={props.class} onClick={onOpenModal}>{props.text}</button>
       
        <Modal open={state} onClose={onCloseModal} center className="modal">
        <div className="modal-card">
          <section className="modal-card-body">
          <header class="modal-card-head">
          <p class="modal-card-title">{props.propertyName}</p>
          
        </header>
          <Formik
          initialValues={{
            firstName: '',
            phoneNumber: '',
            email: '',
            message:'',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            axios.post("https://3346ysw4wk.execute-api.us-east-2.amazonaws.com/Firstlive/first", {values})
            // same shape as initial values
            document.getElementById("root").style.display="none";
            setstate(false)
            const element = <h1 style={{textAlign:"center", marginTop:"50px", fontWeight:"800"}}>You successfully have submitted the details, We will contact you shortly.<a href={props.link} target="_blank" style={{fontSize:"32px"}}>Download {props.brouchere}</a></h1>;
            ReactDOM.render(element,document.getElementById("details"));
            
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form >
            <div className="field">
             <label className="label">Name</label>     
              <Field name="firstName" className={errors.firstName && touched.firstName ? "input is-danger" : "input"} placeholder="Your Name"/>
              {errors.firstName && touched.firstName ? (
                <div style={{color:"red"}}>{errors.firstName}</div>
              ) : null}
            </div>

            <div className="field">
            <label className="label">Phone Number</label> 
              <Field name="phoneNumber" className={errors.phoneNumber && touched.phoneNumber ? "input is-danger" : "input"} placeholder="Your phone Number"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div style={{color:"red"}}>{errors.phoneNumber}</div>
              ) : null}
             </div>

             <div className="field">
            <label className="label">Email</label> 
              <Field name="email" type="email" className={errors.email && touched.email ? "input is-danger" : "input"} placeholder="Your Email"/>
              {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}
            </div>

            <div className="field">
            <label className="label">Your Message</label> 
            <Field className="textarea" placeholder="Textarea" name="message"/>
            </div>

            <button type="submit" className="button is-link" name="submit">Submit</button>
            </Form>
          )}
        </Formik>
           </section>
          </div>
      </Modal>
      </div>
    
    );
};

export default Modalonclick;