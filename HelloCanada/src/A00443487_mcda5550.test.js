import React from 'react'
import ReactDOM from 'react-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import Provinces from './Provinces'
import Territories from './Territories'
import App from './App'

//Testing the Province Length
test(' Province Length fething', async () => {
    const { queryAllByTestId } = await render(<Provinces />)
    const provinces = queryAllByTestId('province-test')
    expect(provinces.length).toBe(10)
})

//Testing the Territories Length
test('Verify Territories Length Fetching', async () => {
    const { queryAllByTestId } = await render(<Territories />)
    const territories = queryAllByTestId('province-test')
    expect(territories.length).toBe(3)
})

//Testing the Title
test('Title Verification', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    expect(div.querySelector('h1').textContent).toBe('Hello Canada')
})
    