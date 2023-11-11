import { Coords } from './coords'
import { ESXPlayerOSXItem } from './osx_inventory'

export class ESXServerXPlayer {
    identifier: string
    group: string
    playerName: string
    source: number
    accounts: ESXServerXPlayerAccount[]
    inventory: ESXServerXPlayerInventoryItem[] | ESXPlayerOSXItem[]
    loadout: any[]
    job: ESXServerXPlayerJob
    coords: Coords
    weight: number
    metadata: ESXServerPlayerMetaData
}

export interface ESXServerXPlayerAccount {
    name: string
    label: string
    money: number
    round: boolean // This is not in the documentation, but it is in the code
    index: number // This is not in the documentation, but it is in the code
}

export interface ESXServerXPlayerInventoryItem {
    name: string
    count: number
    label: string
    limit: number
    usable: boolean
    rare: boolean
    canRemove: boolean
}

export interface ESXServerXPlayerJob {
    id: number
    name: string
    label: string
    grade: number
    grade_name: string
    grade_label: string
    grade_salary: number
    skin_male: any
    skin_female: any
}

export declare interface ESXServerPlayerMetaData {
    armor: number
    health: number
}
