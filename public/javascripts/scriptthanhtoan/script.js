let seats = $(".tenghe");
let ticker = JSON.parse(window.localStorage.getItem("ticker"));
$("#tenphim").text(ticker.tenphim);
$("#tenrap").text(ticker.tenrap);
seats.text(ticker.tenghe);
let tg = ticker.suatchieu.split(":");
$("#thoigian").text(tg[0] + ":" + tg[1]);
let row = ticker.tenghe.split("");
$("#day").text(row[0]);

let user = JSON.parse(window.localStorage.getItem("user"));
console.log("ABC");
$(".usertt").val(user.HoTen);

$("#btnThanhToan").click(function () {
  ticker.idkhachhang = 1;
  window.localStorage.setItem("ticker", JSON.stringify(ticker));
  $.post("/thanhtoan/xulythanhtoan", {vedat: ticker},function(result){
      alert("Thanh toán thành công, vé của bạn đã được ghi nhận !");
      window.location.replace("/");
      window.localStorage.removeItem('ticker')
      return;
  })
});

let second = parseInt($(".second").text());

