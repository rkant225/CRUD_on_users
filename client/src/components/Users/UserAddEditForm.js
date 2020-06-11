import React from 'react';
import {reduxForm, Field} from 'redux-form';

class UserAddEditForm extends React.Component {
    // Common method to render Input
    renderInput =(fieldProps) =>{
        return (
            <div className="field user-input">
                <label>{fieldProps.label}</label>
                <input {...fieldProps.input}/>
                <span style={{color : 'red'}}>{fieldProps.meta.touched && fieldProps.meta.error}</span>
            </div>
        );
    }

    // method to validate required field
    required = (value) =>{
        return value === "" || value === undefined ? "This field is required...!!!" : undefined;
    }

    // function to vaidate length (closure)
    validateMinimumLength = (length) => (value) =>{
        return value && value.length < length ? `Length must be more than ${length}` : undefined;
    }
    validateMinimumLength10 = this.validateMinimumLength(10);
    validateMinimumLength6 = this.validateMinimumLength(6);

    //Validate e-mail
    validateEmail = (value)=>{
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(value.toLowerCase()) ? undefined : "Please enter valid E-mail address."
    }

    validateNumber = (value)=>{
        const regex = /^[0-9]+$/;
        return regex.test(value.toLowerCase()) ? undefined : "Only numbers are allowed."
    }

    // Form submit handler, Currently we are simply navigating to Map's component.
    // Navigation will happen only if user have provided some data for both the fields.
    onSubmit = (formData) => {
        this.props.onSubmit(formData);
    }

    render(){
        return(
            <div className="info-collection-form adduser-form">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="name" component={this.renderInput} label="Name" validate={[this.required]}/>
                    <Field name="age" component={this.renderInput} label="Age" validate={[this.required, this.validateNumber]}/>
                    <Field name="email" component={this.renderInput} label="Email-id" validate={[this.required, this.validateEmail]}/>
                    <Field name="mobile" component={this.renderInput} label="Mobile Number" validate={[this.required, this.validateNumber, this.validateMinimumLength10]}/>
                    <Field name="address" component={this.renderInput} label="Address" validate={[this.required, this.validateMinimumLength10]}/>
                    <Field name="country" component={this.renderInput} label="Country" validate={[this.required]}/>
                    <Field name="pin" component={this.renderInput} label="PIN" validate={[this.required, this.validateNumber, this.validateMinimumLength6]}/>
                    <button type="submit" className="ui green button" disabled={this.props.submitting}>Save Details</button>
                    <button type="button" className="ui red button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset}>Clear Values</button>
                </form>
            </div>
        );  
    } 
    
}

export default reduxForm({form : 'streamForm', destroyOnUnmount: true})(UserAddEditForm);