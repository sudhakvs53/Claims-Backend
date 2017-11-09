import mongoosastic from 'mongoosastic';
// import elasticsearch from 'elasticsearch';

import mongoose from 'mongoose';
const schema = mongoose.Schema;

// const client = new elasticsearch.Client({
//     host: 'http://elastic:changeme@localhost:9200',
//     // log: 'trace'
// });

const claimsSchema = new schema({
    claim_id: { type: String, required: true },
    claim_name: { type: String, required: true, es_indexed: true },
    benefit_area: { type: String, required: true },
    region: [{ type: String }],
    exception: { type: String },
    formula: [{
        formula_id: { type: String, required: true },
        formula_spec: { type: String },
        lab_notebook_id: { type: String },
        region: { type: String },
        product_form: { type: String },
        project_title: { type: String }
    }],
    substantiation: [{ type: String }],
    created_on: { type: Date, default: Date.now },
    created_by: {
        firstName: { type: String },
        lastName: { type: String },
        nId: { type: String },
        email: { type: String },
        name: { type: String },
        password: { type: String }
    },
    modified_by: {
        firstName: { type: String },
        lastName: { type: String },
        nId: { type: String },
        email: { type: String },
        name: { type: String },
        password: { type: String }
    },
    modified_on: { type: Date },

    project_id: { type: String, required: true },
    project_title: { type: String, required: true, es_indexed: true },
    need_state: { type: String, required: true },
    product_form: { type: String },
    claim_type: { type: String, required: true },
    project_status: { type: String },
    project_version: { type: String, default: '0.0' },
});

// claimsSchema.plugin(mongoosastic, {
//     esClient: client
// });

const claimsModel = mongoose.model('claims', claimsSchema);
// const stream = claimsModel.synchronize({}, { saveOnSynchronize: true });
// let count = 0;

// stream.on('data', function(err, doc) {
//     count++;
// });

// stream.on('close', function() {
//     console.log(`indexed ${count} documents !`);
// });

// stream.on('error', function(err) {
//     console.log(`err while indexing existing data ${err} `);
// });

// claimsModel.createMapping(function(err, mapping) {
//     if (err) {
//         console.log(`err while mapping ${err}`);
//     } else {
//         console.log(`es mapping complete ${mapping}`);
//     }
// });

export default claimsModel;