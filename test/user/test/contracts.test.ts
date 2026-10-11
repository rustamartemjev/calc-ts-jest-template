import { BaseContract } from '../../../src/contracts/base-contract'
import { DepositContract } from '../../../src/contracts/deposit-contract'
import { LoanContract } from '../../../src/contracts/loan-contract'
import { InsuranceContract } from '../../../src/contracts/insurance-contract'

describe('BaseContract', () => {
    let contract: BaseContract

    beforeEach(() => {
        contract = new BaseContract('C001', 'Ivan')
    })

    afterEach(() => {
        contract.deactivate()
        console.log('Contract deactivated')
    })

    test('stores contract information', () => {
        expect(contract.contractId).toBe('C001')
        expect(contract.clientName).toBe('Ivan')
        expect(contract.isActive).toBe(false)
    })

    test('activates contract', () => {
        contract.activate()

        expect(contract.isActive).toBe(true)
    })

    test('deactivates contract', () => {
        contract.activate()
        contract.deactivate()

        expect(contract.isActive).toBe(false)
    })
})

describe('DepositContract', () => {
    let contract: DepositContract

    beforeEach(() => {
        contract = new DepositContract('D001', 'Ivan', 1000, 5)
    })

    afterEach(() => {
        contract.deactivate()
        console.log('Deposit contract deactivated')
    })

    test('calculates interest correctly', () => {
        expect(contract.calculateInterest()).toBe(50)
    })

    test('inherits activation behavior', () => {
        contract.activate()

        expect(contract.isActive).toBe(true)
    })
})

describe('LoanContract', () => {
    let contract: LoanContract

    beforeEach(() => {
        contract = new LoanContract('L001', 'Ivan', 10000, 500, 24)
    })

    afterEach(() => {
        contract.deactivate()
        console.log('Loan contract deactivated')
    })

    test('calculates total payment correctly', () => {
        expect(contract.calculateTotalPayment()).toBe(12000)
    })

    test('inherits activation behavior', () => {
        contract.activate()

        expect(contract.isActive).toBe(true)
    })
})

describe('InsuranceContract', () => {
    let contract: InsuranceContract

    beforeEach(() => {
        contract = new InsuranceContract('I001', 'Ivan', 'health', 300, 2)
    })

    afterEach(() => {
        contract.deactivate()
        console.log('Insurance contract deactivated')
    })

    test('calculates total premium correctly', () => {
        expect(contract.calculateTotalPremium()).toBe(600)
    })

    test('inherits activation behavior', () => {
        contract.activate()

        expect(contract.isActive).toBe(true)
    })
})