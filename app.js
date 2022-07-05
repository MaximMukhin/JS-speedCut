document.querySelector('.btn-cut').addEventListener('click', speedCut)

function speedCut() {
   let knifle = document.querySelector('.input-knifle').value 
   let eat = document.querySelector('.input-eat').value 
   let turns = document.querySelector('.input-turns').value 

   let sum = `<div>${knifle * eat * turns} мм.мин</div>  `

   document.querySelector('.sum-cut-speed').innerHTML = sum;
}












// const speedCut = (blades, innings, speed) => {
//    return blades * innings * speed + " mm min"
// 
// }
// 
// speedCut(2, 0.25, 18000)
// console.log(speedCut(1, 0.3, 18000))
























