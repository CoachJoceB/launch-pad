// 52 weeks of states & capitals with fun facts
// Weeks 1-50: one state per week (regions mixed). Week 51: Washington, DC.
// Week 52: review/challenge week.
const MM_STATES_52 = [
  {
    w: 1,
    state: "Alabama",
    capital: "Montgomery",
    funFact: "Alabama was the first state to declare Christmas a legal holiday, back in 1836.",
    nickname: "The Yellowhammer State"
  },
  {
    w: 2,
    state: "Alaska",
    capital: "Juneau",
    funFact: "Alaska is so wide that parts of it are the northernmost, westernmost, AND easternmost points in the whole United States.",
    nickname: "The Last Frontier"
  },
  {
    w: 3,
    state: "Connecticut",
    capital: "Hartford",
    funFact: "The oldest newspaper still being published in America, the Hartford Courant, started in Connecticut in 1764.",
    nickname: "The Constitution State"
  },
  {
    w: 4,
    state: "Kansas",
    capital: "Topeka",
    funFact: "Dorothy's home in The Wizard of Oz was in Kansas, and the state grows enough wheat each year to bake about 36 billion loaves of bread.",
    nickname: "The Sunflower State"
  },
  {
    w: 5,
    state: "Arizona",
    capital: "Phoenix",
    funFact: "The saguaro cactus grows almost nowhere else on Earth except the Arizona desert, and it can live for 200 years.",
    nickname: "The Grand Canyon State"
  },
  {
    w: 6,
    state: "Maine",
    capital: "Augusta",
    funFact: "Maine is the only state with a one-syllable name, and it grows almost all of America's wild blueberries.",
    nickname: "The Pine Tree State"
  },
  {
    w: 7,
    state: "Illinois",
    capital: "Springfield",
    funFact: "The very first McDonald's restaurant opened in Des Plaines, Illinois, in 1955.",
    nickname: "The Prairie State"
  },
  {
    w: 8,
    state: "Florida",
    capital: "Tallahassee",
    funFact: "The Everglades is the only place in the world where alligators and crocodiles live together in the wild.",
    nickname: "The Sunshine State"
  },
  {
    w: 9,
    state: "Oregon",
    capital: "Salem",
    funFact: "Crater Lake in Oregon formed inside a collapsed volcano, and it is the deepest lake in America at nearly 2,000 feet.",
    nickname: "The Beaver State"
  },
  {
    w: 10,
    state: "Vermont",
    capital: "Montpelier",
    funFact: "Montpelier is the smallest state capital in America, with fewer than 8,000 people, and Vermont makes the most maple syrup of any state.",
    nickname: "The Green Mountain State"
  },
  {
    w: 11,
    state: "Texas",
    capital: "Austin",
    funFact: "The Texas Capitol building in Austin is actually taller than the United States Capitol in Washington, DC.",
    nickname: "The Lone Star State"
  },
  {
    w: 12,
    state: "Minnesota",
    capital: "St. Paul",
    funFact: "Minnesota has more shoreline than California, Florida, and Hawaii combined, thanks to its 10,000-plus lakes.",
    nickname: "The North Star State"
  },
  {
    w: 13,
    state: "California",
    capital: "Sacramento",
    funFact: "California is home to both the tallest trees on Earth, the coast redwoods, and the hottest place on Earth, Death Valley.",
    nickname: "The Golden State"
  },
  {
    w: 14,
    state: "Georgia",
    capital: "Atlanta",
    funFact: "Coca-Cola was invented in Atlanta in 1886 by a pharmacist mixing syrup in a brass kettle.",
    nickname: "The Peach State"
  },
  {
    w: 15,
    state: "New York",
    capital: "Albany",
    funFact: "New York City was the first capital of the United States, back in 1789, before the capital moved to Philadelphia and then Washington, DC.",
    nickname: "The Empire State"
  },
  {
    w: 16,
    state: "Colorado",
    capital: "Denver",
    funFact: "Denver sits exactly one mile above sea level, which is why its baseball team plays at Coors Field in the 'Mile High City.'",
    nickname: "The Centennial State"
  },
  {
    w: 17,
    state: "Ohio",
    capital: "Columbus",
    funFact: "The Wright brothers, who built the first working airplane, grew up in Dayton, Ohio, and ran a bicycle shop there.",
    nickname: "The Buckeye State"
  },
  {
    w: 18,
    state: "Louisiana",
    capital: "Baton Rouge",
    funFact: "Louisiana does not have counties like other states. It is divided into parishes instead, a leftover from its French and Spanish history.",
    nickname: "The Pelican State"
  },
  {
    w: 19,
    state: "Washington",
    capital: "Olympia",
    funFact: "Washington is the only state named after a United States president.",
    nickname: "The Evergreen State"
  },
  {
    w: 20,
    state: "Massachusetts",
    capital: "Boston",
    funFact: "Basketball was invented in Springfield, Massachusetts, in 1891 by a gym teacher looking for an indoor winter game.",
    nickname: "The Bay State"
  },
  {
    w: 21,
    state: "Tennessee",
    capital: "Nashville",
    funFact: "The Great Smoky Mountains, on the Tennessee border, is the most visited national park in all of America.",
    nickname: "The Volunteer State"
  },
  {
    w: 22,
    state: "Michigan",
    capital: "Lansing",
    funFact: "Michigan touches four of the five Great Lakes, more than any other state, and it is split into two separate peninsulas.",
    nickname: "The Great Lakes State"
  },
  {
    w: 23,
    state: "Hawaii",
    capital: "Honolulu",
    funFact: "Hawaii is the only state that grows coffee, and no matter where you stand in Hawaii, you are never more than 30 miles from the ocean.",
    nickname: "The Aloha State"
  },
  {
    w: 24,
    state: "Virginia",
    capital: "Richmond",
    funFact: "Eight United States presidents were born in Virginia, more than in any other state.",
    nickname: "The Old Dominion"
  },
  {
    w: 25,
    state: "Pennsylvania",
    capital: "Harrisburg",
    funFact: "America's first zoo opened in Philadelphia in 1874, and it is still open today.",
    nickname: "The Keystone State"
  },
  {
    w: 26,
    state: "Nevada",
    capital: "Carson City",
    funFact: "Nevada is the driest state in America, getting less than 10 inches of rain in a whole year in most places.",
    nickname: "The Silver State"
  },
  {
    w: 27,
    state: "Wisconsin",
    capital: "Madison",
    funFact: "Wisconsin makes more cheese than any other state, over 600 different kinds, and the ice cream sundae was invented there.",
    nickname: "The Badger State"
  },
  {
    w: 28,
    state: "South Carolina",
    capital: "Columbia",
    funFact: "America's only large-scale tea farm grows tea in South Carolina, on Wadmalaw Island near Charleston.",
    nickname: "The Palmetto State"
  },
  {
    w: 29,
    state: "Idaho",
    capital: "Boise",
    funFact: "Hells Canyon in Idaho is the deepest river gorge in North America, even deeper than the Grand Canyon.",
    nickname: "The Gem State"
  },
  {
    w: 30,
    state: "New Jersey",
    capital: "Trenton",
    funFact: "The first baseball game ever played with modern rules happened in Hoboken, New Jersey, in 1846.",
    nickname: "The Garden State"
  },
  {
    w: 31,
    state: "Missouri",
    capital: "Jefferson City",
    funFact: "The ice cream cone became famous at the 1904 World's Fair in St. Louis, when a waffle maker rolled his waffles into cones for the ice cream stand next door.",
    nickname: "The Show-Me State"
  },
  {
    w: 32,
    state: "Mississippi",
    capital: "Jackson",
    funFact: "Mississippi is known as the birthplace of the blues, the music style that led to rock and roll.",
    nickname: "The Magnolia State"
  },
  {
    w: 33,
    state: "Montana",
    capital: "Helena",
    funFact: "Montana has about three times as many cattle as people.",
    nickname: "The Treasure State"
  },
  {
    w: 34,
    state: "Rhode Island",
    capital: "Providence",
    funFact: "Rhode Island is the smallest state, but it still has more than 400 miles of coastline.",
    nickname: "The Ocean State"
  },
  {
    w: 35,
    state: "Indiana",
    capital: "Indianapolis",
    funFact: "The Indianapolis 500 car race draws more than 300,000 fans, making it the largest single-day sporting event in the world.",
    nickname: "The Hoosier State"
  },
  {
    w: 36,
    state: "North Carolina",
    capital: "Raleigh",
    funFact: "The Wright brothers made the first powered airplane flight at Kitty Hawk, North Carolina, in 1903. It lasted 12 seconds.",
    nickname: "The Tar Heel State"
  },
  {
    w: 37,
    state: "Utah",
    capital: "Salt Lake City",
    funFact: "The Great Salt Lake is saltier than the ocean, so you can float in it without even trying.",
    nickname: "The Beehive State"
  },
  {
    w: 38,
    state: "New Hampshire",
    capital: "Concord",
    funFact: "The fastest wind ever measured on Earth, 231 miles per hour, was recorded on top of Mount Washington in New Hampshire.",
    nickname: "The Granite State"
  },
  {
    w: 39,
    state: "Iowa",
    capital: "Des Moines",
    funFact: "Iowa grows more corn than any other state, and its name is the only state name that starts with two vowels.",
    nickname: "The Hawkeye State"
  },
  {
    w: 40,
    state: "Kentucky",
    capital: "Frankfort",
    funFact: "The Kentucky Derby horse race has run every year since 1875, making it the longest-running sporting event in America.",
    nickname: "The Bluegrass State"
  },
  {
    w: 41,
    state: "New Mexico",
    capital: "Santa Fe",
    funFact: "Santa Fe is the oldest capital city in America. It was founded in 1610, ten years before the Pilgrims landed at Plymouth Rock.",
    nickname: "The Land of Enchantment"
  },
  {
    w: 42,
    state: "Delaware",
    capital: "Dover",
    funFact: "Delaware was the very first state to approve the United States Constitution, on December 7, 1787.",
    nickname: "The First State"
  },
  {
    w: 43,
    state: "Nebraska",
    capital: "Lincoln",
    funFact: "Kool-Aid was invented in Hastings, Nebraska, in 1927 by a man mixing fruit powder in his mother's kitchen.",
    nickname: "The Cornhusker State"
  },
  {
    w: 44,
    state: "Arkansas",
    capital: "Little Rock",
    funFact: "Arkansas is the only place in the world where you can dig for diamonds in a public park and keep whatever you find.",
    nickname: "The Natural State"
  },
  {
    w: 45,
    state: "Wyoming",
    capital: "Cheyenne",
    funFact: "Wyoming was the first place in America where women could vote, back in 1869, more than 50 years before the whole country allowed it.",
    nickname: "The Equality State"
  },
  {
    w: 46,
    state: "Maryland",
    capital: "Annapolis",
    funFact: "The Star-Spangled Banner, America's national anthem, was written in Baltimore after a battle in the War of 1812.",
    nickname: "The Old Line State"
  },
  {
    w: 47,
    state: "South Dakota",
    capital: "Pierre",
    funFact: "Each of the four faces carved into Mount Rushmore is 60 feet tall, about as tall as a six-story building.",
    nickname: "The Mount Rushmore State"
  },
  {
    w: 48,
    state: "Oklahoma",
    capital: "Oklahoma City",
    funFact: "The parking meter was invented in Oklahoma City in 1935.",
    nickname: "The Sooner State"
  },
  {
    w: 49,
    state: "North Dakota",
    capital: "Bismarck",
    funFact: "The exact geographic center of North America is marked with a stone monument in Rugby, North Dakota.",
    nickname: "The Peace Garden State"
  },
  {
    w: 50,
    state: "West Virginia",
    capital: "Charleston",
    funFact: "West Virginia is the only state that sits completely inside the Appalachian Mountains.",
    nickname: "The Mountain State"
  },
  {
    w: 51,
    state: "Washington, DC",
    capital: "Washington",
    funFact: "The Washington Monument was the tallest structure in the entire world when it was finished in 1884.",
    nickname: "The Nation's Capital",
    note: "Washington, DC is not a state. It is the capital city of the United States, where the President, Congress, and Supreme Court all work."
  },
  {
    w: 52,
    review: true,
    states: ["Texas", "Florida", "Alaska", "Hawaii", "California"],
    capitals: ["Austin", "Tallahassee", "Juneau", "Honolulu", "Sacramento"],
    challenge: "Can you name all 5 capitals from memory? Bonus: can you name the fun fact you learned about each one?"
  }
];
