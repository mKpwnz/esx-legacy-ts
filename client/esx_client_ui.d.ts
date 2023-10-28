import { ESXClientUIMenuData } from '../classes/esx_client_ui_menu_data'

export declare class ESXClientUI {
    /**
     * This function shows an inventory item notification.
     * @param add
     * @param item
     * @param count
     */
    ShowInventoryItemNotification(add: string, item: string, count: number): void

    HUD: ESXClientUIHUD

    Menu: ESXClientUIMenu
}

declare class ESXClientUIHUD {
    /**
     * This function registers a HUD element.
     * @param name
     * @param index
     * @param priority
     * @param html
     * @param data
     */
    RegisterElement(name: string, index: number, priority: number, html: string, data: string): void

    /**
     * This function removes a HUD element.
     * @param name
     */
    RemoveElement(name: string): void

    /**
     * This function sets the HUD opacity.
     * @param opacity
     */
    SetDisplay(opacity: number): void

    /**
     * This function updates HUD elements.
     * @param name
     * @param data
     */
    UpdateElement(name: string, data: string): void
}

declare class ESXClientUIMenu {
    /**
     * This function closes a menu.
     * @param type
     * @param namespace
     * @param name
     */
    Close(type: string, namespace: string, name: string): void

    /**
     * This function closes all open menus.
     * @constructor
     */
    CloseAll(): void

    /**
     * This function gets all opened menus.
     * @param type
     * @param namespace
     * @param name
     */
    GetOpened(type: string, namespace: string, name: string): ESXClientUIMenuData

    /**
     * This function checks if a menu is open.
     * @param type
     * @param namespace
     * @param name
     */
    IsOpen(type: string, namespace: string, name: string): ESXClientUIMenuData

    /**
     * This function opens a menu.
     * @param type
     * @param namespace
     * @param name
     * @param data
     * @param submit
     * @param cancel
     * @param change
     * @param close
     */
    Open(
        type: string,
        namespace: string,
        name: string,
        data: ESXClientUIMenuData,
        submit: Function,
        cancel: Function,
        change?: Function,
        close?: Function,
    ): void

    /**
     * This function registers a menu type.
     * @param type
     * @param open
     * @param close
     */
    RegisterType(type: string, open: Function, close: Function): void
}
