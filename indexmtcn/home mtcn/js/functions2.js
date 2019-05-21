/**
 * 
 */
 $(function(){ 
      $('#danhba-show-main').hover(function(){	       
    		  $("#danhba-show").stop(true,true).slideDown().show('slow');
    	},function(){	      
              $("#danhba-show").stop(true,true).slideUp().hide('slow');		  
    	});
        
       $("#danhba-show").hover(function(){        
            $(this).stop(true,true).show();
       },function(){        
            $(this).stop(true,true).hide();
       });
 })
 
function checkExt(filename){
    var filelength = parseInt(filename.length) - 3;
    var fileext = filename.substring(filelength,filelength + 3);
    
    // Check file extenstion
    if (fileext.toLowerCase() != 'doc' && fileext.toLowerCase() != 'rar' && fileext.toLowerCase() != 'zip'){
        return false;
    }
    return true;
}
function share_facebook()
{
	u=location.href;t=document.title;
	window.open("http://www.facebook.com/share.php?u="+encodeURIComponent(u)+"&t="+encodeURIComponent(t))
}
function share_google()
{
	u=location.href;
	t=document.title;
	window.open("http://www.google.com/bookmarks/mark?op=edit&bkmk="+encodeURIComponent(u)+"&title="+t+"&annotation="+t)
}
function share_twitter()
{
	u=location.href;
	t=document.title;
	window.open("http://twitter.com/home?status="+encodeURIComponent(u))
}
function share_digg()
{
	u=location.href;
	t=document.title;
	window.open("http://digg.com/submit?phase=2&url="+encodeURIComponent(u)+"&title="+t);
}
function share_delicious()
{
	u=location.href;
	t=document.title;
	window.open("http://del.icio.us/post?v=2&url="+encodeURIComponent(u)+"&notes=&tags=&title="+t);
}
function share_upon()
{
    u=location.href;
    t=document.title;
    window.open("http://www.stumbleupon.com/submit?url="+encodeURIComponent(u)+"&&title="+t);
}
function OpenPrint()
{
	u=location.href;
	alert(u);
	window.open(u+"&print=1");
	return false
}
function current()
{
	return false;
}


/*************** CHECK FORM ***************/
//If the length of the element's string is 0 then display helper message
function notEmpty(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	if(elem.value.length == 0){
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
		invalid(elemid);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}
//For texarea
function notEmptyTextarea(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	if(elem.value.length==0){
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		invalid(elemid);
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}



//If the element's string matches the regular expression it is all numbers

function isNumeric(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
//		alert(helperMsg);
		invalid(elemid);
		elem.focus();
		return false;
	}
}

/*
 * check number list follow: 048082354;09238549; 
 */
function isNumericList(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	var numericExpression = /^[0-9; ]+$/;
	if(elem.value.match(numericExpression)){
		valid(elemid);
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML = "<li>"+ helperMsg+"</li>";
//		alert(helperMsg);
		invalid(elemid);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is all letters
function isAlphabet(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML = helperMsg;
		
//		alert(helperMsg);
		elem.focus();
		return false;
	}
}

//If the element's string matches the regular expression it is numbers and letters
function isAlphanumeric(elemid, helperMsg){
	
	elem  = document.getElementById(elemid);
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML = helperMsg;
		elem.focus();
		return false;
	}
}


// Limit length
function lengthRestriction(elemid, min, max){
	elem  = document.getElementById(elemid);
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		valid(elemid);
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+'Please enter between ' +min+ ' and ' +max+ ' characters'+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML = "Please enter between " +min+ " and " +max+ " characters";
//		alert("Please enter between " +min+ " and " +max+ " characters");
		invalid(elemid);
		elem.focus();
		return false;
	}
}

// Min length
function lengthMin(elemid, min, helperMsg){
	elem  = document.getElementById(elemid);
	var uInput = elem.value;
	if(uInput.length >= min ){
		valid(elemid);
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML  += "<li>"+helperMsg+"</li>";
//		elem.focus();
		invalid(elemid);
		return false;
	}
}


// Select box ( multi select)
function madeSelection(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	  var i;
	  for (i=0; i<elem.options.length; i++) {
	    if (elem.options[i].selected && ( elem.options[i].value != "") ){
	      return true;
	    }
	  }
	  jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//	  document.getElementById('msg_error').innerHTML = helperMsg;
	  return false;
}

// Select checkbox
function madeCheckbox(elemid, helperMsg)
{
	elem  = document.getElementById(elemid);
	if(elem.checked == false){
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		return false;
	}
	else
	{
		valid(elemid);
		return true;
	}
}

/*
 *  For checkbox multi.
 *  Min 1 item is checked
 */
function checkMultiCheckbox(containerid,helperMsg) {
	fields = jQuery('#'+containerid).find('input:checked');
	length_checked = fields.length;
	if (!length_checked) {
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//    	document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
        return false; // The form will *not* submit
    }
    return true;
}


// Email
function emailValidator(elemid, helperMsg){
	elem  = document.getElementById(elemid);
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		valid(elemid);
		return true;
	}else{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		invalid(elemid);
		return false;
	}
}

// Password and repassword

function checkMatchPass(helperMsg){
	elem_value  = document.getElementById('password').value;
	elem2_value  = document.getElementById('re-password').value;
	
	if(elem_value != elem2_value )
	{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		invalid('re-password');
		return false;
	}
	else
	{
		valid('re-password');
		return true;
	}
}
function checkMatchPass_2(pass,repass,helperMsg){
	elem_value  = document.getElementById(pass).value;
	elem2_value  = document.getElementById(repass).value;
	if(elem_value != elem2_value )
	{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#'+elemid);
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		invalid(repass);
		return false;
	}
	else
	{
		valid(repass);
		return true;
	}
}

// Email and re-email

function checkMatchEmail(helperMsg){
	elem_value  = document.getElementById('email').value;
	elem2_value  = document.getElementById('re-email').value;
	
	if(elem_value != elem2_value )
	{
		jQuery('<br/><label class=\'label_error\'>'+helperMsg+'</label>').insertAfter('#email');
//		document.getElementById('msg_error').innerHTML += "<li>"+helperMsg+"</li>";
		invalid('re-email');
		return false;
	}
	else
	{	
		valid('re-email');
		return true;
	}
}
/*
 * Change border color where valid
 */

