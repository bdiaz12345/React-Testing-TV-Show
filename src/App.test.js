import React from 'react'
import { render, waitFor } from '@testing-library/react'
import { fetchShow as mockFetchShow } from './api/fetchShow'
import App from './App'
import Episodes from './components/Episodes'


jest.mock('./api/fetchShow')

test('renders tv show from api call', async () => {
    mockFetchShow()
    expect(mockFetchShow).toHaveBeenCalledTimes(1)
    await waitFor(() => expect(<Episodes />).toBeVisible)
})

test('App test', () => {
    expect((<App />).toContainHTML)
})