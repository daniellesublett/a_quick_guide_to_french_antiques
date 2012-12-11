<html>
<head>
<SCRIPT LANGUAGE="JavaScript">
<!--
var dimages=new Array();
  var numImages=6;
  dimages[0]=new Image();
  dimages[0].src="http://shard1.1stdibs.us.com/archivesE/upload/8527/149/XXX_8527_1291684709_1.jpg";
  dimages[1]=new Image();
  dimages[1].src="http://shard3.1stdibs.us.com/archivesB/upload/8523/131/img_6007.jpg";
  dimages[2]=new Image();
  dimages[2].src="http://shard4.1stdibs.us.com/archivesE/upload/8889/182/XXX_8889_1342031072_1.jpg";
  dimages[3]=new Image();
  dimages[3].src="http://shard1.1stdibs.us.com/archivesE/upload/8645/505/XXX_8645_1323032559_1.jpg";
  dimages[4]=new Image();
  dimages[4].src="http://shard1.1stdibs.us.com/archivesE/upload/8751/212/8751_1277150270_1_1_2.jpg";
  dimages[5]=new Image();
  dimages[5].src="http://shard3.1stdibs.us.com/archivesE/upload/9211/83/XXX_9211_1333298863_1.jpg";
  var curImage=-1;
function swapPicture()
{
  if (document.images)
  {
    var nextImage=curImage+1;
    if (nextImage>=numImages)
      nextImage=0;
    if (dimages[nextImage] && dimages[nextImage].complete)
    {
      var target=0;
      if (document.images.myImage)
        target=document.images.myImage;
      if (document.all && document.getElementById("myImage"))
        target=document.getElementById("myImage");
  
      // make sure target is valid.  It might not be valid
      //   if the page has not finished loading
      if (target)
      {
        target.src=dimages[nextImage].src;
        curImage=nextImage;
      }
      setTimeout("swapPicture()", 5000);
    }
    else
    {
      setTimeout("swapPicture()", 500);
    }
  }
}
setTimeout("swapPicture()", 5000);
//-->
</SCRIPT>
</head>

<body>
	<img source="http://shard1.1stdibs.us.com/archivesE/upload/8527/149/XXX_8527_1291684709_1.jpg" name="slide">
	
	
	
	</body>
	
	</html>