function valid(element)
{
//	document.getElementById(element).style.border = " 2px solid #F0F0F0 ";
	jQuery("#"+element).removeClass("redborder");

}
/*
 * Change border color where invalid
 */
function invalid(element)
{
	jQuery("#"+element).addClass("redborder");
}
function validate(email) {
 
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   return reg.test(email)
}
function add_question(form)
{

	var name = form.name.value;
	var email = form.email.value;
	var content = form.content.value;
	var parent = form.parent.value;
	var code = form.capcha.value;
	
	if(name == '')
	{
		alert('Họ tên không được để trống.');
		form.name.focus();
		return false;
	}
	if(email == '')
	{
		alert('Email không được để trống.');
		form.email.focus();
		return false;
	}
	if(!validate(email))
	{
		alert('Email không hợp lệ.');
		form.email.focus();
		return false;
	}
	if(content == '')
	{
		alert('Nội dung không được để trống.');
		form.content.focus();
		return false;
	}
	if(code == '')
	{
		alert('Captcha không được để chống.');
		form.capcha.focus();
		return false;
	}
	
	var oParam = new Object();
	oParam.name = name;
	oParam.email = email;
	oParam.content = content;
	oParam.parent = parent;
	oParam.code = code;
	jQuery.post(base_url + 'home/add_question/', oParam, function(data){
		if(data.success){
			alert(data.message);
			load_question();
			form.name.value = '';
			form.email.value = '';
			form.content.value = '';
			form.parent.value = '';
			window.location.reload();
		}else{
			alert(data.message);
		}
	},"json");
	
	return false;
}

function load_question()
{
	var oParam = new Object();
	jQuery.post(base_url + 'home/list_question/', oParam, function(data){
		jQuery("#ajaxquestion").html(data);
	});
	
}

function likeanswer(id)
{
	var oParam = new Object();
	oParam.id = id;
	jQuery.post(base_url + 'home/like_answer/', oParam, function(data){
		if(data.success){
			var count = parseInt(jQuery('#like' + id).attr('rel')) + 1;
			jQuery('#like' + id).attr('rel',count);
			jQuery('#like' + id).html('Like('+count+')');
		}else{
			alert(data.message);
		}
	},"json");
}

function replyquestion(id)
{
	jQuery('#labelq').html('Trả lời tại đây');
	jQuery('#fqiestion').css('display' , 'block');
	jQuery('#bparent').val(id);
	jQuery('#bname').focus();
	
}

function add_comment(form)
{

	var name = form.name.value;
	var email = form.email.value;
	var content = form.content.value;
	var code = form.code.value;
	var idnews = form.idnews.value;
	var news_title = form.news_title.value;
    var news_code = form.news_code.value;
    var sendu = form.sendu.value;
	
	if(name == '')
	{
		alert('Họ tên không được để trống.');
		form.name.focus();
		return false;
	}
	if(email == '')
	{
		alert('Email không được để trống.');
		form.email.focus();
		return false;
	}
	if(!validate(email))
	{
		alert('Email không hợp lệ.');
		form.email.focus();
		return false;
	}
	if(content == '')
	{
		alert('Lời bình không được để trống.');
		form.content.focus();
		return false;
	}
	
	var oParam = new Object();
	oParam.name = name;
	oParam.email = email;
	oParam.content = content;
	oParam.code = code;
	oParam.idnews = idnews;
	oParam.news_title = news_title;
    oParam.news_code = news_code;
    oParam.sendu = sendu;
	jQuery.post(base_url + 'home/add_comment/', oParam, function(data){
		if(data.success){
			alert(data.message);
			window.location.reload();
		}else{
			alert(data.message);
		}
	},"json");
	
	return false;
}
function checkjob(f)
{
	var job_contact = jQuery('#job_contact').val();
	var job_skills = jQuery('#job_skills').val();
	var job_address = jQuery('#job_address').val();
	var job_contact_mobile = jQuery('#job_contact_mobile').val();
	var job_title = jQuery('#job_title').val();
	var job_contact_phone = jQuery('#job_contact_phone').val();
	var job_contact_form = jQuery('#job_contact_form').val();
    var job_name = jQuery('#job_name').val();
	
	if(job_name=='')
	{
		alert('Tên hồ sơ không được để trống.');
		jQuery('#job_name').focus();
		return false;
	}
    if(job_contact_phone=='')
	{
		alert('Điện thoại không được để trống.');
		jQuery('#job_contact_phone').focus();
		return false;
	}
	if(job_title=='')
	{
		alert('Công việc không được để trống.');
		jQuery('#job_title').focus();
		return false;
	}
	if(job_contact=='')
	{
		alert('Ho tên không được để trống.');
		jQuery('#job_contact').focus();
		return false;
	}
	/*if(job_skills=='')
	{
		alert('Kỹ năng không được để trống.');
		jQuery('#job_skills').focus();
		return false;
	}*/
	if(job_address=='')
	{
		alert('Địa chỉ không được để trống.');
		jQuery('#job_address').focus();
		return false;
	}
	if(job_contact_phone=='')
	{
		alert('Số điện thoại không được để trống.');
		jQuery('#job_contact_phone').focus();
		return false;
	}
	if(job_contact_mobile=='')
	{
		alert('Di động không được để trống.');
		jQuery('#job_contact_phone').focus();
		return false;
	}
	
	
	return true;
}

