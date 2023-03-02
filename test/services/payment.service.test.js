const { validate } = require("../../services/payment.service");

describe('When call validate function', () => {
    it('Should return the first payments item', () => {
        // Given
        const data = {
            id: '4f3fe4eb-6afc-4d7b-b630-10b09177b48c'
        };

        // When
        const result = validate(data);

        // Then
        expect(result).toStrictEqual({
            "id": "4f3fe4eb-6afc-4d7b-b630-10b09177b48c",
            "amount": 200,
            "description": "product description",
            "payment_gateway": "naranja",
            "pan": "************1538"
        })
    });
});