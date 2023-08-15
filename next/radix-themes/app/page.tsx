'use client'

import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  HoverCard,
  Link,
  Text,
  TextField,
} from '@radix-ui/themes'

export default function Home() {
  return (
    <>
      <Container size="1">
        <Heading align="center" className="py-16">
          Example Page
        </Heading>
        <Card size="2">
          <form>
            <Flex gap="5" direction="column">
              <TextField.Input size="2" placeholder="Username" />
              <TextField.Input
                size="2"
                placeholder="Password"
                type="password"
              />
              <Button type="submit">Login</Button>
            </Flex>
          </form>
        </Card>
      </Container>
      <Container size="1" className="mt-16">
        <Text>
          Follow{' '}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="https://twitter.com/ethan_mick" target="_blank">
                @ethan_mick
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content>
              <Flex gap="4">
                <Avatar
                  size="3"
                  fallback="R"
                  radius="full"
                  src="https://pbs.twimg.com/profile_images/1583834293981396992/8493L8Dn_400x400.jpg"
                />
                <Box>
                  <Heading size="3" as="h3">
                    Ethan Mick
                  </Heading>
                  <Text as="div" size="2" color="gray">
                    @ethan_mick
                  </Text>
                  <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                    Learn to build SaaS. Learn the best technologies and
                    techniques to launch your idea.
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>{' '}
          for updates.
        </Text>
      </Container>
    </>
  )
}
