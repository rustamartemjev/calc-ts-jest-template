import { BaseContract } from './base-contract'

export class LoanContract extends BaseContract {
    loanAmount: number
    monthlyPayment: number
    loanTermMonths: number

    constructor(
        contractId: string,
        clientName: string,
        loanAmount: number,
        monthlyPayment: number,
        loanTermMonths: number
    ) {
        super(contractId, clientName)
        this.loanAmount = loanAmount
        this.monthlyPayment = monthlyPayment
        this.loanTermMonths = loanTermMonths
    }

    calculateTotalPayment(): number {
        return this.monthlyPayment * this.loanTermMonths
    }
}