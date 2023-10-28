import { ESXClientPlayerData } from '../classes/esx_client_player_data'
import { ESXCommon } from '../common/esx_common'
import { ESXGame } from './esx_client_game'
import { ESXClientScaleform } from './esx_client_scaleform'
import { ESXStreaming } from './esx_client_streaming'
import { ESXClientUI } from './esx_client_ui'

export as namespace ESXClient

export class ESXClient extends ESXCommon {
    /**
     * This function gets player data.
     */
    GetPlayerData(): ESXClientPlayerData

    /**
     * This function checks if the player is loaded
     */
    IsPlayerLoaded(): boolean

    /**
     * This function sets player data.
     * @param key
     * @param value
     */
    SetPlayerData(key: string, value: any): void

    /**
     * This function shows an advanced notification. See Arguments Explained for an explanation of what each argument does.
     * @param title
     * @param subject
     * @param message
     * @param icon
     * @param iconType
     */
    ShowAdvancedNotification(
        title: string,
        subject: string,
        message: string,
        icon: string,
        iconType: number,
    ): void

    /**
     * This function shows a help notification with the parsed message. These help notification support displaying button inputs, see this list
     * @param message
     */
    ShowHelpNotification(message: string): void

    /**
     * This function shows the inventory.
     */
    ShowInventory(): void

    /**
     * This function shows a basic notification to the player.
     * @param message
     */
    ShowNotification(message: string): void

    /**
     * This function triggers a server callback.
     * @param eventName
     * @param callback
     * @param args
     */
    TriggerServerCallback(eventName: string, callback: Function, ...args: any[]): void

    Game: ESXGame

    Scaleform: ESXClientScaleform

    Streaming: ESXStreaming

    UI: ESXClientUI

    GetWeaponLabel(weaponName: string): string
    GetWeaponList(): any[]
}
