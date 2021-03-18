var data = $('#field-source').data('fields');
console.log(data);
$('.ABC').each(function(index, el){
  $('#'+el.id).click(function(){
     let resultfind = data.find(function(element){
        return element.ID == el.id;
     });
     $("#imgCinema").attr('src', resultfind.Hinh);
     $("#txtdiachi").html(resultfind.DiaChi);
  })
})