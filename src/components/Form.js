import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Receipt from './Receipt'

const cities = [
  {
    value: 'Berlin'
  },
  {
    value: 'Amsterdam'
  },
  {
    value: 'Chicago'
  },
  {
    value: 'Tel Aviv'
  }
]

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      surname: '',
      email: '',
      city: '',
      morning: false,
      day: false,
      evening: false,
      submitted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleCheckedChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  handleSelectorChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ submitted: true })
  }

  handleReset = () => {
    this.setState({
      name: '',
      surname: '',
      email: '',
      city: '',
      morning: false,
      day: false,
      evening: false,
      submitted: false
    })
  }

  render() {
    const { name, surname, email, city, morning, day, evening, submitted} = this.state
    return (
      <div>
        { submitted ? (
          <div>
            <Receipt
              name={name}
              surname={surname}
              email={email}
              city={city}
              morning={morning}
              day={day}
              evening={evening}
            />
          <Button value="Reset" variant="raised" className="btn-reset" onClick={this.handleReset}>New Booking</Button>
          </div>
        ) : (
          <form className="form" onSubmit={this.handleSubmit}>
            <TextField
              required
              type="text"
              margin="normal"
              className="form-item"
              label="Name"
              name="Name"
              placeholder="Stefano"
              value={name}
              onChange={ (e) => this.setState({name: e.target.value}) } />
            <TextField
              required
              type="text"
              margin="normal"
              className="form-item"
              label="Surname"
              name="Surname"
              placeholder="Veltri"
              value={surname}
              onChange={ (e) => this.setState({surname: e.target.value}) } />
            <TextField
              required
              type="email"
              margin="normal"
              className="form-item"
              label="Email"
              name="Email"
              placeholder="stefano@idrinkritalin.it"
              value={email}
              onChange={ (e) => this.setState({email: e.target.value}) } />

              <TextField
                select
                required
                margin="normal"
                className="form-item"
                label="City"
                value={this.state.city}
                onChange={this.handleSelectorChange('city')}
              >
                {cities.map(city => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.value}
                  </MenuItem>
                ))}
              </TextField>

              <p className="form-item">Preferred check-in time:</p>
              <FormControlLabel
                className="form-item"
                control={
                  <Checkbox
                    checked={morning}
                    onChange={this.handleCheckedChange('morning')}
                    value="morning"
                  />
                }
                label="8:00 - 11:00"/>
              <FormControlLabel
                className="form-item"
                control={
                <Checkbox
                  checked={day}
                  onChange={this.handleCheckedChange('day')}
                  value="day"
                />
              }
              label="12:00 - 17:00"/>
              <FormControlLabel
                className="form-item"
                control={
                <Checkbox
                  checked={evening}
                  onChange={this.handleCheckedChange('evening')}
                  value="evening"
                />
              }
              label="18:00 - 20:00"/>

              <Button type="submit" value="Submit" className="form-item" variant="raised" color="primary">Submit</Button>
            </form>
        ) }

      </div>
    )
  }
}

export default Form
