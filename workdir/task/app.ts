const taskOne = (passengers:number, shuffle:number)=>{ // passengers: number, shuffle: number 
     interface passengers { // passengers: { name: string, location: string }[] 
        name: string; // name: string[] 
        location: string; // location: string[]
    }
    let reservation: passengers[] = [], boarded: passengers[] = [], counter = 0, inputInfo: passengers[] = [], locations = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"] // reservation: 
    //{ name: string, location: string }[] = [], boarded: { name: string, location: string }[] = [], counter = 0, inputInfo: { name: string, location: string }[] = [],
    // locations = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"] // reservation: string[] = [], boarded: string[] = [], counter = 0, inputInfo: string[] = [],
    // locations = ["Abuja", "Benue", "Lagos", "katsina", "Sambisa"] 

    for (let indexOfPass = 0, indexOfLocation = 0; indexOfPass < passengers; indexOfLocation++, indexOfPass++) { // for (let indexOfPass = 0, indexOfLocation = 0; indexOfPass < passengers; 
        //indexOfLocation++, indexOfPass++) { 

        let obj: passengers = { // let obj: { name: string, location: string } = { 
            name: `passenger${indexOfPass + 1}`, // name: `passenger${indexOfPass + 1}`, 
            location: locations[indexOfLocation] // location: locations[indexOfLocation] 
        }

        inputInfo.push(obj) // inputInfo.push(obj) 
        if (indexOfLocation > 3) { // if (indexOfLocation > 3) { 
            indexOfLocation = -1 // indexOfLocation = -1 
        }
    }

    if (inputInfo.length % 5 !== 0) { // if (inputInfo.length % 5 !== 0) { 
        reservation = inputInfo.splice(-(inputInfo.length % 5)) // reservation = inputInfo.splice(-(inputInfo.length % 5)) 

    }

    while (inputInfo.length > 0) { // while (inputInfo.length > 0) { 

        if (inputInfo.length > 50) { // if (inputInfo.length > 50)  { 
            boarded = inputInfo.splice(0, 50) // boarded = inputInfo.splice(0, 50)
        } else {  // } else { 
            boarded = inputInfo.splice(0) // boarded = inputInfo.splice(0) 
        }
        if (shuffle === 0 && inputInfo.length) {  // if (shuffle === 0 && inputInfo.length) { 
            reservation = inputInfo.splice(0) // reservation = inputInfo.splice(0) 
        }
        
        counter++; // counter++; 
        shuffle--; // shuffle--;
    }
    return {
        boarded: boarded, // boarded: boarded,
        reservation: reservation, // reservation: reservation, 
        count: counter // count: counter
    }



   
}
export default taskOne; // export default taskOne;