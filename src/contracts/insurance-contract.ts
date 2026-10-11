import { BaseContract } from './base-contract'

export class InsuranceContract extends BaseContract {
    insuranceType: string
    premium: number
    termYears: number

    constructor(
        contractId: string,
        clientName: string,
        insuranceType: string,
        premium: number,
        termYears: number
    ) {
        super(contractId, clientName)
        this.insuranceType = insuranceType
        this.premium = premium
        this.termYears = termYears
    }

    calculateTotalPremium(): number {
        return this.premium * this.termYears
    }
}