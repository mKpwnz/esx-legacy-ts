## Usage

### Client side

Create a file "esx.ts" containing:

```typescript
import { ESXClient } from '@mkpwnz/esx-ts/client/esx_client'

export let ESX: ESXClient
emit('esx:getSharedObject', (obj) => {
    ESX = obj
})
```

ESX is now available! example on "test.ts":

```typescript
import { ESX } from '../esx'
ESX.ShowNotification('Hello World !')
```

#### Server side

Create a file "esx.ts" containing:

```typescript
import { ESXServer } from '@mkpwnz/esx-ts/server/esx_server'

export let ESX: ESXServer
emit('esx:getSharedObject', (obj) => {
    ESX = obj
})
```

ESX is now available! example on "test.ts":

```typescript
import { ESX } from '../esx'
let player = ESX.GetPlayerFromId(1)
player.addBank(10000)
```
