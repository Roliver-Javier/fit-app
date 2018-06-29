
let path = 'http://localhost:3001';

export const endpoints ={
    getAllPlans: {
        name:'Get all plans',
        service: path+'/plans/getAllPlans'
    },
    getDetailPlan:{
        name:'Get a particular Plan',
        service: path+'/plans/getDetailPlan'
    }
};