function a () {
  return new Promise((resolve) => {
    setTimeout(resolve,2000)
  })
}
function c(){
  main().then(()=>{
    console.log("789")
  })

}
async function main () {
  console.log("456")
  await a();
  console.log("123")
}
c()