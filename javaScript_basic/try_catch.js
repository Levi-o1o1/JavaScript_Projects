try{
    riskyFunction();
}catch (error){
    console.error("An error occurred:", error.message)
}finally{
    console.log("Cleanup code can go here. "); // Always runs
}