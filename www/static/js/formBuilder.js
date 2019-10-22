$.fn.formBuilder = function() {
  var form = $(this);
  var dataArr = form.serializeArray();
  var data = {};
  for (var i = 0; i < dataArr.length; i++) {
    var key = dataArr[i].name;
    var value = dataArr[i].value;
    if(data[key]==undefined) {
      data[key] = value;
    }else{
      if(data[key] instanceof Array){
        data[key].push(value);
      }else{
        var temp = data[key];
        data[key] = [];
        data[key].push(temp);
        data[key].push(value);
      }
    }
  }
  return {data:JSON.stringify(data)};
};