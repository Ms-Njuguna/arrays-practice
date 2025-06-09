//prompt user to input their name

const followers = [];

// Grab the button and list element
const followBtn = document.getElementById("followBtn");
const followersList = document.getElementById("followersList");


//main function to print the name of the follower in the console

// Function that runs when the button is clicked
function followUser() {
  console.log("Button clicked!"); // ✅ Confirms the button was actually clicked

  const name = prompt("If you wish to follow Ms.Njuguna, please provide your name:");
  console.log("User entered:", name);

  if (name) {
    followers.push(name);
    console.log("Updated Followers array:", followers); //to see the names of those who followed
    console.log("Total followers:", followers.length); //to see how many followers are present

    updateFollowersDisplay();
  } else {
    alert("Name is required to follow.");
  }
}

// Function to update the DOM with current followers
function updateFollowersDisplay() {
  // Clear previous list
  followersList.innerHTML = "";

  // Add each follower to the <ul>
  followers.forEach(follower => {
    const li = document.createElement("li");
    li.textContent = follower;
    followersList.appendChild(li);
  });
}

// Attach event listener to the button
followBtn.addEventListener("click", followUser);
