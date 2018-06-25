
export const routes ={
    path : 'http://localhost:3001',

    getAllPlans: {
        name:'',
        service: 'http://localhost:3001/getAllPlans'
    },
    getPlanDetails:{
        name:'',
        service: this.path+'/getPlanDetails'
    }
};