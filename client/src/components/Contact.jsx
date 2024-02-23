import React from 'react'
import './contact.css'
import {useFormik} from 'formik'

const Contact = ({contact,toggle}) => {

    const formik = useFormik({
    initialValues: {
      prestation: 'professionnel',
      details:'professionnel',
      prenom:'',
      nom:'',
      email: '',
      telephone:'',
      participants:'',
      date:'',
      msg:'',
      
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  
  return (
    
    <div className={contact? "sidebar-active":"sidebar-container"} /* onClick={toggle} */>  
        <div className={contact? "contact-form active":"contact-form"}>
            <button className="close-btn" onClick={toggle}>X</button>
            <h1 className="formik-title">CONTACTEZ-NOUS</h1>
            <form className="formik" onSubmit={formik.handleSubmit}>
                <div >
                    <label htmlFor="prestation">Sujet de la demande</label>
                    <select name="prestation" id="" onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.prestation}>
                        <option value="professionnel">Prestation professionnel</option>
                        <option value="particulier">Prestation particulier</option>
                    </select>
                </div>
                <div >
                    <label htmlFor="details">Détails de la demande</label>
                    <select name="details" id=""  onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.details}>
                        <option value="professionnel">Prestation professionnel</option>
                        <option value="particulier">Prestation particulier</option>
                    </select>
                </div>
                <div>
                    <div className='row'>
                        <div className="half">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" name="prenom" id="" placeholder='Prénom' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.prenom} />
                        </div>
                        <div className="half">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" name="nom" id="" placeholder='Nom' onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.nom}/>
                        </div>
                        
                    </div>
                </div>
                <div >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Email' onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}/>
                </div>
                <div >
                    <label htmlFor="phone">Téléphone</label>
                    <input type="number" name="phone" id="" placeholder='Numéro de téléphone'onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}/>
                </div>
                < div >
                    <div className="row">
                        <div className="half">
                            <label htmlFor="participants">Participants</label>
                            <input type="text" name="participants" id="" placeholder='Participant'onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.participants}/>
                        </div>
                        <div className="half">
                            <label htmlFor="date">Date</label>
                            <input type="date" name="date" id="" onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date} />
                        </div>
                          
                    </div>
                </div>
                <div>
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" id="" cols="30" rows="10" placeholder='Décrivez votre demande'onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.msg}></textarea>
                </div>
                <div>
                    <button type='submit' className='form-btn'>Envoyez mon message</button>
                </div>
            </form>
            
        </div>
    </div> 
       
    
  )
}

export default Contact