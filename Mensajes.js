function sendMessage() {
    var comments = document.getElementById("comments").value;
    var encodedText = encodeURIComponent(comments);
    var link = "https://api.whatsapp.com/send?text=" + encodedText;
  
    window.open(link);
  }