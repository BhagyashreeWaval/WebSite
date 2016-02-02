function News(title,desc,image){


this.Title=title;


this.Desc=desc;


this.Img=image;


}


function loadContainer(){

var latest=new Array();

var ref = new Firebase("https://blistering-inferno-5446.firebaseio.com/LatestNews");



// Retrieve new posts as they are added to our database



ref.on("child_added", function(snapshot, prevChildKey) {

  
				
	var newPost = snapshot.val();
  
				
	latest.push(new News(newPost.Title,newPost.Description,newPost.Image));
 
	 

});




for (var i = 0; i < latest.length; i++) {


var elements="<div class=\"news\"> <p class=\"newsTitle\">"+latest[i].Title+"</p> <img class=\"newsImg\" src=\""+latest[i].Img+"\"> <div class=\"box\">  <div class=\"text\">"     + latest[i].Desc   +"</div></div></div>";

document.getElementById("Latestnews").innerHTML+=elements;
    



}

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