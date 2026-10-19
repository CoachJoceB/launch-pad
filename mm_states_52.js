// 52 weeks of states & capitals with fun facts
// Weeks 1-50: one state per week (regions mixed). Week 51: Washington, DC.
// Week 52: review/challenge week.
const MM_STATES_52 = [
  {
    w: 1,
    state: "Alabama",
    capital: "Montgomery",
    facts: [
    { day: "Monday", fact: "Alabama was the first state to declare Christmas a legal holiday, back in 1836." },
    { day: "Tuesday", fact: "The Tuskegee Airmen, America's first Black military pilots, trained in Alabama during World War II and became heroes for protecting bomber crews." },
    { day: "Wednesday", fact: "Helen Keller was born in Tuscumbia, Alabama. She lost her sight and hearing as a baby but learned to read, write, and speak, and she became famous for helping people with disabilities." },
    { day: "Thursday", fact: "NASA designed the Saturn V rockets that carried astronauts to the Moon in Huntsville, Alabama, which is why the city is called the Rocket City." }
  ],
    funFact: "Alabama was the first state to declare Christmas a legal holiday, back in 1836.",
    nickname: "The Yellowhammer State"
  },
  {
    w: 2,
    state: "Alaska",
    capital: "Juneau",
    facts: [
    { day: "Monday", fact: "Alaska is so wide that parts of it are the northernmost, westernmost, AND easternmost points in the whole United States." },
    { day: "Tuesday", fact: "Denali in Alaska is the tallest mountain in North America, rising more than 20,000 feet above sea level." },
    { day: "Wednesday", fact: "Every winter, teams of sled dogs race nearly 1,000 miles from Anchorage to Nome in the Iditarod, a race that honors the historic mail and supply route." },
    { day: "Thursday", fact: "On clear winter nights in Alaska, you can watch the aurora borealis, ribbons of green and purple light dancing across the sky." }
  ],
    funFact: "Alaska is so wide that parts of it are the northernmost, westernmost, AND easternmost points in the whole United States.",
    nickname: "The Last Frontier"
  },
  {
    w: 3,
    state: "Connecticut",
    capital: "Hartford",
    facts: [
    { day: "Monday", fact: "The oldest newspaper still being published in America, the Hartford Courant, started in Connecticut in 1764." },
    { day: "Tuesday", fact: "Connecticut's Charter Oak hid the colony's royal charter inside its trunk in 1687, saving it from a governor who wanted to take Connecticut's freedoms away." },
    { day: "Wednesday", fact: "The world's first nuclear-powered submarine, the USS Nautilus, was built in Groton, Connecticut, in 1954." },
    { day: "Thursday", fact: "PEZ candy dispensers, the ones with character heads that pop up candy, are made at a factory in Orange, Connecticut, that visitors can tour." }
  ],
    funFact: "The oldest newspaper still being published in America, the Hartford Courant, started in Connecticut in 1764.",
    nickname: "The Constitution State"
  },
  {
    w: 4,
    state: "Kansas",
    capital: "Topeka",
    facts: [
    { day: "Monday", fact: "Dorothy's home in The Wizard of Oz was in Kansas, and the state grows enough wheat each year to bake about 36 billion loaves of bread." },
    { day: "Tuesday", fact: "President Dwight D. Eisenhower grew up in Abilene, Kansas, and his boyhood home there is now a museum." },
    { day: "Wednesday", fact: "The exact middle of the 48 connected states is marked with a small stone chapel near Lebanon, Kansas." },
    { day: "Thursday", fact: "Millions of years ago, an ocean covered western Kansas, so farmers and scientists still find fossils of giant sea reptiles in the chalky hills." }
  ],
    funFact: "Dorothy's home in The Wizard of Oz was in Kansas, and the state grows enough wheat each year to bake about 36 billion loaves of bread.",
    nickname: "The Sunflower State"
  },
  {
    w: 5,
    state: "Arizona",
    capital: "Phoenix",
    facts: [
    { day: "Monday", fact: "The saguaro cactus grows almost nowhere else on Earth except the Arizona desert, and it can live for 200 years." },
    { day: "Tuesday", fact: "The Grand Canyon in Arizona is 277 miles long and so deep that you could stack four Empire State Buildings inside it." },
    { day: "Wednesday", fact: "At Four Corners Monument in Arizona, you can stand in four states at once: Arizona, New Mexico, Utah, and Colorado." },
    { day: "Thursday", fact: "The London Bridge that once crossed the River Thames in England was bought, taken apart stone by stone, and rebuilt over a lake in Lake Havasu City, Arizona." }
  ],
    funFact: "The saguaro cactus grows almost nowhere else on Earth except the Arizona desert, and it can live for 200 years.",
    nickname: "The Grand Canyon State"
  },
  {
    w: 6,
    state: "Maine",
    capital: "Augusta",
    facts: [
    { day: "Monday", fact: "Maine is the only state with a one-syllable name, and it grows almost all of America's wild blueberries." },
    { day: "Tuesday", fact: "Maine fishermen catch most of the lobsters eaten in America, pulling them up in wooden traps from the cold Atlantic water." },
    { day: "Wednesday", fact: "Acadia National Park on Maine's rocky coast was one of the first national parks east of the Mississippi River, and it is famous for sunrise views from Cadillac Mountain." },
    { day: "Thursday", fact: "The Portland Head Light, finished in 1791, is Maine's oldest lighthouse and was ordered to be built by President George Washington." }
  ],
    funFact: "Maine is the only state with a one-syllable name, and it grows almost all of America's wild blueberries.",
    nickname: "The Pine Tree State"
  },
  {
    w: 7,
    state: "Illinois",
    capital: "Springfield",
    facts: [
    { day: "Monday", fact: "The very first McDonald's restaurant opened in Des Plaines, Illinois, in 1955." },
    { day: "Tuesday", fact: "Abraham Lincoln lived in Springfield, Illinois, for more than 20 years before he became president, and the town is full of places tied to his life." },
    { day: "Wednesday", fact: "Deep-dish pizza was invented in Chicago in 1943, baked in a tall pan so it holds layers of cheese, sauce, and toppings." },
    { day: "Thursday", fact: "Chicago's Willis Tower, once called the Sears Tower, was the tallest building in the world for 25 years after it was finished in 1973." }
  ],
    funFact: "The very first McDonald's restaurant opened in Des Plaines, Illinois, in 1955.",
    nickname: "The Prairie State"
  },
  {
    w: 8,
    state: "Florida",
    capital: "Tallahassee",
    facts: [
    { day: "Monday", fact: "The Everglades is the only place in the world where alligators and crocodiles live together in the wild." },
    { day: "Tuesday", fact: "America's first astronauts launched into space from Cape Canaveral, Florida, and rockets still lift off there today." },
    { day: "Wednesday", fact: "St. Augustine, founded by Spain in 1565, is the oldest city in the continental United States that has been lived in ever since." },
    { day: "Thursday", fact: "Florida grows more oranges than any other state, and orange juice is the official state drink." }
  ],
    funFact: "The Everglades is the only place in the world where alligators and crocodiles live together in the wild.",
    nickname: "The Sunshine State"
  },
  {
    w: 9,
    state: "Oregon",
    capital: "Salem",
    facts: [
    { day: "Monday", fact: "Crater Lake in Oregon formed inside a collapsed volcano, and it is the deepest lake in America at nearly 2,000 feet." },
    { day: "Tuesday", fact: "In the 1840s and 1850s, thousands of families traveled the 2,000-mile Oregon Trail in covered wagons to start new lives in Oregon." },
    { day: "Wednesday", fact: "Nike, the sportswear company famous for the swoosh logo, started in Oregon in 1964 when a track coach and his runner began selling shoes out of a car." },
    { day: "Thursday", fact: "Portland is called the City of Roses because its mild, rainy weather is perfect for growing them, and the city has held a rose festival every year since 1907." }
  ],
    funFact: "Crater Lake in Oregon formed inside a collapsed volcano, and it is the deepest lake in America at nearly 2,000 feet.",
    nickname: "The Beaver State"
  },
  {
    w: 10,
    state: "Vermont",
    capital: "Montpelier",
    facts: [
    { day: "Monday", fact: "Montpelier is the smallest state capital in America, with fewer than 8,000 people, and Vermont makes the most maple syrup of any state." },
    { day: "Tuesday", fact: "Before it became a state, Vermont was its own independent country, called the Vermont Republic, from 1777 to 1791." },
    { day: "Wednesday", fact: "Ben and Jerry started their famous ice cream company in 1978 in a renovated gas station in Burlington, Vermont." },
    { day: "Thursday", fact: "Vermont banned billboards along its highways in 1968, so drivers enjoy clear views of the Green Mountains instead of ads." }
  ],
    funFact: "Montpelier is the smallest state capital in America, with fewer than 8,000 people, and Vermont makes the most maple syrup of any state.",
    nickname: "The Green Mountain State"
  },
  {
    w: 11,
    state: "Texas",
    capital: "Austin",
    facts: [
    { day: "Monday", fact: "The Texas Capitol building in Austin is actually taller than the United States Capitol in Washington, DC." },
    { day: "Tuesday", fact: "The Alamo in San Antonio is a former Spanish mission where a small group of Texan fighters held off a much larger Mexican army for 13 days in 1836." },
    { day: "Wednesday", fact: "NASA's Mission Control in Houston, Texas, is where flight controllers on Earth talk to astronauts aboard the International Space Station." },
    { day: "Thursday", fact: "From 1836 to 1845, Texas was its own country, the Republic of Texas, before it joined the United States as the 28th state." }
  ],
    funFact: "The Texas Capitol building in Austin is actually taller than the United States Capitol in Washington, DC.",
    nickname: "The Lone Star State"
  },
  {
    w: 12,
    state: "Minnesota",
    capital: "St. Paul",
    facts: [
    { day: "Monday", fact: "Minnesota has more shoreline than California, Florida, and Hawaii combined, thanks to its 10,000-plus lakes." },
    { day: "Tuesday", fact: "The Mississippi River, the second-longest river in America, begins as a small stream flowing out of Lake Itasca in northern Minnesota." },
    { day: "Wednesday", fact: "The Mall of America in Bloomington, Minnesota, is one of the largest shopping malls in the country and has an indoor amusement park right in the middle." },
    { day: "Thursday", fact: "The Target store chain opened its very first store in Roseville, Minnesota, in 1962." }
  ],
    funFact: "Minnesota has more shoreline than California, Florida, and Hawaii combined, thanks to its 10,000-plus lakes.",
    nickname: "The North Star State"
  },
  {
    w: 13,
    state: "California",
    capital: "Sacramento",
    facts: [
    { day: "Monday", fact: "California is home to both the tallest trees on Earth, the coast redwoods, and the hottest place on Earth, Death Valley." },
    { day: "Tuesday", fact: "The California Gold Rush began in 1848 when gold was found at Sutter's Mill, and hundreds of thousands of people rushed west hoping to strike it rich." },
    { day: "Wednesday", fact: "The Golden Gate Bridge in San Francisco was the longest suspension bridge in the world when it opened in 1937, and its towers are painted international orange." },
    { day: "Thursday", fact: "Hollywood in Los Angeles became the home of the American movie industry in the early 1900s because of its sunshine and varied scenery." }
  ],
    funFact: "California is home to both the tallest trees on Earth, the coast redwoods, and the hottest place on Earth, Death Valley.",
    nickname: "The Golden State"
  },
  {
    w: 14,
    state: "Georgia",
    capital: "Atlanta",
    facts: [
    { day: "Monday", fact: "Coca-Cola was invented in Atlanta in 1886 by a pharmacist mixing syrup in a brass kettle." },
    { day: "Tuesday", fact: "Dr. Martin Luther King Jr. was born in Atlanta, Georgia, in 1929, and his childhood home is now a national historic site." },
    { day: "Wednesday", fact: "Savannah, Georgia, founded in 1733, is one of America's oldest cities, with cobblestone streets and oak trees draped in Spanish moss." },
    { day: "Thursday", fact: "Georgia grows more peanuts than any other state, which is why so much peanut butter starts its journey there." }
  ],
    funFact: "Coca-Cola was invented in Atlanta in 1886 by a pharmacist mixing syrup in a brass kettle.",
    nickname: "The Peach State"
  },
  {
    w: 15,
    state: "New York",
    capital: "Albany",
    facts: [
    { day: "Monday", fact: "New York City was the first capital of the United States, back in 1789, before the capital moved to Philadelphia and then Washington, DC." },
    { day: "Tuesday", fact: "The Statue of Liberty was a gift from France to America in 1886, and it stands in New York Harbor welcoming ships from around the world." },
    { day: "Wednesday", fact: "The Erie Canal, finished in 1825, connected New York City to the Great Lakes and helped the young nation grow by making shipping cheap and fast." },
    { day: "Thursday", fact: "Niagara Falls, on New York's border with Canada, pours about 750,000 gallons of water over its edge every second." }
  ],
    funFact: "New York City was the first capital of the United States, back in 1789, before the capital moved to Philadelphia and then Washington, DC.",
    nickname: "The Empire State"
  },
  {
    w: 16,
    state: "Colorado",
    capital: "Denver",
    facts: [
    { day: "Monday", fact: "Denver sits exactly one mile above sea level, which is why its baseball team plays at Coors Field in the 'Mile High City.'" },
    { day: "Tuesday", fact: "Colorado has more than 50 mountains that rise above 14,000 feet, and hikers try to climb as many of them as they can." },
    { day: "Wednesday", fact: "Great Sand Dunes National Park in Colorado holds the tallest sand dunes in North America, with some rising 750 feet above the valley floor." },
    { day: "Thursday", fact: "At Mesa Verde in Colorado, visitors can explore cliff dwellings built into rock walls by Ancestral Pueblo people about 800 years ago." }
  ],
    funFact: "Denver sits exactly one mile above sea level, which is why its baseball team plays at Coors Field in the 'Mile High City.'",
    nickname: "The Centennial State"
  },
  {
    w: 17,
    state: "Ohio",
    capital: "Columbus",
    facts: [
    { day: "Monday", fact: "The Wright brothers, who built the first working airplane, grew up in Dayton, Ohio, and ran a bicycle shop there." },
    { day: "Tuesday", fact: "Neil Armstrong, the first person to walk on the Moon, was born in Wapakoneta, Ohio, in 1930." },
    { day: "Wednesday", fact: "Seven United States presidents were born in Ohio, more than in any other state except Virginia." },
    { day: "Thursday", fact: "Superman, the first modern superhero, was created by two teenagers from Cleveland, Ohio, in 1938." }
  ],
    funFact: "The Wright brothers, who built the first working airplane, grew up in Dayton, Ohio, and ran a bicycle shop there.",
    nickname: "The Buckeye State"
  },
  {
    w: 18,
    state: "Louisiana",
    capital: "Baton Rouge",
    facts: [
    { day: "Monday", fact: "Louisiana does not have counties like other states. It is divided into parishes instead, a leftover from its French and Spanish history." },
    { day: "Tuesday", fact: "Jazz music was born in New Orleans in the early 1900s, growing out of African American brass bands and ragtime. The city still calls itself the birthplace of jazz." },
    { day: "Wednesday", fact: "The Lake Pontchartrain Causeway in Louisiana is nearly 24 miles long, making it the longest continuous bridge over water in the world." },
    { day: "Thursday", fact: "In 1803, the United States bought Louisiana from France in the Louisiana Purchase, which more than doubled the size of the country overnight." }
  ],
    funFact: "Louisiana does not have counties like other states. It is divided into parishes instead, a leftover from its French and Spanish history.",
    nickname: "The Pelican State"
  },
  {
    w: 19,
    state: "Washington",
    capital: "Olympia",
    facts: [
    { day: "Monday", fact: "Washington is the only state named after a United States president." },
    { day: "Tuesday", fact: "The Space Needle in Seattle was built for the 1962 World's Fair, and its top observation deck slowly spins so visitors can see the whole city." },
    { day: "Wednesday", fact: "Washington grows more apples than any other state, producing roughly 10 to 12 billion apples every year." },
    { day: "Thursday", fact: "Mount Rainier is an active volcano and the most heavily glaciated peak in the continental United States, covered by more than 25 named glaciers." }
  ],
    funFact: "Washington is the only state named after a United States president.",
    nickname: "The Evergreen State"
  },
  {
    w: 20,
    state: "Massachusetts",
    capital: "Boston",
    facts: [
    { day: "Monday", fact: "Basketball was invented in Springfield, Massachusetts, in 1891 by a gym teacher looking for an indoor winter game." },
    { day: "Tuesday", fact: "The Pilgrims landed at Plymouth, Massachusetts, in 1620, and the first Thanksgiving was shared there with the Wampanoag people in 1621." },
    { day: "Wednesday", fact: "Harvard University, founded in Cambridge in 1636, is the oldest college in America." },
    { day: "Thursday", fact: "Fenway Park in Boston opened in 1912 and is the oldest major league baseball stadium still in use." }
  ],
    funFact: "Basketball was invented in Springfield, Massachusetts, in 1891 by a gym teacher looking for an indoor winter game.",
    nickname: "The Bay State"
  },
  {
    w: 21,
    state: "Tennessee",
    capital: "Nashville",
    facts: [
    { day: "Monday", fact: "The Great Smoky Mountains, on the Tennessee border, is the most visited national park in all of America." },
    { day: "Tuesday", fact: "The Grand Ole Opry in Nashville has been broadcasting country music on the radio since 1925, making it the longest running radio show in American history." },
    { day: "Wednesday", fact: "Elvis Presley's home, Graceland in Memphis, is the second most visited private home in America after the White House." },
    { day: "Thursday", fact: "The state of Tennessee is named after Tanasi, a Cherokee town that once stood along the Little Tennessee River." }
  ],
    funFact: "The Great Smoky Mountains, on the Tennessee border, is the most visited national park in all of America.",
    nickname: "The Volunteer State"
  },
  {
    w: 22,
    state: "Michigan",
    capital: "Lansing",
    facts: [
    { day: "Monday", fact: "Michigan touches four of the five Great Lakes, more than any other state, and it is split into two separate peninsulas." },
    { day: "Tuesday", fact: "Detroit, Michigan, became the car capital of the world, and Henry Ford built his first car, the Quadricycle, there in 1896." },
    { day: "Wednesday", fact: "When it opened in 1957, the Mackinac Bridge was the longest suspension bridge in the world, stretching five miles across the straits." },
    { day: "Thursday", fact: "Motown Records started in Detroit in 1959 and launched stars like Stevie Wonder, Diana Ross, and the Jackson 5." }
  ],
    funFact: "Michigan touches four of the five Great Lakes, more than any other state, and it is split into two separate peninsulas.",
    nickname: "The Great Lakes State"
  },
  {
    w: 23,
    state: "Hawaii",
    capital: "Honolulu",
    facts: [
    { day: "Monday", fact: "Hawaii is the only state that grows coffee, and no matter where you stand in Hawaii, you are never more than 30 miles from the ocean." },
    { day: "Tuesday", fact: "Hawaii is the southernmost state, and its Big Island is still growing because the Kilauea volcano adds new land when lava flows into the sea." },
    { day: "Wednesday", fact: "Iolani Palace in Honolulu is the only royal palace in the United States, built for Hawaii's kings and queens before Hawaii became a state." },
    { day: "Thursday", fact: "Mauna Kea is the tallest mountain on Earth when measured from its base on the ocean floor, even taller than Mount Everest by that measure." }
  ],
    funFact: "Hawaii is the only state that grows coffee, and no matter where you stand in Hawaii, you are never more than 30 miles from the ocean.",
    nickname: "The Aloha State"
  },
  {
    w: 24,
    state: "Virginia",
    capital: "Richmond",
    facts: [
    { day: "Monday", fact: "Eight United States presidents were born in Virginia, more than in any other state." },
    { day: "Tuesday", fact: "Jamestown, Virginia, was the first permanent English settlement in America, founded in 1607." },
    { day: "Wednesday", fact: "The Pentagon in Arlington is the largest office building in the world, with about 17.5 miles of hallways inside." },
    { day: "Thursday", fact: "The Civil War ended in Virginia in 1865, when General Robert E. Lee surrendered to General Ulysses S. Grant at Appomattox Court House." }
  ],
    funFact: "Eight United States presidents were born in Virginia, more than in any other state.",
    nickname: "The Old Dominion"
  },
  {
    w: 25,
    state: "Pennsylvania",
    capital: "Harrisburg",
    facts: [
    { day: "Monday", fact: "America's first zoo opened in Philadelphia in 1874, and it is still open today." },
    { day: "Tuesday", fact: "The Liberty Bell in Philadelphia rang to celebrate American independence, and its famous crack appeared sometime in the 1800s." },
    { day: "Wednesday", fact: "Hershey, Pennsylvania, is called the Sweetest Place on Earth because the Hershey's chocolate factory and a whole town were built there." },
    { day: "Thursday", fact: "Pennsylvania Hospital, founded in Philadelphia in 1751 with help from Benjamin Franklin, was the first hospital in America." }
  ],
    funFact: "America's first zoo opened in Philadelphia in 1874, and it is still open today.",
    nickname: "The Keystone State"
  },
  {
    w: 26,
    state: "Nevada",
    capital: "Carson City",
    facts: [
    { day: "Monday", fact: "Nevada is the driest state in America, getting less than 10 inches of rain in a whole year in most places." },
    { day: "Tuesday", fact: "The Hoover Dam, on the Nevada and Arizona border, was the largest dam in the world when it was finished in 1935." },
    { day: "Wednesday", fact: "The Comstock Lode silver discovery in 1859 brought thousands of miners to Nevada and helped it become a state." },
    { day: "Thursday", fact: "Nevada produces more gold than any other state, and it ranks among the top gold producing places in the entire world." }
  ],
    funFact: "Nevada is the driest state in America, getting less than 10 inches of rain in a whole year in most places.",
    nickname: "The Silver State"
  },
  {
    w: 27,
    state: "Wisconsin",
    capital: "Madison",
    facts: [
    { day: "Monday", fact: "Wisconsin makes more cheese than any other state, over 600 different kinds, and the ice cream sundae was invented there." },
    { day: "Tuesday", fact: "America's first kindergarten opened in Watertown, Wisconsin, in 1856, started by a German immigrant named Margarethe Schurz." },
    { day: "Wednesday", fact: "Harley-Davidson motorcycles have been built in Milwaukee since 1903, starting in a small wooden shed." },
    { day: "Thursday", fact: "The Green Bay Packers are the only community owned team in the NFL, with more than 500,000 fans as shareholders." }
  ],
    funFact: "Wisconsin makes more cheese than any other state, over 600 different kinds, and the ice cream sundae was invented there.",
    nickname: "The Badger State"
  },
  {
    w: 28,
    state: "South Carolina",
    capital: "Columbia",
    facts: [
    { day: "Monday", fact: "America's only large-scale tea farm grows tea in South Carolina, on Wadmalaw Island near Charleston." },
    { day: "Tuesday", fact: "The first shots of the Civil War were fired at Fort Sumter in Charleston Harbor in 1861." },
    { day: "Wednesday", fact: "The Charleston Museum, founded in 1773, is the oldest museum in America." },
    { day: "Thursday", fact: "The Angel Oak tree near Charleston is around 400 years old, and its branches shade an area bigger than two basketball courts." }
  ],
    funFact: "America's only large-scale tea farm grows tea in South Carolina, on Wadmalaw Island near Charleston.",
    nickname: "The Palmetto State"
  },
  {
    w: 29,
    state: "Idaho",
    capital: "Boise",
    facts: [
    { day: "Monday", fact: "Hells Canyon in Idaho is the deepest river gorge in North America, even deeper than the Grand Canyon." },
    { day: "Tuesday", fact: "Shoshone Falls in Idaho drops 212 feet, which is 36 feet taller than Niagara Falls." },
    { day: "Wednesday", fact: "Sun Valley, which opened in 1936, was America's first destination ski resort." },
    { day: "Thursday", fact: "NASA's Apollo astronauts trained in Idaho's Craters of the Moon because its lava fields look like the surface of the moon." }
  ],
    funFact: "Hells Canyon in Idaho is the deepest river gorge in North America, even deeper than the Grand Canyon.",
    nickname: "The Gem State"
  },
  {
    w: 30,
    state: "New Jersey",
    capital: "Trenton",
    facts: [
    { day: "Monday", fact: "The first baseball game ever played with modern rules happened in Hoboken, New Jersey, in 1846." },
    { day: "Tuesday", fact: "Thomas Edison built his famous laboratory in Menlo Park, New Jersey, where he invented the phonograph and perfected the light bulb." },
    { day: "Wednesday", fact: "The first boardwalk in America opened in Atlantic City, New Jersey, in 1870." },
    { day: "Thursday", fact: "New Jersey is called the Diner Capital of the World because it has more diners than any other state." }
  ],
    funFact: "The first baseball game ever played with modern rules happened in Hoboken, New Jersey, in 1846.",
    nickname: "The Garden State"
  },
  {
    w: 31,
    state: "Missouri",
    capital: "Jefferson City",
    facts: [
    { day: "Monday", fact: "The ice cream cone became famous at the 1904 World's Fair in St. Louis, when a waffle maker rolled his waffles into cones for the ice cream stand next door." },
    { day: "Tuesday", fact: "The Gateway Arch in St. Louis is 630 feet tall, making it the tallest man-made monument in America." },
    { day: "Wednesday", fact: "Mark Twain grew up in Hannibal, Missouri, and set his books Tom Sawyer and Huckleberry Finn in a river town just like it." },
    { day: "Thursday", fact: "The Pony Express started in St. Joseph, Missouri, in 1860, carrying mail to California in about 10 days on horseback." }
  ],
    funFact: "The ice cream cone became famous at the 1904 World's Fair in St. Louis, when a waffle maker rolled his waffles into cones for the ice cream stand next door.",
    nickname: "The Show-Me State"
  },
  {
    w: 32,
    state: "Mississippi",
    capital: "Jackson",
    facts: [
    { day: "Monday", fact: "Mississippi is known as the birthplace of the blues, the music style that led to rock and roll." },
    { day: "Tuesday", fact: "The teddy bear got its name from a 1902 hunting trip in Mississippi, when President Theodore Roosevelt refused to shoot a tied-up bear because it was unsportsmanlike." },
    { day: "Wednesday", fact: "Elvis Presley was born in Tupelo, Mississippi, in 1935, in a small two-room house his father built." },
    { day: "Thursday", fact: "The Mississippi River forms most of the state's western border, and the state's name comes from a Native American word meaning great waters." }
  ],
    funFact: "Mississippi is known as the birthplace of the blues, the music style that led to rock and roll.",
    nickname: "The Magnolia State"
  },
  {
    w: 33,
    state: "Montana",
    capital: "Helena",
    facts: [
    { day: "Monday", fact: "Montana has about three times as many cattle as people." },
    { day: "Tuesday", fact: "Glacier National Park in Montana is home to more than 700 lakes and dozens of active glaciers." },
    { day: "Wednesday", fact: "Butte, Montana, was called the Richest Hill on Earth because its copper mines helped wire America's telephones and electric lights." },
    { day: "Thursday", fact: "A small corner of Yellowstone National Park reaches into Montana, so visitors can enter the park from the town of Gardiner." }
  ],
    funFact: "Montana has about three times as many cattle as people.",
    nickname: "The Treasure State"
  },
  {
    w: 34,
    state: "Rhode Island",
    capital: "Providence",
    facts: [
    { day: "Monday", fact: "Rhode Island is the smallest state, but it still has more than 400 miles of coastline." },
    { day: "Tuesday", fact: "Providence was founded in 1636 by Roger Williams as a place where people of all religions would be welcome." },
    { day: "Wednesday", fact: "The First Baptist Church in Providence, founded in 1638, is the oldest Baptist church in America." },
    { day: "Thursday", fact: "Newport is famous for its giant seaside mansions, built by America's richest families in the late 1800s." }
  ],
    funFact: "Rhode Island is the smallest state, but it still has more than 400 miles of coastline.",
    nickname: "The Ocean State"
  },
  {
    w: 35,
    state: "Indiana",
    capital: "Indianapolis",
    facts: [
    { day: "Monday", fact: "The Indianapolis 500 car race draws more than 300,000 fans, making it the largest single-day sporting event in the world." },
    { day: "Tuesday", fact: "Abraham Lincoln spent his boyhood in southern Indiana, and you can visit the log cabin farm where he grew up at the Lincoln Boyhood National Memorial." },
    { day: "Wednesday", fact: "The town of Santa Claus, Indiana, gets thousands of letters to Santa every Christmas, and volunteers there write back to every single one." },
    { day: "Thursday", fact: "The Children's Museum of Indianapolis is the largest children's museum in the entire world, with five floors of exhibits." }
  ],
    funFact: "The Indianapolis 500 car race draws more than 300,000 fans, making it the largest single-day sporting event in the world.",
    nickname: "The Hoosier State"
  },
  {
    w: 36,
    state: "North Carolina",
    capital: "Raleigh",
    facts: [
    { day: "Monday", fact: "The Wright brothers made the first powered airplane flight at Kitty Hawk, North Carolina, in 1903. It lasted 12 seconds." },
    { day: "Tuesday", fact: "The Biltmore Estate in Asheville is the largest privately owned home in America, with 250 rooms, a bowling alley, and an indoor pool." },
    { day: "Wednesday", fact: "North Carolina grows more sweet potatoes than any other state, and sweet potato is its official state vegetable." },
    { day: "Thursday", fact: "Mount Mitchell in North Carolina is the tallest mountain east of the Mississippi River, rising 6,684 feet." }
  ],
    funFact: "The Wright brothers made the first powered airplane flight at Kitty Hawk, North Carolina, in 1903. It lasted 12 seconds.",
    nickname: "The Tar Heel State"
  },
  {
    w: 37,
    state: "Utah",
    capital: "Salt Lake City",
    facts: [
    { day: "Monday", fact: "The Great Salt Lake is saltier than the ocean, so you can float in it without even trying." },
    { day: "Tuesday", fact: "Utah is home to five national parks, nicknamed the Mighty Five, including Arches, which has more than 2,000 natural stone arches." },
    { day: "Wednesday", fact: "The Bonneville Salt Flats in Utah are so flat and smooth that race cars have set land speed records there for over a hundred years." },
    { day: "Thursday", fact: "Bryce Canyon is famous for tall, thin rock spires called hoodoos, which formed as ice and rain slowly carved the cliffs." }
  ],
    funFact: "The Great Salt Lake is saltier than the ocean, so you can float in it without even trying.",
    nickname: "The Beehive State"
  },
  {
    w: 38,
    state: "New Hampshire",
    capital: "Concord",
    facts: [
    { day: "Monday", fact: "The fastest wind ever measured on Earth, 231 miles per hour, was recorded on top of Mount Washington in New Hampshire." },
    { day: "Tuesday", fact: "New Hampshire holds the first presidential primary election in the nation, so candidates campaign hard in its small towns every four years." },
    { day: "Wednesday", fact: "The state motto, Live Free or Die, comes from a toast by Revolutionary War hero General John Stark of New Hampshire." },
    { day: "Thursday", fact: "Teacher and astronaut Christa McAuliffe, who was chosen for the first Teacher in Space mission, was from Concord, New Hampshire." }
  ],
    funFact: "The fastest wind ever measured on Earth, 231 miles per hour, was recorded on top of Mount Washington in New Hampshire.",
    nickname: "The Granite State"
  },
  {
    w: 39,
    state: "Iowa",
    capital: "Des Moines",
    facts: [
    { day: "Monday", fact: "Iowa grows more corn than any other state, and its name is the only state name that starts with two vowels." },
    { day: "Tuesday", fact: "The famous baseball field from the movie Field of Dreams is a real place in Dyersville, Iowa, and fans can still visit and play on it." },
    { day: "Wednesday", fact: "President Herbert Hoover, the only president born in Iowa, grew up in a tiny two-room cottage in West Branch that you can still tour." },
    { day: "Thursday", fact: "Iowa is the only state whose eastern and western borders are both formed by rivers, the Mississippi and the Missouri." }
  ],
    funFact: "Iowa grows more corn than any other state, and its name is the only state name that starts with two vowels.",
    nickname: "The Hawkeye State"
  },
  {
    w: 40,
    state: "Kentucky",
    capital: "Frankfort",
    facts: [
    { day: "Monday", fact: "The Kentucky Derby horse race has run every year since 1875, making it the longest-running sporting event in America." },
    { day: "Tuesday", fact: "Mammoth Cave in Kentucky is the longest cave system in the world, with more than 400 miles of explored passages." },
    { day: "Wednesday", fact: "Abraham Lincoln was born in a log cabin in Hodgenville, Kentucky, in 1809, before his family moved to Indiana." },
    { day: "Thursday", fact: "Colonel Harland Sanders started selling his secret fried chicken recipe at a roadside restaurant in Corbin, Kentucky, which became KFC." }
  ],
    funFact: "The Kentucky Derby horse race has run every year since 1875, making it the longest-running sporting event in America.",
    nickname: "The Bluegrass State"
  },
  {
    w: 41,
    state: "New Mexico",
    capital: "Santa Fe",
    facts: [
    { day: "Monday", fact: "Santa Fe is the oldest capital city in America. It was founded in 1610, ten years before the Pilgrims landed at Plymouth Rock." },
    { day: "Tuesday", fact: "White Sands National Park holds the largest gypsum sand dune field on Earth, with waves of sparkling white sand stretching for miles." },
    { day: "Wednesday", fact: "Every October, Albuquerque hosts the largest hot air balloon festival in the world, with hundreds of colorful balloons filling the sky." },
    { day: "Thursday", fact: "Famous artist Georgia O'Keeffe painted New Mexico's deserts and skulls after falling in love with the landscape near Taos." }
  ],
    funFact: "Santa Fe is the oldest capital city in America. It was founded in 1610, ten years before the Pilgrims landed at Plymouth Rock.",
    nickname: "The Land of Enchantment"
  },
  {
    w: 42,
    state: "Delaware",
    capital: "Dover",
    facts: [
    { day: "Monday", fact: "Delaware was the very first state to approve the United States Constitution, on December 7, 1787." },
    { day: "Tuesday", fact: "Delaware is so small that you can drive from one end to the other in about an hour and a half." },
    { day: "Wednesday", fact: "Caesar Rodney of Delaware once rode 80 miles through a thunderstorm to reach Philadelphia in time to vote for American independence." },
    { day: "Thursday", fact: "Delaware Bay is home to the largest population of horseshoe crabs in the world, and they crawl ashore by the thousands each spring." }
  ],
    funFact: "Delaware was the very first state to approve the United States Constitution, on December 7, 1787.",
    nickname: "The First State"
  },
  {
    w: 43,
    state: "Nebraska",
    capital: "Lincoln",
    facts: [
    { day: "Monday", fact: "Kool-Aid was invented in Hastings, Nebraska, in 1927 by a man mixing fruit powder in his mother's kitchen." },
    { day: "Tuesday", fact: "On football game days, Nebraska's Memorial Stadium holds so many fans that it becomes the third-largest city in the state." },
    { day: "Wednesday", fact: "Chimney Rock, a towering rock spire in western Nebraska, was a famous landmark that guided pioneers traveling the Oregon Trail." },
    { day: "Thursday", fact: "Billionaire Warren Buffett was born in Omaha, Nebraska, and still lives in the same modest house he bought there in 1958." }
  ],
    funFact: "Kool-Aid was invented in Hastings, Nebraska, in 1927 by a man mixing fruit powder in his mother's kitchen.",
    nickname: "The Cornhusker State"
  },
  {
    w: 44,
    state: "Arkansas",
    capital: "Little Rock",
    facts: [
    { day: "Monday", fact: "Arkansas is the only place in the world where you can dig for diamonds in a public park and keep whatever you find." },
    { day: "Tuesday", fact: "In 1957, nine Black students known as the Little Rock Nine bravely integrated Central High School in Little Rock, Arkansas." },
    { day: "Wednesday", fact: "Sam Walton opened the first Walmart in Rogers, Arkansas, in 1962, and the company's headquarters is still in nearby Bentonville." },
    { day: "Thursday", fact: "Music legend Johnny Cash was born in the tiny town of Kingsland, Arkansas, and grew up picking cotton on his family's farm." }
  ],
    funFact: "Arkansas is the only place in the world where you can dig for diamonds in a public park and keep whatever you find.",
    nickname: "The Natural State"
  },
  {
    w: 45,
    state: "Wyoming",
    capital: "Cheyenne",
    facts: [
    { day: "Monday", fact: "Wyoming was the first place in America where women could vote, back in 1869, more than 50 years before the whole country allowed it." },
    { day: "Tuesday", fact: "Yellowstone, mostly in Wyoming, was the world's first national park when it was established in 1872." },
    { day: "Wednesday", fact: "Old Faithful, the famous geyser in Yellowstone, erupts about every 90 minutes, shooting hot water high into the air." },
    { day: "Thursday", fact: "Devils Tower in Wyoming was America's first national monument, and it starred in the movie Close Encounters of the Third Kind." }
  ],
    funFact: "Wyoming was the first place in America where women could vote, back in 1869, more than 50 years before the whole country allowed it.",
    nickname: "The Equality State"
  },
  {
    w: 46,
    state: "Maryland",
    capital: "Annapolis",
    facts: [
    { day: "Monday", fact: "The Star-Spangled Banner, America's national anthem, was written in Baltimore after a battle in the War of 1812." },
    { day: "Tuesday", fact: "Harriet Tubman was born in Maryland, escaped from slavery, and then risked her life to lead about 70 people to freedom on the Underground Railroad." },
    { day: "Wednesday", fact: "Maryland's official state sport is jousting, the medieval contest where riders on horseback charge at each other with long lances." },
    { day: "Thursday", fact: "The first telegraph message in America, What hath God wrought, was sent from Baltimore to Washington, DC, in 1844." }
  ],
    funFact: "The Star-Spangled Banner, America's national anthem, was written in Baltimore after a battle in the War of 1812.",
    nickname: "The Old Line State"
  },
  {
    w: 47,
    state: "South Dakota",
    capital: "Pierre",
    facts: [
    { day: "Monday", fact: "Each of the four faces carved into Mount Rushmore is 60 feet tall, about as tall as a six-story building." },
    { day: "Tuesday", fact: "The Crazy Horse Memorial in South Dakota is still being carved and will be the largest sculpture in the world when it is finished." },
    { day: "Wednesday", fact: "Laura Ingalls Wilder, author of the Little House books, lived in De Smet, South Dakota, and wrote about life on the prairie there." },
    { day: "Thursday", fact: "The Corn Palace in Mitchell, South Dakota, is a building decorated with real corn, and its murals are redesigned every year." }
  ],
    funFact: "Each of the four faces carved into Mount Rushmore is 60 feet tall, about as tall as a six-story building.",
    nickname: "The Mount Rushmore State"
  },
  {
    w: 48,
    state: "Oklahoma",
    capital: "Oklahoma City",
    facts: [
    { day: "Monday", fact: "The parking meter was invented in Oklahoma City in 1935." },
    { day: "Tuesday", fact: "Oklahoma's name comes from Choctaw words meaning red people, and today 39 Native American tribal nations are headquartered in the state." },
    { day: "Wednesday", fact: "The official state vegetable of Oklahoma is the watermelon, because most people eat it like a vegetable in salads." },
    { day: "Thursday", fact: "Cowboy humorist Will Rogers, one of the most famous Americans of the 1930s, was born in what is now Oklahoma." }
  ],
    funFact: "The parking meter was invented in Oklahoma City in 1935.",
    nickname: "The Sooner State"
  },
  {
    w: 49,
    state: "North Dakota",
    capital: "Bismarck",
    facts: [
    { day: "Monday", fact: "The exact geographic center of North America is marked with a stone monument in Rugby, North Dakota." },
    { day: "Tuesday", fact: "Theodore Roosevelt ranched in North Dakota as a young man and later said those tough years there prepared him to become president." },
    { day: "Wednesday", fact: "North Dakota usually produces more honey than any other state, thanks to its fields of clover and wildflowers." },
    { day: "Thursday", fact: "Jamestown, North Dakota, is home to the World's Largest Buffalo, a 60-ton concrete statue standing 26 feet tall." }
  ],
    funFact: "The exact geographic center of North America is marked with a stone monument in Rugby, North Dakota.",
    nickname: "The Peace Garden State"
  },
  {
    w: 50,
    state: "West Virginia",
    capital: "Charleston",
    facts: [
    { day: "Monday", fact: "West Virginia is the only state that sits completely inside the Appalachian Mountains." },
    { day: "Tuesday", fact: "The New River in West Virginia is one of the oldest rivers in the world, even though its name says new." },
    { day: "Wednesday", fact: "John Denver's song Take Me Home, Country Roads is about West Virginia and became one of the state's official songs." },
    { day: "Thursday", fact: "Mother's Day began in Grafton, West Virginia, where Anna Jarvis held the first celebration in 1908 to honor her mother." }
  ],
    funFact: "West Virginia is the only state that sits completely inside the Appalachian Mountains.",
    nickname: "The Mountain State"
  },
  {
    w: 51,
    state: "Washington, DC",
    capital: "Washington",
    facts: [
    { day: "Monday", fact: "The Washington Monument was the tallest structure in the entire world when it was finished in 1884." },
    { day: "Tuesday", fact: "The statue of Abraham Lincoln inside the Lincoln Memorial is 19 feet tall and weighs as much as about 25 cars." },
    { day: "Wednesday", fact: "The statue of Abraham Lincoln inside the Lincoln Memorial is 19 feet tall and weighs 175 tons." },
    { day: "Thursday", fact: "The famous cherry blossom trees around the Tidal Basin were a gift from Japan in 1912, and they draw visitors from around the world each spring." }
  ],
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
