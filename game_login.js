function add_user() {
    player1 = document.getElementById("player_1").value;
      player2 = document.getElementById("player_2").value;

      localStorage.setItem("player1" , player1);
      localStorage.setItem("player2" , player2);

      window.location = "game_page.html";
    }