function checkntd()
{
	var job_title = jQuery('#job_title').val();
	var job_probationary = jQuery('#job_probationary').val();
	var job_other = jQuery('#job_other').val();
	var job_finish = jQuery('#job_finish').val();
	var job_companyname = jQuery('#job_companyname').val();
	var job_address = jQuery('#job_address').val();
	var job_website = jQuery('#job_website').val();
	var job_scale = jQuery('#job_scale').val();
	var job_contact = jQuery('#job_contact').val();
	
	
	if(job_contact=='')
	{
		alert('Người liên hệ không được để trống.');
		jQuery('#job_contact').focus();
		return false;
	}
	if(job_scale=='')
	{
		alert('Quy mô công ty không được để trống.');
		jQuery('#job_scale').focus();
		return false;
	}
	if(job_website=='')
	{
		alert('Website không được để trống.');
		jQuery('#job_website').focus();
		return false;
	}
	if(job_address=='')
	{
		alert('Địa chỉ không được để trống.');
		jQuery('#job_address').focus();
		return false;
	}
	if(job_title=='')
	{
		alert('Vi trí không được để trống.');
		jQuery('#job_title').focus();
		return false;
	}
	if(job_contact=='')
	{
		alert('Họ tên không được để trống.');
		jQuery('#job_contact').focus();
		return false;
	}
	if(job_probationary=='')
	{
		alert('Thời gian thử việc không được để trống.');
		jQuery('#job_probationary').focus();
		return false;
	}
	if(job_other=='')
	{
		alert('Các chế độ khác không được để trống.');
		jQuery('#job_address').focus();
		return false;
	}
	if(job_finish=='')
	{
		alert('Hạn nộp hồ sơ không được để trống.');
		jQuery('#job_contact_phone').focus();
		return false;
	}
	if(job_companyname=='')
	{
		alert('Tên công ty không được để trống.');
		jQuery('#job_contact_phone').focus();
		return false;
	}
	
	return true;
}

function search_news(f)
{
	var key = jQuery('#keysearch').val();
	if(key == '' || key == 'Tìm trong tin tức')
		{
			alert('Bạn chưa nhập từ khóa.');
			jQuery('#keysearch').focus();
			
		}
	else {
	    key = key.replace(/ /gi,"-"); 
       window.location.href = base_url + 'tim-kiem/' + encodeURIComponent(key)+'.html';
        }

		return false;
}

function question(id)
{
	jQuery('#bparent').val(0);
	if(jQuery('#fqiestion').css('display') == 'none' && id == 0)
	{
		jQuery('#fquestion').html('Viết yêu cầu&nbsp;');
		jQuery('#fqiestion').css('display' , 'block');
	}
	else if(jQuery('#fqiestion').css('display') == 'block' && id == 0)
	{
		jQuery('#fquestion').html('Viết yêu cầu&nbsp;');
		jQuery('#fqiestion').css('display' , 'none');
	}
}
function search_contact(f)
{
	var key = $('#keysearch').val();
	var cateclosure = $('#cateclosure').val();
	var city = $('#city').val();
    var field = $('#field').val();
    var scale = $('#scale').val();
	if(key == '' || key == 'Tìm trong danh bạ')
		{
			alert('Bạn chưa nhập từ khóa tìm kiếm');
            $('#keysearch').focus();
            return false;

		}
	window.location.href = base_url + 'danh-ba-thiet-ke/tim-kiem/'+encodeURIComponent(key)+'/'+cateclosure+'/'+encodeURIComponent(city)+'/'+field+'/'+scale;
    return false;
}

function add_contact()
{
	var company = jQuery('#company').val();
	var summary = jQuery('#summary').val();
    var cemail = jQuery('#cemail').val();
    var cphone = jQuery('#cphone').val();
    var address = jQuery('#address').val();
    var clogo = jQuery('#clogo').val();
	if(company == '' || company == 'Tên giao dịch chính thức của công ty')
		{
			alert('Bạn chưa nhập tên công ty.');
			jQuery('#company').focus();
			return false;
		}
    if(summary == '')
		{
			alert('Bạn chưa nhập tóm tắt dịch vụ.');
			jQuery('#summary').focus();
			return false;
		}
  if(cemail == '')
    {
    	alert('Bạn chưa nhập email.');
    	jQuery('#cemail').focus();
    	return false;
    }
  if(!validate(cemail))
    {
    	alert('Email không đúng định dạng.');
    	jQuery('#cemail').focus();
    	return false;
    }
    if(cphone == '')
    {
    	alert('Bạn chưa nhập điện thoại.');
    	jQuery('#cemail').focus();
    	return false;
    }
    if(address == '')
	{
		alert('Bạn chưa nhập địa chỉ công ty.');
		jQuery('#address').focus();
		return false;
	}
    if(clogo == '')
    {
    	alert('Bạn chưa chọn logo.');
    	jQuery('#clogo').focus();
    	return false;
    }
    return true;
}
/** ham kiem tra khi gui du an **/
//validate form
function add_project()
{
    var title = jQuery('#title').val();
    var yeucau_cv = jQuery('#yeucau_cv').val();
    var name = jQuery('#name').val();
    var phone = jQuery('#phone').val();
    var email = jQuery('#email').val();

    if(title == '')
    {
        alert('Bạn chưa nhập tên dự án.');
        jQuery('#title').focus();
        return false;
    }
    if(yeucau_cv == '')
    {
        alert('Bạn chưa nhập vào yêu cầu công việc.');
        jQuery('#yeucau_cv').focus();
        return false;
    }
    if(name == '')
    {
        alert('Bạn chưa nhập vào họ và tên.');
        jQuery('#name').focus();
        return false;
    }
    if(phone == '')
    {
        alert('Bạn chưa nhập vào số điện thoại.');
        jQuery('#phone').focus();
        return false;
    }
    if(email == '')
    {
        alert('Bạn chưa nhập vào email.');
        jQuery('#email').focus();
        return false;
    }
    if(!validate(email))
    {
        alert('Email không đúng định dạng.');
        jQuery('#email').focus();
        return false;
    }

    return true;
}
function add_user_vip()
{
    var ten = jQuery('#ten').val();
    var dt = jQuery('#dt').val();
    var mail = jQuery('#mail').val();
    var web = jQuery('#web').val();
    var link = jQuery('#link').val();

    if(ten == '')
    {
        alert('Bạn chưa nhập họ tên.');
        jQuery('#ten').focus();
        return false;
    }
    if(dt == '')
    {
        alert('Bạn chưa nhập vào số điện thoại.');
        jQuery('#dt').focus();
        return false;
    }
    if(mail == '')
    {
        alert('Bạn chưa nhập vào email.');
        jQuery('#mail').focus();
        return false;
    }
    if(!validate(mail))
    {
        alert('Email không đúng định dạng.');
        jQuery('#mail').focus();
        return false;
    }
    if(web == '')
    {
        alert('Bạn chưa nhập vào tên web.');
        jQuery('#web').focus();
        return false;
    }
    if(link == '')
    {
        alert('Bạn chưa nhập vào link hồ sơ trên Danh bạ Designs.vn.');
        jQuery('#link').focus();
        return false;
    }

    return true;
}
function add_user_vip_right()
{
    var ten = jQuery('#tenr').val();
    var dt = jQuery('#dtr').val();
    var mail = jQuery('#mailr').val();
    var web = jQuery('#webr').val();
    var link = jQuery('#linkr').val();

    if(ten == '')
    {
        alert('Bạn chưa nhập họ tên.');
        jQuery('#tenr').focus();
        return false;
    }
    if(dt == '')
    {
        alert('Bạn chưa nhập vào số điện thoại.');
        jQuery('#dtr').focus();
        return false;
    }
    if(mail == '')
    {
        alert('Bạn chưa nhập vào email.');
        jQuery('#mailr').focus();
        return false;
    }
    if(!validate(mail))
    {
        alert('Email không đúng định dạng.');
        jQuery('#mailr').focus();
        return false;
    }
    if(web == '')
    {
        alert('Bạn chưa nhập vào tên web.');
        jQuery('#webr').focus();
        return false;
    }
    if(link == '')
    {
        alert('Bạn chưa nhập vào link hồ sơ trên Danh bạ Designs.vn.');
        jQuery('#linkr').focus();
        return false;
    }

    return true;
}
function add_mail()
{
    var tentc = jQuery('#tentc').val();
    var dienthoai = jQuery('#dienthoai').val();
    var m = jQuery('#m').val();

    if(tentc == '')
    {
        alert('Bạn chưa nhập vào tên cá nhân/tổ chức.');
        jQuery('#tentc').focus();
        return false;
    }
    if(dienthoai == '')
    {
        alert('Bạn chưa nhập vào Điện thoại');
        jQuery('#dienthoai').focus();
        return false;
    }
    if(m == '')
    {
        alert('Bạn chưa nhập vào email.');
        jQuery('#m').focus();
        return false;
    }
    if(!validate(m))
    {
        alert('Email không đúng định dạng.');
        jQuery('#m').focus();
        return false;
    }

    return true;
}
function search_job()
{
	var slocal = encodeURIComponent(jQuery('#slocal').val());
	var scate = jQuery('#scate').val();
	var type = jQuery('#stype').val();
	var sdegree = encodeURIComponent(jQuery('#sdegree').val());
	var sroom = encodeURIComponent(jQuery('#sroom').val());
	var swage = encodeURIComponent(jQuery('#swage').val());
	var sexperience = encodeURIComponent(jQuery('#sexperience').val());
	window.location.href = base_url+ 'viec-lam/tim-kiem/'+ type + '/' + slocal + '/' + scate+ '/' + sdegree+ '/' + sroom+ '/' + swage+ '/' + sexperience+'/-1';
	return false;
}

