import './trds/tr-theme.css';

import Text from './trds/typhography/Text';
import Title from './trds/typhography/Title';
import Stack from './trds/layout/Stack';
import { Card, CardMedia, CardBody } from './trds/layout/Card';

import { Section } from './trds/layout/Layout.js';
import Link from './trds/elements/Link';
import Icon from './trds/elements/Icon';

function App() {

  return (
    <main>
      <Section className="bg-image lazy" style={{"--bg-image-src" : "lol"}}>
        <Stack>
          <Link className="text" href="https://facebook.com">LOL</Link>
          <Title level="3" className="size--xs variant--1">Hello there its a long text lets see if it cuts at some point buti it most be a long one haha Hello there its a long text lets see if it cuts at some point buti it most be a long one hahaHello there its a long text lets see if it cuts at some point buti it most be a long one haha</Title>
          <Text>LOL</Text>
          <Card>
            <CardMedia></CardMedia>
            <CardBody>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
            </CardBody>
          </Card>
        </Stack>
      </Section>
      <Section className="bg-image lazy" style={{"--bg-image-src" : "lol"}}>
        <Stack>
          <Link className="text" href="https://facebook.com">LOL</Link>
          <Title level="3" className="size--xs variant--1">Hello there its a long text lets see if it cuts at some point buti it most be a long one haha Hello there its a long text lets see if it cuts at some point buti it most be a long one hahaHello there its a long text lets see if it cuts at some point buti it most be a long one haha</Title>
          <Text>LOL</Text>
          <Card>
            <CardMedia></CardMedia>
            <CardBody>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
            </CardBody>
          </Card>
        </Stack>
      </Section>
      <Section className="bg-image lazy" style={{"--bg-image-src" : "lol"}}>
        <Stack>
          <Link className="text" href="https://facebook.com">LOL</Link>
          <Title level="3" className="size--xs variant--1">Hello there its a long text lets see if it cuts at some point buti it most be a long one haha Hello there its a long text lets see if it cuts at some point buti it most be a long one hahaHello there its a long text lets see if it cuts at some point buti it most be a long one haha</Title>
          <Text>LOL</Text>
          <Card>
            <CardMedia></CardMedia>
            <CardBody>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
            </CardBody>
          </Card>
        </Stack>
      </Section>
      <Section className="bg-image lazy" style={{"--bg-image-src" : "lol"}}>
        <Stack>
          <Link className="text" href="https://facebook.com">LOL</Link>
          <Title level="3" className="size--xs variant--1">Hello there its a long text lets see if it cuts at some point buti it most be a long one haha Hello there its a long text lets see if it cuts at some point buti it most be a long one hahaHello there its a long text lets see if it cuts at some point buti it most be a long one haha</Title>
          <Text>LOL</Text>
          <Card>
            <CardMedia></CardMedia>
            <CardBody>
              <Icon className="lazy" style={{'--icon-src':'url("/assets/icons/solid/envelope.svg")'}}></Icon>
              <Icon style={{'--icon-src':'url("/assets/icons/solid/cog.svg")'}}></Icon>
            </CardBody>
          </Card>
        </Stack>
      </Section>
    </main>
  );
}

export default App;
