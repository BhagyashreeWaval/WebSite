function loadContainer(){

var newsData = JSON.parse(news);
var latest=newsData.LatestNews;
for (var i = 0; i < latest.length; i++) {

var elements="<div class=\"news\"> <p class=\"newsTitle\">"+latest[i].Title+"</p> <img class=\"newsImg\" src=\""+latest[i].Image+"\"> <div class=\"box\">  <div class=\"text\">"     + latest[i].Description   +"</div></div><button id=\""+i+"\" class=\"readMore\" onclick=\"readMore("+i+")\">ReadMore</button></div>";

document.getElementById("Latestnews").innerHTML+=elements;
}
}



function readMore(i)
{  
 sessionStorage.setItem('index', i);
var url=window.location.href.split("/");
url[url.length-1]="BlogInfo.html";
var webpage= url.join("/");
 window.open(webpage);

}

function fillBlogContent()
{
var index=sessionStorage.getItem('index');
var newsData = JSON.parse(news);
  var latest=newsData.LatestNews;
  document.getElementById("title").innerHTML=latest[index].Title;
 document.getElementById("image").innerHTML="<img class=\"newPageImage\" src=\""+latest[index].Image+"\">";
  document.getElementById("description").innerHTML=latest[index].Description;
 
}

function verifyMessage()
{
document.getElementById("submitmessage").innerHTML="";

if(document.getElementById("message").value===""){
document.getElementById("submitmessage").innerHTML="Message";
}
if(document.getElementById("emailId").value===""){
document.getElementById("submitmessage").innerHTML+=" Email Id";
}
if(document.getElementById("name").value===""){
document.getElementById("submitmessage").innerHTML+=" Name";
}

if(document.getElementById("submitmessage").innerHTML!=""){
document.getElementById("submitmessage").innerHTML+=" cannot be empty";
}

else{
document.getElementById("submitmessage").innerHTML="Message successfully send...!";
}
}