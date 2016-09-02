import React from 'react'
import { render } from 'react-dom'
import * as Button from '@klarna/ui/Button'

function Workshop () {
  return (
    <div>
      <Button.Secondary className='left'>
        Go back
      </Button.Secondary>

      <Button.Primary>
        Continue
      </Button.Primary>
    </div>
  )
}

render(
  <Workshop />,
  document.getElementById('ui-workshop')
)
