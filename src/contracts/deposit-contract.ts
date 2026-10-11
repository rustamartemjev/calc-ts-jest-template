import { BaseContract } from './base-contract'

export class DepositContract extends BaseContract {
    amount: number
    interestRate: number

    constructor(
        contractId: string,
        clientName: string,
        amount: number,
        interestRate: number
    ) {
        super(contractId, clientName)
        this.amount = amount
        this.interestRate = interestRate
    }

    calculateInterest(): number {
        return (this.amount * this.interestRate) / 100
    }
}