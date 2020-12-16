import React, { Component } from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import styles from "./ContactsView.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactsOperations from "../redux/contacts/contactsOperations";

class ContactsView extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");
      return;
    }
    this.props.onFetchContacts();
  }

  componentDidUpdate() {
    if (!this.props.isAuthenticated) {
      this.props.history.replace("/");
    }
    return;
  }

  render() {
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames={styles}
          unmountOnExit
        >
          <h1 className={styles.title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
