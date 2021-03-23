let selectseat;
let lvet; // chua có giá trị gì hết
function clickimgaghe(event) {
  let imgclick = event.target; // giá tri thu  ghe 2  
  let tenghe = $('#'+imgclick.id).attr('class');
  $('#ptenghe').text(tenghe)
  console.log(imgclick.id);
  if (lvet) {
    lvet.setAttribute("src", "images/seattrong.png");
    imgclick.setAttribute("src", "images/seatchon.png");
    selectseat = imgclick;
    lvet = imgclick;
  } else {
    imgclick.setAttribute("src", "images/seatchon.png");
    selectseat = imgclick;
    lvet = imgclick; // đã có giá trị của ghế 1
  }
}


$('#btnNext').click(function(){
    let tickerbook = JSON.parse(window.localStorage.getItem("ticker"));
    tickerbook.idghe = selectseat.id;
    tickerbook.tenghe = selectseat.getAttribute('class');
    tickerbook.idphong = $('.idphong').attr('id');
    tickerbook.tenphong = $('.idphong').text();
    tickerbook.idrap = $('.idrap').attr('id');
    tickerbook.tenrap = $('.idrap').text();
    tickerbook.idphim = $('.idphim').attr('id');
    tickerbook.tenphim = $('.idphim').text();
    window.localStorage.setItem('ticker', JSON.stringify(tickerbook));
    window.location.replace("/thanhtoan/loadPage");
    return true;
})



