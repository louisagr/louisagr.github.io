const randomColor = () => '#' + Math.random().toString(16).substr(-6)
const changeColor = () => document.body.style.color = randomColor()

setInterval(() => {
  changeColor()
}, 3500)

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    changeColor()
  }
}
