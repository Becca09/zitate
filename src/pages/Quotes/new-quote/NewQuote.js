import React from 'react'
import CustomInput from '../../../components/reusables/Inputs';
import { ToastContainer } from "react-toastify";
import { Formik, Field } from "formik";
import '../../Quotes/new-quote/new-quote.css'

const NewQuote = () => {


   const createQuote = () =>{
    console.log("hello there")
   }


  return (
    <div className='newQuotes'>
       <ToastContainer />
      <Formik
       initialValues={{
        quote: "",
        authorsName: "",
        date: "",
      }}
        validate={(values) => {
          const errors = {};
          if (!values.quote) {
            errors.quote = "Please a enter a quote";
          }
          if (!values.authorsName) {
            errors.authorsName = "Please enter a name";
          }
        
          if (!values.date) {
            errors.date = "Enter a valid date";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          createQuote(
            values.quote,
            values.authorsName,
            values.date,
            
          )
            .then(() => {
              setSubmitting(false);
            })
            .catch(console.log);
        }}
      >
        {({
          isValid,
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
        }) => (
          <>
            <div className="new-quote-form">
              <form onSubmit={handleSubmit}>

              <Field
                  label="Quote"
                  id="quote"
                  name="quote"
                  type="text"
                  inputBodyClassName={"input-body"}
                  labelStyle={"labelStyle"}
                  inputStyle={"input-quote-body"}
                  value={values.quote}
                  component={CustomInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                
                <Field
                  label="Author Name"
                  id="authorsName"
                  name="authorsName"
                  type="text"
                  value={values.authorsName}
                  inputBodyClassName={"input-body"}
                  labelStyle={"labelStyle"}
                  inputStyle={"inputStyle"}
                  component={CustomInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                

                <Field
                  label="Date"
                  id="date"
                  name="date"
                  type="Date"
                  inputBodyClassName={"input-body"}
                  labelStyle={"labelStyle"}
                  inputStyle={"inputStyle"}
                  value={values.date}
                  component={CustomInput}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

            

                <button
                  disabled={!isValid}
                  type="submit"
                  className={isValid ? "submit" : "disabled"}
                >
                  {isSubmitting && "Loading"}
                  {!isSubmitting && "Save "}
                </button>
                </form>
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}

export default NewQuote