document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter')
  const minusButton = document.getElementById('minus')
  const plusButton = document.getElementById('plus')
  const heartButton = document.getElementById('heart')
  const pauseButton = document.getElementById('pause')
  const commentForm = document.getElementById('comment-form')
  const commentInput = document.getElementById('comment-input')
  const likesList = document.querySelector('.likes')
  let isPaused = false
  let count = 0

  const intervalId = setInterval(incrementCounter, 1000)

  function incrementCounter() {
    if (isPaused === false) {
      count++
      counter.textContent = count
    }
  }

  minusButton.addEventListener('click', () => {
    if (isPaused === false) {
      count--
      counter.textContent = count
    }
  })

  plusButton.addEventListener('click', () => {
    if (isPaused === false) {
      count++
      counter.textContent = count
    }
  })

  heartButton.addEventListener('click', () => {
    if (isPaused === false) {
      const likedNumber = count
      const existingLike = document.getElementById(`like-${likedNumber}`)
      if (existingLike) {
        let likeCount = parseInt(existingLike.dataset.likes)
        likeCount++
        existingLike.dataset.likes = likeCount
        existingLike.textContent = `${likedNumber} has been liked ${likeCount} times`
      } else {
        const newLike = document.createElement('li')
        newLike.id = `like-${likedNumber}`
        newLike.dataset.likes = 1
        newLike.textContent = `${likedNumber} has been liked 1 time`
        likesList.appendChild(newLike)
      }
    }
  })

  pauseButton.addEventListener('click', () => {
    if (isPaused) {
      isPaused = false
      pauseButton.textContent = 'pause'
      minusButton.disabled = false
      plusButton.disabled = false
      heartButton.disabled = false
    } else {
      isPaused = true
      pauseButton.textContent = 'resume'
      minusButton.disabled = true
      plusButton.disabled = true
      heartButton.disabled = true
    }
  })

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const commentText = commentInput.value
    if (commentText.trim() !== '') {
      const newComment = document.createElement('p')
      newComment.textContent = commentText
      document.getElementById('list').appendChild(newComment)
      commentInput.value = ''
    }
  })
})