import lodash from 'lodash';
import moment from 'moment';
import claimsHandler from './../handlers/claimsHandler';
import claimsModel from './../models/claimsModel';


exports.mock100Records = () => {
    let newClaim;

    for (let i = 1; i < 10000; i++) {
        newClaim = new claimsModel({
            claim_id: 'mock_claim_id_' + i,
            claim_name: 'mock_claim_name_' + i,
            claim_type: 'mock_claim_type_' + i,
            prod_form_name: 'mock_prod_form_name_' + i,
            need_state_name: 'mock_need_state_name_' + i,
            benefit_area_name: 'mock_benefit_area_name_' + i,
            claim_status: 'mock_claim_status_' + i,
            proj_id: 'mock_proj_id_' + i,
            proj_title: 'mock_proj_title_' + i,
            claim_version: '0.0',
            region: [{
                region_id: 'mock_region_id' + i,
                region_name: 'mock_region_name_' + i
            }],
            exception: 'mock_exception_' + i,
            formula: [{
                formula_id: 'mock_formula_id_' + i,
                formula_spec: 'mock_formula_spec_' + lodash.random(),
                lab_notebook_id: 'mock_lab_' + lodash.random(),
                region: 'mock_region_' + i,
                prod_name: 'mock_prod_name_' + i,
                proj_name: 'mock_proj_name_' + i
            }],
            substantiation: [{
                substantiation_reason: 'mock_subs_reason_' + i,
                supp_doc_id: 'mock_supp_doc_id_' + lodash.random(),
                file_name: 'mock_' + i,
                file_title: 'mock_' + i,
                source: 'mock_' + i
            }],
            created_by: 'mock_created_by_' + i,
            created_on: moment().format(),
            mod_by: 'mock_mod_by_' + i,
            mod_dt: moment().format(),
        });

        claimsHandler.create_claim(newClaim);
        console.log('record inserted ' + i);
    }

};