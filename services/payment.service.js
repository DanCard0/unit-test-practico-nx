const payments = require('../model/payments.json');

function getPayments() {
    return payments;
}

function validate(data) {
    return payments.find((item) => item.id === data.id);
}

function create() {
    console.log('Payment creation');
}

module.exports = {
    getPayments,
    validate,
    create
}
