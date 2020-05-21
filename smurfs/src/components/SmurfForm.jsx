import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { v4 as uuidv4 } from "uuid";

class SmurfForm extends React.Component {
  //creating my own props for the field that I now destructure out
  //any time that the Field input calls renderInput, it's going to pass in a number of arguments.
  renderInput({ input, label }) {
    //console.log(formProps);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    //console.log(formValues)
    axios.post("http://localhost:3333/smurfs", formValues).then((response) => {
      // console.log("Post Response", response)
    });
    this.props.fetchPosts();
    //this.props.fetchPosts()
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props)

    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
        style={{ padding: "20px" }}
      >
        <Field name="name" component={this.renderInput} label="Name" />
        <Field name="age" component={this.renderInput} label="Age" />
        <Field name="height" component={this.renderInput} label="height" />
        <button className="ui button primary" type="submit">
          Submit
        </button>
        <div>
          {this.props.smurfs.map((smurf) => {
            return (
              <div key={uuidv4()}>
                <div>{smurf.name}</div>
                <div>{smurf.age} </div>
                <div>{smurf.height} </div>
              </div>
            );
          })}{" "}
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return { smurfs: state.smurfs };
};

//saved for notes: we only need smurfs, so lets assign that here. we call fetchposts, fetchposts dispatches to our reducer, reducer reduces the state to the store, we capture that here. We will return exactly what we need from the state received from matchStateToProps.

const decoratedComponent = connect(mapStateToProps, { fetchPosts })(SmurfForm);

export default reduxForm({ form: "newSmurfs" })(decoratedComponent);

//export default reduxForm({ form: "newSmurfs" })(SmurfForm);
    