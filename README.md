# use-lanyard

> A React Hook for Lanyard. An API that exposes your Discord & Spotify presence to the web!

[![NPM](https://img.shields.io/npm/v/use-lanyard.svg)](https://www.npmjs.com/package/use-lanyard) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-lanyard
```

## Usage

```tsx
import * as React from 'react'

import { useLanyard } from 'use-lanyard'

const Example = () => {
  const state = useLanyard('DISCORD_ID')
  return (
    <div>
      {state.listening_to_spotify ? `Wohoo! I'm listening to Spotify right now.` : `I'm not listening to anything right now :(`}
    </div>
  )
}
```

## License

MIT © [220ish](https://github.com/220ish)
