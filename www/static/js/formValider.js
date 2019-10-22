document.write("<script src='/static/metronic/assets/global/plugins/jquery-validation/js/jquery.validate.min.js' type='text/javascript'></script>");
document.write("<script src='/static/metronic/assets/global/plugins/jquery-validation/js/additional-methods.min.js' type='text/javascript'></script>");
document.write("<script src='/static/metronic/assets/global/plugins/jquery-validation/js/localization/messages_zh.min.js' type='text/javascript'></script>");

$.fn.formValider = function(rules, messages) {
  var form_v = $(this);
  var error_v = $('.alert-danger', form_v);
  if (messages == undefined)
    messages = {};
  form_v.validate({
    errorElement: 'span', //default input error message container
    errorClass: 'help-block help-block-error', // default input error message class
    focusInvalid: true, // do not focus the last invalid input
    ignore: "",  // validate all fields including form hidden input
    rules: rules,
    messages: messages,
    invalidHandler: function (event, validator) { //display error alert on form submit
      error_v.show();
      App.scrollTo(error_v, -200);
    },
    errorPlacement: function (error, element) { // render error placement for each input type
      var cont = $(element).parent('.input-group');
      if($(element).hasClass("select2-hidden-accessible")){
        $(element).next().after(error);
      }else{
        if (cont.size() > 0) {
          cont.after(error);
        } else {
          element.after(error);
        }
      }
    },
    highlight: function (element) { // hightlight error inputs
      $(element).closest('.form-group').addClass('has-error'); // set error class to the control group
    },
    unhighlight: function (element) { // revert the change done by hightlight
      $(element).closest('.form-group').removeClass('has-error'); // set error class to the control group
    },
    success: function (label) {
      label.closest('.form-group').removeClass('has-error'); // set success class to the control group
    },
    submitHandler: function (form) {
      error_v.hide();
    }
  });
};
