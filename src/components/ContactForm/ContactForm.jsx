import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import contactOperations from "../../redux/contacts/contactsOperations";
import ErrNot from "../ErrorNotification/ErrorNotification";
import selectors from "../../redux/selectors";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    contactAdded: false,
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const rule = this.props.list.some(
      (contact) => contact.name === this.state.name
    );
    if (rule) {
      this.setState({ contactAdded: true });
      setTimeout(() => this.setState({ contactAdded: false }), 2000);
      return;
    }
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, contactAdded } = this.state;
    return (
      <>
        <ErrNot contactAdded={contactAdded} />
        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className={styles.contactForm}
        >
          <label className={styles.contactFormLabel}>
            Name
            <input
              required
              type="text"
              name="name"
              value={name}
              placeholder="name"
              onChange={this.handleChange}
              className={styles.label}
            />
          </label>
          <label className={styles.contactFormLabel}>
            Number
            <input
              required
              type="tel"
              name="number"
              placeholder="number"
              value={number}
              onChange={this.handleChange}
              className={styles.label}
            />
          </label>
          <input
            type="submit"
            value="Add contact"
            className={styles.contactFormBtn}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: selectors.getForm(state),
});

const mapDispatchToProps = {
  addContact: contactOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
