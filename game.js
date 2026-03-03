(function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const gridSize = 20;
  const tileCount = canvas.width / gridSize;

  let snake = [{ x: 10, y: 10 }];
  let food = { x: 15, y: 15 };
  let dx = 0;
  let dy = 0;
  let score = 0;
  let level = 1;
  let gameLoop = null;
  let gameOver = false;
  let paused = false;
  const baseSpeed = 120;

  const scoreEl = document.getElementById("score");
  const levelEl = document.getElementById("level");
  const finalScoreEl = document.getElementById("finalScore");
  const gameOverEl = document.getElementById("gameOver");
  const startOverlayEl = document.getElementById("startOverlay");
  const restartBtn = document.getElementById("restartBtn");

  function randomFood() {
    food.x = Math.floor(Math.random() * tileCount);
    food.y = Math.floor(Math.random() * tileCount);
    const onSnake = snake.some((s) => s.x === food.x && s.y === food.y);
    if (onSnake) randomFood();
  }

  function draw() {
    ctx.fillStyle = "#0d1b2a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff88";
    snake.forEach((seg, i) => {
      ctx.fillRect(seg.x * gridSize + 1, seg.y * gridSize + 1, gridSize - 2, gridSize - 2);
      if (i === 0) {
        ctx.fillStyle = "#00cc6a";
        ctx.fillRect(seg.x * gridSize + 3, seg.y * gridSize + 3, gridSize - 6, gridSize - 6);
        ctx.fillStyle = "#00ff88";
      }
    });

    ctx.fillStyle = "#ff6b6b";
    ctx.beginPath();
    const cx = food.x * gridSize + gridSize / 2;
    const cy = food.y * gridSize + gridSize / 2;
    ctx.arc(cx, cy, gridSize / 2 - 2, 0, Math.PI * 2);
    ctx.fill();
  }

  function update() {
    if (gameOver || paused) return;

    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
      endGame();
      return;
    }
    if (snake.some((s) => s.x === head.x && s.y === head.y)) {
      endGame();
      return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score += 10 * level;
      level = Math.floor(score / 50) + 1;
      scoreEl.textContent = score;
      levelEl.textContent = level;
      randomFood();
    } else {
      snake.pop();
    }

    draw();
  }

  function endGame() {
    gameOver = true;
    if (gameLoop) clearInterval(gameLoop);
    finalScoreEl.textContent = score;
    gameOverEl.classList.remove("hidden");
  }

  function startGame() {
    snake = [{ x: 10, y: 10 }];
    dx = 0;
    dy = 0;
    score = 0;
    level = 1;
    gameOver = false;
    paused = false;
    scoreEl.textContent = "0";
    levelEl.textContent = "1";
    randomFood();
    gameOverEl.classList.add("hidden");
    startOverlayEl.classList.add("hidden");
    if (gameLoop) clearInterval(gameLoop);
    const speed = Math.max(50, baseSpeed - (level - 1) * 8);
    gameLoop = setInterval(update, speed);
    draw();
  }

  function runLoop() {
    if (gameLoop) clearInterval(gameLoop);
    const speed = Math.max(50, baseSpeed - (level - 1) * 8);
    gameLoop = setInterval(update, speed);
  }

  document.addEventListener("keydown", (e) => {
    if (startOverlayEl.classList.contains("hidden") === false) {
      e.preventDefault();
      if (e.code === "ArrowRight" || e.code === "KeyD") dx = 1;
      else if (e.code === "ArrowLeft" || e.code === "KeyA") dx = -1;
      else if (e.code === "ArrowUp" || e.code === "KeyW") dy = -1;
      else if (e.code === "ArrowDown" || e.code === "KeyS") dy = 1;
      else { dx = 1; dy = 0; }
      startGame();
      return;
    }

    if (e.code === "Space") {
      e.preventDefault();
      paused = !paused;
      if (!paused && !gameOver) runLoop();
      return;
    }

    if (gameOver) return;

    const opposite = (dx === 1 && e.code === "ArrowLeft") || (dx === -1 && e.code === "ArrowRight") ||
      (dy === 1 && e.code === "ArrowUp") || (dy === -1 && e.code === "ArrowDown");
    if (opposite) return;

    if (e.code === "ArrowRight" || e.code === "KeyD") { dx = 1; dy = 0; }
    else if (e.code === "ArrowLeft" || e.code === "KeyA") { dx = -1; dy = 0; }
    else if (e.code === "ArrowUp" || e.code === "KeyW") { dx = 0; dy = -1; }
    else if (e.code === "ArrowDown" || e.code === "KeyS") { dx = 0; dy = 1; }
  });

  restartBtn.addEventListener("click", () => {
    startOverlayEl.classList.add("hidden");
    startGame();
  });

  randomFood();
  draw();
})();
