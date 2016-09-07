import React from 'react'
import { render } from 'react-dom'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import TextLabel from '@klarna/ui/TextLabel'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import Fieldset from '@klarna/ui/Fieldset'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import * as UncontrolledSwitch from '@klarna/ui/uncontrolled/Switch'

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

      <form>
        <Fieldset margins>
          <UncontrolledField
            top left size='1/2'
            label='Given name'
            name='given-name'
          />
          <UncontrolledField
            top right size='1/2'
            label='Last name'
            name='last-name'
          />
          <UncontrolledDropdown
            bottom
            label='Lorem ipsum'
            name='dropdown-lorem-ipsum'
            options={[
              {
                disabled: true,
                hidden: true,
                key: '',
                label: 'Pick one!'
              },
              {
                key: 'lorem',
                label: 'Lorem'
              },
              {
                key: 'ipsum',
                label: 'Ipsum'
              }
            ]}
          />
        </Fieldset>

        <Fieldset margins>
          <UncontrolledSwitch.Toggle name='agreed'>
            Do you agree with the terms?
          </UncontrolledSwitch.Toggle>
        </Fieldset>

        <Button.Secondary className='leftButton'>
          Go back
        </Button.Secondary>

        <Button.Primary>
          Continue
        </Button.Primary>
      </form>
    </div>
  )
}

render(
  <Workshop />,
  document.getElementById('ui-workshop')
)
