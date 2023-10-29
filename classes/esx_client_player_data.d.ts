import { Coords } from './coords'

export declare interface ESXClientPlayerData {
    identifier: string
    group: string
    inventory: ESXClientPlayerInventoryItem[] | ESXCLientPlayerOSXItem[]
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
    round: boolean // This is not in the documentation, but it is in the code
    index: number // This is not in the documentation, but it is in the code
}

export declare interface ESXCLientPlayerOSXItem {
    label: string
    weight: number
    info: any[]
    name: string
    can_remove: boolean
    x: number
    y: number
    description: string
    amount: number
    category: string
    id: string
    metadata: any[]
    rare: boolean
}

export declare interface ESXClientPlayerMetaData {
    armor: number
    health: number
}
