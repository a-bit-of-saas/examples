'use client'

import { TextField } from '@radix-ui/themes'

type Props = React.ComponentProps<typeof TextField.Input>

const _TextField = (props: Props) => <TextField.Input {...props} />

export { _TextField as TextField }
