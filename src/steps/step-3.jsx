import React from 'react'
import { render } from 'react-dom'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import TextLabel from '@klarna/ui/TextLabel'

function Workshop () {
  return (
    <div>
      <Title.Primary color='blue' margins>
        Primary Title in blue
      </Title.Primary>

      <Paragraph.Primary margins>
        Proin scelerisque, felis sit amet maximus mattis, turpis ipsum interdum sem, a lacinia magna sem vel diam. Duis lacinia orci et velit faucibus, at varius mauris consectetur.
      </Paragraph.Primary>

      <table>
        <tr>
          <td style={{paddingRight: '20px'}}>
            <TextLabel margins>Name</TextLabel>
            <Paragraph.Primary margins>John Doe</Paragraph.Primary>
          </td>
          <td>
            <TextLabel margins>City</TextLabel>
            <Paragraph.Primary margins>Stockholm</Paragraph.Primary>
          </td>
        </tr>
      </table>

      <Button.Secondary className='leftButton'>
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
