function getData (userName, datetime, response) {
    console.log(userName + datetime);
    let hour = datetime.getHours();
    
    if(hour > 9 && hour < 12) {
        response.write("Good morning" + userName);
    } else  if(hour > 12 && hour < 17) {
        response.write("Good aftenoon" + userName);
     } else{
        response.write("Good eveningss" + userName);
     }
    }
module.exports = getData;