import React from "react";
import styles from "../ContactListItem/ContactListItem.module.css";

const ContactListItem = ({contact:{name,number,id},onDeleteContact}) => (
    <li className={styles.item}>
        <span>{name}: {number}</span>
        <button
          type="button"
          className={styles.button}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
    </li>
)

export default ContactListItem