## Usage

### Client side

Create a file "esx.ts" containing:

```typescript
import { ESXClient } from '@mkpwnz/esx-legacy-ts/client/esx_client'
export let ESX: ESXClient = exports["es_extended"]:getSharedObject()
```

ESX is now available! example on "test.ts":

```typescript
import { ESX } from '../esx';
ESX.ShowNotification('Hello World !');
```

#### Server side

Create a file "esx.ts" containing:

```typescript
import { ESXServer } from '@mkpwnz/esx-legacy-ts/server/esx_server'
export let ESX: ESXServer = exports["es_extended"]:getSharedObject()
```

ESX is now available! example on "test.ts":

```typescript
import { ESX } from '../esx';
let player = ESX.GetPlayerFromId(1);
player.addBank(10000);
```
