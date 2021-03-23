$('.thoigian').click(function(){
    if($('#txtngaydat').val()){
        let tickerbook = {
            ngaydat: $('#txtngaydat').val(),
            idsuatchieu: this.id,
            suatchieu: $('#'+this.id).text()
    
        }
        window.localStorage.setItem("ticker", JSON.stringify(tickerbook))
        return true;
    }else{
        alert("Bạn chưa chọn đặt ngày đặt")
        return false;
    }
    
})

