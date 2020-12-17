import Axios from "axios";
import listActions from "./listActions";

Axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const addContact = ({ name, number }) => (dispatch) => {
  dispatch(listActions.addContactRequest());

  Axios.post("/contacts", {
    name,
    number,
  })
    .then((response) => {
      dispatch(listActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(listActions.addContactError(error)));
};

const fetchContact = () => (dispatch, getState) => {
  dispatch(listActions.fetchContactRequest());

  Axios.get("/contacts")
    .then((response) => {
      dispatch(listActions.fetchContactSuccess(response.data));
    })
    .catch((error) => dispatch(listActions.fetchContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(listActions.removeContactRequest());

  Axios.delete(`/contacts/${id}`)
    .then(() => {
      dispatch(listActions.removeContactSuccess(id));
    })
    .catch((error) => dispatch(listActions.removeContactError(error)));
};

export default { addContact, fetchContact, removeContact };
