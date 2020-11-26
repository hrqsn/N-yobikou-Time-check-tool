
const times = document.getElementsByClassName('movie-length')
const goodTimes = document.querySelectorAll('.good .movie-length')
let time = 0

for (let i = 0; i < times.length; i++) {
  const timeSplit = times[i].innerText.split(':')
  time = Number(timeSplit[0]) * 60 + Number(timeSplit[1]) + time
  // times変数（mm:ssの文字列で渡される）を秒数の数値に変換して合計
}

const goukei = 'すべての授業: ' + Math.floor(time / 3600) + '時間' + Math.floor((time % 3600) / 60) + '分' + (time % 60) + '秒'

let goodTime = 0
for (let i = 0; i < goodTimes.length; i++) {
  const goodTimeSplit = goodTimes[i].innerText.split(':')
  goodTime = Number(goodTimeSplit[0]) * 60 + Number(goodTimeSplit[1]) + goodTime
  // time変数と同様、goodtimesに入ってる文字列を数値に変換
}

const goodGoukei = '視聴済み: ' + Math.floor(goodTime / 3600) + '時間' + Math.floor((goodTime % 3600) / 60) + '分' + (goodTime % 60) + '秒（' + Math.round((goodTime / time) * 100) + '%）'

const remainingGoukei = '未視聴: ' + Math.floor((time - goodTime) / 3600) + '時間' + Math.floor(((time - goodTime) % 3600) / 60) + '分' + ((time - goodTime) % 60) + '秒'

const hyouji = document.getElementsByClassName('description')

if (hyouji === undefined) {
  window.location.reload()
}

const movieCount = document.getElementsByClassName('movie').length
const testCount = document.getElementsByClassName('evaluation-test').length

hyouji[0].innerHTML = "<div class='u-card'><div class='u-list-header typo-list-title'>この単元の進捗状況</div><div class='u-card-inner'>" + goukei + '<br>' + goodGoukei + '<br>' + remainingGoukei + '<br>' + '授業動画数:' + movieCount + '<br>' + '確認テストの数:' + testCount + '</div></div>' + hyouji[0].innerHTML
// 表示
