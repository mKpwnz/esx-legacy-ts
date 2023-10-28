import { Vector3 } from 'fivem-js'
import { Coords } from '../classes/coords'
import {
    ESXServerXPlayer,
    ESXServerXPlayerAccount,
    ESXServerXPlayerInventoryItem,
    ESXServerXPlayerJob,
} from '../classes/esx_server_xplayer'
import { ESXWeapon } from '../classes/esx_weapon'

export class ESXPlayer extends ESXServerXPlayer {
    /**
     * @description This function adds account money.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} account An valid account, a list of valid accounts can be found in the configuration file
     * @param {number} money Amount of money to add
     * @memberof ESXPlayer
     */
    addAccountMoney(account: string, money: number): void

    /**
     * @description This function adds an inventory item.
     *
     * This function will not check if the player weight limit exceeds. Recommended to use in comibation with xPlayer.canCarryItem(item, count)
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} item Item name
     * @param {number} count Count of item to add
     * @memberof ESXPlayer
     */
    addInventoryItem(item: string, count: number): void

    /**
     * @description This function adds money.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {number} money Money amount
     * @memberof ESXPlayer
     */
    addMoney(money: number): void

    /**
     * @description This function adds a weapon.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} weaponName Weapon name
     * @param {number} ammCount Ammo count
     * @memberof ESXPlayer
     */
    addWeapon(weaponName: string, ammCount: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} weaponName Weapon name
     * @param {number} ammCount Ammo to add
     * @memberof ESXPlayer
     */
    addWeaponAmmo(weaponName: string, ammCount: number): void

    /**
     * @description This function adds a weapon component to a weapon, if the player has it, the available component list can be found in the weapon configuration file.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} weaponName Weapon name
     * @param {string} weaponComponent Weapon component
     * @memberof ESXPlayer
     */
    addWeaponComponent(weaponName: string, weaponComponent: string): void

    /**
     * @description This function is used to determinate if a player can carry an item, and is the successor to the previous item limit checks
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} item Item name
     * @param {number} count Item count
     * @memberof ESXPlayer
     */
    canCarryItem(item: string, count: number): void

    /**
     * @description This function is used to determinate if a player can swap an item for some other item.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} firstItem First item name
     * @param {number} firstItemCount First item count
     * @param {string} testItem Test item name
     * @param {number} testItemCount Test item count
     * @memberof ESXPlayer
     */
    canSwapItem(firstItem: string, firstItemCount: number, testItem: string, testItemCount: number): void

    /**
     * @description This function gets details (returned in an table) for an account.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} name An valid account
     * @returns {*}  {ESXServerXPlayerAccount}
     * @memberof ESXPlayer
     */
    getAccount(name: string): ESXServerXPlayerAccount

    /**
     * @description This function gets all registered player accounts.
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {ESXServerXPlayerAccount[]}
     * @memberof ESXPlayer
     */
    getAccounts(): ESXServerXPlayerAccount[]

    /**
     * @description This function returns the player's current coordinates on the server. Keep in mind that the coords sync interval can be adjusted in the configuration file in case you want to get precise player coords.
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {Coords}
     * @memberof ESXPlayer
     */
    getCoords(): Coords

    /**
     * @description This function returns the player's current coordinates on the server. Keep in mind that the coords sync interval can be adjusted in the configuration file in case you want to get precise player coords.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {boolean} useVector
     * @returns {*}  {Vector3}
     * @memberof ESXPlayer
     */
    getCoords(useVector: boolean): Vector3

    /**
     * @description This function gets the current player group.
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {string}
     * @memberof ESXPlayer
     */
    getGroup(): string

    /**
     * @description This function returns the Rockstar identifier used
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {string}
     * @memberof ESXPlayer
     */
    getIdentifier(): string

