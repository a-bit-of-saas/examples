# Build SaaS with Ethan - Password Reset

Resetting a password is important to your application's security and usability.
Without a doubt, your app users will sign up and then forget their password.

Nothing is worse than returning to the login page and getting rejected for a
wrong password.

> What password did I use again? Was there a 1 at the end? Or maybe an exclamation mark?

Well, forgetting your password and being unable to reset it is even worse.
Luckily for the builders out there, creating this flow isn't complicated and
will ensure your users can self-serve and get back into your app.

And what's better than that?

## A note about OAuth

Before we get started, this entire article is a good reason for not asking users
to sign up with their email and a password. If a user signs in with an identity
provider like Google, Apple, or GitHub, you don't need to worry about these
flows. If a user forgets their password, they reset it with the provider, not
you. And you can still ask for the email during the signup flow.

Another option is to use a third-party provider like Auth0, which has these
flows built in.

However, this isn't always practical or ideal. So, in those situations, you'll
need to build this.

## Architecture

The flow isn't complicated for a password reset. You'll need the user's email
and trust they have access to it. If they don't, or you didn't collect an email
during signup (for example, just a username), then you have no way to send them
a secure message.

Password reset works by assuming the user can access the email they signed up
with. That email should be secure, and only that user can access it. Therefore,
to reset the account with you, you confirm their access by sending a secure,
one-time code to their email. The user proves they received that code, and
therefore, they are who they say they are.

![Architecutre Diagram](https://ethanmick.com/content/images/size/w1000/2023/09/image-2.png)

## Code

This example uses:

- Next.js 13, App Directory
- Radix Themes
- Tailwind CSS
- Mailgun
