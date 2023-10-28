import { ESXCommon } from '../common/esx_common'
import { ESXPlayer } from './esx_xplayer'

export as namespace ESXServer

export class ESXServer extends ESXCommon {
    /**
     * @description This function creates a pickup.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {('item_standard' | 'item_money' | 'item_account' | 'item_weapon')} type The pickup type, valid inputs: item_standard for items, item_money for cash, item_account for an account and item_weapon for weapons
     * @param {string} name The name of either the item, account or weapon
     * @param {number} count The count of the item, cash, account or weapon ammo
     * @param {string} label The pickup label drawn
     * @param {number} playerID The player server id who created the pickup, used to determine pickup spawn point
     * @param {string[]} [components] Only used when type is item_weapon, an string[] with components
     * @param {number} [tintIndex] Only used when type is item_weapon, a tint index
     * @memberof ESXServer
     */
    CreatePickup(
        type: 'item_standard' | 'item_money' | 'item_account' | 'item_weapon',
        name: string,
        count: number,
        label: string,
        playerID: number,
        components?: string[],
        tintIndex?: number,
    ): void

    /**
     * @description This function returns an item label.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} itemName
     * @returns {*}  {string}
     * @memberof ESXServer
     */
    GetItemLabel(itemName: string): string

    /**
     * @description This function gets a ESX player object from a server id. Returns null for invalid players.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {number} playerID The player server id
     * @returns {*}  {ESXPlayer}
     * @memberof ESXServer
     */
    GetPlayerFromId(playerID: number): ESXPlayer

    /**
     * @description This function returns the ESX player from the Rockstar identifier. Returns null if no player is found.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} identifier
     * @returns {*}  {ESXPlayer}
     * @memberof ESXServer
     */
    GetPlayerFromIdentifier(identifier: string): ESXPlayer

    /**
     * @description This function returns an array of all online players ID's. You can use this to access each players data.
     * @author mKpwnz
     * @date 28.04.2023
     * @returns {*}  {number[]}
     * @memberof ESXServer
     */
    GetPlayers(): number[]

    /**
     * @description This function registers a server callback.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} name Server callback name
     * @param {Function} callback Callback function, which contains an varied size of arguments depending on how many arguments parsed from client
     * @memberof ESXServer
     */
    RegisterServerCallback(name: string, callback: Function): void

    /**
     * @description This function registers an item as usable.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} item Item to register as usable
     * @param {Function} callback Callback function
     * @memberof ESXServer
     */
    RegisterUsableItem(item: string, callback: Function): void

    /**
     * @description This function saves the player to database. It is async, and a function (optional) is invoked once saving is complete.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {ESXPlayer} xPlayer An ESX player
     * @param {Function} [callback] Callback function
     * @memberof ESXServer
     */
    SavePlayer(xPlayer: ESXPlayer, callback?: Function): void

    /**
     * @description Registers an Serversided Command to the server
     * @author mKpwnz
     * @date 28.04.2023
     * @param {string} name The command you want to register.
     * @param {string} group Permissiongroup the user got in your Database
     * @param {(source: number, args: string[], cb: Function) => void} callback
     * @param {boolean} allowConsole Allow the execution of the command from console
     * @param {{
     *             help?: string
     *             arguments?: { name: string; help: string; type: string }[]
     *         }} [suggestion]
     * @memberof ESXServer
     */
    RegisterCommand(
        name: string | string[],
        group: string,
        callback: (xPlayer: ESXPlayer, args: string[], showError: any) => void,
        allowConsole: boolean,
        suggestion?: {
            help?: string
            arguments?: {
                name: string
                help: string
                type: 'number' | 'player' | 'string' | 'item' | 'weapon' | 'any'
            }[]
        },
    ): void

    /**
     * @description This function saves all players to database. It is async, and a function (optional) is invoked once saving is complete.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {Function} [callback] Callback function
     * @memberof ESXServer
     */
    SavePlayers(callback?: Function): void

    /**
     * @description This function writes a trace if debugging is enabled in the configuration file.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {any} message Anything to print to console
     * @memberof ESXServer
     */
    Trace(message: any): void

    /**
     * @description This function is to force a player to use an item.
     * @author mKpwnz
     * @date 28.04.2023
     * @param {number} playerID Player server id
     * @param {string} itemName An item
     * @memberof ESXServer
     */
    UseItem(playerID: number, itemName: string): void

    /**
     * @description
     * @author mKpwnz
     * @date 11.09.2023
     * @param {string} job
     * @param {number} grade
     * @returns {*}  {boolean}
     * @memberof ESXServer
     */
    DoesJobExist(job: string, grade: number): boolean
}
