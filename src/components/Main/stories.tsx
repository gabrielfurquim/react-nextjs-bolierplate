import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
}

export const Basic = () => (
  <Main
    title={text('Title', 'SpaceX Rockets')}
    description={text(
      'Description',
      'Get space-x rockets using graphql public api.'
    )}
    rockets={[{ id: 'rocket' }]}
  />
)
