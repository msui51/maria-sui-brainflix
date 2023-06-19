export const commentTime=(time)=>{
    let changeTime=new Date(time).toLocaleDateString();
    return changeTime;
   }