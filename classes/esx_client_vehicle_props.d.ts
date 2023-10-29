export declare interface ESXClientVehicleProps {
    model?: number
    doorsBroken?: boolean[]
    windowsBroken?: boolean[]
    tyreBurst?: boolean[]
    tyresCanBurst?: boolean
    plate?: string
    plateIndex?: number

    bodyHealth?: number
    engineHealth?: number
    tankHealth?: number

    fuelLevel?: number
    dirtLevel?: number
    color1?: number
    color2?: number
    customPrimaryColor?: [number, number, number]
    customSecondaryColor?: [number, number, number]

    pearlescentColor?: number
    wheelColor?: number

    dashboardColor?: number
    interiorColor?: number

    wheels?: number
    windowTint?: number
    xenonColor?: number
    customXenonColor?: [number, number, number]

    neonEnabled?: [number, number, number, number]
    neonColor?: [number, number, number]
    extras?: any // Extras
    tyreSmokeColor?: [number, number, number]

    modSpoilers?: number
    modFrontBumper?: number
    modRearBumper?: number
    modSideSkirt?: number
    modExhaust?: number
    modFrame?: number
    modGrille?: number
    modHood?: number
    modFender?: number
    modRightFender?: number
    modRoof?: number
    modRoofLivery?: number

    modEngine?: number
    modBrakes?: number
    modTransmission?: number
    modHorns?: number
    modSuspension?: number
    modArmor?: number

    modTurbo?: boolean
    modSmokeEnabled?: boolean
    modXenon?: number

    modFrontWheels?: number
    modCustomFrontWheels?: boolean
    modBackWheels?: number
    modCustomBackWheels?: boolean

    modPlateHolder?: number
    modVanityPlate?: number
    modTrimA?: number
    modOrnaments?: number
    modDashboard?: number
    modDial?: number
    modDoorSpeaker?: number
    modSeats?: number
    modSteeringWheel?: number
    modShifterLeavers?: number
    modAPlate?: number
    modSpeakers?: number
    modTrunk?: number
    modHydrolic?: number
    modEngineBlock?: number
    modAirFilter?: number
    modStruts?: number
    modArchCover?: number
    modAerials?: number
    modTrimB?: number
    modTank?: number
    modWindows?: number
    modLivery?: number
    modLightbar?: number
}
