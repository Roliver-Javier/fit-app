

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
            title: 'Definition in 12 weeks',
            thumbnails:['../../assets/imgs/thumbnails/coach.jpg','../../assets/imgs/thumbnails/coach2.jpg','../../assets/imgs/thumbnails/coach3.jpg'],
            description:'Welcome to my plan!, Are you ready to work hard, transform your body while looking and feeling incredible? Then this is the plan for you!',
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
            trainer_detail:{
                name: 'Javier Tejeda',
                images:['../../assets/imgs/trainers/trainer-1.jpg','../../assets/imgs/trainers/trainer-2.jpg','../../assets/imgs/trainers/trainer-3.jpg']
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
            title: 'Fitness Transformation',
            thumbnails:['../../assets/imgs/thumbnails/coach2.jpg','../../assets/imgs/thumbnails/coach.jpg','../../assets/imgs/thumbnails/coach3.jpg'],
            description:'Welcome to phase 1 of my new fitness plan featuring two separate phases! in the first phase, we are goint to workout 5 days a week, withh two rest days at the end of each week.',
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
            },
            trainer_detail:{
                name: 'Angela Ramirez',
                images:['../../assets/imgs/trainers/trainer-1.jpg','../../assets/imgs/trainers/trainer-2.jpg','../../assets/imgs/trainers/trainer-3.jpg']
            },
            workouts_details:{
                routines:[
                    { 
                        
                    }
                ]
            }
        },
        {
            id: 3,
            title: 'Gain good muscles',
            thumbnails:['../../assets/imgs/thumbnails/coach3.jpg','../../assets/imgs/thumbnails/coach2.jpg','../../assets/imgs/thumbnails/coach.jpg'],
            description:'My plan is a 30 day Body Bulk. We will break down all of the muscles that we train into intricate parts to ensure that we are training the muscle fully and not leaving any parts of your physique untrained.',
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
            trainer_detail:{
                name: 'Fernando Morillo',
                images:['../../assets/imgs/trainers/trainer-1.jpg','../../assets/imgs/trainers/trainer-2.jpg','../../assets/imgs/trainers/trainer-3.jpg']
            },
            workouts_details:{
                routines:[
                    { 
                        
                    }
                ]
            }
        },
        {
            id: 4,
            title: 'Definition in 12 weeks',
            description:'',
            thumbnails:['../../assets/imgs/thumbnails/coach.jpg','../../assets/imgs/thumbnails/coach2.jpg','../../assets/imgs/thumbnails/coach3.jpg'],
            category: {
                level:'',
                type: '',
                location:''
            },
            videoPath:'',
            trainer_detail:{
                name: 'Javier Tejeda',
                images:['../../assets/imgs/trainers/trainer-1.jpg','../../assets/imgs/trainers/trainer-2.jpg','../../assets/imgs/trainers/trainer-3.jpg']
            },
            workouts_details:{
                routines:[
                    { 
                        
                    }
                ]
            }
        }    
    ]
    );
}

//Remove a particular Plan
exports.remove = function(id, cb){
    cb(null,'');
}