const characters = [
    {
      name: "Amelia Whitney",
      description: "Born on February 5, 1973, Amelia Whitney is a half-German, half-Irish adventurer with a passion for law enforcement and karate. After her sister's death, she moved to Arizona seeking a new purpose in life.",
      image: "https://via.placeholder.com/400?text=Amelia+Whitney",
    },
    {
      name: "Brian Johnson",
      description: "A tall, red-haired former soldier, Brian struggles with PTSD after his military service. Despite his inner demons, he remains a skilled strategist and a loyal friend to those he trusts.",
      image: "https://via.placeholder.com/400?text=Brian+Johnson",
    },
    {
      name: "Samuel Bennett",
      description: "Born in Germany in 1946, Samuel is a psychotherapist who adapted to life in Arizona. During the apocalypse, he became a vital member of his community, using both his medical and combat skills.",
      image: "https://via.placeholder.com/400?text=Samuel+Bennett",
    },
  ];
  
  let currentIndex = 0;
  
  function updateCharacter() {
    const character = characters[currentIndex];
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterDescription").textContent = character.description;
    document.getElementById("characterImage").src = character.image;
  }
  
  function prevCharacter() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter();
  }
  
  function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter();
  }
  
  // Initialize the first character
  updateCharacter();
  