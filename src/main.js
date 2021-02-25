import 'tachyons/css/tachyons.min.css'
import '../assets/css/style.css'
if (
  typeof process.env.GOOGLE_ANALYTICS_ID !== 'undefined' &&
  process.env.GOOGLE_ANALYTICS_ID !== ''
) {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  
  ga('create', process.env.GOOGLE_ANALYTICS_ID, 'auto')
  ga('send', 'pageview')
  /* eslint-enable */
}
const readmoreBio = document.getElementById('readmore-bio')
readmoreBio.onclick = (e) => {
  e.preventDefault()
  const targetId = e.target.hash.split('#')[1]
  const readMore = document.getElementById(targetId)
  if (e.target.classList.contains('toggle-less')) {
    e.target.innerText = '−'
    e.target.classList.remove('toggle-less')
    e.target.classList.add('toggle-more')
    readMore.classList.remove('visually-hidden')
  } else {
    e.target.innerText = '+'
    e.target.classList.remove('toggle-more')
    e.target.classList.add('toggle-less')
    readMore.classList.add('visually-hidden')
  }
}

const top = document.getElementById('top')
top.onclick = (e) => {
  e.preventDefault()
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
