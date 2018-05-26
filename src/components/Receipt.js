import React from 'react'
import PropTypes from 'prop-types'
import IconReceipt from 'react-icons/lib/md/receipt'

const Receipt = (props) => (
  <div className="receipt-container">
    <h1><IconReceipt/>ORDER CONFIRMATION</h1>
    <p>
      <span role="img" aria-label="hello">👋</span>
      Hello <b>{props.name} {props.surname}</b>!
    </p>
    <p>We will send an email to confirm your order for your room in <b>{props.city}</b> to: <b>{props.email}</b></p>
    { props.morning || props.day || props.evening ? (
      <ul>Preferred check-in:
        { props.morning && <li>8:00 - 11:00</li> }
        { props.day && <li>12:00 - 17:00</li> }
        { props.evening && <li>18:00 - 20:00</li> }
      </ul>
    ) : (
      <p>Since you selected no preferred time frame, the default check-in slot is at <b>8:00 - 11:00</b></p>
    ) }
  </div>
)

Receipt.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  morning: PropTypes.bool.isRequired,
  day: PropTypes.bool.isRequired,
  evening: PropTypes.bool.isRequired
}

export default Receipt
