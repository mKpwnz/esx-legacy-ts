import { Coords } from './coords'
import { ESXPlayerOSXItem } from './osx_inventory'

export declare interface ESXClientPlayerData {
    identifier: string
    group: string
    inventory: ESXClientPlayerInventoryItem[] | ESXPlayerOSXItem[]
    maxWeight: number
    firstName: string
    lastName: string
    sex: string
    dateofbirth: string
    height: number
    dead: boolean
    loadout: any[]
    money: number
    coords: Coords
    job: ESXClientPlayerJob
    secondaryJob: ESXClientPlayerJob
    accounts: ESXClientPlayerAccount[]
    metadata: ESXClientPlayerMetaData
}

export declare interface ESXClientPlayerInventoryItem {
    count: number
    rare: boolean
    limit: number
    label: string
    name: string
    usable: boolean
    canRemove: boolean
}

export declare interface ESXClientPlayerJob {
    name: string
    grade: number
    grade_name: string
    grade_salary: number
    label: string
    skin_female: any[]
    skin_male: any[]
}

export declare interface ESXClientPlayerAccount {
    money: number
    name: string
    label: string
}

export declare interface ESXClientPlayerMetaData {
    armor: number
    health: number
}
