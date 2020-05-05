 var rad = Math.PI / 180;
 var requestId = null;
 var r = 300;
 var n = 16; // num slices
 var a = 360 * rad / n; // angle slice
 var W = 2 * Math.abs(Math.sin(a / 2)) * r;
 var H = Math.abs(Math.cos(a / 2)) * r;
 var rot = 0;
 var speed = .5;

 var dropzone = document.querySelector("#dropzone");
 var N = document.querySelector("#N input");
 var Nspan = document.querySelector("#N span");
 var htmlImg = document.querySelector("img");
 var w = htmlImg.getAttribute("width");
 var h = htmlImg.getAttribute("height");
 var canvas = document.querySelector("#canvas");
 var _canvas = document.querySelector("#_canvas");
 var ctx = canvas.getContext("2d");
 var _ctx = _canvas.getContext("2d");

 var cw = canvas.width = r * 2,
   cx = cw / 2;
 var ch = canvas.height = r * 2,
   cy = ch / 2;
 var _cw = _canvas.width = W,
   _cx = _cw / 2;
 var _ch = _canvas.height = H,
   _cy = _ch / 2;

 // DRAG & DROP IMAGE---------------------------------
 dropzone.addEventListener("dragenter", dragenter, false);
 dropzone.addEventListener("dragover", dragover, false);
 dropzone.addEventListener("drop", drop, false);

 function dragenter(e) {
   e.stopPropagation();
   e.preventDefault();
 }

 function dragover(e) {
   e.stopPropagation();
   e.preventDefault();
 }

 function drop(e) {
   e.stopPropagation();
   e.preventDefault();

   var data = e.dataTransfer;
   var files = data.files;

   handleFiles(files);
 }

 function handleFiles(files) {
   for (var i = 0; i < files.length; i++) {
     var file = files[i];
     var isImage = /^image\//;

     if (!isImage.test(file.type)) {
       continue;
     }

     var img = new Image();
     img.src = window.URL.createObjectURL(file);
     img.onload = function() {
       w = img.width;
       h = img.height;

       htmlImg.setAttribute("src", img.src);
       htmlImg.setAttribute("width", w);
       htmlImg.setAttribute("height", h);
       window.URL.revokeObjectURL(this.src);
     }
   }
 }
 // END DRAG & DROP IMAGE---------------------------------

 // define the clipping path
 // oPath(_ctx, W, H);
 // clip the canvas
 _ctx.clip();
 //
 var canvImg = _canvas;

 function Draw() {
   requestId = window.requestAnimationFrame(Draw);
   rot += speed * rad;
   //ctx.clearRect(0, 0, cw, ch);
   rotateImg(htmlImg, rot)

   for (var i = 0; i < n; i++) {
     var sc = i % 2 == 0 ? -1 : 1;
     ctx.save();
     ctx.translate(cx, cy);
     ctx.scale(sc, 1);
     ctx.rotate(a * i);

     ctx.drawImage(canvImg, -_cx, 0);
     ctx.restore();
   }
 }
 var Init = function() {
   if (requestId) {
     window.cancelAnimationFrame(requestId);
     requestId = null;
   }

   // n = parseInt(N.value); // num slices
   // Nspan.innerHTML = n;
   // a = 360 * rad / n; // angle slice
   // W = 2 * Math.abs(Math.sin(a / 2)) * r;
   // H = Math.abs(Math.cos(a / 2)) * r;

   cw = canvas.width = r * 2,
     cx = cw / 2;
   ch = canvas.height = r * 2,
     cy = ch / 2;
   _cw = _canvas.width = W,
     _cx = _cw / 2;
   _ch = _canvas.height = H,
     _cy = _ch / 2;
    // define the clipping path
   oPath(_ctx, W, H);
   // clip the canvas
   _ctx.clip();

   Draw();
 }

 Init();
 N.addEventListener('input', Init, false);

 function rotateImg(img, rot) {
   _ctx.save();
   _ctx.translate(_cx, _cy);
   _ctx.rotate(rot);
   //_ctx.translate(-_cx, -_cy);
   _ctx.drawImage(img, -w / 2, -h / 2);
   _ctx.restore();
 }

 function oPath(ctx, W, H) {
   // define the clipping path
   ctx.beginPath()
   ctx.moveTo(W / 2, 0);
   ctx.lineTo(W, H);
   ctx.lineTo(0, H);
   ctx.closePath();
 }