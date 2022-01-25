import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  phone: '',
};
const contactOpt = yup.object().shape({
  name: yup.string().required("Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
  phone: yup.string().required(
      "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    ),
});
const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={message => <p>{message}</p>} />;
};
export class ContactsForm extends Component {

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={contactOpt}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">contact name</label>
            <Field
              name="name"
              type="text"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Fill contact name"
              
            />
            <FormError name="name" />
          </div>
          <div>
            <label htmlFor="phone">contact phone</label>
            <Field
              name="phone"
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="Fill contact phone"
              
            />
            <FormError name="phone" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
