const mongoose = require('mongoose');

main().catch(err => console.log(err));

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/recruitment-site';

async function main() {
    await mongoose.connect(uri)
}

module.exports = main