function slide_td(id)
{
	if(jQuery('#' + id).css('display') == 'block'){
		jQuery('#' + id + 'img').html('<img src="'+ base_url +'public/temp/img/icon-vl-botton.gif">');
		jQuery('#' + id).hide();
	}
	else{
		jQuery('#' + id + 'img').html('<img src="'+ base_url +'public/temp/img/icon-vl-top.gif">');
		jQuery('#' + id).show();
	}
		
}

/**
book mark
*/
if(typeof(Frontend)=='undefined'){	
	Frontend={		
		run:function(){
			//this.setHomepage();	
			this.configClickAdv();
		},
		configClickAdv:function(){
			jQuery('.view-banner-adv-promotion').click(function(){
				var ads_id=jQuery(this).attr('title');
				jQuery.get('/?c=advertisement&m=update_click&id='+ads_id);
			});
		},
		validateForm:function(){	
			var keyword = jQuery('#banner-search-full-page-keyword').val();
			if(keyword.replace(/\s/g,"") == ""){
				alert('Hãy nhập từ khóa !');
				return false;
			}
			return true;
		},
		setHomepage:function(){ 
			if (document.all){ 
			document.body.style.behavior='url(#default#homepage)'; 
			document.body.setHomePage('designs.vn'); 
			
			} 
			else if (window.sidebar){ 
				if(window.netscape){ 
					try{   
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");   
					}   
					catch(e){   
					alert("Trình duyệt của bạn đã chặn thao tác này. Vui lòng làm theo hướng dẫn:Nhập vào thanh địa chỉ: about:config. Chọn nút: I'll becarefull. Ấn chuột phải chọn New > Boolean. Dán vào khung trắng: signed.applets.codebase_principal_support. Thực hiện xong, bạn có thể vào Designs.vn và đặt làm trang chủ. Khi thao tác đợi trình duyệt 5 giây và ấn allow"); 
					} 
				}  
				var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch); 
				prefs.setCharPref('browser.startup.homepage','designs.vn'); 
			} 
		} 
	}
	Frontend.run();
}
/**
add bookmark
*/
function addBookmark(title,url){
    if (window.sidebar) // firefox
    window.sidebar.addPanel(title, url, "");
    else if(window.opera && window.print){ // opera
    var elem = document.createElement('a');
    elem.setAttribute('href',url);
    elem.setAttribute('title',title);
    elem.setAttribute('rel','sidebar');
    elem.click();
    } 
    else if(document.all)// ie
    window.external.AddFavorite(url, title);
}
// v3
function poll(url){
    var poll_cat;
    poll_cat = document.getElementById('poll_cat').value;
    var answer_name = jQuery("input[name='poll_answer']:checked").val();
    
    if(isNumber(answer_name)){
        url = url+'/'+poll_cat+'/'+answer_name;
        var height=500;
        var width=450;
        var top=(screen.height-height)/2;
        var left=(screen.width-width)/2;
        jQuery.ajax({
            url:'http://designs.vn/home/check_poll/'+poll_cat,
            type:"POST",
            timeout:10000,
            success:function(response,status){
                if(response == 'OK'){
                    playWin=open(url,'playgame','toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'
            +'fullscreen=no,titlebar=no, height='+height
            +',width='+width+','
            +'top='+top+','+'left='+left);
                }
                else
                {
                    alert('Bạn đã bình chọn cho câu hỏi này rồi.');
                    playWin=open('http://designs.vn/home/poll_result/'+poll_cat,'playgame','toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'
                    +'fullscreen=no,titlebar=no, height='+height
                    +',width='+width+','
                    +'top='+top+','+'left='+left);
                }
               
            }
        });
                
        
    }else alert('Mời bạn chọn một câu trả lời');
}
function poll_result(url){
    var poll_cat;
        poll_cat = document.getElementById('poll_cat').value;
        url = url+'/'+poll_cat;
        var height=500;
        var width=450;
        var top=(screen.height-height)/2;
        var left=(screen.width-width)/2;
        jQuery.ajax({
            url:'http://designs.vn/home/check_poll/'+poll_cat,
            type:"POST",
            timeout:10000,
            success:function(response,status){
                if(response == 'ERROR'){
                     playWin=open(url,'playgame','toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no'
                    +'fullscreen=no,titlebar=no, height='+height
                    +',width='+width+','
                    +'top='+top+','+'left='+left);
                }
                else
                {
                    alert('Bạn phải bình chọn mới được xem kết quả.');
                }
               
            }
        });
        
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function update_status(url)
{
    var oParam = new Object();
    jQuery.post(url,oParam,function(rs){
    window.location.href = window.location.href;
});
}
function delete_items(url)
{
    if(confirm('Bạn thực sự muốn xóa?'))
    {
        update_status(url);
    }
}

	var cnote = 0;
	var bi = 0;
	var bj = 0;
	var blast = 0;
	var ni = 0;
	var nj = 0;
	var nlast = 0;
    var showimg = 0;
	
	jQuery(document).ready(function(){
	   
       var check = 0;
       var rurl;
      // alert(checkCookie());
       if(checkCookie('wrap_scroll_user')) jQuery('#wrap_scroll_user').hide();
       // dong thong ban
       jQuery('#closed').click(function(){
        
        jQuery('#wrap_scroll_user').hide();
        setCookie('wrap_scroll_user','hide',null);
        return false;
       });
       
       // click vào quản lý tuyển dug
       jQuery('.jobmanager').click(function(){
            if(jQuery('#TB_overlay1').css('display') == 'none')
            {
                var oParam = new Object();
                var _this = this;
                oParam.url = jQuery(this).attr('href');
                    var url = base_url + 'user/url_register/';
                    jQuery.ajax({
                        url:url,
                        type:"POST",
                        data:oParam,
                        timeout:10000,
                        error:function(xhr,status){
                            alert('Có lỗi');
                        }
                    });
                showformlogin();
            }
            else
            {
                window.location.href = jQuery(this).attr('href');
            }
            return false;
       });
       // dang ky thanh vien
       jQuery('#dregister').click(function(){
            var oParam = new Object();
            var _this = this;
            oParam.url = window.location.href;
                var url = base_url + 'user/url_register/';
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    error:function(xhr,status){
                        alert('Có lỗi');
                    },
                    success:function(response,status){
                        
                            window.location.href = jQuery(_this).attr('href');
                       
                    }
                });
                return false;
       });
       // xóa danh sách hồ so
       jQuery('#delmyseeker').click(function(){
            var i = 0;
            var listid = '';
            jQuery('.checkjob').each(function(){
                if(jQuery(this).attr('checked') == 'checked') 
                {
                    i++;
                    listid += jQuery(this).attr('rel')+',';   
                }
            });
            if(i == 0)
            {
                alert('Bạn phải chọn 1 tin.');
            }
            else
            {
                var r=confirm("Bạn muốn xóa tin đã chọn?");
                if (r==true)
                {
                  
                  
                var oParam = new Object();
                var url = base_url + 'user/deljob/'+listid;
                oParam.data = listid;
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    error:function(xhr,status){
                        alert('Có lỗi');
                    },
                    success:function(response,status){
                        
                            window.location.href = window.location.href; 
                       
                    }
                });
             }
            }
            return false;
       });
       // sua ho so
       jQuery('#editseeker').click(function(){
        
        var i = 0;
            jQuery('.checkjob').each(function(){
                if(jQuery(this).attr('checked') == 'checked') 
                {
                    i++;
                    rurl = jQuery(this).val();   
                }
            });
            if(i == 0)
            {
                alert('Bạn phải chọn 1 tin.');
            }
            else if(i > 1)
            {
                alert('Bạn chỉ được chọn 1 tin.');
            }
            else
            {
                window.location.href = rurl;
            }
            
            return false;
       });
       // nop don tu danh sach viec làm
       jQuery('#bnvlogsendseeker').click(function(){
            var i = 0;
            jQuery('.checkjob').each(function(){
                if(jQuery(this).attr('checked') == 'checked') 
                {
                    i++;
                    rurl = jQuery(this).val();   
                }
            });
            if(i == 0)
            {
                alert('Bạn phải chọn 1 tin để gửi hồ sơ.');
            }
            else if(i > 1)
            {
                alert('Bạn chỉ được chọn 1 tin để gửi hồ sơ.');
            }
            else
            {
                window.location.href = rurl;
            }
            
            return false;
       });
       
       // nop don
       jQuery('.sendseeker').click(function(){
        
                var oParam = new Object();
                var url = base_url + 'user/check_login';
                var rurl = jQuery(this).attr('href');
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    success:function(response,status){
                        switch(response){
                            case"YES":
                                window.location.href = rurl;
                            break;
                            case"NO":
                                alert('Bạn phải đăng nhập mới Nộp được hồ sơ.');
                                jQuery('#username').focus();
                            break;
                        }
                    }
                });
            return false;
 
       });
       // xem ho so
       jQuery('.viewseeker').click(function(){
            
             var oParam = new Object();
                var url = jQuery(this).attr('href');
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    success:function(response,status){
                        switch(response){
                            case"NO":
                                alert('Bạn phải đăng nhập mới xem được hồ sơ.');
                                jQuery('#username').focus();
                                window.location.href = base_url;
                            break;
                            default :
                            jQuery('#detailseeker').html(response);
                        }
                    }
                });
            return false;
       });
       // nop don
       jQuery('.dosendseeker').click(function(){
        
            var url = jQuery(this).attr('href');
            $('#seekerid').val(url);
            dosendmail();
            return false;
        
       });
       // check all
       jQuery('.chekall').click(function(){
            if(jQuery(this).attr('checked') == 'checked')
            {
                jQuery('.checkjob').attr('checked','checked');
                //jQuery(this).checked = f
            }
            else
            {
                jQuery('.checkjob').removeAttr('checked');
            }
       });
       jQuery('#checkall').click(function(){
            jQuery('.checkjob').attr('checked','checked');
            jQuery('.chekall').attr('checked','checked');
            return false;
       });
       // luu list viec lam
       jQuery('.addlistjob').click(function(){
            var listid = '';
            jQuery('.checkjob').each(function(){
               if(jQuery(this).attr('checked') == 'checked')
               {
                    listid += jQuery(this).attr('rel') + ','; 
               } 
            });
            if(listid == '')
            {
                alert('Mời bạn chọn việc làm để lưu.');
            }
            else
            {
                var oParam = new Object();
                var url = base_url + 'user/logsjob';
                oParam.data = listid;
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    error:function(xhr,status){
                        alert('Có lỗi');
                    },
                    success:function(response,status){
                        switch(response){
                            case"OK":
                                alert("Tin này đã được lưu.");
                            break;
                            case"UNSUCSESS":
                                alert('Bạn phải đăng nhập mới lưu được tin.');
                                showformlogin();
                            break;
                            default: alert('Có Lỗi.');
                            break;
                        }
                    }
                });
            }
            
            return false;
       });
       // xoa viec lam da lu
       jQuery('#dellogjob').click(function(){
        
         var listid = '';
            jQuery('.checkjob').each(function(){
               if(jQuery(this).attr('checked') == 'checked')
               {
                    listid += jQuery(this).attr('rel') + ','; 
               } 
            });
            if(listid == '')
            {
                alert('Mời bạn chọn tin để xóa.');
            }
            else
            {
                var r=confirm("Bạn muốn xóa tin đã chọn?");
                if (r==true)
                {
                  
                  
                var oParam = new Object();
                var url = base_url + 'user/deljob_logs/'+listid;
                oParam.data = listid;
                jQuery.ajax({
                    url:url,
                    type:"POST",
                    data:oParam,
                    timeout:10000,
                    error:function(xhr,status){
                        alert('Có lỗi');
                    },
                    success:function(response,status){
                        
                            window.location.href = window.location.href; 
                       
                    }
                });
             }
            }
            
            return false;
       });
       
       // show image
       setInterval(function(){
            showimg = 0;
            jQuery('.clickphoto').each(function(){
                if(jQuery(this).attr('id') == 'current' && showimg == 0)
                {
                    jQuery(this).attr('id','');
                    jQuery(this).parent('li').next().children('a').attr('id','current');
                    var img = jQuery(this).parent('li').next().children('a').attr('rel');
                    //alert(img);
                    var title = jQuery(this).parent('li').next().children('a').attr('title');
                    var link = jQuery(this).parent('li').next().children('a').attr('href');
                    jQuery('#showhomeimg').attr('href',link);
                    jQuery('#showhomeimg').attr('title',title);
                    jQuery('#showhomeimg').children('img').attr('src',img);
                    jQuery('#showhomeimg').children('img').attr('alt',title);
                    jQuery('#showtitleimg').html(title);
                    showimg = 1; 
                }
                
           });
       },30000);
       jQuery('.clickphoto').mousemove(function(){
                    jQuery('.clickphoto').attr('id','');
                    jQuery(this).attr('id','current');
                    var img = jQuery(this).attr('rel');
                    //alert(img);
                    var title = jQuery(this).attr('title');
                    var link = jQuery(this).attr('href');
                    jQuery('#showhomeimg').attr('href',link);
                    jQuery('#showhomeimg').attr('title',title);
                    jQuery('#showhomeimg').children('img').attr('src',img);
                    jQuery('#showhomeimg').children('img').attr('alt',title);
                    jQuery('#showtitleimg').html(title);
                
           });
       jQuery('.sidear').mousemove(function(){
                    jQuery('.sidear').attr('id','');
                    jQuery(this).attr('id','current');
                    var img = jQuery(this).attr('rel');
                    var link = jQuery(this).attr('href');
                    var title = $(this).attr('title');
                    jQuery('#mainidear').attr('href',link);
                    jQuery('#mainidear').attr('title',title);
                    jQuery('#mainidear').children('img').attr('src',img);
                    jQuery('#mainidear').children('img').attr('alt',title);                
           });
           
       // click vao chuyen de cua onlydesigns
       $('.onlydesigns').click(function(){
            var id = $(this).attr('rel');
            $('.onlydesigns').attr('id' , '');
            $('.onlynews').slideUp('slow');
            $('#'+id).slideDown('slow');
               
            if($('#'+id).css('display') != 'none')
            {
                $(this).attr('id' , 'onlyinvi');
            }
            return false;
        
       });
        // click vao chuyen de y tuong
        // click vao chuyen de cua onlydesigns
       $('.ionlydesigns').click(function(){
            var id = $(this).attr('rel');
            $('.ionlydesigns').attr('id' , '');
            $('.ionlynews').slideUp('slow');
            $('#'+id).slideDown('slow');
               
            if($('#'+id).css('display') != 'none')
            {
                $(this).attr('id' , 'onlyinvi');
            }
            return false;
        
       });
       
       // play video
       jQuery('.listvideo').click(function (){
            var txt = jQuery(this).attr('rel');
            jQuery('#playvideo').html(txt);
            return false;
       });
       // ADD JOB
       
        // add contact
        jQuery('.addcontact').click(function(){
            
            var oParam = new Object();
            var url = base_url + 'user/logscontact';
            oParam.data = jQuery(this).attr('rel');
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                timeout:10000,
                error:function(xhr,status){
                    alert('Có lỗi');
                },
                success:function(response,status){
                    switch(response){
                        case"OK":
                            alert("Tin này đã được lưu.");
                        break;
                        case"UNSUCSESS":
                            alert('Bạn phải đăng nhập mới lưu được tin.');
                            showformlogin();
                        break;
                        default: alert('Có Lỗi.');
                        break;
                    }
                }
            });
            
            return false;
        });
		var auto;
	   // dang nhap
       jQuery('#login').submit(function (){
         var username = jQuery('#username').val();
         var password = jQuery('#password').val();
         if(username == 'Username')
         {
            alert('Bạn chưa nhập Username');
            jQuery('#username').focus();
         }
         else
         {
            var oParam = new Object();
            var url = base_url + 'user/login';
            oParam.username = username;
            oParam.pass = password;
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                    jQuery("#img_login").show();
                    jQuery('#login').hide();
                },
                timeout:10000,
                error:function(xhr,status){
                    switch(status){
                        case"timeout":jQuery("#button_login").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                        default:jQuery("#button_login").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                    }
                },
                success:function(response,status){
                    jQuery("#img_login").hide();
                    jQuery('#login').show();
                    jQuery("#button_login").attr('src',base_url+'public/temp/img/icon/icon-login.png');
                    switch(response){
                        case"NOT_ACTIVATE":
                            jQuery("#txt_dangnhap").remove();
                            alert("Tài khoản của bạn chưa kích hoạt, vui hãy kiểm tra email để kích hoạt tài khoản");
                        break;
                        case"SUCSESS":
                            if(jQuery('#nopdon').attr('href')) window.location.href = jQuery('#nopdon').attr('href');
                            else window.location.href = window.location.href;break;
                        case"UNSUCSESS":
                            default:jQuery("#txt_dangnhap").remove();alert("Tên đăng nhập hoặc mật khẩu không đúng!");
                        break;
                    }
                }
            }); 
         }  
         return false;
       });
       // dăng nhap tu frame
       jQuery('#framelogin').submit(function (){
         var username = jQuery('#frameusername').val();
         var password = jQuery('#framepassword').val();
         if(username == 'Username')
         {
            alert('Bạn chưa nhập Username');
            jQuery('#frameusername').focus();
         }
         else
         {
            var oParam = new Object();
            var url = base_url + 'user/login';
            oParam.username = username;
            oParam.pass = password;
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                    jQuery("#img_login").show();
                    jQuery('#login').hide();
                },
                timeout:10000,
                error:function(xhr,status){
                    switch(status){
                        case"timeout":jQuery("#dn").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                        default:jQuery("#dn").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                    }
                },
                success:function(response,status){
                    jQuery("#dn").hide();
                    jQuery("#nl").hide();
                    jQuery("#button_login").attr('src',base_url+'public/temp/img/icon/icon-login.png');
                    switch(response){
                        case"NOT_ACTIVATE":
                            alert("Tài khoản của bạn chưa kích hoạt, vui hãy kiểm tra email để kích hoạt tài khoản");
                        break;
                        case"SUCSESS":
                            if(jQuery('#nopdon').attr('href')) window.location.href = jQuery('#nopdon').attr('href');
                            else window.location.href=window.location.href;break;
                        case"UNSUCSESS":
                            default:alert("Tên đăng nhập hoặc mật khẩu không đúng!");
                            jQuery("#dn").show();
                            jQuery("#nl").show();
                        break;
                    }
                }
            }); 
         }  
         return false;
       });
       jQuery('#nl').click(function(){
            jQuery('#TB_overlay1').hide();
            jQuery('#TB_window1').hide();
       });
       
		jQuery(".lightbox").lightbox({
    	    fitToScreen: true,
    	    imageClickClose: false
        });
        // xu ly menu
	   jQuery('.topmenu').mousemove(function (){
	       var idli = jQuery(this).attr('rel');
	       
           jQuery('.topmenu').removeAttr("id");
           jQuery(this).attr('id' , 'current-subnews');
           
           /*jQuery('.menu-sub-nav').css('display','none');
           jQuery('.submenu'+idli).css('display','block');*/
           jQuery('.menu-sub-nav').hide();
           jQuery('.submenu'+idli).show();
        });
        
        jQuery('.sub-main-menu').hover(function(){
        },function (){
            jQuery('.topmenu').removeAttr("id");
           jQuery('.cateroot').attr('id' , 'current-subnews');
           
           /*jQuery('.menu-sub-nav').css('display','none');
           jQuery('#childroot').css('display','block');*/
           jQuery('.menu-sub-nav').hide();
           jQuery('#childroot').show();
        });
        jQuery('#home').mousemove(function(){
            //jQuery('.menu-sub-nav').css('display','none');
            jQuery('.menu-sub-nav').hide();
            jQuery('.topmenu').removeAttr("id");
            
        });
        // search danh ba thet ke
        jQuery('#searchcontact').submit(function (){
            var cateclosure = jQuery('#cateclosure').val();
            var city = jQuery('#city').val();
            var field = jQuery('#field').val();
            var scale = jQuery('#scale').val();
            window.location.href = base_url + 'danh-ba-thiet-ke/tim-kiem/-1/'+ cateclosure + '/' + city + '/'+field+'/'+scale;
            return false;
        });
	});
	function bnext()
	{
		jQuery('.bslide').each(function(key, value) 
		{ 
			bj++;
			if(((bj%jQuery('.bslide').length) == 0) && (jQuery( this ).css('display') == 'block'))
			{
				blast = 1;
			}
			else blast = 0;
			if(jQuery( this ).css('display') == 'block')
			{
				jQuery( this ).fadeOut();
				bi = 1;
			}
			else if(bi == 1)
			{
				
				jQuery( this ).fadeIn();
				bi = 0;
			}
			
			if(blast == 1)
			{
				jQuery('.bslide').first().fadeIn();
				blast = 0;
			}
			
		});
	
	}
	function notenext()
	{
		jQuery('.libslide').each(function(key, value) 
		{ 
			nj++;
			if(((nj%jQuery('.libslide').length) == 0) && (jQuery( this ).attr('id') == 'paging-active'))
			{
				nlast = 1;
				jQuery( this ).attr('id' , '');
			}
			else 
			{
				nlast = 0;
				if(jQuery( this ).attr('id') == 'paging-active')
				{
					jQuery( this ).attr('id' , '');
					ni = 1;
				}
				else if(ni == 1)
				{
					
					jQuery( this ).attr('id','paging-active');
					ni = 0;
				}
			}
			
			if(nlast == 1)
			{
				jQuery( '.libslide' ).first().attr('id' , 'paging-active');
				nlast = 0;
			}
			
		});
	}
	function clicknote(num)
	{
		cnote = 0;
		jQuery('.libslide').each(function(key, value) 
		{
			cnote++;
			if(cnote == parseInt(num)) jQuery( this ).attr('id','paging-active');
			else jQuery( this ).attr('id','');
		});
		cnote = 0;

		jQuery('.bslide').each(function(key, value) 
		{ 
			cnote++;
			if(cnote == parseInt(num)) jQuery( this ).fadeIn();
			else jQuery( this ).fadeOut();
		});
	}

	function list_show_job(idshow,idhide)
	{
		jQuery('#'+idshow).show();
		jQuery('#c'+idshow).css('color','#FF6600');
		jQuery('#'+idhide).hide();
		jQuery('#c'+idhide).css('color','#FFFFFF');
	}
    
    function add_news()
    {
        var title = jQuery('#ntitle').val();
        var ext = jQuery('#extract').val();
        if(jQuery('#user_create').val() == '')
        {
            alert("Bạn chưa nhập họ tên.");
            jQuery('#user_create').focus();
            return false;
        }
        if(!validate(jQuery('#user_email').val()))
        {
           alert("Email không hợp lệ.");
            jQuery('#user_email').focus();
            return false; 
        }
        
        
        if(title == '')
        {
            alert("Tiên đề bài viết không được để trống.");
            jQuery('#ntitle').focus();
            return false;
        }
        
        if(ext == '')
        {
            alert("Mô tả ngắn không được để trống.");
            jQuery('#extract').focus();
            return false;
        }
        if(jQuery('#file-up').val() == '')
        {
            alert("Bạn chưa chọn ảnh đại diện.");
            jQuery('#file-up').focus();
            return false;
        }
        if(jQuery('#url_root').val() == '')
        {
            alert("Bạn chưa nhập nguồn bài viết.");
            jQuery('#url_root').focus();
            return false;
        }
        if(jQuery('#tags').val() == '')
        {
            alert("Bạn chưa nhập Tag bài viết.");
            jQuery('#tags').focus();
            return false;
        }
        return true;
    }

    
    function dosendmail()
    {
        var oParam = new Object();
         var _email = jQuery('#mailjob').val();
         if(_email == '')
         {
            alert('Nhà tuyển dụng này không nhận hồ sơ qua email.');
            return false;            
          }
         else
         {
            //$('#frsendhs').attr('action' , url);
            var file = $('#attachfile').val();
            if(file != '')
            {
                if(checkExt(file) == false) {
                 alert('Chỉ upload được file Doc, Zip hoặc Rar và dung lượng tối đa 10 MB');
                 return false;   
                }
            }
            $('#frsendhs').submit();
            
         }
    }
    
    function showformlogin()
    { 
        window.location.href ='http://myzone.designs.vn/user/login_form';
        jQuery('#TB_overlay1').show();
        jQuery('#TB_window1').show();
        jQuery('#frameusername').focus();
    }
    
