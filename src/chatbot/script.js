document.addEventListener("DOMContentLoaded", function() {
    var INDEX = 0;
    var chatSubmit = document.getElementById("chat-submit");
    chatSubmit.addEventListener("click", function(e) {
      e.preventDefault();
      var chatInput = document.getElementById("chat-input");
      var msg = chatInput.value;
      if (msg.trim() === "") {
        return false;
      }
      generateMessage(msg, "self");
      var buttons = [
        {
          name: "Existing User",
          value: "existing"
        },
        {
          name: "New User",
          value: "new"
        }
      ];
      setTimeout(function() {
        generateMessage(msg, "user");
      }, 1000);
    });
  
    function generateMessage(msg, type) {
      INDEX++;
      var str = "";
      str += '<div id="cm-msg-' + INDEX + '" class="chat-msg ' + type + '">';
      str += '          <span class="msg-avatar">';
      str += '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
      str += "          </span>";
      str += '          <div class="cm-msg-text">';
      str += msg;
      str += "          </div>";
      str += "        </div>";
      var chatLogs = document.querySelector(".chat-logs");
      chatLogs.innerHTML += str;
      var cmMsg = document.getElementById("cm-msg-" + INDEX);
      cmMsg.style.display = "none";
      fadeIn(cmMsg, 300);
      if (type === "self") {
        document.getElementById("chat-input").value = "";
      }
      chatLogs.scrollTop = chatLogs.scrollHeight;
    }
  
    function fadeIn(element, duration) {
      var opacity = 0;
      var interval = 10;
      var gap = interval / duration;
  
      function fade() {
        opacity += gap;
        element.style.opacity = opacity;
  
        if (opacity >= 1) {
          clearInterval(fading);
        }
      }
  
      var fading = setInterval(fade, interval);
    }
  
    function generateButtonMessage(msg, buttons) {
      INDEX++;
      var btnObj = buttons
        .map(function(button) {
          return (
            '              <li class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="' +
            button.value +
            '">' +
            button.name +
            "</a></li>"
          );
        })
        .join("");
      var str = "";
      str +=
        '<div id="cm-msg-' +
        INDEX +
        '" class="chat-msg user">';
      str += '          <span class="msg-avatar">';
      str += '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
      str += "          </span>";
      str += '          <div class="cm-msg-text">';
      str += msg;
      str += "          </div>";
      str += '          <div class="cm-msg-button">';
      str += "            <ul>";
      str += btnObj;
      str += "            </ul>";
      str += "          </div>";
      str += "        </div>";
      var chatLogs = document.querySelector(".chat-logs");
      chatLogs.innerHTML += str;
      var cmMsg = document.getElementById("cm-msg-" + INDEX);
      cmMsg.style.display = "none";
      fadeIn(cmMsg, 300);
      chatLogs.scrollTop = chatLogs.scrollHeight;
      document.getElementById("chat-input").disabled = false;
    }
  
    document.addEventListener("click", function(event) {
      if (event.target && event.target.classList.contains("chat-btn")) {
        var value = event.target.getAttribute("chat-value");
        var name = event.target.innerHTML;
        document.getElementById("chat-input").disabled = false;
        generateMessage(name, "self");
      }
    });
  
    var chatCircle = document.getElementById("chat-circle");
    chatCircle.addEventListener("click", function() {
      chatCircle.style.display = "none";
      document.querySelector(".chat-box").style.display = "block";
    });
  
    var chatBoxToggle = document.querySelectorAll(".chat-box-toggle");
    chatBoxToggle.forEach(function(button) {
      button.addEventListener("click", function() {
        chatCircle.style.display = "block";
        document.querySelector(".chat-box").style.display = "none";
      });
    });
  });
  