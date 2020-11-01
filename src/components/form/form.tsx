import React, { FC } from 'react'

import Wrapper from '../shared/wrapper'

const Form: FC = () => {
  const state = {
    jmeno: '',
    prijmeni: '',
    ulice: '',
    mesto: '',
    psc: '',
    order: '',
  }

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setState({
      [name]: value,
    })
  }

  return (
    <Wrapper size="small">
      <form>
        <label>
          First name
          <input
            type="text"
            name="jmeno"
            value={state.jmeno}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="prijmeni"
            value={state.prijmeni}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Wrapper>
  )
}

export default Form