function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var i,x,y,ARRcookies=document.cookie.split(";");
for (i=0;i<ARRcookies.length;i++)
{
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
    {
    return unescape(y);
    }
  }
}

function checkCookie(name)
{
var username=getCookie(name);
  if (username!=null && username!="")
  {
    return true;
  }
else
  {
     return false;
  }
}
function searchjob(type)
{
    var key = $('#keysearch').val();
    if(key == '')
    {
        alert('Mời bạn nhập từ khóa.');
        $('#keysearch').focus();
    }
    else
    {
        window.location.href = 'http://designs.vn/viec-lam/tim-kiem/'+(type == 2 ? 'cho-ung-vien' : 'cho-nha-tuyen-dung')+'/-1/-1/-1/-1/-1/-1/'+encodeURIComponent(key);
    }
    return false;
}
function keypress(e,_this){
    
    var keypressed = null;

    if (window.event)
    {
    keypressed = window.event.keyCode; //IE
    }
    else
    {
    keypressed = e.which; //NON-IE, Standard
    }
    if (keypressed ==45 || keypressed ==13)
    { 
        alert('Không chấp nhận ký tư "-" và xuống dòng');
        return false;
    }
    if(_this.value.length > 205)
    {
        alert('Độ dài tối đa là 205 ký tự.');
        //_this.value= _this.value.substring(0,205);
        return false;
           
    };
    return true;
}
function checksummary(_this)
{
    
    if(_this.value.search(/-/) != -1 || _this.value.search(/\n/) != -1 || _this.value.length > 205)
    {
        alert('Không chấp nhận ký tư "-" và xuống dòng');
        _this.value= _this.value.replace(/-/gi, "").replace(/\n/gi, "");
        return false;
           
    };
    if(_this.value.length > 205)
    {
        alert('Độ dài tối đa là 205 ký tự.');
        _this.value= _this.value.substring(0,205);
        return false;
           
    };
    return true;
    
}
/* speed*/
function speedlogin(){
         var username = jQuery('#frameusername').val();
         var password = jQuery('#framepassword').val();
         if(username == 'Username')
         {
            alert('Bạn chưa nhập Username');
            jQuery('#frameusername').focus();
         }
         else
         {
            var oParam = new Object();
            var url = base_url + 'user/login';
            oParam.username = username;
            oParam.pass = password;
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                    jQuery("#img_login").show();
                    jQuery('#login').hide();
                },
                timeout:10000,
                error:function(xhr,status){
                    switch(status){
                        case"timeout":jQuery("#dn").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                        default:jQuery("#dn").attr('src',base_url+'public/temp/img/ajax-loader.gif');
                        break;
                    }
                },
                success:function(response,status){
                    jQuery("#dn").hide();
                    jQuery("#nl").hide();
                    jQuery("#button_login").attr('src',base_url+'public/temp/img/icon/icon-login.png');
                    switch(response){
                        case"NOT_ACTIVATE":
                            alert("Tài khoản của bạn chưa kích hoạt, vui hãy kiểm tra email để kích hoạt tài khoản");
                        break;
                        case"SUCSESS":
                            if(jQuery('#nopdon').attr('href')) window.location.href = jQuery('#nopdon').attr('href');
                            else window.location.href=window.location.href;break;
                        case"UNSUCSESS":
                            default:alert("Tên đăng nhập hoặc mật khẩu không đúng!");
                            jQuery("#dn").show();
                            jQuery("#nl").show();
                        break;
                    }
                }
            }); 
         }  
         return false;
       }