    /**
     * @description
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {ESXServerXPlayerInventoryItem[]}
     * @memberof ESXPlayer
     */
    getInventory(): ESXServerXPlayerInventoryItem[]

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    addBank(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    displayBank(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    displayMoney(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {number}
     * @memberof ESXPlayer
     */
    getBank(): number

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} itemName
     * @returns {*}  {ESXServerXPlayerInventoryItem}
     * @memberof ESXPlayer
     */
    getInventoryItem(itemName: string): ESXServerXPlayerInventoryItem

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {ESXServerXPlayerJob}
     * @memberof ESXPlayer
     */
    getJob(): ESXServerXPlayerJob

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {ESXServerXPlayerJob}
     * @memberof ESXPlayer
     */
    getSecondaryJob(): ESXServerXPlayerJob

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {Coords}
     * @memberof ESXPlayer
     */
    getLastPosition(): Coords

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {ESXWeapon[]}
     * @memberof ESXPlayer
     */
    getLoadout(): ESXWeapon[]

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {ESXServerXPlayerAccount[]}
     * @memberof ESXPlayer
     */
    getMissingAccounts(): ESXServerXPlayerAccount[]

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {number}
     * @memberof ESXPlayer
     */
    getMoney(): number

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {string}
     * @memberof ESXPlayer
     */
    getName(): string

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {number}
     * @memberof ESXPlayer
     */
    getPermissions(): number

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @returns {*}  {ESXPlayer}
     * @memberof ESXPlayer
     */
    getPlayer(): ESXPlayer

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} key
     * @returns {*}  {string}
     * @memberof ESXPlayer
     */
    getSessionVar(key: string): string

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} weaponName
     * @returns {*}  {ESXWeapon}
     * @memberof ESXPlayer
     */
    getWeapon(weaponName: string): ESXWeapon

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} weaponName
     * @returns {*}  {boolean}
     * @memberof ESXPlayer
     */
    hasWeapon(weaponName: string): boolean

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} weaponName
     * @param {string} weaponComponent
     * @returns {*}  {boolean}
     * @memberof ESXPlayer
     */
    hasWeaponComponent(weaponName: string, weaponComponent: string): boolean

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} reason
     * @memberof ESXPlayer
     */
    kick(reason: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} account
     * @param {number} money
     * @memberof ESXPlayer
     */
    removeAccountMoney(account: string, money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    removeBank(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} itemName
     * @param {number} count
     * @memberof ESXPlayer
     */
    removeInventoryItem(itemName: string, count: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    removeMoney(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} weaponName
     * @param {number} [ammo]
     * @memberof ESXPlayer
     */
    removeWeapon(weaponName: string, ammo?: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} weaponName
     * @param {string} weaponComponent
     * @memberof ESXPlayer
     */
    removeWeaponComponent(weaponName: string, weaponComponent: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} accountName
     * @param {number} money
     * @memberof ESXPlayer
     */
    setAccountMoney(accountName: string, money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    setBankBalance(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @memberof ESXPlayer
     */
    setCoords(x: number, y: number, z: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} itemName
     * @param {number} count
     * @memberof ESXPlayer
     */
    setInventoryItem(itemName: string, count: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} name
     * @param {number} grade
     * @memberof ESXPlayer
     */
    setJob(name: string, grade: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} name
     * @param {number} grade
     * @memberof ESXPlayer
     */
    setSecondaryJob(name: string, grade: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} money
     * @memberof ESXPlayer
     */
    setMoney(money: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} name
     * @memberof ESXPlayer
     */
    setName(name: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {number} permissionLevel
     * @memberof ESXPlayer
     */
    setPermissions(permissionLevel: number): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} key
     * @param {string} value
     * @memberof ESXPlayer
     */
    setSessionVar(key: string, value: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} msg
     * @memberof ESXPlayer
     */
    showHelpNotification(msg: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} msg
     * @memberof ESXPlayer
     */
    showNotification(msg: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @memberof ESXPlayer
     */
    removeAllWeapons(): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} eventName
     * @param {...any[]} args
     * @memberof ESXPlayer
     */
    triggerEvent(eventName: string, ...args: any[]): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} key
     * @param {*} value
     * @memberof ESXPlayer
     */
    set(key: string, value: any): void

    /**
     * @description
     * @author mKpwnz
     * @date 02.09.2023
     * @param {string} key
     * @returns {*}  {*}
     * @memberof ESXPlayer
     */
    get(key: string): any
}
