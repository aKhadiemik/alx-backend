const kue = require('kue');

const queue = kue.createQueue();
const jobObj = {
    phoneNumber: '4154318781',
    message: 'This_is_the_code_to_verify_your_account',
};

const queueName = 'push_notification_code';

const job = queue.create(queueName, jobObj).save();

job.on('enqueue', () => console.log(`Notification job created: ${job.id}`))
    .on('complete', () => console.log('Notification job completed'))
    .on('failed', () => console.log('Notification job failed'));
