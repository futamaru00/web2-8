var separate_time = function(time){
  var sec = time.getSeconds();
  var min = time.getMinutes();
  var hours = time.getHours();
  var days = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var update = function(){
 var now = new Date();
 var target = new Date(2020,7,24,0,0,0,0);
 var diff = target.getTime() - now.getTime();
 var counter = separate_time(diff);
 document.getElementById('countdown').textContent = 
   '東京オリンピックまであと　' +
   counter[5] + '年' +
   counter[4] + '月' +
   counter[3] + '日' + 
   counter[2] + '時' +
   counter[1] + '分' +
   counter[0] + '秒';
 refresh();
}

var refresh = function(){
  setTimeout(update,1000);
}
update();

function getFileName(){
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('form').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}

function setCookie(c_name,value,expiredays){
  
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltme.toUTCString();
  
  var s="";
  s += c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires" +exdate+"; ";
  }else{
    s += "; ";
  }
  
  document.cookies=s;
}

function getCookies(c_name){
  var st="";
  var ed="";
  if(0 < document.coolie.length){
    st=document.cookie.indexOf(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.indexOf(";",st);
      if(ed==-1) ed=document.cookie.length;
      
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}

var last_date = getCookie('lastDate');
if(last_date){
  document.getElementById('cookie').textContent = '前回訪れた時間:' + last_date;
}else{
  document.getElemantById('cookie').textContent = 'はじめまして';
}

var current_time = new Date();
setCookie('lastDate', current_time.toString(), 7);

var thumbs = document.querySelectorAll('.thumb');
for(udx in thumbs){
  thumbs[idx].onclick = function(){
    document.getElementById("bigimg").src = 'img/' + this.dataset.image + '.jpg';
  }
}
