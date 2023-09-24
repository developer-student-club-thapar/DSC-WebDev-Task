const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/recruitment-site';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(uri)
}

module.exports = main