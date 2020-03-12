// let grettings = ''
// const time = new Date().getHours()

// function checkTime(){
// // if(time < 10)
// // greetings = 'Good morning'
// // }
// // else{
// // if(time < 16){
// //     greetings = 'Good Afternoon'
// //  }
// // else{
// //     greetings = 'Good evening'
// //  }



// if(time < 10)
// greetings = 'Good morning'
// }
// else if (time < 16 ){
//    greetings = 'Good Afternoon'
// }
// else if (time < 20){
//     greetings = 'Good evening'
// }

let hour = 9
if(hour > 10&& hour < 14&& hour === 12){
console.log(true)
}else{
    console.log(false)
}

// or operator

if(hour > 10 || hour < 8){
console.log(true)
}else{
    console.log(false)
}

// no toperator

if(hour !== 13){
console.log(true)
}else{
    console.log(false)
}

if(hour){
    console.log(true)
    }else{
        console.log(false)
    }