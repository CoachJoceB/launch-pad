// 52-week lesson videos (all 52 weeks)
const MM_VIDEOS = {
  "35": {
    "1": {
      "history": {
        "channel": "Did You Know? - World Cultural Heritage",
        "duration": "8:36",
        "title": "The First Peoples to Migrate to the Americas",
        "youtubeId": "o4v6BLfEYZc"
      },
      "science": {
        "channel": "TutWay",
        "duration": "8:18",
        "title": "Basic Needs of Living Things | Science Grade 2 & 3",
        "youtubeId": "l7mXl-4TXmQ"
      }
    },
    "2": {
      "history": {
        "channel": "Bedtime History",
        "duration": "4:53",
        "title": "Mayan Civilization for Kids | Mesoamerica & Mexican History",
        "youtubeId": "VtJK6AStK50"
      },
      "science": {
        "channel": "Learn Bright",
        "duration": "7:26",
        "title": "Parts of Plants for Kids | Learn all about plant parts and their functions",
        "youtubeId": "A-xScqCN0GA"
      }
    },
    "3": {
      "history": {
        "channel": "Bedtime History",
        "duration": "6:51",
        "title": "Aztec Empire For Kids | Tenochtitl\u00e1n | History Made Easy",
        "youtubeId": "TUs56Z3xJG8"
      },
      "science": {
        "channel": "Learn Bright",
        "duration": "5:32",
        "title": "Photosynthesis for Kids | Learn how plants MAKE their own food",
        "youtubeId": "Iln136eMl4g"
      }
    },
    "4": {
      "history": {
        "channel": "TED-Ed",
        "duration": "5:46",
        "title": "The rise and fall of the Inca Empire - Gordon McEwan",
        "youtubeId": "UO5ktwPXsyM"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "5:47",
        "title": "How Do Plant Seeds Travel? | Spring is Here!",
        "youtubeId": "WqgVks9NViQ"
      }
    },
    "10": {
      "science": {
        "channel": "Hey Guess What",
        "duration": "~8:00",
        "title": "Top Facts About AQUATIC Ecosystems",
        "youtubeId": "7Z9X-9geFlA"
      }
    },
    "11": {
      "history": {
        "channel": "Des Plaines History Center",
        "duration": "2:51",
        "title": "Hands-on History #7: Beaver Pelts and the Fur Trade",
        "youtubeId": "56095FMHGF8"
      },
      "science": {
        "channel": "Learn Bright",
        "duration": "~8:00",
        "title": "Habitats for Kids",
        "youtubeId": "40B2IjLWfTQ"
      }
    },
    "12": {
      "history": {
        "channel": "Kids Academy",
        "duration": "3:39",
        "title": "Jamestown Settlement | Jamestown Colony",
        "youtubeId": "t0kr8_E6Va0"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Explore the Rainforest! | Ecology for Kids",
        "youtubeId": "KMdD6TTDZ_g"
      }
    },
    "13": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "History of Thanksgiving For Kids",
        "youtubeId": "52T1cdDeV_I"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~3:00",
        "title": "4 Facts to Know About Reindeer",
        "youtubeId": "jqQLeH172Ho"
      }
    },
    "14": {
      "history": {
        "channel": "Kids Academy",
        "duration": "4:16",
        "title": "13 American Colonies | US History",
        "youtubeId": "vd0fMpAIs1s"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Camouflage: Animal Hide & Seek",
        "youtubeId": "YOIRci0CKzg"
      }
    },
    "15": {
      "history": {
        "channel": "Historic Bath",
        "duration": "~5:00",
        "title": "A Day in the Life of a Colonial Kid, part 1",
        "youtubeId": "vAe2iexZ_4E"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Why Do Some Animals Hibernate?",
        "youtubeId": "OhrhcsICrE8"
      }
    },
    "16": {
      "history": {
        "channel": "Bow Tie Guy and Wife",
        "duration": "~3:25",
        "title": "The French & Indian War - Educational Social Studies History Video for Elementary Students & Kids",
        "youtubeId": "9Su_GPNrk5k"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Your Super Skeleton!",
        "youtubeId": "vRuh9aBwUdM"
      }
    },
    "17": {
      "history": {
        "channel": "NBC News Learn",
        "duration": "~5:00",
        "title": "The Stamp Act",
        "youtubeId": "uImdEeuLNG8"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "How Do Our Bodies Move?",
        "youtubeId": "j918PoWWaB0"
      }
    },
    "18": {
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "You Are What You Eat!",
        "youtubeId": "OMRX_G-rNaY"
      },
      "history": {
        "title": "Boston Tea Party: The Revolutionary War in Four Minutes",
        "youtubeId": "2jnhVKAKFLI",
        "channel": "American Battlefield Trust",
        "duration": "4:36"
      }
    },
    "19": {
      "history": {
        "channel": "Homeschool Pop",
        "duration": "7:45",
        "title": "Declaration of Independence for Kids",
        "youtubeId": "eIO-7dFz2JU"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "How to Feel Your Heart Beat",
        "youtubeId": "tF9-jLZNM10"
      }
    },
    "20": {
      "history": {
        "channel": "Schoolhouse Rock",
        "duration": "~3:00",
        "title": "School House Rock - Shot Heard Round the World America Rock",
        "youtubeId": "Y6ikO6LMxF4"
      },
      "science": {
        "channel": "Peekaboo Kidz",
        "duration": "~3:52",
        "title": "Respiratory System | The Dr. Binocs Show",
        "youtubeId": "mOKmjYwfDGU"
      }
    },
    "21": {
      "history": {
        "channel": "American Battlefield Trust",
        "duration": "~4:00",
        "title": "Washington's Crossing of the Delaware River: The Revolutionary War in Four Minutes",
        "youtubeId": "6M5sYsiVG_Q"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What's Inside These Rocks? - #sciencegoals",
        "youtubeId": "V72ydSohpMg"
      }
    },
    "22": {
      "science": {
        "channel": "Free School",
        "duration": "~5:00",
        "title": "3 Types of Rocks and the Rock Cycle",
        "youtubeId": "EGK1KkLjdQY"
      },
      "history": {
        "title": "How Did America Win the Siege of Yorktown? | Today in History (1781)",
        "youtubeId": "HWqmlF1gBQ0",
        "channel": "Mr. Louis | Today in History",
        "duration": "~5:00"
      }
    },
    "23": {
      "history": {
        "channel": "Study.com",
        "duration": "2:33",
        "title": "The Articles of Confederation and the Northwest Ordinance",
        "youtubeId": "ML8qtTpVuDs"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What's the Dirt on... Dirt?",
        "youtubeId": "if29mjcd5bc"
      }
    },
    "24": {
      "history": {
        "channel": "National Constitution Center",
        "duration": "~5:00",
        "title": "The Constitutional Convention | Constitution 101",
        "youtubeId": "VGUhtXfrN28"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "The Tallest Waterfall in the World! | Geology for Kids",
        "youtubeId": "c_dUdfnZyao"
      }
    },
    "25": {
      "history": {
        "channel": "Learn Bright",
        "duration": "~8:00",
        "title": "Bill of Rights for Kids | Learn about these 10 amendments of the Constitution",
        "youtubeId": "skWNC3a8NkM"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What Causes Earthquakes?",
        "youtubeId": "AArne-wh_Uc"
      }
    },
    "26": {
      "history": {
        "channel": "FreeSchool",
        "duration": "4:54",
        "title": "Biography of George Washington for Kids",
        "youtubeId": "3lXnfitSoYw"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "All About Volcanoes",
        "youtubeId": "K7Oq9_DU1Mc"
      }
    },
    "27": {
      "history": {
        "channel": "Bow Tie Guy and Wife",
        "duration": "~5:00",
        "title": "The Louisiana Purchase (Overview for Kids)",
        "youtubeId": "r6LieLXkUk0"
      },
      "science": {
        "channel": "Teach the Day",
        "duration": "~5:00",
        "title": "National Fossil Day EP007",
        "youtubeId": "gX0WBx_j4dA"
      }
    },
    "28": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "Sacajawea for Kids",
        "youtubeId": "lS5xP6-H0JY"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~4:22",
        "title": "Where Does Water Come From?",
        "youtubeId": "R0K7VKkksyc"
      }
    },
    "29": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:30",
        "title": "The War of 1812 - Crash Course US History #11",
        "youtubeId": "qMXqg2PKJZU"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What Are Clouds Made Of?",
        "youtubeId": "digbbr3fep8"
      }
    },
    "30": {
      "history": {
        "channel": "Learn Bright",
        "duration": "8:10",
        "title": "Industrial Revolution for Kids",
        "youtubeId": "w1A2UYlK36A"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What's a Hurricane?",
        "youtubeId": "xKubdY2mHXc"
      }
    },
    "31": {
      "history": {
        "channel": "History Illustrated",
        "duration": "~5:00",
        "title": "Erie Canal Definition | Simple Explanation",
        "youtubeId": "2CHuz1YK4CY"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~3:18",
        "title": "Let's Learn the Ocean Zones!",
        "youtubeId": "fHVE4B-UjmM"
      }
    },
    "32": {
      "history": {
        "channel": "fresbergcartoon",
        "duration": "~8:00",
        "title": "Trail of Tears for Kids Documentary: Watch our Cartoon for Kids on the Trail of Tears",
        "youtubeId": "1Q5Z4UUitdU"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What are Tides?",
        "youtubeId": "tI-w-q-w-9w"
      }
    },
    "33": {
      "history": {
        "channel": "History For Humans",
        "duration": "~10:00",
        "title": "The Alamo and the Texas Revolution | For Kids",
        "youtubeId": "jU4oEL5yo50"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Let's Make the Solar System | Arts and Crafts!",
        "youtubeId": "K6dqHEoj-AU"
      }
    },
    "34": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "California Gold Rush For Kids",
        "youtubeId": "vGvrLfkdD1w"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Why Does the Moon Change?",
        "youtubeId": "yXe0yxzYkjo"
      }
    },
    "35": {
      "history": {
        "channel": "Bedtime History",
        "duration": "7:03",
        "title": "Harriet Tubman For Kids",
        "youtubeId": "_LjmMZUcqaU"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "Super Stars (Constellations) #31.1",
        "youtubeId": "MZffhapfOgg"
      }
    },
    "36": {
      "history": {
        "channel": "Simple History",
        "duration": "~10:00",
        "title": "Life of Frederick Douglass",
        "youtubeId": "rCDgTcxkJrs"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Why Are There Seasons?",
        "youtubeId": "UQjT5uKp2hg"
      }
    },
    "37": {
      "history": {
        "channel": "Bow Tie Guy and Wife",
        "duration": "~5:00",
        "title": "Causes of the American Civil War - Educational Social Studies Video for Elementary Students & Kids",
        "youtubeId": "USxFjU87BqE"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "What's Matter? #3.1",
        "youtubeId": "ELchwUIlWa8"
      }
    },
    "38": {
      "history": {
        "channel": "American Battlefield Trust",
        "duration": "~4:00",
        "title": "The Emancipation Proclamation: The Civil War in Four Minutes",
        "youtubeId": "v9pjvo1_oto"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "Vacation or Conservation (Of Mass) #23.1",
        "youtubeId": "3lHHOiTdmK4"
      }
    },
    "39": {
      "history": {
        "channel": "American Battlefield Trust",
        "duration": "~4:00",
        "title": "The Battle of Gettysburg: The Civil War in Four Minutes",
        "youtubeId": "7ALyq3seK2g"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "The Great Picnic Mix Up #19.1",
        "youtubeId": "jA0PzblYPUM"
      }
    },
    "40": {
      "history": {
        "channel": "Bill of Rights Institute",
        "duration": "~4:00",
        "title": "Elementary Lessons | Reconstruction",
        "youtubeId": "O06wzIgTF54"
      },
      "science": {
        "channel": "The Jones Breakdown",
        "duration": "~4:00",
        "title": "Heat on the Move: Heat Transfer Song",
        "youtubeId": "lj2FLyS9ItE"
      }
    },
    "41": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "History of the Transcontinental Railroad",
        "youtubeId": "AKFa93g22l4"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~5:00",
        "title": "How Light Travels and Changes | Science Lesson",
        "youtubeId": "xYCx9q1ZXCw"
      }
    },
    "42": {
      "history": {
        "channel": "A Kid Explains History",
        "duration": "~4:00",
        "title": "WHO WERE THE COWBOYS?",
        "youtubeId": "Jq1J8DHgrJo"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Can You See Sound?",
        "youtubeId": "GQnqlrsy_jU"
      }
    },
    "43": {
      "history": {
        "channel": "Bedtime History",
        "duration": "7:38",
        "title": "History of Thomas Edison for Kids",
        "youtubeId": "CnkXrRVssLk"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "The Sticky Balloon Trick! | Physics for Kids",
        "youtubeId": "5TAIUCYMlIQ"
      }
    },
    "44": {
      "history": {
        "channel": "Hey Guess What",
        "duration": "~5:00",
        "title": "Ellis Island - Facts for Kids",
        "youtubeId": "MWbHkHMKncI"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Fun with Magnets!",
        "youtubeId": "s236Q1nuWXg"
      }
    },
    "45": {
      "history": {
        "channel": "National Women's History Museum",
        "duration": "~1:00",
        "title": "Women's History Minute: Progressive Era",
        "youtubeId": "9XmtaPlWDp8"
      },
      "science": {
        "channel": "Learn Bright",
        "duration": "~5:00",
        "title": "Simple Machines for Kids",
        "youtubeId": "LSfNYpCprw4"
      }
    },
    "46": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "The Red Baron For Kids",
        "youtubeId": "2YZs-YJkqGU"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Ramps: A Super, Simple Machine! - #sciencegoals",
        "youtubeId": "3COvm0TtxWg"
      }
    },
    "47": {
      "history": {
        "channel": "Reading Through History",
        "duration": "~5:00",
        "title": "History Brief: Daily Life in the 1920s",
        "youtubeId": "_FwY40VYhqs"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "Swings, Slides, and Science | Physics for Kids",
        "youtubeId": "JvSClZ3vHOI"
      }
    },
    "48": {
      "history": {
        "channel": "Cross Seven",
        "duration": "~5:00",
        "title": "The Great Depression, HISTORY VIDEOS FOR KIDS",
        "youtubeId": "E_LS7cLzon0"
      },
      "science": {
        "channel": "Peekaboo Kidz",
        "duration": "~5:00",
        "title": "Energy | The Dr. Binocs Show",
        "youtubeId": "Q0LBegPWzrg"
      }
    },
    "49": {
      "history": {
        "channel": "Empire Debrief",
        "duration": "~5:00",
        "title": "Japan Could Hear Every Word. It Never Understood One.",
        "youtubeId": "X_EN6OX36mg"
      },
      "science": {
        "channel": "Tutway",
        "duration": "~10:00",
        "title": "Renewable and Non-Renewable Resources For Kids of Energy",
        "youtubeId": "dPXoZclyFrw"
      }
    },
    "5": {
      "history": {
        "channel": "Daily Bellringer",
        "duration": "~5:00",
        "title": "Eastern Woodland Tribes Explained | Native American History",
        "youtubeId": "kxieioAOq-4"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "How Does A Seed Become A Plant? | Backyard Science",
        "youtubeId": "tkFPyue5X3Q"
      }
    },
    "50": {
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "Engineering Compilation",
        "youtubeId": "qDcMq1SjR_I"
      },
      "history": {
        "title": "How Did the Cold War Start? Yalta to the Berlin Airlift (1945 to 1949)",
        "youtubeId": "IdqvkfZmvy8",
        "channel": "Khulani Labs (Explained by Michael)",
        "duration": "~12:00"
      }
    },
    "51": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "History of Rosa Parks for Kids",
        "youtubeId": "1C7Cach5VRo"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What Makes Bridges So Strong?",
        "youtubeId": "ovonrpefcno"
      }
    },
    "52": {
      "history": {
        "channel": "KidsTV123",
        "duration": "~4:00",
        "title": "The 50 States Song",
        "youtubeId": "cMp3-fDL6Do"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "~5:00",
        "title": "What Happened to Our Plants?",
        "youtubeId": "8kTt4xHHLzk"
      }
    },
    "6": {
      "history": {
        "channel": "Bedtime History",
        "duration": "~8:00",
        "title": "Sitting Bull For Kids",
        "youtubeId": "HimMC1fZ25A"
      },
      "science": {
        "channel": "Free School",
        "duration": "~8:00",
        "title": "Understanding Ecosystems for Kids",
        "youtubeId": "85ufwU2GdjE"
      }
    },
    "7": {
      "history": {
        "channel": "Harmony Square",
        "duration": "~5:00",
        "title": "Native Peoples of the Southwest",
        "youtubeId": "xP3ZJrh5tTQ"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "Fabulous Food Chains #7.1",
        "youtubeId": "MuKs9o1s8h8"
      }
    },
    "8": {
      "history": {
        "channel": "edpuzzle",
        "duration": "~5:00",
        "title": "European Exploration of the Americas: Motivation",
        "youtubeId": "OTnaM7R9RKU"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "Food Webs #21.2",
        "youtubeId": "Vtb3I8Vzlfg"
      }
    },
    "9": {
      "history": {
        "channel": "Free School",
        "duration": "~6:20",
        "title": "Biography of Christopher Columbus for Children",
        "youtubeId": "RmRFcXrWKCY"
      },
      "science": {
        "channel": "Crash Course Kids",
        "duration": "~5:00",
        "title": "The Dirt on Decomposers #7.2",
        "youtubeId": "uB61rfeeAsM"
      }
    }
  },
  "68": {
    "1": {
      "history": {
        "channel": "PBS Eons",
        "duration": "8:33",
        "title": "When We First Made Tools",
        "youtubeId": "FFI50iSPWeI"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "9:27",
        "title": "Introduction to Cells: The Grand Cell Tour",
        "youtubeId": "8IlzKri08kk"
      }
    },
    "2": {
      "history": {
        "channel": "CrashCourse",
        "duration": "11:44",
        "title": "The Agricultural Revolution: Crash Course World History #1",
        "youtubeId": "Yocja_N5s1I"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~5:00",
        "title": "Comparing animal and plant cells | Cells and organisms | Middle school biology",
        "youtubeId": "HjC-eMiMDfo"
      }
    },
    "3": {
      "history": {
        "channel": "CrashCourse",
        "duration": "12:02",
        "title": "Mesopotamia: Crash Course World History #3",
        "youtubeId": "sohXPx_XZ6Y"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "4:14",
        "title": "Cell parts and their functions | Cells and organisms | Middle school biology",
        "youtubeId": "TVxtlfUwIY0"
      }
    },
    "4": {
      "history": {
        "channel": "CrashCourse",
        "duration": "11:54",
        "title": "Ancient Egypt: Crash Course World History #4",
        "youtubeId": "Z3Wvw6BivVI"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "7:58",
        "title": "Photosynthesis and the Teeny Tiny Pigment Pancakes",
        "youtubeId": "uixA8ZXx0KU"
      }
    },
    "10": {
      "history": {
        "channel": "Unknown",
        "duration": "~10:00",
        "title": "The Roman Empire in 10 minutes",
        "youtubeId": "b4icHBR72q8"
      },
      "science": {
        "channel": "Stated Clearly",
        "duration": "7:23",
        "title": "What is Natural Selection?",
        "youtubeId": "0SCjhI86grU"
      }
    },
    "11": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:44",
        "title": "Fall of The Roman Empire...in the 15th Century: Crash Course World History #12",
        "youtubeId": "3PszVWZNWVA"
      },
      "science": {
        "channel": "Stated Clearly",
        "duration": "~11:39",
        "title": "What is the Evidence for Evolution?",
        "youtubeId": "lIEoO5KdPvg"
      }
    },
    "12": {
      "history": {
        "channel": "Unknown",
        "duration": "~12:00",
        "title": "The Entire History of the Byzantine Empire in 12 Minutes",
        "youtubeId": "zdIj_o_ouFc"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~10:30",
        "title": "Classification",
        "youtubeId": "F38BmgPcZ_I"
      }
    },
    "13": {
      "history": {
        "channel": "KaramNoor",
        "duration": "~10:00",
        "title": "The Library That Turned a River Black | House of Wisdom",
        "youtubeId": "ZtLJRzg9dkQ"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~8:50",
        "title": "Bacteria (Updated)",
        "youtubeId": "ORB866QSGv8"
      }
    },
    "14": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:25",
        "title": "The Dark Ages: Were They Actually 'Dark'?: Crash Course World History #14",
        "youtubeId": "QV7Canyzhzg"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~6:30",
        "title": "Viruses",
        "youtubeId": "XNOHI0t8eYo"
      }
    },
    "15": {
      "history": {
        "channel": "BBC Teach",
        "duration": "~5:00",
        "title": "Castles and Knights: The Features of a Castle",
        "youtubeId": "dGXkMVsZac0"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~8:30",
        "title": "Human Body Systems Overview (Updated 2024)",
        "youtubeId": "0JDCViWGn-0"
      }
    },
    "16": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "The Crusades - Pilgrimage or Holy War?: Crash Course World History #15",
        "youtubeId": "X0zudTQelzI"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~11:32",
        "title": "Nervous System",
        "youtubeId": "RNLceVI8jcc"
      }
    },
    "17": {
      "history": {
        "channel": "Crash Course",
        "duration": "11:31",
        "title": "Wait For It...The Mongols!: Crash Course World History #17",
        "youtubeId": "szxPar0BcMo"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:15",
        "title": "Population Ecology: The Texas Mosquito Mystery - Crash Course Ecology #2",
        "youtubeId": "RBOsqmBQBQk"
      }
    },
    "18": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:00",
        "title": "The Renaissance: Was it a Thing? - Crash Course World History #22",
        "youtubeId": "Vufba_ZcoR0"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:42",
        "title": "5 Human Impacts on the Environment: Crash Course Ecology #10",
        "youtubeId": "5eTCZ9L834s"
      }
    },
    "19": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:33",
        "title": "Reformation & Consequences: Crash Course European History #7",
        "youtubeId": "PbBDP1Elbbg"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~7:00",
        "title": "Plate tectonics and the ocean floor",
        "youtubeId": "A98wPKiPMJw"
      }
    },
    "20": {
      "history": {
        "channel": "Crash Course",
        "duration": "~10:30",
        "title": "Columbus, Vasco da Gama, and Zheng He - 15th Century Mariners: Crash Course World History #21",
        "youtubeId": "NjEGncridoQ"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~10:00",
        "title": "Earthquakes: Seafloor spreading and plate tectonics",
        "youtubeId": "nuoZc5T25AE"
      }
    },
    "21": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "The Columbian Exchange: Crash Course World History #23",
        "youtubeId": "HQPA5oNpfM4"
      },
      "science": {
        "channel": "FreeSchool",
        "duration": "~5:30",
        "title": "Volcanoes for Kids",
        "youtubeId": "qWgfiBn53WQ"
      }
    },
    "22": {
      "history": {
        "channel": "TED-Ed",
        "duration": "~5:27",
        "title": "The Atlantic slave trade: What too few textbooks told you - Anthony Hazard",
        "youtubeId": "3NXC4Q_4JVg"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~4:00",
        "title": "How Mountains Are Formed",
        "youtubeId": "MQoUI5UuA14"
      }
    },
    "23": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "The Black Legend, Native Americans, and Spaniards: Crash Course US History #1",
        "youtubeId": "6E9WU9TGrec"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "What is Weathering?: Crash Course Geography #22",
        "youtubeId": "pmF41T52nJs"
      }
    },
    "24": {
      "history": {
        "channel": "Crash Course",
        "duration": "~16:00",
        "title": "The Enlightenment: Crash Course European History #18",
        "youtubeId": "NnoFj2cMRLY"
      },
      "science": {
        "channel": "PBS Eons",
        "duration": "~9:40",
        "title": "A Brief History of Geologic Time",
        "youtubeId": "rWp5ZpJAIAE"
      }
    },
    "25": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:11",
        "title": "Tea, Taxes and The American Revolution: Crash Course World History #28",
        "youtubeId": "HlUiSBXQHCw"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~10:00",
        "title": "How Fossils are calculated | Age of Fossils",
        "youtubeId": "Jvvfo7qqGkk"
      }
    },
    "26": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:00",
        "title": "The French Revolution: Crash Course World History #29",
        "youtubeId": "lTTvKwCylFY"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "5:56",
        "title": "Global winds and currents | Middle school Earth and space science",
        "youtubeId": "jjEfDULyEOg"
      }
    },
    "27": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:07",
        "title": "Haitian Revolutions: Crash Course World History #30",
        "youtubeId": "5A_o-nU5s2U"
      },
      "science": {
        "channel": "MooMooMath",
        "duration": "~3:00",
        "title": "Different layers of atmosphere",
        "youtubeId": "Gu-NjqL-5W8"
      }
    },
    "28": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:55",
        "title": "Latin American Revolutions: Crash Course World History #31",
        "youtubeId": "ZBw35Ze3bg8"
      },
      "science": {
        "channel": "Bozeman Science",
        "duration": "~9:00",
        "title": "ESS2D Weather and Climate",
        "youtubeId": "gLT1J8je5lo"
      }
    },
    "29": {
      "history": {
        "channel": "Crash Course",
        "duration": "~10:40",
        "title": "Coal, Steam, and The Industrial Revolution: Crash Course World History #32",
        "youtubeId": "zhL5DCizj5c"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "7:55",
        "title": "Carbon and Nitrogen Cycles",
        "youtubeId": "NHqEthRCqQ4"
      }
    },
    "30": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "Imperialism: Crash Course World History #35",
        "youtubeId": "alJaltUmrGo"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~8:00",
        "title": "Natural resources | Earth and society | Middle school Earth and space science",
        "youtubeId": "sIM0PGv8h08"
      }
    },
    "31": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:00",
        "title": "Samurai, Daimyo, Matthew Perry, and Nationalism: Crash Course World History #34",
        "youtubeId": "Nosq94oCl_M"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "10:11",
        "title": "The Nucleus: Crash Course Chemistry #1",
        "youtubeId": "FSyAehMdpyI"
      }
    },
    "32": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:10",
        "title": "Archdukes, Cynicism, and World War I: Crash Course World History #36",
        "youtubeId": "_XPZQ0LAlR4"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~9:00",
        "title": "The Periodic Table: Crash Course Chemistry #4",
        "youtubeId": "0RRVV4Diomg"
      }
    },
    "33": {
      "history": {
        "channel": "Valour Canada",
        "duration": "4:46",
        "title": "24 Hours in a Trench",
        "youtubeId": "NrUONWEKc7E"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~7:00",
        "title": "Compounds and chemical formulas | Middle school chemistry",
        "youtubeId": "36nlbUdRvUM"
      }
    },
    "34": {
      "history": {
        "channel": "Epic History TV",
        "duration": "~13:00",
        "title": "The Russian Revolution 1917",
        "youtubeId": "cV9G1QUIm7w"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~7:00",
        "title": "Molecules, crystals, and diatomic elements | Middle school chemistry",
        "youtubeId": "thXilnp5UNQ"
      }
    },
    "35": {
      "history": {
        "channel": "TED-Ed",
        "duration": "~5:20",
        "title": "How did Hitler rise to power? - Alex Gendler and Anthony Hazard",
        "youtubeId": "jFICRFKtAc4"
      },
      "science": {
        "channel": "SciShow",
        "duration": "~10:00",
        "title": "Chemical Reactions EXPLAINED: What's Actually Happening?",
        "youtubeId": "u7aWzsdrrpY"
      }
    },
    "36": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:55",
        "title": "World War II: Crash Course World History #38",
        "youtubeId": "Q78COTwT7nE"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "11:23",
        "title": "pH and pOH: Crash Course Chemistry #30",
        "youtubeId": "LS67vS10O5Y"
      }
    },
    "37": {
      "history": {
        "channel": "Simple History",
        "duration": "~3:30",
        "title": "Pearl Harbor (1941)",
        "youtubeId": "QG6jooK3Jxs"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:00",
        "title": "The Creation of Chemistry - The Fundamental Laws: Crash Course Chemistry #3",
        "youtubeId": "QiiyvzZBKT8"
      }
    },
    "38": {
      "history": {
        "channel": "Unknown",
        "duration": "~10:00",
        "title": "The Holocaust",
        "youtubeId": "H62-fDNTBsc"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:00",
        "title": "Motion in a Straight Line: Crash Course Physics #1",
        "youtubeId": "ZM8ECpBuQYE"
      }
    },
    "39": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:50",
        "title": "USA vs USSR Fight! The Cold War: Crash Course World History #39",
        "youtubeId": "y9HjvHZfCUI"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~9:00",
        "title": "Acceleration",
        "youtubeId": "FOkQszg1-j8"
      }
    },
    "40": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:15",
        "title": "Decolonization and Nationalism Triumphant: Crash Course World History #40",
        "youtubeId": "T_sGTspaF4Y"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "11:04",
        "title": "Newton's Laws: Crash Course Physics #5",
        "youtubeId": "kKKM8Y-u7ds"
      }
    },
    "41": {
      "history": {
        "channel": "TED-Ed",
        "duration": "~5:00",
        "title": "Why was India split into two countries? - Haimanti Roy",
        "youtubeId": "DrcCTgwbsjc"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:00",
        "title": "Friction: Crash Course Physics #6",
        "youtubeId": "fo_pmp5rtzo"
      }
    },
    "42": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:30",
        "title": "Civil Rights and the 1950s: Crash Course US History #39",
        "youtubeId": "s64zrnnn4po"
      },
      "science": {
        "channel": "Crash Course",
        "duration": "~10:00",
        "title": "Work, Energy, and Power: Crash Course Physics #9",
        "youtubeId": "w4QFJb9a8vo"
      }
    },
    "43": {
      "history": {
        "channel": "Crash Course",
        "duration": "~13:00",
        "title": "The Cold War in Asia: Crash Course US History #38",
        "youtubeId": "Y2IcmLkuhG0"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~7:00",
        "title": "Conservation of energy | Middle school physics",
        "youtubeId": "Tf4A93763Bw"
      }
    },
    "44": {
      "history": {
        "channel": "The Big Picture",
        "duration": "~10:00",
        "title": "Why the USSR Fell in 1991: The Full Story in 10 Minutes",
        "youtubeId": "JYMds_KS5lc"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~8:00",
        "title": "Sound Properties (Amplitude, Period, Frequency, Wavelength) | Physics",
        "youtubeId": "-_xZZt99MzY"
      }
    },
    "45": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:30",
        "title": "Conflict in Israel and Palestine: Crash Course World History #223",
        "youtubeId": "1wo2TLlMhiw"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~8:00",
        "title": "The electromagnetic spectrum | Middle school physics",
        "youtubeId": "iVbuCROYAz4"
      }
    },
    "46": {
      "history": {
        "channel": "Crash Course",
        "duration": "~8:00",
        "title": "Introduction: Crash Course U.S. Government and Politics #1",
        "youtubeId": "lrk4oY7UxpQ"
      },
      "science": {
        "channel": "Khan Academy",
        "duration": "~7:00",
        "title": "Sound waves | Middle school physics",
        "youtubeId": "9u1PjsBfrmg"
      }
    },
    "47": {
      "history": {
        "channel": "Crash Course",
        "duration": "~13:00",
        "title": "The Constitution, the Articles, and Federalism: Crash Course US History #8",
        "youtubeId": "bO7FQsCcbD8"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "4:42",
        "title": "The Power of Circuits! | Technology for Kids",
        "youtubeId": "HOFp8bHTN30"
      }
    },
    "48": {
      "history": {
        "channel": "Crash Course",
        "duration": "~9:00",
        "title": "Separation of Powers and Checks and Balances: Crash Course Government and Politics #3",
        "youtubeId": "0bf3CwYCxXw"
      },
      "science": {
        "channel": "Bozeman Science",
        "duration": "~10:00",
        "title": "Series and Parallel Circuits",
        "youtubeId": "x2EuYqj_0Uk"
      }
    },
    "49": {
      "history": {
        "channel": "Crash Course",
        "duration": "~8:30",
        "title": "Civil Rights & Liberties: Crash Course Government and Politics #23",
        "youtubeId": "kbwsF-A2sTg"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~10:00",
        "title": "Electromagnetism",
        "youtubeId": "HQdLFEiVeCA"
      }
    },
    "5": {
      "history": {
        "channel": "Unknown",
        "duration": "~8:30",
        "title": "A Normal Day in Ancient Egypt Was Weirder Than You Think",
        "youtubeId": "nJUzBz7IgCI"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~8:30",
        "title": "Cellular Respiration (UPDATED)",
        "youtubeId": "eJ9Zjc-jdys"
      }
    },
    "50": {
      "history": {
        "channel": "Crash Course",
        "duration": "~7:00",
        "title": "How a Bill Becomes a Law: Crash Course Government and Politics #9",
        "youtubeId": "66f4-NKEYz4"
      },
      "science": {
        "channel": "SciShow Kids",
        "duration": "5:06",
        "title": "Jessi Has a Problem!",
        "youtubeId": "RM04n0-QtNo"
      }
    },
    "51": {
      "history": {
        "channel": "TED-Ed",
        "duration": "5:21",
        "title": "Does Your Vote Count? The Electoral College Explained",
        "youtubeId": "W9H3gvnN468"
      },
      "science": {
        "channel": "Unknown",
        "duration": "~9:00",
        "title": "Egg Drop: Five Designs and the Science (title unconfirmed)",
        "youtubeId": "nsnyl8llfH4"
      }
    },
    "52": {
      "history": {
        "channel": "Crash Course",
        "duration": "~12:00",
        "title": "Globalization I - The Upside: Crash Course World History #41",
        "youtubeId": "5SnR-e0S6Ic"
      },
      "science": {
        "channel": "TED-Ed",
        "duration": "~7:30",
        "title": "How simple ideas lead to scientific discoveries - Adam Savage",
        "youtubeId": "F8UFGu2M2gM"
      }
    },
    "6": {
      "history": {
        "channel": "Crash Course",
        "duration": "10:30",
        "title": "Mansa Musa and Islam in Africa: Crash Course World History #16",
        "youtubeId": "jvnU0v6hcUo"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~9:00",
        "title": "Mitosis: The Amazing Cell Process that Uses Division to Multiply!",
        "youtubeId": "f-ldPgEfAHI"
      }
    },
    "7": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:10",
        "title": "The Persians & Greeks: Crash Course World History #5",
        "youtubeId": "Q-mkVSasZIM"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~9:40",
        "title": "Monohybrids and the Punnett Square Guinea Pigs",
        "youtubeId": "i-0rSv6oxSY"
      }
    },
    "8": {
      "history": {
        "channel": "TED-Ed",
        "duration": "~4:30",
        "title": "What did democracy really mean in Athens? - Melissa Schwartzberg",
        "youtubeId": "0fivQUlC7-8"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~7:00",
        "title": "Alleles and Genes",
        "youtubeId": "pv3Kj0UjiLE"
      }
    },
    "9": {
      "history": {
        "channel": "Crash Course",
        "duration": "~11:30",
        "title": "The Roman Empire. Or Republic. Or...Which Was It?: Crash Course World History #10",
        "youtubeId": "oPf27gAup9U"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "~8:40",
        "title": "DNA, Chromosomes, Genes, and Traits: An Intro to Heredity",
        "youtubeId": "8m6hHRlKwxY"
      }
    }
  },
  "912": {
    "1": {
      "history": {
        "channel": "CrashCourse",
        "duration": "11:19",
        "title": "The Black Legend, Native Americans, and Spaniards: Crash Course US History #1",
        "youtubeId": "6E9WU9TGrec"
      },
      "science": {
        "channel": "CrashCourse",
        "duration": "14:09",
        "title": "Biological Molecules - You Are What You Eat: Crash Course Biology #3",
        "youtubeId": "H8WJ2KENlK0"
      }
    },
    "2": {
      "history": {
        "channel": "CrashCourse",
        "duration": "12:14",
        "title": "The Columbian Exchange: Crash Course World History #23",
        "youtubeId": "HQPA5oNpfM4"
      },
      "science": {
        "channel": "Amoeba Sisters",
        "duration": "9:27",
        "title": "Introduction to Cells: The Grand Cell Tour",
        "youtubeId": "8IlzKri08kk"
      }
    },
    "3": {
      "history": {
        "channel": "CrashCourse",
        "duration": "10:46",
        "title": "The Spanish Empire, Silver, & Runaway Inflation: Crash Course World History #25",
        "youtubeId": "rjhIzemLdos"
      },
      "science": {
        "channel": "CrashCourse",
        "duration": "11:05",
        "title": "In Da Club - Membranes & Transport: Crash Course Biology #5",
        "youtubeId": "dPKvHrD1eS4"
      }
    },
    "4": {
      "history": {
        "channel": "CrashCourse",
        "duration": "11:26",
        "title": "The Natives and the English - Crash Course US History #3",
        "youtubeId": "TTYOQ05oDOI"
      },
      "science": {
        "channel": "CrashCourse",
        "duration": "13:15",
        "title": "Photosynthesis: Crash Course Biology #8",
        "youtubeId": "sQK3Yr4Sc_k"
      }
    },
    "5": {
      "history": {
        "title": "When is Thanksgiving? Colonizing America",
        "youtubeId": "o69TvQqyGdg",
        "channel": "CrashCourse",
        "duration": "12:25"
      },
      "science": {
        "title": "ATP & Respiration",
        "youtubeId": "00jbG_cfGuQ",
        "channel": "CrashCourse",
        "duration": "~11:00"
      }
    },
    "6": {
      "history": {
        "title": "The Quakers, the Dutch, and the Ladies",
        "youtubeId": "p47tZLJbdag",
        "channel": "CrashCourse",
        "duration": "10:39"
      },
      "science": {
        "title": "Mitosis and the Cell Cycle",
        "youtubeId": "skPOXcVvS5c",
        "channel": "CrashCourse",
        "duration": "~12:00"
      }
    },
    "7": {
      "history": {
        "title": "How Did Slavery Develop in the American Colonies?",
        "youtubeId": "G4syEkyOzmY",
        "channel": "CrashCourse",
        "duration": "~11:00"
      },
      "science": {
        "title": "Meiosis (Updated)",
        "youtubeId": "VzDMG7ke69g",
        "channel": "Amoeba Sisters",
        "duration": "9:51"
      }
    },
    "8": {
      "history": {
        "title": "The Seven Years War and the Great Awakening",
        "youtubeId": "5vKGU3aEGss",
        "channel": "CrashCourse",
        "duration": "10:39"
      },
      "science": {
        "title": "Monohybrids and the Punnett Square Guinea Pigs",
        "youtubeId": "i-0rSv6oxSY",
        "channel": "Amoeba Sisters",
        "duration": "~11:00"
      }
    },
    "9": {
      "history": {
        "title": "The Seven Years War",
        "youtubeId": "j0qbzNHmfW0",
        "channel": "CrashCourse",
        "duration": "~12:00"
      },
      "science": {
        "title": "Incomplete Dominance, Codominance, Polygenic Traits, and Epistasis!",
        "youtubeId": "YJHGfbW55l0",
        "channel": "Amoeba Sisters",
        "duration": "7:11"
      }
    },
    "10": {
      "history": {
        "title": "Taxes & Smuggling - Prelude to Revolution",
        "youtubeId": "Eytc9ZaNWyc",
        "channel": "CrashCourse",
        "duration": "~12:00"
      },
      "science": {
        "title": "DNA Structure and Replication",
        "youtubeId": "8kK2zwjRV0M",
        "channel": "CrashCourse",
        "duration": "11:47"
      }
    },
    "11": {
      "history": {
        "title": "What you might not know about the Declaration of Independence - Kenneth C. Davis",
        "youtubeId": "LKJMWHCUoiw",
        "channel": "TED-Ed",
        "duration": "3:38"
      },
      "science": {
        "title": "Protein Synthesis (Updated)",
        "youtubeId": "oefAI2x2CQM",
        "channel": "Amoeba Sisters",
        "duration": "~8:00"
      }
    },
    "12": {
      "history": {
        "title": "Who Won the American Revolution?",
        "youtubeId": "3EiSymRrKI4",
        "channel": "CrashCourse",
        "duration": "12:40"
      },
      "science": {
        "title": "Genetic Engineering",
        "youtubeId": "CDw4WPng2iE",
        "channel": "Amoeba Sisters",
        "duration": "8:25"
      }
    },
    "13": {
      "history": {
        "title": "The American Revolution",
        "youtubeId": "y75yPx9WKHY",
        "channel": "CrashCourse",
        "duration": "11:30"
      },
      "science": {
        "title": "Natural Selection - Crash Course Biology #14",
        "youtubeId": "aTftyFboC_M",
        "channel": "CrashCourse",
        "duration": "12:44"
      }
    },
    "14": {
      "history": {
        "title": "The Constitution, the Articles, and Federalism",
        "youtubeId": "bO7FQsCcbD8",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Intro to Evolution: What We Can Learn From a Giraffe's Neck",
        "youtubeId": "2TSIUt-lHyo",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "15": {
      "history": {
        "title": "Constitutional Compromises",
        "youtubeId": "kCCmuftyj8A",
        "channel": "CrashCourse",
        "duration": "8:56"
      },
      "science": {
        "title": "Speciation: Of Ligers & Men",
        "youtubeId": "2oKlKmrbLoU",
        "channel": "CrashCourse",
        "duration": "10:25"
      }
    },
    "16": {
      "history": {
        "title": "The Bill of Rights",
        "youtubeId": "kd80KFBWTvs",
        "channel": "National Constitution Center",
        "duration": "~10:00"
      },
      "science": {
        "title": "Biological Diversity, Butts, and the Tree of Life: Crash Course Biology #18",
        "youtubeId": "Aa1dGBKgGVc",
        "channel": "CrashCourse",
        "duration": "~12:30"
      }
    },
    "17": {
      "history": {
        "title": "Federalists vs Anti-Federalists in Five Minutes",
        "youtubeId": "DnDh9-X12Gc",
        "channel": "Unknown",
        "duration": "~5:00"
      },
      "science": {
        "title": "Viruses (Updated)",
        "youtubeId": "XNOHI0t8eYo",
        "channel": "Amoeba Sisters",
        "duration": "6:49"
      }
    },
    "18": {
      "history": {
        "title": "Where US Politics Came From",
        "youtubeId": "r161cLYzuDI",
        "channel": "CrashCourse",
        "duration": "13:56"
      },
      "science": {
        "title": "Prokaryotic vs. Eukaryotic Cells (Updated)",
        "youtubeId": "Pxujitlv8wc",
        "channel": "Amoeba Sisters",
        "duration": "~9:00"
      }
    },
    "19": {
      "history": {
        "title": "Thomas Jefferson & His Democracy",
        "youtubeId": "_3Ox6vGteek",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Protists and Fungi",
        "youtubeId": "zK7Ckmxxqds",
        "channel": "Amoeba Sisters",
        "duration": "~10:00"
      }
    },
    "20": {
      "history": {
        "title": "The War of 1812",
        "youtubeId": "qMXqg2PKJZU",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "The Plants & The Bees: Plant Reproduction - CrashCourse Biology #38",
        "youtubeId": "ExaQ8shhkw8",
        "channel": "CrashCourse",
        "duration": "~10:00"
      }
    },
    "21": {
      "history": {
        "title": "The Market Revolution: Crash Course US History #12",
        "youtubeId": "RNftCCwAol0",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Simple Animals: Sponges, Jellies, & Octopuses - Crash Course Biology #22",
        "youtubeId": "tIfsHPpkSPs",
        "channel": "CrashCourse",
        "duration": "~10:00"
      }
    },
    "22": {
      "history": {
        "title": "Age of Jackson: Crash Course US History #14",
        "youtubeId": "beN4qE-e5O8",
        "channel": "CrashCourse",
        "duration": "15:04"
      },
      "science": {
        "title": "Nervous System",
        "youtubeId": "RNLceVI8jcc",
        "channel": "Amoeba Sisters",
        "duration": "11:32"
      }
    },
    "23": {
      "history": {
        "title": "JACKSON and Federal Power [APUSH Review Unit 4 Topic 8] Period 4: 1800-1848",
        "youtubeId": "J1CRp6iVJg4",
        "channel": "Heimler's History",
        "duration": "7:06"
      },
      "science": {
        "title": "Endocrine System",
        "youtubeId": "emvHaBiRY8Q",
        "channel": "Amoeba Sisters",
        "duration": "~10:00"
      }
    },
    "24": {
      "history": {
        "title": "War & Expansion: Crash Course US History #17",
        "youtubeId": "tkdF8pOFUfI",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Immune System",
        "youtubeId": "fSEFXl2XQpc",
        "channel": "Amoeba Sisters",
        "duration": "8:56"
      }
    },
    "25": {
      "history": {
        "title": "The Mexican-American War | AP US History",
        "youtubeId": "QKRYLUlGlWc",
        "channel": "Khan Academy",
        "duration": "~12:00"
      },
      "science": {
        "title": "Ecological Relationships",
        "youtubeId": "rNjPI84sApQ",
        "channel": "Amoeba Sisters",
        "duration": "7:00"
      }
    },
    "26": {
      "history": {
        "title": "19th Century Reforms: Crash Course US History #15",
        "youtubeId": "t62fUZJvjOs",
        "channel": "CrashCourse",
        "duration": "~11:00"
      },
      "science": {
        "title": "Ecosystems",
        "youtubeId": "Ot_KmOTYfRA",
        "channel": "Bozeman Science",
        "duration": "~10:00"
      }
    },
    "27": {
      "history": {
        "title": "Increasing political battles over slavery in mid 1800s",
        "youtubeId": "09YsW2U-7kw",
        "channel": "Khan Academy",
        "duration": "~14:00"
      },
      "science": {
        "title": "The Nucleus: Crash Course Chemistry #1",
        "youtubeId": "FSyAehMdpyI",
        "channel": "CrashCourse",
        "duration": "~10:00"
      }
    },
    "28": {
      "history": {
        "title": "1856 America Bleeding: Bleeding Kansas and Bleeding Sumner",
        "youtubeId": "FI3NO40NGWI",
        "channel": "Unknown",
        "duration": "~10:00"
      },
      "science": {
        "title": "The Periodic Table: Crash Course Chemistry #4",
        "youtubeId": "0RRVV4Diomg",
        "channel": "CrashCourse",
        "duration": "11:21"
      }
    },
    "29": {
      "history": {
        "title": "The Election of 1860 & the Road to Disunion: Crash Course US History #18",
        "youtubeId": "roNmeOOJCDY",
        "channel": "CrashCourse",
        "duration": "~12:00"
      },
      "science": {
        "title": "Atomic Hook-Ups - Types of Chemical Bonds: Crash Course Chemistry #22",
        "youtubeId": "QXT4OVM4vXI",
        "channel": "CrashCourse",
        "duration": "~11:00"
      }
    },
    "30": {
      "history": {
        "title": "The Civil War, Part I: Crash Course US History #20",
        "youtubeId": "rY9zHNOjGrs",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "How to Speak Chemistrian: Crash Course Chemistry #11",
        "youtubeId": "mlRhLicNo8Q",
        "channel": "CrashCourse",
        "duration": "~10:00"
      }
    },
    "31": {
      "history": {
        "title": "Black Americans in the Civil War: Crash Course Black American History #18",
        "youtubeId": "_NgdnsjPFNE",
        "channel": "CrashCourse",
        "duration": "~12:00"
      },
      "science": {
        "title": "Stoichiometry - Chemistry for Massive Creatures: Crash Course Chemistry #6",
        "youtubeId": "UL1jmJaUkaQ",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "32": {
      "history": {
        "title": "Battles of the Civil War: Crash Course US History #19",
        "youtubeId": "25HHVDOaGeE",
        "channel": "CrashCourse",
        "duration": "7:30"
      },
      "science": {
        "title": "The Ideal Gas Law: Crash Course Chemistry #12",
        "youtubeId": "BxUS1K7xu30",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "33": {
      "history": {
        "title": "Reconstruction and 1876: Crash Course US History #22",
        "youtubeId": "nowsS7pMApI",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Solutions: Crash Course Chemistry #27",
        "youtubeId": "9h2f1Bjr0p4",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "34": {
      "history": {
        "title": "Reconstruction: Crash Course Black American History #19",
        "youtubeId": "NGPAnLDzQYY",
        "channel": "CrashCourse",
        "duration": "~12:00"
      },
      "science": {
        "title": "pH and pOH: Crash Course Chemistry #30",
        "youtubeId": "LS67vS10O5Y",
        "channel": "CrashCourse",
        "duration": "~11:00"
      }
    },
    "35": {
      "history": {
        "title": "The Industrial Economy: Crash Course US History #23",
        "youtubeId": "r6tRp-zRUJs",
        "channel": "CrashCourse",
        "duration": "~12:30"
      },
      "science": {
        "title": "Enthalpy: Crash Course Chemistry #18",
        "youtubeId": "SV7U4yAXL5I",
        "channel": "CrashCourse",
        "duration": "~12:00"
      }
    },
    "36": {
      "history": {
        "title": "Growth, Cities, and Immigration: Crash Course US History #25",
        "youtubeId": "RRhjqqe750A",
        "channel": "CrashCourse",
        "duration": "~14:00"
      },
      "science": {
        "title": "Kinetics: Chemistry's Demolition Derby - Crash Course Chemistry #32",
        "youtubeId": "7qOFtL3VEBc",
        "channel": "CrashCourse",
        "duration": "~11:00"
      }
    },
    "37": {
      "history": {
        "title": "Gilded Age Politics: Crash Course US History #26",
        "youtubeId": "Spgdy3HkcSs",
        "channel": "CrashCourse",
        "duration": "~11:00"
      },
      "science": {
        "title": "Electrochemistry: Crash Course Chemistry #36",
        "youtubeId": "IV4IUsholjg",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "38": {
      "history": {
        "title": "American Imperialism: Crash Course US History #28",
        "youtubeId": "QfsfoFqsFk4",
        "channel": "CrashCourse",
        "duration": "14:03"
      },
      "science": {
        "title": "Hydrocarbon Power!: Crash Course Chemistry #40",
        "youtubeId": "UloIw7dhnlQ",
        "channel": "CrashCourse",
        "duration": "11:32"
      }
    },
    "39": {
      "history": {
        "title": "The Progressive Era: Crash Course US History #27",
        "youtubeId": "i0Q4zPR4G7M",
        "channel": "CrashCourse",
        "duration": "15:01"
      },
      "science": {
        "title": "Motion in a Straight Line: Crash Course Physics #1",
        "youtubeId": "ZM8ECpBuQYE",
        "channel": "CrashCourse",
        "duration": "10:39"
      }
    },
    "40": {
      "history": {
        "title": "America in World War I: Crash Course US History #30",
        "youtubeId": "y59wErqg4Xg",
        "channel": "CrashCourse",
        "duration": "13:40"
      },
      "science": {
        "title": "Newton's Laws: Crash Course Physics #5",
        "youtubeId": "kKKM8Y-u7ds",
        "channel": "CrashCourse",
        "duration": "11:04"
      }
    },
    "41": {
      "history": {
        "title": "The Roaring 20's: Crash Course US History #32",
        "youtubeId": "VfOR1XCMf7A",
        "channel": "CrashCourse",
        "duration": "13:12"
      },
      "science": {
        "title": "Collisions: Crash Course Physics #10",
        "youtubeId": "Y-QOfc2XqOk",
        "channel": "CrashCourse",
        "duration": "9:20"
      }
    },
    "42": {
      "history": {
        "title": "The Great Depression: Crash Course US History #33",
        "youtubeId": "GCQfMWAikyU",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Work, Energy, and Power: Crash Course Physics #9",
        "youtubeId": "w4QFJb9a8vo",
        "channel": "CrashCourse",
        "duration": "9:54"
      }
    },
    "43": {
      "history": {
        "title": "The New Deal: Crash Course US History #34",
        "youtubeId": "6bMq9Ek6jnA",
        "channel": "CrashCourse",
        "duration": "14:56"
      },
      "science": {
        "title": "Uniform Circular Motion: Crash Course Physics #7",
        "youtubeId": "bpFK2VCRHUs",
        "channel": "CrashCourse",
        "duration": "9:53"
      }
    },
    "44": {
      "history": {
        "title": "World War II Part 1: Crash Course US History #35",
        "youtubeId": "Objoad6rG6U",
        "channel": "CrashCourse",
        "duration": "13:27"
      },
      "science": {
        "title": "Traveling Waves: Crash Course Physics #17",
        "youtubeId": "TfYCnOvNnFU",
        "channel": "CrashCourse",
        "duration": "7:44"
      }
    },
    "45": {
      "history": {
        "title": "World War II Part 2 - The Homefront: Crash Course US History #36",
        "youtubeId": "HofnGQwPgqs",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Geometric Optics: Crash Course Physics #38",
        "youtubeId": "Oh4m8Ees-3Q",
        "channel": "CrashCourse",
        "duration": "9:26"
      }
    },
    "46": {
      "history": {
        "title": "The Cold War: Crash Course US History #37",
        "youtubeId": "9C72ISMF_D0",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Circuit Analysis: Crash Course Physics #30",
        "youtubeId": "-w-VTw0tQlE",
        "channel": "CrashCourse",
        "duration": "10:45"
      }
    },
    "47": {
      "history": {
        "title": "Civil Rights and the 1950s: Crash Course US History #39",
        "youtubeId": "S64zRnnn4Po",
        "channel": "CrashCourse",
        "duration": "11:58"
      },
      "science": {
        "title": "Magnetism: Crash Course Physics #32",
        "youtubeId": "s94suB5uLWw",
        "channel": "CrashCourse",
        "duration": "8:55"
      }
    },
    "48": {
      "history": {
        "title": "The 1960s in America: Crash Course US History #40",
        "youtubeId": "lkXFb1sMa38",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "The Electron: Crash Course Chemistry #5",
        "youtubeId": "rcKilE9CdaA",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "49": {
      "history": {
        "title": "The Cold War in Asia: Crash Course US History #38",
        "youtubeId": "Y2IcmLkuhG0",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Nuclear Chemistry Part 2 - Fusion and Fission: Crash Course Chemistry #39",
        "youtubeId": "FU6y1XIADdg",
        "channel": "CrashCourse",
        "duration": "~13:00"
      }
    },
    "50": {
      "history": {
        "title": "Ford, Carter, and the Economic Malaise: Crash Course US History #42",
        "youtubeId": "pyN5LPHEQ_0",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Science, Engineering and Design! Video 2: Engineering Design Process",
        "youtubeId": "5Dp2qHz8r2U",
        "channel": "MIT",
        "duration": "~10:00"
      }
    },
    "51": {
      "history": {
        "title": "The Reagan Revolution: Crash Course US History #43",
        "youtubeId": "2h4DkpFP_aw",
        "channel": "CrashCourse",
        "duration": "14:20"
      },
      "science": {
        "title": "Nature of Science",
        "youtubeId": "3nAETHZTObk",
        "channel": "Amoeba Sisters",
        "duration": "~9:00"
      }
    },
    "52": {
      "history": {
        "title": "Obamanation: Crash Course US History #47",
        "youtubeId": "lUfh2ebjLOg",
        "channel": "CrashCourse",
        "duration": "~13:00"
      },
      "science": {
        "title": "Nature of Science",
        "youtubeId": "3nAETHZTObk",
        "channel": "Amoeba Sisters",
        "duration": "~9:00"
      }
    }
  }
};
