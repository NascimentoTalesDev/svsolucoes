export type Machine = {
    id: string,
    name: string,
    descriptions: string[],
    operationalWeight?: string | undefined,
    maximumDiggingDepth?: string | undefined,
    maximumDischargeHeight?: string | undefined,
    enginePower?: string | undefined,
    fuel: string,
    images: string[],
}