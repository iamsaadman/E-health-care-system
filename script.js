let clouds = document.querySelectorAll('.cloud');  // Query all clouds
let directions = [];  // To store the initial direction of each cloud

// Initialize random directions for each cloud (left-to-right or right-to-left)
clouds.forEach((cloud, index) => {
    let randomDirection = Math.random() > 0.5 ? 1 : -1;  // Randomly choose direction
    directions.push(randomDirection);
    
    // Set the initial position of each cloud
    cloud.style.left = `${Math.random() * 100}%`;  // Random starting position for each cloud
    cloud.style.top = `${Math.random() * 20 + 10}%`;  // Random vertical position for variety
});

// Add scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;  // Get the scroll position

    clouds.forEach((cloud, index) => {
        let speed = 0.3 + Math.random() * 0.2;  // Base speed with slight random variation

        // Get the direction for each cloud
        let direction = directions[index];  // Get the current direction

        // Update the cloud's horizontal position based on scroll and random direction
        cloud.style.transform = `translateX(${scrollPosition * speed * direction}px)`;  // Horizontal movement

        // Optionally, add vertical movement for some depth effect
        cloud.style.transform += ` translateY(${Math.sin(scrollPosition * 0.005 + index) * 30}px)`;  // Vertical movement (random effect)

        // After a certain scroll, reverse the direction randomly
        if (Math.abs(scrollPosition * speed * direction) > 200) {  // Change direction if cloud moves too far
            directions[index] = Math.random() > 0.5 ? 1 : -1;  // Randomly reverse the direction
        }
    });
});
