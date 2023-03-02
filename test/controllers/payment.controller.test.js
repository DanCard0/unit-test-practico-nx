const { getPaymentById } = require('../../controllers/payment.controller');
const { getPayments } = require('../../services/payment.service');

jest.mock('../../services/payment.service');

beforeEach(() => {
    getPayments.mockClear();
});

describe('When call getPaymentById function', () => {
    it('Should getPaymentById return a payment object', () => {
        // Given
        const id = '4f3fe4eb-6afc-4d7b-b630-10b09177b48c';
        const paymentsReturned = [
            {
                "id": "4f3fe4eb-6afc-4d7b-b630-10b09177b48c",
                "amount": 200,
                "description": "product description",
                "payment_gateway": "naranja",
                "pan": "************1538"
            },
            {
                "id": "05ea4157-d742-487b-9f49-47b320a723f9",
                "amount": 500,
                "description": "product description",
                "payment_gateway": "visa",
                "pan": "************4165"
            }
        ];

        getPayments.mockReturnValue(paymentsReturned);
        // When
        const result = getPaymentById(id);
        //Then
        expect(result).toStrictEqual({
            "id": "4f3fe4eb-6afc-4d7b-b630-10b09177b48c",
            "amount": 200,
            "description": "product description",
            "payment_gateway": "naranja",
            "pan": "************1538"
        });
    });

    it('Should getPayments service have been called one time', () => {
        // Given
        const id = '4f3fe4eb-6afc-4d7b-b630-10b09177b48c';
        getPayments.mockReturnValue([]);
        // When
        getPaymentById(id);
        // Then
        expect(getPayments).toHaveBeenCalledTimes(1);
        // expect(getPayments).toHaveBeenNthCalledWith(1, 'unParametro'); // Primera llamada
        // expect(getPayments).toHaveBeenNthCalledWith(2, 'unParametro'); // Segunda llamada
    });

    it('Should return an Error when the Id is null', () => {
        const expectedMessage = 'Id must not be null';

        expect(() => {
            getPaymentById(null);
        }).toThrow(expectedMessage);
    })
});
