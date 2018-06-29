

//Create new Plan in the database and return its id
exports.create = function(plan,cb){
    cb('12345');
}

//Get a particular Plan
exports.get = function(id, cb){
    cb(null, {
        id: 0,
        images:['../../assets/imgs/trainers/coach.jpg','../../assets/imgs/trainers/coach2.jpg','../../assets/imgs/trainers/coach3.jpg'],
        title: '',
        description:'',
        author: '',
        category: {
            level:'',
            type: '',
            location:''
        },
        videoPath:''
    });
}

//Get all Plans
exports.all = function(cb){
    cb(null, [
        {
            id: 1,
            images:['../../assets/imgs/trainers/coach.jpg','../../assets/imgs/trainers/coach2.jpg','../../assets/imgs/trainers/coach3.jpg'],
            title: 'Definition in 12 weeks',
            description:'Welcome to my plan!, Are you ready to work hard, transform your body while looking and feeling incredible? Then this is the plan for you!',
            author: 'Javier Tejeda',
            category: {
                level:'All levels',
                type: 'Weightlifting',
                location:'Gym'
            },
            videoPath:'',
            duration:{
                count:'60',
                weeks:true,
                days:false,
                years:false,
                daysInWeek: '5',
                time:{
                    count:'60',
                    mins:true,
                    hours: false,
                    secs: false
                }
            },
            workouts_details:{
                routines:[
                    { 
                        
                    }
                ]
            }
        },
        {
            id: 2,
            images:['../../assets/imgs/trainers/coach2.jpg','../../assets/imgs/trainers/coach.jpg','../../assets/imgs/trainers/coach3.jpg'],
            title: 'Fitness Transformation',
            description:'Welcome to phase 1 of my new fitness plan featuring two separate phases! in the first phase, we are goint to workout 5 days a week, withh two rest days at the end of each week.',
            author: 'Angela Ramirez',
            category: {
                level:'All levels',
                type: 'Plyometrics',
                location:'Home'
            },
            videoPath:'',
            duration:{
                count:'60',
                weeks:true,
                days:false,
                years:false,
                daysInWeek: '5',
                time:{
                    count:'60',
                    mins:true,
                    hours: false,
                    secs: false
                }
            }
        },
        {
            id: 3,
            images:['../../assets/imgs/trainers/coach3.jpg','../../assets/imgs/trainers/coach2.jpg','../../assets/imgs/trainers/coach.jpg'],
            title: 'Gain good muscles',
            description:'My plan is a 30 day Body Bulk. We will break down all of the muscles that we train into intricate parts to ensure that we are training the muscle fully and not leaving any parts of your physique untrained.',
            author: 'Fernando Morillo',
            category: {
                level:'All levels',
                type: 'Weightlifting',
                location:'Gym'
            },
            videoPath:'',
            duration:{
                count:'60',
                weeks:true,
                days:false,
                years:false,
                daysInWeek: '5',
                time:{
                    count:'60',
                    mins:true,
                    hours: false,
                    secs: false
                }
            }
        },
        {
            id: 4,
            images:['../../assets/imgs/trainers/coach.jpg','../../assets/imgs/trainers/coach2.jpg','../../assets/imgs/trainers/coach3.jpg'],
            title: 'Definition in 12 weeks',
            description:'',
            author: 'Javier Tejeda',
            category: {
                level:'',
                type: '',
                location:''
            },
            videoPath:''
        }    
    ]
    );
}

//Remove a particular Plan
exports.remove = function(id, cb){
    cb(null,'');
}