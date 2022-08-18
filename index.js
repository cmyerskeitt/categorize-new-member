function openOrSenior(data){
    console.log(data)
    let membership = []
    for (info of data){
      if (info[0] >= 55 && info[1] > 7){
        membership.push("Senior")
      } else {
        membership.push("Open")
      }
    }
      return membership
}