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
import * as Dialog from '@klarna/ui/Dialog'
import Subtitle from '@klarna/ui/Subtitle'
import { Close } from '@klarna/ui/IconButton'

let open = false

function Workshop () {
  return (
    <div>
      <Button.Primary onClick={() => { open = true; reRender() }}>
        Open
      </Button.Primary>

      <form>
        <Dialog.Overlay show={open}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={() => { open = false; reRender() }} />
            </Dialog.Icon>

            <Dialog.Content>
              <Title.Primary margins>
                The title is primary
              </Title.Primary>
              <Subtitle margins>
                Just trying to fill up space
              </Subtitle>
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
            </Dialog.Content>

            <Dialog.Footer>
              <Button.Primary
                style={{width: '100%'}}>
                Submit
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </form>
    </div>
  )
}

const reRender = () => render(
  <Workshop />,
  document.getElementById('ui-workshop')
)

reRender()
