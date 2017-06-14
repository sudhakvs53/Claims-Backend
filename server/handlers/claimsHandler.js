import claimModel from './../models/claimsModel';

export default {
    get_claim_defaults: get_claim_defaults
};

// const get_claim_defaults = () => {
//     claimModel.find({}, (err, data) => {
//         if (err) {
//             console.log('err while retrieving defaults ' + err);
//         }
//         else {

//         }
//     })
// }

// const create_claim = (newClaim) => {
//     newClaim.save((err) => {
//         if (err) {
//             console.log('err while creating claim ' + err);
//         } else {
//             console.log('claim created successfully');
//         }
//     });
// };

// const search_by_projectId = (projID, callback) => {
//     claimModel.find({ 'proj_id': projID }, (err, data) => {
//         if (err) {
//             console.log('err while searching by project id ' + err);
//         } else {
//             callback(data);
//         }
//     });
// };