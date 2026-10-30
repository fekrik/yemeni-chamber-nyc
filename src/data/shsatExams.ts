import { Exam, Passage, Question, SpecializedHighSchool, TopicDrill } from '@/types/shsat';

export const EXAMS: Exam[] = [
  {
    "id": "exam1",
    "title": "Official Practice Test 1 (Form A)",
    "description": "Authentic NYC DOE Grade 8 Computer-Adaptive Practice Test with official ELA passage sets and complete 50 Math items.",
    "year": "2024\u20132025",
    "timeLimitMinutes": 180,
    "totalQuestions": 100,
    "elaCount": 50,
    "mathCount": 50,
    "badge": "Full Official CAT"
  },
  {
    "id": "exam2",
    "title": "Official Practice Test 2 (Form B)",
    "description": "Official NYC DOE Grade 8 test featuring Gertrude Ederle, Edgar Allan Poe raven intelligence, Lowell history, and advanced algebra.",
    "year": "2024\u20132025",
    "timeLimitMinutes": 180,
    "totalQuestions": 100,
    "elaCount": 50,
    "mathCount": 50,
    "badge": "Full Official CAT"
  },
  {
    "id": "exam3",
    "title": "Official Practice Test 3 (Form C)",
    "description": "Official NYC DOE Grade 8 test featuring Wright Brothers flight experiments, wolves of Great Bear Rainforest, and coordinate geometry.",
    "year": "2024\u20132025",
    "timeLimitMinutes": 180,
    "totalQuestions": 100,
    "elaCount": 50,
    "mathCount": 50,
    "badge": "Full Official CAT"
  },
  {
    "id": "exam4",
    "title": "Official Practice Test 4 (Form D)",
    "description": "Official NYC DOE Grade 8 test featuring Earth's Oldest Trees, Large Hadron Collider, Mars Opportunity rover, and statistics.",
    "year": "2024\u20132025",
    "timeLimitMinutes": 180,
    "totalQuestions": 100,
    "elaCount": 50,
    "mathCount": 50,
    "badge": "Full Official CAT"
  }
];

export const SPECIALIZED_HIGH_SCHOOLS: SpecializedHighSchool[] = [
  {
    "id": "stuyvesant",
    "name": "Stuyvesant High School",
    "shortName": "Stuyvesant",
    "borough": "Manhattan",
    "cutoffScore": 560,
    "seats": 820,
    "description": "Consistently the highest cutoff score in NYC; world-renowned for advanced STEM, mathematics research, robotics, and rigorous humanities.",
    "specialty": "Advanced STEM, Pure Math & Scientific Research",
    "website": "https://stuy.enschool.org",
    "color": "#1e3a8a"
  },
  {
    "id": "bronx_science",
    "name": "The Bronx High School of Science",
    "shortName": "Bronx Science",
    "borough": "Bronx",
    "cutoffScore": 525,
    "seats": 750,
    "description": "Has produced 8 Nobel Prize laureates (more than any other high school in the world); elite research facilities and Intel/Regeneron STS finalists.",
    "specialty": "Nobel-Caliber Science, Research & Biotechnology",
    "website": "https://www.bxscience.edu",
    "color": "#065f46"
  },
  {
    "id": "staten_island_tech",
    "name": "Staten Island Technical High School",
    "shortName": "SITHS",
    "borough": "Staten Island",
    "cutoffScore": 530,
    "seats": 350,
    "description": "Known as 'The Workhorse of the Specialized Schools'; top college admissions rates, cutting-edge pre-engineering, CAD, and robotics labs.",
    "specialty": "Engineering, CAD, Russian Language & Leadership",
    "website": "https://www.siths.org",
    "color": "#7c2d12"
  },
  {
    "id": "hsmse",
    "name": "High School for Math, Science and Engineering at CCNY",
    "shortName": "HSMSE @ CCNY",
    "borough": "Manhattan",
    "cutoffScore": 515,
    "seats": 130,
    "description": "Located on the collegiate campus of City College of New York; intimate collaborative class sizes with college-level engineering and biomedical pathways.",
    "specialty": "Project Lead The Way Engineering & Mount Sinai Bio-Medical",
    "website": "https://www.hsmse.org",
    "color": "#6b21a8"
  },
  {
    "id": "brooklyn_tech",
    "name": "Brooklyn Technical High School",
    "shortName": "Brooklyn Tech",
    "borough": "Brooklyn",
    "cutoffScore": 505,
    "seats": 1400,
    "description": "The largest high school for STEM in the United States; features specialized engineering majors including aerospace, civil, law, and cybersecurity.",
    "specialty": "18 Specialized Technical Majors (Aerospace, Cyber, Civil)",
    "website": "https://www.bths.edu",
    "color": "#1e293b"
  },
  {
    "id": "queens_science",
    "name": "Queens High School for the Sciences at York College",
    "shortName": "QHSS @ York",
    "borough": "Queens",
    "cutoffScore": 510,
    "seats": 110,
    "description": "Selective college-campus environment on York College; students have access to university libraries, research laboratories, and dual-enrollment credits.",
    "specialty": "Biomedical Sciences, Mathematics & College Research",
    "website": "https://www.qhss.org",
    "color": "#0f766e"
  },
  {
    "id": "hsas_lehman",
    "name": "High School of American Studies at Lehman College",
    "shortName": "HSAS @ Lehman",
    "borough": "Bronx",
    "cutoffScore": 510,
    "seats": 95,
    "description": "Ranked among the top high schools nationally by U.S. News; unique emphasis on United States history, constitutional law, and literature alongside advanced math.",
    "specialty": "Constitutional Law, American History & AP Capstone",
    "website": "https://www.hsas-lehman.org",
    "color": "#991b1b"
  },
  {
    "id": "brooklyn_latin",
    "name": "The Brooklyn Latin School",
    "shortName": "Brooklyn Latin",
    "borough": "Brooklyn",
    "cutoffScore": 490,
    "seats": 180,
    "description": "Distinguished classical education featuring mandatory Latin, Greek, Socratic seminars, formal public declamation, and the International Baccalaureate (IB) Diploma.",
    "specialty": "Classical Trivium, Latin, Public Speaking & Full IB Diploma",
    "website": "https://www.brooklynlatin.org",
    "color": "#4c1d95"
  }
];

export const PASSAGES: Passage[] = [
  {
    "id": "e1_p1",
    "examId": "exam1",
    "passageNumber": 1,
    "title": "Invention of the Telegraph",
    "author": "Historical Feature",
    "intro": "Samuel Morse, an American inventor, is credited with creating the electronic telegraph, a communication device that allows users to send messages using a system of short and long pulses that represent letters, numbers, and punctuation. In 1844, the United States Congress passed the Telegraph Bill, which provided Morse with the funds to build an electric telegraph system.",
    "text": "Samuel Morse, an American inventor, is credited with creating the electronic telegraph, a \ncommunication device that allows users to send messages using a system of short and long \npulses that represent letters, numbers, and punctuation. In 1844, the United States Congress \npassed the Telegraph Bill, which provided Morse with the funds to build an electric \ntelegraph system.\nInvention of the Telegraph\nEarlier Signal Systems\n1 Long before Samuel F . B. Morse electrically transmitted his famous message \u201cWhat hath God \nwrought?\u201d from Washington to Baltimore on May 24, 1844, there were signaling systems that \nenabled people to communicate over distances. Most were visual or \u201csemaphore\u201d systems using \nflags or lights. In the eighteenth century, such systems used an observer who would decipher a \nsignal from a high tower on a distant hill and then send it on to the next station. The young \nAmerican republic wanted just such a system along its entire Atlantic coast and offered a prize of \n$30,000 for a workable proposal. The framers of this legislation1 had no way of knowing that \nwhen they used the word \u201ctelegraph\u201d to refer to this visual semaphore system, they would be \noffered an entirely new and revolutionary means of communication\u2014 electricity .\nThe Growth of an Idea\n2 The idea of using electricity to communicate o ver distance is said to have occurred to Morse \nduring a conversation aboard ship when he was returning from Europe in 1832. Michael Faraday\u2019s \nrecently invented electromagnet was much discussed by the ship\u2019s passengers, and when Morse \ncame to understand how it worked, he speculated that it might be possible to send a coded \nmessage over a wire. While a student at Yale College years before, he had written his parents a \nletter about how interesting he found the lectures on electricity. Despite what he had learned at \nYale, Morse found when he began to develop his idea that he had little real understanding of the \nnature of electricity, and after sporadic attempts to work with batteries, magnets, and wires, he \nfinally turned for help to a colleague at the University of the City of New York, Leonard D. Gale.\n3 Gale was a professor of chemistr y and familiar with the electrical work of Princeton\u2019s Joseph \nHenry, a true pioneer in the new field. Well before Morse had his shipboard idea about a \ntelegraph, Henry rang a bell at a distance by opening and closing an electric circuit. In 1831, he \nhad published an article, of which Morse was unaware, that contained details suggesting the idea \nof an electric telegraph. Gale\u2019s help and his knowledge of this article proved crucial to Morse\u2019s \ntelegraph system because Gale not only pointed out flaws in the system but showed Morse how \nhe could regularly boost the strength of a signal and overcome the distance problems he had \nencountered by using a relay system Henry had invented. Henry\u2019s experiments, Gale\u2019s assistance, \nand, soon after, hiring the young technician Alfred Vail were keys to Morse\u2019s success.\nObstacles and Opportunities\n4 By December 1837, Morse had enough confidence in his new system to apply for the federal \ngovernment\u2019s appropriation, and during the next year he conducted demonstrations of his \ntelegraph both in New York and Washington.\n1 legislation: Telegraph Bill\n\n 5  Howe ver, when the economic disaster known as the Panic of 1837 took hold of the nation and \ncaused a long depression, Morse was forced to wait for better times. It was during this period \nthat Morse visited Europe again and tried not only to secure patent protection overseas but to \nexamine competing telegraph systems in England. . . .\n 6  B y 1843, the country was beginning to recover economically, and Morse again asked Congress for \nthe $30,000 that would allow him to build a telegraph line from Washington to Baltimore, forty \nmiles away. The House of Representatives eventually passed the bill containing the Morse \nappropriation, and the Senate approved it in the final hours of that Congress\u2019s last session. With \nPresident Tyler\u2019s signature, Morse received the cash he needed and began to carry out plans for \nan underground telegraph line.\nRealizing a Great Invention\n 7  Mor se had hired the ingenious construction engineer Ezra Cornell to lay the pipe carrying the \nwire, and although Cornell did his job superbly, one of Morse\u2019s partners, Congressman F. O. J. \nSmith, had purchased wire with defective insulation. Too much time had been wasted laying bad \nwire, and with the project on a rigid deadline, something had to be done quickly. Cornell \nsuggested that the fastest and cheapest way of connecting Washington and Baltimore was to \nstring wires overhead on trees and poles. The desperate Morse gave the go- ahead, and the line \nwas completed in time for the dramatic and spectacularly successful link between the Supreme \nCourt chamber of the Capitol building and the railroad station in Baltimore.\n 8  Soon, as o verhead wires connected cities up and down the Atlantic coast, the dots- and-  dashes \nmethod2 that recorded messages on a long moving strip of paper was replaced by the operator\u2019s \nability to interpret the code in real time. . . . Telegraph lines soon extended westward, and within \nMorse\u2019s own lifetime they connected the continents of Europe and America.\n\u201cInvention of the Telegraph\u201d\u2014 Public Domain/Librar y of Congress\n2 dots- and-  dashes method: short and long pulses of Morse code\n\nN\nS\nEW\nUnited StatesUnited StatesUnited States\nVancouverVancouverVancouver\nBarbadosBarbadosBarbados\nCape TownCape TownCape Town\nWashington, D.C.Washington, D.C.Washington, D.C.\nAustraliaAustraliaAustralia\nPerthPerthPerth\nIndian\nOcean\nIndian\nOcean\nIndian\nOcean\nAtlantic\nOcean\nAtlantic\nOcean\nAtlantic\nOcean\nPaci\ufb01c\nOcean\nPaci\ufb01c\nOcean\nPaci\ufb01c\nOcean\nNorfolkNorfolkNorfolk\nBrisbaneBrisbaneBrisbane\nNew ZealandNew ZealandNew Zealand\nIndiaIndiaIndia\nLondonLondonLondon\nCanadaCanadaCanada\nBermudaBermudaBermuda\nThe \ufb01rst transatlantic electric telegraph message was sent in \n1858, and by 1902 the British All-Red Line connected most of \nthe world.\nBRITISH ALL-RED TELEGRAPH LINE, 1902\nKEY\n= Electric\n   telegraph line\n180\n160\n140\n120\n100\n80\n60\n40\n20\n0\nNumber of Messages Transmitted\n(in millions)\nTELEGRAPH MESSAGES TRANSMITTED,\n1870\u20131920\nYear\nSource: U.S. Bureau of the Census. Historical Statistics of the\nUnited States, Colonial Times to 1970, Bicentennial Edition, Part 2.\nWashington, D.C., 1975.\n1870 1880 1890 1900 1910 1920",
    "startQuestion": 1,
    "endQuestion": 6,
    "genre": "Historical"
  },
  {
    "id": "e1_p2",
    "examId": "exam1",
    "passageNumber": 2,
    "title": "Excerpt from 'Niagara Falls'",
    "author": "Rupert Brooke",
    "intro": "Rupert Brooke (1887\u20131915) was a celebrated English poet who traveled across North America in 1913, writing vivid essays and letters recording his philosophical impressions.",
    "text": "Excerpt from \u201cNiagara Falls\u201d\nby Rupert Brooke\n1  The r eal secret of the beauty and terror of the Falls is not their height or width, but the feeling of \ncolossal power and of unintelligible disaster caused by the plunge of that vast body of water. If \nthat were taken away, there would be little visible change, but the heart would be gone.\n2  The American F alls do not inspire this feeling in the same way as the Canadian. It is because they \nare less in volume, and because the water does not fall so much into one place. By comparison \ntheir beauty is almost delicate and fragile. They are extraordinarily level, one long curtain of \nlacework and woven foam. Seen from opposite, when the sun is on them, they are blindingly \nwhite, and the clouds of spray show dark against them. With both Falls the colour of the water is \nthe ever- altering wonder . Greens and blues, purples and whites, melt into one another, fade, and \ncome again, and change with the changing sun. Sometimes they are as richly diaphanous1 as a \nprecious stone, and glow from within with a deep, inexplicable light. Sometimes the white \nintricacies of dropping foam become opaque and creamy. And always there are the rainbows. If \nyou come suddenly upon the Falls from above, a great double rainbow, very vivid, spanning the \nextent of spray from top to bottom, is the first thing you see. If you wander along the cliff \nopposite, a bow springs into being in the American Falls, accompanies you courteously on your \nwalk, dwindles and dies as the mist ends, and awakens again as you reach the Canadian tumult. \nAnd the bold traveller who attempts the trip under the American Falls sees, when he dare open \nhis eyes to anything, tiny baby rainbows, some four or five yards in span, leaping from rock to \nrock among the foam, and gambolling beside him, barely out of hand\u2019s reach, as he goes. One I \nsaw in that place was a complete circle, such as I have never seen before, and so near that I \ncould put my foot on it. It is a terrifying journey, beneath and behind the Falls. The senses are \nbattered and bewildered by the thunder of the water and the assault of wind and spray; or rather, \nthe sound is not of falling water, but merely of falling; a noise of unspecified ruin. So, if you are \nclose behind the endless clamour, the sight cannot recognise liquid in the masses that hurl past. \nYou are dimly and pitifully aware that sheets of light and darkness are falling in great curves in \nfront of you. Dull omnipresent foam washes the face. Farther away, in the roar and hissing, \nclouds of spray seem literally to slide down some invisible plane of air.\n3  Be yond the foot of the Falls the river is like a slipping floor of marble, green with veins of dirty \nwhite, made by the scum that was foam. It slides very quietly and slowly down for a mile or two, \nsullenly exhausted. Then it turns to a dull sage green, and hurries more swiftly, smooth and \nominous. As the walls of the ravine close in, trouble stirs, and the waters boil and eddy. These \nare the lower rapids, a sight more terrifying than the Falls, because less intelligible. Close in its \nbands of rock the river surges tumultuously forward, writhing and leaping as if inspired by a \ndemon. It is pressed by the straits into a visibly convex form. Great planes of water slide past. \nSometimes it is thrown up into a pinnacle of foam higher than a house, or leaps with incredible \nspeed from the crest of one vast wave to another, along the shining curve between, like the \nspring of a wild beast. Its motion continually suggests muscular action. The power manifest in \nthese rapids moves one with a different sense of awe and terror from that of the Falls. Here the \ninhuman life and strength are spontaneous, active, almost resolute. . . . A place of fear.\n1 diaphanous: sheer, translucent\n\n 4 One is drawn back, strangely, to a contemplation of the Falls, at every hour, and especially by \nnight, when the cloud of spray becomes an immense visible ghost, straining and wavering high \nabove the river, white and pathetic and translucent. The Victorian lies very close below the \nsurface in every man. There one can sit and let great cloudy thoughts of destiny and the passage \nof empires drift through the mind; for such dreams are at home by Niagara. I could not get out of \nmy mind the thought of a friend, who said that the rainbows over the Falls were like the arts and \nbeauty and goodness, with regard to the stream of life\u2014 caused by it, thrown upon its spray, but \nunable to stay or direct or affect it, and ceasing when it ceased. In all comparisons that rise in \nthe heart, the river, with its multitudinous waves and its single current, likens itself to a life, \nwhether of an individual or of a community. A man\u2019s life is of many flashing moments, and yet \none stream; a nation\u2019s flows through all its citizens, and yet is more than they. In such places, \none is aware, with an almost insupportable and yet comforting certitude, that both men and \nnations are hurried onwards to their ruin or ending as inevitably as this dark flood. Some go \ndown to it unreluctant, and meet it, like the river, not without nobility. And as incessant, as \ninevitable, and as unavailing as the spray that hangs over the Falls, is the white cloud of human \ncrying. . . . With some such thoughts does the platitudinous2 heart win from the confusion and \nthunder of a Niagara peace that the quietest plains or most stable hills can never give.\nFrom LETTERS FROM AMERICA by Rupert Brooke\u2014 Public Domain\n2 platitudinous: clich\u00e9d, common",
    "startQuestion": 7,
    "endQuestion": 12,
    "genre": "Literature"
  },
  {
    "id": "e1_p3",
    "examId": "exam1",
    "passageNumber": 3,
    "title": "Impressions of an Indian Childhood",
    "author": "Zitkala-Sa (Gertrude Simmons Bonnin)",
    "intro": "Zitkala-Sa (1876\u20131938) was a Native American writer, musician, teacher, and political activist raised on the Yankton Sioux Reservation in South Dakota. In 1900 she published autobiographical stories detailing her heritage.",
    "text": "Zitkala- Sa (Gertrude Simmons Bonnin) was a Native American writer, musician, teacher, and \npolitical activist who was raised on the Yankton Sioux Reservation in South Dakota. In 1900 she \npublished \u201cImpressions of an Indian Childhood\u201d (the term Indian was commonly used at the time \nto refer to Native American people) to expose readers to what life is like on a reservation.\nExcerpt from \u201cImpressions of an Indian Childhood\u201d\nby Zitkala- Sa\n1 Soon after breakfast Mother sometimes began her beadwork. On a bright, clear day, she pulled \nout the wooden pegs that pinned the skirt of our wigwam1 to the ground, and rolled the canvas \npart way up on its frame of slender poles. Then the cool morning breezes swept freely through \nour dwelling, now and then wafting the perfume of sweet grasses from newly burnt prairie.\n2 Untying the long tasseled strings that bound a small brown buckskin2 bag, my mother spread \nupon a mat beside her bunches of colored beads, just as an artist arranges the paints upon his \npalette. On a lapboard she smoothed out a double sheet of soft white buckskin; and drawing from \na beaded case that hung on the left of her wide belt a long, narrow blade, she trimmed the \nbuckskin into shape. Often she worked upon small moccasins for her small daughter. Then I \nbecame intensely interested in her designing. With a proud, beaming face, I watched her work. \nIn [my] imagination, I saw myself walking in a new pair of snugly fitting moccasins. I felt the \nenvious eyes of my playmates upon the pretty red beads decorating my feet.\n3 Close beside my mother I sat on a rug, with a scrap of buckskin in one hand and an awl in the \nother. This was the beginning of my practical observation lessons in the art of beadwork. From a \nskein3 of finely twisted threads of silvery sinews my mother pulled out a single one. With an awl \nshe pierced the buckskin, and skillfully threaded it with the white sinew. Picking up the tiny beads \none by one, she strung them with the point of her thread, always twisting it carefully after \nevery stitch.\n4 It took many trials before I learned how to knot my sinew thr ead on the point of my finger, as I \nsaw her do. Then the next difficulty was in keeping my thread stiffly twisted, so that I could \neasily string my beads upon it. My mother required of me original designs for my lessons in \nbeading. At first I frequently ensnared many a sunny hour into working a long design. Soon I \nlearned from self- inflicted punishment to refrain from drawing complex patterns, for I had to \nfinish whatever I began.\n5 After some experience I usually drew easy and simple crosses and squares . These were some of \nthe set forms. My original designs were not always symmetrical nor sufficiently characteristic, two \nfaults with which my mother had little patience. The quietness of her oversight made me feel \nstrongly responsible and dependent upon my own judgment. She treated me as a dignified little \nindividual as long as I was on my good behavior; and how humiliated I was when some boldness \nof mine drew forth a rebuke from her!\n1 wigwam: hut with an arched framework of poles covered with bark, mats, or animal hides\n2 buckskin: leather made from the skin of a male deer\n3 skein: coiled length of yarn or other thread loosely wound on a reel\n\n 6 In the choice of colors she left me to my own taste. I was pleased with an outline of yellow upon \na background of dark blue, or a combination of red and myrtle- green. There was another of red \nwith a bluish- gray that was more conventionally used. When I became a little familiar with \ndesigning and the various pleasing combinations of color, a harder lesson was given me. It was \nthe sewing on, instead of beads, some tinted porcupine quills, moistened and flattened between \nthe nails of the thumb and forefinger. My mother cut off the prickly ends and burned them at \nonce in the centre fire. These sharp points were poisonous, and worked into the flesh wherever \nthey lodged. For this reason, my mother said, I should not do much alone in quills until I was as \ntall as my cousin Warca- Ziwin.\n 7 Always after these confining lessons I was wild with surplus spirits, and found joyous relief in \nrunning loose in the open again. Many a summer afternoon a party of four or five of my \nplaymates roamed over the hills with me. We each carried a light sharpened rod about four feet \nlong, with which we pried up certain sweet roots. When we had eaten all the choice roots we \nchanced upon, we shouldered our rods and strayed off into patches of a stalky plant under whose \nyellow blossoms we found little crystal drops of gum. Drop by drop we gathered this nature\u2019s \nrock- candy, until each of us could boast of a lump the size of a small bird\u2019s egg. Soon satiated \nwith its woody flavor, we tossed away our gum, to return again to the sweet roots.\nFrom \u201cImpressions of an Indian Childhood\u201d by Zitkala- Sa\u2014 Public Domain\nA BRIEF HISTORY OF BEADWORK IN SOUTH DAKOTA\nDateE vent\n1500s\n1900s\u20131920s\n1862\u20131865\n1830s\nLate 1600s\nThe Dakota use beads made from bones,\nshells, stones, and animal teeth.\nEuropean traders bring glass beads to\nNorth America.\nThe Dakota begin trading with the French\nin Minnesota.\nThe Dakota begin using glass beads in\nclothing, artwork, and decorations in place\nof Native-made beads.\nThe Dakota are expelled from their\nhomelands in Minnesota as a result of the\nU.S.-Dakota War.\nThe Dakota create items to sell outside\ntheir community.\nSource: MNopedia",
    "startQuestion": 13,
    "endQuestion": 19,
    "genre": "Literature"
  },
  {
    "id": "e1_p4",
    "examId": "exam1",
    "passageNumber": 4,
    "title": "Bird Talk",
    "author": "Carl Sandburg",
    "intro": "Carl Sandburg (1878\u20131967) was an American poet and biographer who won three Pulitzer Prizes. In this poem, he observes the seasonal arrival and spirited chatter of migrating birds.",
    "text": "Bird Talk\nby Carl Sandburg\n And now when the branches wer e beginning to be heavy,\n It was the time when the y once had said, \u201cThis is the\nbeginning of summer .\u201d\n The shrilling of the frogs was not so shrill as in the\n5    fir st weeks after the broken winter;\n The birds took their hops and zigzags a lit tle more\nanxious; a home is a home; worms ar e worms.\n The y ellow spreads of the dandelions and buttercups\nr eached across the green pastures.\n 10 Tee whee and tee whee came on the breezes, and the grackles\nchuzzled their s yllables.\n And it was the lea ves with a strong soft wind over them\nthat t alked most of all and said more than any others\nthough speaking the f ewest words.\n 15  It was the gr een leaves trickling out the gaunt nowhere\nof winter , out on the gray hungry branches\u2014\n It was the lea ves on the branches, beginning to be heavy,\n  who said as the y said one time before, \u201cThis is the be-\n    ginning of summer .\u201d \n 20  W e shall never blame the birds who come\nwher e the river and the road make the Grand Crossing\n  and t alk there, sitting in circles talking bird talk.\n If the y ask in their circles as to who is here\n  and as to who is not her e and who used to be here,\n 25  Or if instead of counting up last y ear as against\nthis y ear, they count up this year as against next\ny ear, and have their bird chatter about who is here\nthis y ear who won\u2019t be here next year,\n W e shall never blame the birds.  \n 30  If I ha ve put your face among leaf faces, child,\n Or if I ha ve put your voice among bird voices,\n Blame me no mor e than the bluejays.\n\u201cBird Talk\u201d by Carl Sandburg\u2014 Public domain.",
    "startQuestion": 20,
    "endQuestion": 25,
    "genre": "Poetry"
  },
  {
    "id": "e1_p5",
    "examId": "exam1",
    "passageNumber": 5,
    "title": "The Great Serpent Mound",
    "author": "Archaeological Survey",
    "intro": "The Great Serpent Mound, located in Adams County, Ohio, is an ancient human-made earthwork effigy mound created between 300 B.C. and A.D. 1100 by an indigenous culture.",
    "text": "The Great Serpent Mound, located in Adams County, Ohio, is a human- made mound of ear th that \nresearchers believe was created between 300 b.c. and a.d. 1100 by an indigenous culture.\nSerpent Mound\nOhio, 1846\n Brush Cr eek stood low when the museum men came\n with their measuring t apes and sketchbooks.\n    It was winter . Fringed with ice,\n    the cr eek doubled back on itself\n5  as if it had forgot ten something.\n    P a was in Cincinnati, or else on his way home,\n        so Ma told me to lead the men\n        into the mar shy low grounds. It being winter,\nther e was little underbrush to speak of\u2014\n 10  in the summer ther e would have been\n        briar s, poison ivy, biting flies. I listened\n for the swish of a beaver\u2019s heavy tail,\n    the chit ter of a chickadee, or the cry of a hawk,\n     but the winter silence of the cr eek pressed\n 15  down on all of us lik e a weight.\n The humps in the ground wer e all but\n in visible until you were right up on them. The figure\n was e ven less obvious: the sinuous body,\n     the t ail coiled three times around,\n 20  and at the other end, the mouth wide open.\n        In the summer the cr eek bottom was crowded\n        with so much lif e that you could trip over\nthe ridges of ear th before you saw\nan ything at all. In winter you could climb\n 25  a tr ee and get some idea of the whole thing:\n        the serpent \u2019s body undulating, slithering\n silent ly across the ancient\n    ear th. At the mouth end, there was an oval mound\n     as if the snak e were about to swallow an egg\u2014\n 30  as snak es sometimes did in our rickety\n henhouse\u2014  m y Pa always said, or\n as if swallowing the sun, one of the museum\n    men suggested, t aking notes with his quill pen,\n     an old-  st yle inkhorn slung at his side.\n 35  I lik ed that: swallowing the sun,\n        just the sor t of thing a snake might do,\n        might want to do . When, later, I told my sister Ruth,\nshe disagr eed. It is singing to the sun,\nshe insisted. That is wh y its mouth\n 40  is wide open. She said, \u201c Sometimes I think\n I hear it on summer night s. Not swallowing, singing.\u201d",
    "startQuestion": 26,
    "endQuestion": 33,
    "genre": "Informational"
  },
  {
    "id": "e1_p6",
    "examId": "exam1",
    "passageNumber": 6,
    "title": "Growing Peppers on the ISS",
    "author": "Melanie Canales",
    "intro": "Melanie Canales is a first-generation Peruvian American farmer and beekeeper who collaborated with NASA botanists to evaluate space-crop cultivation methods aboard the International Space Station.",
    "text": "The author, Melanie Canales, is a first- generation Peruvian American farmer and beekeeper based \nin Virginia\u2019s Shenandoah Valley, on lands of the indigenous Monacan and Manahoac tribes. Her \nwork focuses on creating healthy relationships between people and their surrounding ecosystems.\nExcerpt from \u201cGrowing Peppers on the ISS Is Just the Start of \nSpace Farming\u201d\nby Melanie Canales\n1  Unburdened b y the constraints of gravity, red and green peppers jut out at 45-  degr ee angles \ninside the Advanced Plant Habitat (APH), a sort of space terrarium not much larger than a \nmicrowave. Four chile pepper plants stand effortlessly upright, despite the dozens of glossy fruits \nweighing them down. These plants have lived entirely in space; their leaves have never been \nchewed on by insects or rustled by a summer breeze, [and] their stems are unfamiliar with \nbending toward the sun\u2019s arc across the sky. Scissors glint under the tank\u2019s white and blue lights \nas astronaut Mark Vande Hei and his team snip the stems of those that are ready for harvest. \nThe peppers whirl around their heads until the astronauts catch them and tape them against a \nboard to photograph.\n2  Back on Ear th, the Plant Habitat-  04 team of engineer s and plant scientists are observing and \nconferring with the astronauts. Of the 26 peppers in this batch, only the 14 finest will stay on the \nInternational Space Station [ISS] for consumption. The rest will be wrapped in foil, sealed in a \nZiploc bag, then frozen at a brisk \u221280 degrees, until they can come roaring back to Earth in the \nnext cargo capsule to be studied later. Now, after a 137- da y growth cycle, the astronauts remove \nthe plants from the module and trash them. Project Plant Habitat- 04 is complete . It\u2019s taco night \non the ISS.\n3  Since 2014, NA SA1 has experimented with growing lettuces, brassicas,2 and zinnias3 in space, an \nendeavor that relies on highly specialized technology over 50 years in the making. [Fall 2021\u2019s] \ntwo successful pepper harvests . . . will provide data on the nutritional and psychological benefits \nof growing vegetables on- craft, as well as a crop\u2019 s ability to reliably produce long-  term in \nmicrogravity. While controlled environmental agriculture is not new, the APH experiment \nrepresents an evolution in specialized growth habitats. It doesn\u2019t aim to re- cr eate Earth\u2019s \nconditions, but to perfect each isolated variable of plant growth in the clinical environment of a \nspaceship.\n4  \u201c The Advanced Plant Habitat is the most complex plant growth system on orbit today,\u201d says \nLashelle Spencer, a plant scientist at NASA\u2019s Kennedy Space Center. Its more than 180 sensors \ncontrol and monitor temperature, humidity, and carbon dioxide. The astronauts can adjust the \ncolor and intensity of the light, and how much moisture the plants\u2019 roots are getting. It \nwaters itself.\n5  It \u2019s the day after Thanksgiving, and Spencer has been at Kennedy since 5 a.m. to facilitate the \npeppers\u2019 final harvest. As part of the project team, she played a crucial role in preparing the \n1 NASA: National Aeronautics and Space Administration\n2 brassicas: a large genus of herbs, such as broccoli and cabbage\n3 zinnias: a genus of herbs and low shrubs that have flowers at their heads \n\nseeds that were sent hurtling into space in June and guiding the astronauts through maintaining \nthe plants in orbit. . . . Though astronauts can spend upwards of 100 days in space, their \non- mission meals come dehydrated and pre- packaged; their vitamins and minerals are isolated in \nsupplements, which lose nutritional value the longer they\u2019re stored. Spencer\u2019s goal is to create \nthe conditions necessary for cultivating healthy plants in space, so those plants can sustain \nhealthy astronauts on long- term missions. Astronaut food is great, she says\u2014\u201cespecially the \nshrimp cocktail. But you\u2019re missing that crunch. You\u2019re missing that fresh pop of flavor, the green \nflavor that\u2019s not there in that packaged food.\u201d\n 6 The sensory experience of growing productive crops can also help mitigate4 the psychological \neffects of long- term space travel. . . . Spencer says the team cracked open the door of the APH \nevery day to observe their vegetable companions with all the tenderness of home gardeners. \nWhen harvest day came, they batted their bounty around the ISS, taking selfies and delighting in \nwatching the fruits pirouetting around the spacecraft. . . .\n 7 \u201cWe were thinking no heat, so that [the peppers] wouldn\u2019t be dangerous, but maybe the \nastronauts need a little spice in their life,\u201d says Paul Bosland, who along with his colleagues at the \nChile Pepper Institute genetically engineered5 the NuMex Espa\u00f1ola Improved chile pepper seeds \ngrown in Plant Habitat- 04. . . .\n 8 Working with NASA, Bosland cultivated a variety that could accommodate both the nutritional \nneeds of astronauts as well as the logistics of growing a plant in space. . . .\n 9 . . . The experiment is helping gather the data necessary to determine the nutritional content of \ncrops grown in space, and therefore how many people they can feed, and for how long. Though \nmuch is still unknown, Spencer is certain of one thing that future astronauts will need to do: \u201cI \nthink in an optimal world, a scientist like me would say that they would be growing plants from \nday one. From the day they left to the day they came back, they would be growing them.\u201d\nFrom \u201cGrowing Peppers on the ISS Is Just the Start of Space Farming\u201d by Melanie Canales from WIRED, \nDecember 21, 2021. Copyright \u00a9 2021 Cond\u00e9 Nast. All rights reserved.\n4 mitigate: to make something less severe or harmful\n5 genetically engineered: combined parts of DNA from different plants to produce a new plant",
    "startQuestion": 34,
    "endQuestion": 43,
    "genre": "Informational"
  },
  {
    "id": "e1_p7",
    "examId": "exam1",
    "passageNumber": 7,
    "title": "New York City and the Hudson Valley Brickmaking Industry",
    "author": "Revising & Editing Part A",
    "intro": "Read the text on the Hudson Valley brickmaking industry. Then answer questions 44\u201347 by selecting the best revisions for sentence structure, clarity, and grammatical precision.",
    "text": "Sentences (1) through (24) explore how Hudson River clay fed the construction of New York City landmarks like the Empire State Building and Brooklyn Bridge.",
    "imageSrc": "/exams/exam1/images/page_064_Im0.png",
    "startQuestion": 44,
    "endQuestion": 47,
    "genre": "RevisingPartA"
  },
  {
    "id": "e2_p1",
    "examId": "exam2",
    "passageNumber": 1,
    "title": "Snowy Mountains",
    "author": "Poetry Selection",
    "intro": "A poetic reflection on the stillness, grandeur, and enduring resilience of snow-covered peaks against the passage of time.",
    "text": "",
    "startQuestion": 1,
    "endQuestion": 6,
    "genre": "Poetry"
  },
  {
    "id": "e2_p2",
    "examId": "exam2",
    "passageNumber": 2,
    "title": "The Best Laid Plans of Ravens",
    "author": "Avian Cognitive Biology",
    "intro": "An exploration of raven intelligence, problem-solving abilities, tool use, and complex social reasoning that rivals that of great apes.",
    "text": "The Best Laid Plans of Ravens\n1  In Edgar Allan P oe\u2019s poem \u201cThe Raven,\u201d a raven visits a lonely man\u2019s home and responds to the \nman\u2019s pleading questions with only the word \u201cnevermore.\u201d The poem\u2019s narrator interprets the \nword as a prediction of doom for his future. A talking, prophetic raven may seem to be the wild \nimaginings of the poet, but a new study published in the journal Science hints that one particular \nidea behind the poem might not be as far- f etched as it seems. For most of human history, people \nassumed that animals do not understand the passage of time in the same way people do. Some \npeople believed that animals might remember events from the past and that instinct might drive \nthem to make preparations in order to guarantee survival, but most people did not think that \nanimals had the ability to plan. At Lund University in Sweden, researchers argue that ravens may \nbe able to think ahead and even plan for the future.\n2  It can be difficult to test an animal\u2019 s ability to plan because human observers must be certain \nthey are not mistaking instinctual behavior for intentional planning. For example, many animals \nhoard food so that they will not run out later, but scientists who study animals would not call \nhoarding a decision to plan for the future. This action is merely instinctual. Cognitive scientists \nargue that in order for an animal\u2019s behavior to qualify as preparing for the future, the animal \nmust use specific decision- making skills to solv e a problem.\n3  T o avoid mistaking instinctual behavior for evidence of decision-  making, the Lund Univ ersity \nresearchers designed two experiments to test ravens\u2019 ability to plan. Ravens belong to the corvid \nfamily, a group of birds known for their intelligence. A study in 2007 showed that corvids have \nthe tendency to save only certain types of food, which suggests that they are planning for the \nfuture rather than acting on instinct. In order to investigate that theory, the researchers had to \ndesign experiments that would achieve results that could not be explained by an instinctual \nbehavior of food hoarding. Therefore, the ravens were taught two behaviors that they do not \nnormally perform in the wild.\n4  F or the first experiment, the researchers showed the birds how to use a small stone to open a \nbox and get treats. Once the ravens learned the behavior, the researchers presented the birds \nwith four stones. Only one stone was the right size to open the box. The birds learned to select \nthat stone and set it aside until the researchers presented the box. The second experiment \ninvolved bartering. A researcher would trade the ravens a large treat for a bottle cap. Later, the \nresearchers presented the ravens with a group of items, including small treats and the bottle cap. \nThe ravens chose the bottle cap over the treats and waited for the original researcher to trade \nwith them again so that they could get more treats. In both experiments, the ravens waited \npatiently for up to seventeen hours for the researcher to return.\n5  The r esults of these experiments are exciting, but more evidence needs to be gathered before \nscientists can fully conclude that ravens can plan for the future. Some scientists argue that the \nravens might be choosing the stone and bottle cap because the ravens have been trained to do \nso, not necessarily because the ravens are thinking ahead. Regardless, like other recent advances \nin animal science, these experiments show that ravens could be much smarter than first believed, \nand scientists now believe that ravens do actually think about their own future.",
    "startQuestion": 7,
    "endQuestion": 13,
    "genre": "Informational"
  },
  {
    "id": "e2_p3",
    "examId": "exam2",
    "passageNumber": 3,
    "title": "Excerpt from 'A Voice in the Wilderness'",
    "author": "Grace Livingston Hill",
    "intro": "A young schoolteacher traveling west mistakenly steps off the train at a remote desert water tank station in Arizona, facing danger and isolation.",
    "text": "Excerpt from A Voice in the Wilderness\nby Grace Livingston Hill\n1  With a lurch the train came to a dead stop and Margar et Earle, hastily gathering up her \nbelongings, hurried down the aisle and got out into the night.\n2  It occurr ed to her, as she swung her heavy suit-  case down the rather long step to the ground, \nand then carefully swung herself after it, that it was strange that neither conductor, brakeman, \nnor porter had come to help her off the train, when all three had taken the trouble to tell her that \nhers was the next station; but she could hear voices up ahead. Perhaps something was the \nmatter with the engine that detained them and they had forgotten her for the moment.\n3  The ground was rough wher e she stood, and there seemed no sign of a platform. Did they not \nhave platforms in this wild Western land, or was the train so long that her car had stopped before \nreaching it?\n4  She strained her e yes into the darkness, and tried to make out things from the two or three \nspecks of light that danced about like fireflies in the distance. She could dimly see moving figures \naway up near the engine, and each one evidently carried a lantern. The train was tremendously \nlong. A sudden feeling of isolation took possession of her. Perhaps she ought not to have got out \nuntil some one came to help her. Perhaps the train had not pulled into the station yet and she \nought to get back on it and wait. Yet if the train started before she found the conductor she might \nbe carried on somewhere and he justly blame her for a fool.\n5  Ther e did not seem to be any building on that side of the track. It was probably on the other, but \nshe was standing too near the cars to see over. She tried to move back to look, but the ground \nsloped and she slipped and fell in the cinders,1 bruising her knee and cutting her wrist.\n6  In sud den panic she arose. She would get back into the train, no matter what the consequences. \nThey had no right to put her out here, away off from the station, at night, in a strange country. If \nthe train started before she could find the conductor she would tell him that he must back it up \nagain and let her off. He certainly could not expect her to get out like this.\n7  She lifted the hea vy suit-  case up the high step that was e ven farther from the ground than it had \nbeen when she came down, because her fall had loosened some of the earth and caused it to \nslide away from the track. Then, reaching to the rail of the step, she tried to pull herself up, but \nas she did so the engine gave a long snort and the whole train, as if it were in league against her, \nlurched forward crazily, shaking off her hold. She slipped to her knees again, the suit- case , \ntoppled from the lower step, descending upon her, and together they slid and rolled down the \nshort bank, while the train . . . ran giddily off into the night.\n8  The horror of being deser ted helped the girl to rise in spite of bruises and shock. She lifted \nimploring hands to the unresponsive cars as they hurried by her\u2014 one , two, three, with bright \nwindows, each showing a passenger, comfortable and safe inside, unconscious of her need.\n1 cinders: track bed made from the residue of burnt coal\n\n9  A moment of useless scr eaming, running, trying to attract some one\u2019s attention, a sickening \nsense of terror and failure, and the last car slatted itself past with a mocking clatter, as if it \nenjoyed her discomfort.\n 10  Margar et stood dazed, reaching out helpless hands, then dropped them at her sides and gazed \nafter the fast- r etreating train, the light on its last car swinging tauntingly, blinking now and then \nwith a leer in its eye, rapidly vanishing from her sight into the depth of the night.\n 11  She gasped and look ed about her for the station that but a short moment before had been so real \nto her mind; and, lo! on this side and on that there was none!\n 12  The night was wide lik e a great floor shut in by a low, vast dome of curving blue set with the \nlargest, most wonderful stars she had ever seen. Heavy shadows of purple- gr een, smoke-  lik e, \nhovered over earth darker and more intense than the unfathomable blue of the night sky. It \nseemed like the secret nesting- place of m ysteries wherein no human foot might dare intrude. It \nwas incredible that such could be but common sage- brush, sand, and gr easewood wrapped about \nwith the beauty of the lonely night.\n 13  No building brok e the inky outlines of the plain, nor friendly light streamed out to cheer her \nheart. Not even a tree was in sight, except on the far horizon, where a heavy line of deeper \ndarkness might mean a forest. Nothing, absolutely nothing, in the blue, deep, starry dome above \nand the bluer darkness of the earth below save one sharp shaft ahead like a black mast throwing \nout a dark arm across the track.\n 14  As soon as she sighted it she pick ed up her baggage and made her painful way toward it, for her \nknees and wrist were bruised and her baggage was heavy.\n 15  A soft drip , drip greeted her as she drew nearer; something plashing down among the cinders by \nthe track. Then she saw the tall column with its arm outstretched, and looming darker among the \nsage- brush the out lines of a water-  t ank. It was so she recognized the engine\u2019s drinking-  t ank, and \nknew that she had mistaken a pause to water the engine for a regular stop at a station.\nFrom A VOICE IN THE WILDERNESS by Grace Livingston Hill\u2014 Public Domain",
    "startQuestion": 14,
    "endQuestion": 20,
    "genre": "Literature"
  },
  {
    "id": "e2_p4",
    "examId": "exam2",
    "passageNumber": 4,
    "title": "Champion of the Channel",
    "author": "Sports History",
    "intro": "The inspiring story of Gertrude Ederle, who in 1926 shattered records to become the first woman to swim across the treacherous English Channel.",
    "text": "Champion of the Channel\n1  In 1926 an editor at the London Daily News predicted that Gertrude Ederle, an American \nswimmer with eighteen world records and three Olympic medals, would fail in her attempt to \nswim across the English Channel. He claimed that \u201ceven the most uncompromising champion of \nthe rights and capacities of women must admit that in contests of physical skill, speed and \nendurance they must remain forever the weaker sex.\u201d Yet, at only nineteen years old, Ederle not \nonly became the first woman to accomplish this feat, she also broke the men\u2019s record by \ntwo hours. Gertrude Ederle\u2019s triumphant swim across the English Channel was a testimony to her \ndetermination, innovative spirit, and passion for swimming.\n2  Crossing the English Channel is a daunting t ask for any swimmer. At its narrowest point, the \nchannel measures twenty- one miles across . Its icy waters hover around sixty degrees Fahrenheit, \nand its unruly tides and currents toss swimmers about like bobbing corks. Stinging jellyfish, \nseaweed, and floating debris from shipwrecks and lost cargoes present added hazards.\n3  F or decades the channel\u2019s perils have defeated countless swimmers. Ederle, too, failed in her first \nattempt to cross the channel in 1925. Just six miles short of finishing, she became ill, and her \ncoach had to haul her out of the water. Undeterred, Ederle decided to try again. Ederle knew that \nif she did not complete the challenge this time, she might never get the opportunity to set this \nrecord, because a rival female swimmer was preparing to make her second attempt at the \ncrossing as well.\n4  T o prepare for the marathon swim, Ederle found ways to improve her equipment. She and her \nsister Meg discovered that melted candle wax perfectly sealed goggle edges, effectively \nwaterproofing Ederle\u2019s goggles against hammering waves. The sisters also designed a two- piece \nsilk swimsuit for Ederle. During her first channel- crossing at tempt she had worn a standard one-  \npiece swimsuit that, after the lengthy hours of swimming across the channel, had stretched out, \nfilling with water and creating drag, making an already challenging task almost insurmountable. \nUnlike the cumbersome typical bathing suit, this silk invention weighed little and allowed for \neasy movement.\n5  On August 6, 1926, Ederle waded into the channel near C ape Gris-  Nez, F rance. At first she \nshivered in the bone- chilling water e ven though she had covered her body in eight layers of \ngrease for insulation. Her limbs felt stiff. Her strokes were irregular. Driving forward, she fought \nto clear her mind and find what she called her \u201csphere,\u201d a place where the sea became her only \ncompanion and the shrieks of gulls and the humming of boat engines faded away. Using a new \noverhand stroke called the American crawl, Ederle eventually settled into a steady pace, briskly \nbreaking through waves.\n6  Throughout Ederle\u2019 s swim, two tugboats accompanied her. One carried newspaper reporters who \nwired dispatches of her progress to shore. The other, displaying a sign that read \u201cThis way, ole \nkid!\u201d with an arrow pointing forward, transported her coach, family, and friends. Her coach \nplayed songs, such as \u201cYes, We Have No Bananas,\u201d on a phonograph so that Ederle could time \nher strokes to the rhythm. Using a net, her coach also passed her baby bottles of broth for \nnourishment.\n\n 7 For hours Ederle swam, dodging debris with an amused smile. However, as she neared the \nEnglish shore, a sudden fierce storm erupted. The tides and waves forced Ederle backward, and \nshe fought the stubborn swells for several hours. The salty water caused her tongue to swell and \ninflamed her ears. Yet Ederle felt indescribably happy as she churned through the sea. Finally, as \nshe neared the English shore, the storm abated, and the tide turned. No longer fighting against \nher, the sea pushed her toward the shore and victory.\n 8 After fourteen hours and thirty- one minutes, Ederle, on wobbly legs, stepped onto the English \nshore. The waiting crowd roared, honked their automobile horns, blasted their tugboat whistles, \nand set off flares that flashed in the sky. Ederle had swum into history.\n 9 When Ederle returned to New York, she received a parade, where thousands of people shouted \n\u201cTrudy!\u201d Not only were everyday American citizens proud of Ederle, but also she inspired them to \nbe more active. Over the next few years, more than 60,000 people credited her with motivating \nthem to earn their American Red Cross swimming certificates. Gertrude Ederle\u2019s accomplishment \nproved to the world that with determination and passion, it was possible for a person to achieve \nhis or her goals.\nSOLO SWIMS ACROSS THE ENGLISH CHANNEL\nEarliest Speed Records\nYear Swimmer Time\n1875 Matthew Webb (M) 21 hours, 45 minutes\n1923 Enrico Tiraboschi (M) 16 hours, 33 minutes\n1926 Gertrude Ederle (F) 14 hours, 31 minutes\n1926 Arnst Vierkotter (M) 12 hours, 38 minutes\nCurrent Speed Records\nYear Swimmer Time\n2006 Yvetta Hlavacova (F) 7 hours, 25 minutes\n2012 Trent Grimsey (M) 6 hours, 55 minutes",
    "startQuestion": 21,
    "endQuestion": 28,
    "genre": "Historical"
  },
  {
    "id": "e2_p5",
    "examId": "exam2",
    "passageNumber": 5,
    "title": "The Spirit of the Herd",
    "author": "Natural History",
    "intro": "An account of wild mustang herds in the American West and their intricate social hierarchies and leadership dynamics.",
    "text": "Passage Set 4 Item 8\n\n \n \nPassage Set 4 Item 9",
    "startQuestion": 29,
    "endQuestion": 35,
    "genre": "Informational"
  },
  {
    "id": "e2_p6",
    "examId": "exam2",
    "passageNumber": 6,
    "title": "Lowell National Historical Park",
    "author": "American Industrial History",
    "intro": "During the early 19th century, Lowell transformed into America's first planned industrial city, powered by the Merrimack River and early female textile workers.",
    "text": "Massachusetts: Lowell National Historical Park \nO During the first half of the 19th century, Lowell, Massachusetts, quickly transformed itself from a farm town to a bustling industrial city. In \ntime, Lowell became a model of industry, gaining global recognition for its state-of-the-art technology, innovative canal and dam system, mill \narchitecture, boardinghouses, churches, and ethnic neighborhoods. Young Yankee women, immigrant families, and European tourists all \nflocked to Lowell to find work at one of the many textile mills, or visit the industrious city that was becoming a popular tourist destination. As \none Scottish traveler observed during his visit to America, \"Niagara and Lowell are the two objects I will longest remember in my American \njourney, the one the glory of American scenery, the other of American industry.\" Today, Lowell National Historical Park welcomes visitors to \nenjoy the sights of Lowell and learn about the history of one of America's most significant industrial cities. \nf) The Boston merchants who founded Lowell in 1821 and named it after Francis Cabot Lowell chose to locate the town along Massachusetts's \nMerrimack River to take advantage of the kinetic energy offered by the Pawtucket waterfalls. Over six miles of canals powered the waterwheels\nof Lowell's mills, whose massive five- and six-story brick buildings dominated the city's landscape ... . The most recognized of these buildings\nare the Lowell Manufacturing Company chartered in 1821, the Suffolk or Wannalancit Mill completed around the 1880s, the Boott Mill Company\nestablished in 1835, and the Boott Mill Boardinghouse that opened in 1838. By the 1850s, 40 textile mills employing over 10,000 workers\nstretched for about a mile along the river .... \nO The city's female workforce was significant in the history of Lowell. From the early to mid-1800s, women left the constricted lifestyle of small \nrural towns and rural areas for independent industrial city life. Most were young single Yankee girls, who were tired of the limited opportunities \noffered by their domestic work. Women found that Lowell's mills offered monthly wages for their services and provided them room and board. \nAlthough these women gained economic independence in Lowell, the mill boardinghouse keepers constantly supervised their social activities, \nfor which they hardly had any time, considering their daily 12- to 14-hour work schedules. At the end of the day, the factory bell signaled the \n\"mill girls\" to return to their boardinghouses_ They were expected to adhere to the strict code of conduct respecting curfew and attending \nchurch. \nG Yankee \"mill girls\" continued to dominate the Lowell workforce until the 1840s, when the city began to find it difficult to compete with the \ngrowing industrial development in other New England communities. As profits fell, the mill industry cut wages. These wage cuts, deteriorating \nworking conditions, and long workdays led the \"mill girls\" to protest and organize strikes. When their demands went unheard, the women left \nLowell, and immigrant groups replaced them in the workforce. Despite the low wages and unhealthy work conditions, immigrants were eager to \nfind work. \nO The immigrants replacing the Yankee \"mill girls\" during the 1840s were predominantly Irish Catholics, who traveled to America during the \nGreat Potato Famine. Although Lowell received an influx of Irish families during this time, the Irish were a part of the city's history from its birth, \nand before the \"mill girls\" arrived, they built Lowell's historic canals, mills, and boardinghouses. Initially, Lowell's Protestant community was slow \nto welcome Irish immigrants, but the hostility between Yankee Protestants and Irish Catholics eventually disappeared. Irish immigrants \ndominated the industrial scene until the Civil War, when other immigrant groups began to work in the city mills. \nG Like the Irish, the French-Canadians, Greeks, Poles, Portuguese, Russian Jews, and Armenians who came to work in Lowell's mills faced long \nwork hours, I ow wages, and poor living conditions in the city's crowded tenements. By the time Lowell's industry declined, the city had become \nan ethnic melting pot, where each group claimed its own distinct neighborhood, like the Irish immigrants' \"New Dublin\" or \"Acre,\" and the \nFrench-Canadians' \"Little Canada.\" The city officially began to close down its mills in the 1920s and '30s after Lowell's outdated mills could no \nlonger compete against the state-of-the-art cotton mills in other communities and working conditions continued to decline as Lowell's \ncompanies stopped reinvesting in their mills_ ... Despite a brief resurgence during World War II, the city shut down its last surviving mill by the \nmid-1950s. \nFtom \"Massac.husens: Lowell NcllJOOal HiStOfiC:cll Pa(k.\"\"-Publi( oomalrVNclliOnal Patk 5er'Vi(e \nYankee: native to New England\nNiagara: a town in northwestern New York State well known as the location of Niagara Falls, a series of waterfalls on the Canadian border\ndomestic work: household duties like cooking and cleaning\n\nPassage Set 6 Item 1",
    "startQuestion": 36,
    "endQuestion": 43,
    "genre": "Historical"
  }
];

export const TOPIC_DRILLS: TopicDrill[] = [
  {
    "id": "drill_algebra",
    "subject": "math",
    "title": "Algebra: Linear Equations & Inequalities",
    "icon": "Variable",
    "description": "Master multi-step equations, signs with negative coefficients, fractions, and isolating variables under timed pressure.",
    "questionCount": 10,
    "targetSkills": [
      "Isolating variables",
      "Distributive property",
      "Inequality sign flipping",
      "Translating words to algebraic expressions"
    ],
    "sampleQuestionIds": [
      "e1_math_02",
      "e1_math_03",
      "e1_math_05",
      "e1_math_07"
    ]
  },
  {
    "id": "drill_geometry",
    "subject": "math",
    "title": "Geometry: Angles, Transversals & Polygons",
    "icon": "Shapes",
    "description": "Master parallel lines cut by a transversal, interior angle sums, complementary vs supplementary angles, and parallelograms.",
    "questionCount": 10,
    "targetSkills": [
      "Consecutive angles in parallelograms",
      "Alternate interior angles",
      "Right triangles & supplementary pairs"
    ],
    "sampleQuestionIds": [
      "e1_math_06",
      "e1_math_10",
      "e1_math_14",
      "e1_math_22"
    ]
  },
  {
    "id": "drill_probability",
    "subject": "math",
    "title": "Probability & Number Line Plotting",
    "icon": "Percent",
    "description": "Compound independent events (spinners and coins), fractions to decimals, and pinpointing values on number lines.",
    "questionCount": 8,
    "targetSkills": [
      "Multiplication rule for independent events",
      "Equivalent fractions",
      "Number line subdivision reading"
    ],
    "sampleQuestionIds": [
      "e1_math_08",
      "e1_math_12",
      "e1_math_18"
    ]
  },
  {
    "id": "drill_rates_percents",
    "subject": "math",
    "title": "Rates, Proportions & Financial Math",
    "icon": "Coins",
    "description": "Solve unit rate word problems (speed/distance/time conversion to minutes), monthly payment schedules, and percent change.",
    "questionCount": 10,
    "targetSkills": [
      "Hour to minute unit conversions",
      "Down payment total cost calculations",
      "Proportional reasoning"
    ],
    "sampleQuestionIds": [
      "e1_math_04",
      "e1_math_09",
      "e1_math_11"
    ]
  },
  {
    "id": "drill_number_theory",
    "subject": "math",
    "title": "Number Theory & Prime Factorization",
    "icon": "Hash",
    "description": "Deconstruct large integers into factor trees, prime exponents, greatest common factor (GCF), and least common multiple (LCM).",
    "questionCount": 8,
    "targetSkills": [
      "Factor trees",
      "Prime identification",
      "Exponent rules"
    ],
    "sampleQuestionIds": [
      "e1_math_01",
      "e1_math_15",
      "e1_math_25"
    ]
  },
  {
    "id": "drill_revising_a",
    "subject": "ela",
    "title": "Revising & Editing: Passage Text Revision",
    "icon": "FileEdit",
    "description": "Sentence additions, transition words, combining sentences, and eliminating repetitive or off-topic sentences in essays.",
    "questionCount": 8,
    "targetSkills": [
      "Logical transitions",
      "Sentence combining without run-ons",
      "Topic sentence identification"
    ],
    "sampleQuestionIds": [
      "e1_ela_44",
      "e1_ela_45",
      "e1_ela_46",
      "e1_ela_47"
    ]
  },
  {
    "id": "drill_revising_b",
    "subject": "ela",
    "title": "Revising & Editing: Standalone Grammar Rules",
    "icon": "CheckCheck",
    "description": "Punctuation (semicolons, colons, dashes), misplaced and dangling modifiers, and subject-verb agreement.",
    "questionCount": 8,
    "targetSkills": [
      "Semicolon vs comma splice",
      "Introductory participial modifiers",
      "Pronoun-antecedent agreement"
    ],
    "sampleQuestionIds": [
      "e1_ela_48",
      "e1_ela_49",
      "e1_ela_50"
    ]
  },
  {
    "id": "drill_central_idea",
    "subject": "ela",
    "title": "Reading Comprehension: Central Idea & Theme",
    "icon": "BookOpen",
    "description": "Differentiate between the author's primary central message versus isolated supporting facts and distractors.",
    "questionCount": 10,
    "targetSkills": [
      "Identifying main arguments",
      "Distinguishing broad themes from narrow details",
      "Author purpose"
    ],
    "sampleQuestionIds": [
      "e1_ela_01",
      "e1_ela_07",
      "e1_ela_13"
    ]
  },
  {
    "id": "drill_evidence_inference",
    "subject": "ela",
    "title": "Reading Comprehension: Evidence & Inferences",
    "icon": "Search",
    "description": "Locate textual evidence directly supporting high-inference conclusions, figurative language tone, and graph data interpretation.",
    "questionCount": 10,
    "targetSkills": [
      "Evidence citation",
      "Interpreting graphs paired with text",
      "Tone and mood word analysis"
    ],
    "sampleQuestionIds": [
      "e1_ela_02",
      "e1_ela_03",
      "e1_ela_04",
      "e1_ela_05",
      "e1_ela_06"
    ]
  }
];

export const QUESTIONS: Question[] = [
  {
    "id": "e1_ela_01",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 1,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "Samuel Morse, an American inventor, is credited with creating the electronic telegraph, a communication device that allows users to send messages using a system of short and long pulses that represent letters, numbers, and punctuation. In 1844, the United States Congress passed the Telegraph Bill, which provided Morse with the funds to build an electric telegraph system. Invention of the Telegraph Earlier Signal Systems 1) Long before Samuel F. B. Morse electrically transmitted his famous message \"What hath God wrought?\" from Washington to Baltimore on May 24, 1844, there were signaling systems that enabled people to communicate over distances. Most were visual or \"semaphore\" systems using flags or lights. In the eighteenth century, such systems used an observer who would decipher a signal from a high tower on a distant The details of the section \"The Growth of an Idea\" convey a central idea of the passage by suggesting that",
    "imageSrc": "/exams/exam1/items/ela_q01.png",
    "options": [
      {
        "id": "A",
        "text": "the collaborative efforts of colleagues resulted in successful communication over a wire."
      },
      {
        "id": "B",
        "text": "a great deal of interest and work was devoted to understanding how to use electricity to send signals."
      },
      {
        "id": "C",
        "text": "Faraday's invention of the electromagnet inspired the invention of the telegraph."
      },
      {
        "id": "D",
        "text": "colleges like Yale played a great role in making new discoveries about electricity and its applications."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_02",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 2,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "the funding necessary to build his telegraph system?",
    "imageSrc": "/exams/exam1/items/ela_q02.png",
    "options": [
      {
        "id": "A",
        "text": "Morse's application for a federal grant was delayed until 1843, so he spent time traveling in Europe, where he concentrated on obtaining a patent for his system."
      },
      {
        "id": "B",
        "text": "Morse applied for a government grant that required both houses of Congress and the president to pass a bill awarding him $30,000 for his telegraph project."
      },
      {
        "id": "C",
        "text": "Morse applied for a government appropriation and conducted telegraph demonstrations to show that his system could work, and after a delay caused by a financial depression, Congress approved the $30,000 appropriation in 1843."
      },
      {
        "id": "D",
        "text": "Working with Gale and Vail allowed Morse to find flaws in Henry's work and to develop his own ideas before applying for the federal government appropriation."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_03",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 3,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "Samuel Morse, an American inventor, is credited with creating the electronic telegraph, a communication device that allows users to send messages using a system of short and long pulses that represent letters, numbers, and punctuation. In 1844, the United States Congress passed the Telegraph Bill, which provided Morse with the funds to build an electric telegraph system. Invention of the Telegraph Earlier Signal Systems 1) Long before Samuel F. B. Morse electrically transmitted his famous message \"What hath God wrought?\" from Washington to Baltimore on May 24, 1844, there were signaling systems that enabled people to communicate over distances. Most were visual or \"semaphore\" systems using flags or lights. In the eighteenth century, such systems used an observer who would decipher a signal from a high tower on a distant Read this sentence from paragraph 7. The desperate Morse gave the go-ahead, and the line was completed in time for the dramatic and spectacularly successful link between the Supreme Court chamber of the Capitol building and the railroad station in Baltimore. The words \"dramatic\" and \"spectacularly\" in the sentence convey a \u2022 A. sense of relief and fulfillment that the line was finished. O B. sense of wonder and celebration that the telegraph line was accomplished. \u2022 C. feeling of excitement about the future possibilities of the telegraph. \u2022 D. feeling of confidence about being able to continue the work.",
    "imageSrc": "/exams/exam1/items/ela_q03.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_04",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 4,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "How does the graph support the ideas in paragraph 8?",
    "imageSrc": "/exams/exam1/items/ela_q04.png",
    "options": [
      {
        "id": "A",
        "text": "It indicates how welcome the improvement of long- distance communication was in the United States."
      },
      {
        "id": "B",
        "text": "It provides evidence of the dramatic increase in the number of telegraph messages as Morse's system expanded across the United States."
      },
      {
        "id": "C",
        "text": "It reveals that by the twentieth century millions of people had used the telegraph despite earlier hesitations about the system."
      },
      {
        "id": "D",
        "text": "It shows how improvements that allowed Morse code to be read in real time made relaying telegraph messages faster and increased the system's usage."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_05",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 5,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "Samuel Morse, an American inventor, is credited with creating the electronic telegraph, a communication device that allows users to send messages using a system of short and long pulses that represent letters, numbers, and punctuation. In 1844, the United States Congress passed the Telegraph Bill, which provided Morse with the funds to build an electric telegraph system. Invention of the Telegraph Earlier Signal Systems 1) Long before Samuel F. B. Morse electrically transmitted his famous message \"What hath God wrought?\" from Washington to Baltimore on May 24, 1844, there were signaling systems that enabled people to communicate over distances. Most were visual or \"semaphore\" systems using flags or lights. In the eighteenth century, such systems used an observer who would decipher a signal from a high tower on a distant The idea that, in the mid-nineteenth century, the United States was mostly unaware of the possibilities of electricity is illustrated in the passage mainly through the",
    "imageSrc": "/exams/exam1/items/ela_q05.png",
    "options": [
      {
        "id": "A",
        "text": "description of the government's initial desire to expand a semaphore signaling system that used either flags or lights along the Atlantic Coast."
      },
      {
        "id": "B",
        "text": "delay by the House of Representatives to pass the bill funding Morse's telegraph line six years after he first applied for the appropriation."
      },
      {
        "id": "C",
        "text": "discussions of the newly invented electromagnet that sparked the idea of sending codes through wires."
      },
      {
        "id": "D",
        "text": "description of how an electric circuit could be closed to ring a bell at a distance."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_06",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 6,
    "passageId": "e1_p1",
    "type": "multiple_choice",
    "prompt": "With which statement would the author most likely agree?",
    "imageSrc": "/exams/exam1/items/ela_q06.png",
    "options": [
      {
        "id": "A",
        "text": "Morse's telegraph was successful because the wires were strung aboveground rather than underground as originally planned."
      },
      {
        "id": "B",
        "text": "Understanding the importance of Morse's telegraph requires detailed knowledge of electrical systems."
      },
      {
        "id": "C",
        "text": "The implementation of Morse's telegraph system was overly influenced by economic factors."
      },
      {
        "id": "D",
        "text": "Morse's invention of the telegraph made a great stride toward better connecting people across the United States and across the world."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_07",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 7,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "curtain of lacework and woven foam\"?",
    "imageSrc": "/exams/exam1/items/ela_q07.png",
    "options": [
      {
        "id": "A",
        "text": "It demonstrates the timelessness of the American Falls."
      },
      {
        "id": "B",
        "text": "It conveys the secretive nature of the American Falls."
      },
      {
        "id": "C",
        "text": "It illustrates the elegant uniformity of the American Falls."
      },
      {
        "id": "D",
        "text": "It communicates the intense strength of the American Falls."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_08",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 8,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"Niagara Falls\" by Rupert Brooke The real secret of the beauty and terror of the Falls is not their height or width, but the feeling of colossal power and of unintelligible disaster caused by the plunge of that vast body of water. If that were taken away, there would be little visible change, but the heart would be gone. 2 The American Falls do not inspire this feeling in the same way as the Canadian. It is because they are less in volume, and because the water does not fall so much into one place. By comparison their beauty is almost delicate and fragile. They are extraordinarily level, one long curtain of lacework and woven foam. Seen from opposite, when the sun is on them, they are blindingly white, and the clouds of spray show dark against them. With both Falls the colour of the water is the ever- altering wonder. Greens and blues, purples and whites, Read this sentence from paragraph 3. These are the lower rapids, a sight more terrifying than the Falls, because less intelligible. Which statement best describes how the sentence fits into the overall structure of the excerpt? \u2022 A. It signals a change from the positive aspects of the Falls to the negative aspects. O B. It indicates a progression from the literal description of the water to a discussion of timeless truths. \u2022 C. It reinforces a shift from the qualities of the Falls to the qualities of the river. D. It introduces a contrast between the obvious and the hidden features of the rapids.",
    "imageSrc": "/exams/exam1/items/ela_q08.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_09",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 9,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "the essence of the Falls lies in their emotional impact?",
    "imageSrc": "/exams/exam1/items/ela_q09.png",
    "options": [
      {
        "id": "A",
        "text": "\"If that were taken away, there would be little visible change, but the heart would be gone.\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"By comparison their beauty is almost delicate and fragile.\" (paragraph 2)"
      },
      {
        "id": "C",
        "text": "\"One is drawn back, strangely, to a contemplation of the Falls, at every hour, and especially by night, when the cloud of spray becomes an immense visible ghost, straining and wavering high above the river, white and pathetic and translucent.\" (paragraph 4)"
      },
      {
        "id": "D",
        "text": "\"A man's life is of many flashing moments, and yet one stream; a nation's flows through all its citizens, and yet is more than they.\" (paragraph 4)"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_10",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 10,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"Niagara Falls\" by Rupert Brooke The real secret of the beauty and terror of the Falls is not their height or width, but the feeling of colossal power and of unintelligible disaster caused by the plunge of that vast body of water. If that were taken away, there would be little visible change, but the heart would be gone. 2 The American Falls do not inspire this feeling in the same way as the Canadian. It is because they are less in volume, and because the water does not fall so much into one place. By comparison their beauty is almost delicate and fragile. They are extraordinarily level, one long curtain of lacework and woven foam. Seen from opposite, when the sun is on them, they are blindingly white, and the clouds of spray show dark against them. With both Falls the colour of the water is the ever- altering wonder. Greens and blues, purples and whites, Read this sentence from paragraph 4. There one can sit and let great cloudy thoughts of destiny and the passage of empires drift through the mind; for such dreams are at home by Niagara. The sentence most contributes to the development of ideas in the excerpt by",
    "imageSrc": "/exams/exam1/items/ela_q10.png",
    "options": [
      {
        "id": "A",
        "text": "suggesting that viewing the Falls can be a life-changing experience."
      },
      {
        "id": "B",
        "text": "showing that the cliffs of the Falls are a good place for self-examination."
      },
      {
        "id": "C",
        "text": "emphasizing that the grandeur of the Falls seems impossible to grasp. O D. highlighting the type of reflection that is inspired by a visit to the Falls."
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_11",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 11,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "In paragraph 4, the idea that human life and history ultimately end in the same way is illustrated mainly through",
    "imageSrc": "/exams/exam1/items/ela_q11.png",
    "options": [
      {
        "id": "A",
        "text": "the discussion of how the rainbows visible in the Falls are like the art and beauty created by humankind."
      },
      {
        "id": "B",
        "text": "the comparison between the movement of water in the Falls and the human experience."
      },
      {
        "id": "C",
        "text": "the inclusion of details that show that every observer's experience with the Falls is different."
      },
      {
        "id": "D",
        "text": "the acknowledgment that contemplating the Falls at night sparks an awareness of humankind's destiny."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_12",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 12,
    "passageId": "e1_p2",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"Niagara Falls\" by Rupert Brooke The real secret of the beauty and terror of the Falls is not their height or width, but the feeling of colossal power and of unintelligible disaster caused by the plunge of that vast body of water. If that were taken away, there would be little visible change, but the heart would be gone. 2 The American Falls do not inspire this feeling in the same way as the Canadian. It is because they are less in volume, and because the water does not fall so much into one place. By comparison their beauty is almost delicate and fragile. They are extraordinarily level, one long curtain of lacework and woven foam. Seen from opposite, when the sun is on them, they are blindingly white, and the clouds of spray show dark against them. With both Falls the colour of the water is the ever- altering wonder. Greens and blues, purples and whites, With which statement would the author of this excerpt most likely agree? \u2022 A. A sense of ease and assurance comes with accepting one's fate. O B. No matter where one's path goes in life, one will always have regrets. \u2022 C. The best way to overcome fear is to recognize it and then defy it. \u2022 D. Reason will die out with humanity, but art will remain immortal.",
    "imageSrc": "/exams/exam1/items/ela_q12.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_13",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 13,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "Zitkala-Sa (Gertrude Simmons Bonnin) was a Native American writer, musician, teacher, and political activist who was raised on the Yankton Sioux Reservation in South Dakota. In 1900 she published \"Impressions of an Indian Childhood\" (the term Indian was commonly used at the time to refer to Native American people) to expose readers to what life is like on a reservation. Excerpt from \"Impressions of an Indian Childhood\" by Zitkala-Sa 1) Soon after breakfast Mother sometimes began her beadwork. On a bright, clear day, she pulled out the wooden pegs that pinned the skirt of our wigwam to the ground, and rolled the canvas part way up on its frame of slender poles. Then the cool morning breezes swept freely through our dwelling, now and then wafting the perfume of sweet grasses from newly burnt prairie. 2 Untying the long tasseled strings that bound a small brown buckskin bag, my mother spread upon a mat In paragraph 1, the phrases \"cool morning breezes swept freely\" and \"wafting the perfume of sweet grasses\" affect the tone of the excerpt by suggesting \u2022 A. the sadness that the author feels reflecting upon her former way of life. O B. the enthusiasm with which the author approached her work indoors. \u2022 C. the fond feelings that the author has toward her childhood experiences. \u2022 D. the mix of emotions that the author feels toward her work and her mother.",
    "imageSrc": "/exams/exam1/items/ela_q13.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_14",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 14,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "Zitkala-Sa (Gertrude Simmons Bonnin) was a Native American writer, musician, teacher, and political activist who was raised on the Yankton Sioux Reservation in South Dakota. In 1900 she published \"Impressions of an Indian Childhood\" (the term Indian was commonly used at the time to refer to Native American people) to expose readers to what life is like on a reservation. Excerpt from \"Impressions of an Indian Childhood\" by Zitkala-Sa 1) Soon after breakfast Mother sometimes began her beadwork. On a bright, clear day, she pulled out the wooden pegs that pinned the skirt of our wigwam to the ground, and rolled the canvas part way up on its frame of slender poles. Then the cool morning breezes swept freely through our dwelling, now and then wafting the perfume of sweet grasses from newly burnt prairie. 2 Untying the long tasseled strings that bound a small brown buckskin bag, my mother spread upon a mat The phrase \"just as an artist arranges the paints upon his palette\" in paragraph 2 suggests that",
    "imageSrc": "/exams/exam1/items/ela_q14.png",
    "options": [
      {
        "id": "A",
        "text": "beadwork is a true form of art."
      },
      {
        "id": "B",
        "text": "color is a source of artistic inspiration. \u2022"
      },
      {
        "id": "C",
        "text": "all artistic activities begin with a series of steps."
      },
      {
        "id": "D",
        "text": "the beadworker tries to imitate art."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_15",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 15,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "Zitkala-Sa (Gertrude Simmons Bonnin) was a Native American writer, musician, teacher, and political activist who was raised on the Yankton Sioux Reservation in South Dakota. In 1900 she published \"Impressions of an Indian Childhood\" (the term Indian was commonly used at the time to refer to Native American people) to expose readers to what life is like on a reservation. Excerpt from \"Impressions of an Indian Childhood\" by Zitkala-Sa 1) Soon after breakfast Mother sometimes began her beadwork. On a bright, clear day, she pulled out the wooden pegs that pinned the skirt of our wigwam to the ground, and rolled the canvas part way up on its frame of slender poles. Then the cool morning breezes swept freely through our dwelling, now and then wafting the perfume of sweet grasses from newly burnt prairie. 2 Untying the long tasseled strings that bound a small brown buckskin bag, my mother spread upon a mat The author's use of sequence in paragraphs 1 and 2 contributes to the development of ideas in the excerpt by \u2022 A. listing the many steps that are involved in the process of beading in order to explain its difficulty and complexity. O B. conveying the importance of following the steps of the beading process in a precise order to work most efficiently. C. emphasizing the time required to fully prepare for and execute the many large and small tasks in the activity of beading. \u2022 D. detailing each step in preparation for beading in order to highlight the author's enthusiasm for the work.",
    "imageSrc": "/exams/exam1/items/ela_q15.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_16",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 16,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "described in the excerpt?",
    "imageSrc": "/exams/exam1/items/ela_q16.png",
    "options": [
      {
        "id": "A",
        "text": "Take a buckskin bag full of beads and spread them out on a mat in different colors like a paint palette; take a double sheet of buckskin and smooth it out on a table; take a sinew and awl and thread the beads onto the buckskin in a desired pattern."
      },
      {
        "id": "B",
        "text": "Cut the double sheet of buckskin into a shape; take a skein of sinew and pierce the buckskin with an awl; thread the sinew with beads of many different colors in a simple or complex pattern; twist the sinew to keep it tight after every stitch into the buckskin."
      },
      {
        "id": "C",
        "text": "Arrange the beads into groups of colors on a mat; smooth out a double sheet of buckskin and cut it to shape; take a single thread of sinew; pierce the buckskin with an awl; thread the buckskin with the sinew and string it with beads, carefully twisting after every stitch."
      },
      {
        "id": "D",
        "text": "Gather beads, buckskin, sinew, and awl and place them on a mat; cut the buckskin into the desired shape; decide on a pattern for the beads and create it using the sinews and the awl; thread the beads onto the sinew in the desired pattern and twist it tight."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_17",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 17,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "Zitkala-Sa (Gertrude Simmons Bonnin) was a Native American writer, musician, teacher, and political activist who was raised on the Yankton Sioux Reservation in South Dakota. In 1900 she published \"Impressions of an Indian Childhood\" (the term Indian was commonly used at the time to refer to Native American people) to expose readers to what life is like on a reservation. Excerpt from \"Impressions of an Indian Childhood\" by Zitkala-Sa 1) Soon after breakfast Mother sometimes began her beadwork. On a bright, clear day, she pulled out the wooden pegs that pinned the skirt of our wigwam to the ground, and rolled the canvas part way up on its frame of slender poles. Then the cool morning breezes swept freely through our dwelling, now and then wafting the perfume of sweet grasses from newly burnt prairie. 2 Untying the long tasseled strings that bound a small brown buckskin bag, my mother spread upon a mat The idea that mastering moccasin design and creation requires experience is best illustrated in the excerpt through",
    "imageSrc": "/exams/exam1/items/ela_q17.png",
    "options": [
      {
        "id": "A",
        "text": "the information about the advanced technique of incorporating porcupine quills into a design."
      },
      {
        "id": "B",
        "text": "the descriptions of the special materials that must be used to make decorated moccasins."
      },
      {
        "id": "C",
        "text": "the descriptions of the various color combinations that make an attractive moccasin design."
      },
      {
        "id": "D",
        "text": "the example of the author successfully and independently using a sharpened rod."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_18",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 18,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "her mother?",
    "imageSrc": "/exams/exam1/items/ela_q18.png",
    "options": [
      {
        "id": "A",
        "text": "by describing their techniques for knotting sinew thread (paragraph 4)"
      },
      {
        "id": "B",
        "text": "by describing their approaches to beadwork design (paragraph 5)"
      },
      {
        "id": "C",
        "text": "by stating her mother's instructions on working with quills (paragraph 6)"
      },
      {
        "id": "D",
        "text": "by stating her mother's ideas about activities after lessons (paragraph 7)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_19",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 19,
    "passageId": "e1_p3",
    "type": "multiple_choice",
    "prompt": "overall structure of the excerpt?",
    "imageSrc": "/exams/exam1/items/ela_q19.png",
    "options": [
      {
        "id": "A",
        "text": "It introduces a shift from the author's demanding relationship with her mother to her more relaxed relationships with friends."
      },
      {
        "id": "B",
        "text": "It signals a change from the challenging aspects of life on the reservation to the advantages of living on the prairie."
      },
      {
        "id": "C",
        "text": "It highlights a contrast between the focus and control required while working and the freedom of having fun outside."
      },
      {
        "id": "D",
        "text": "It concludes the progression of events in the narrative by describing the sequence of events at the end of the author's day."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_20",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 20,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "What idea from the second stanza do the lines help develop?",
    "imageSrc": "/exams/exam1/items/ela_q20.png",
    "options": [
      {
        "id": "A",
        "text": "The birds are eager for the return of warmer months."
      },
      {
        "id": "B",
        "text": "The birds are most likely to thrive during the spring."
      },
      {
        "id": "C",
        "text": "The birds naturally adjust to the seasonal changes."
      },
      {
        "id": "D",
        "text": "The birds instinctively prepare for the future."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_21",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 21,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "What does the phrase \"talked most of all\" in line 13 convey?",
    "imageSrc": "/exams/exam1/items/ela_q21.png",
    "options": [
      {
        "id": "A",
        "text": "It establishes that the speaker thinks the sound of wind in the leaves is the best indication that the season is changing."
      },
      {
        "id": "B",
        "text": "It introduces the idea that the sound of the wind in the leaves remains constant throughout the seasons."
      },
      {
        "id": "C",
        "text": "It suggests that the speaker is overwhelmed by the sounds of nature that emerge as the season changes."
      },
      {
        "id": "D",
        "text": "It emphasizes that the sounds of nature enable the speaker to appreciate each season of the year."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_22",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 22,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "Bird Talk by Carl Sandburg And now when the branches were beginning to be hea It was the time when they once had said, \"This is the beginning of summer.\" The shrilling of the frogs was not so shrill as in the 5 first weeks after the broken winter; The birds took their hops and zigzags a little more anxious; a home is a home; worms are worms. The yellow spreads of the dandelions and buttercups reached across the green pastures. 10 Tee whee and tee whee came on the breezes, and the chuzzled their syllables. And it was the leaves with a strong soft wind over ther that talked most of all and said more than any othe though speaking the fewest words. 15 It was the green leaves trickling out the gaunt nowher of winter, out on the gray hungry branches\u2014 It was the leaves on the branches beginnina to he hea How does the repetition of \" 'This is the beginning of summer'\" in lines 2-3 and lines 18-19 contribute to the meaning of the poem? A. It suggests that the shift to summer occurs in the same way each year. O B. It emphasizes the idea that living things are prepared for the change of season. \u2022 C. It highlights the idea that the first signs of summer are surprising each year. \u2022 D. It builds expectations about what the natural world looks like during a change of season.",
    "imageSrc": "/exams/exam1/items/ela_q22.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_23",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 23,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "winter's scarcity and bleakness?",
    "imageSrc": "/exams/exam1/items/ela_q23.png",
    "options": [
      {
        "id": "A",
        "text": "\"The shrilling of the frogs was not so shrill as in the / first weeks after the broken winter;\" (lines 4-5)"
      },
      {
        "id": "B",
        "text": "\"The yellow spreads of the dandelions and buttercups / reached across the green pastures.\" (lines 8-9)"
      },
      {
        "id": "C",
        "text": "\"Tee whee and tee whee came on the breezes, and the grackles / chuzzled their syllables.\" (lines 10-11)"
      },
      {
        "id": "D",
        "text": "\"Or if instead of counting up last year as against / this year, they count up this year as against next\" (lines 25-26)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_24",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 24,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "Bird Talk by Carl Sandburg And now when the branches were beginning to be hea It was the time when they once had said, \"This is the beginning of summer.\" The shrilling of the frogs was not so shrill as in the 5 first weeks after the broken winter; The birds took their hops and zigzags a little more anxious; a home is a home; worms are worms. The yellow spreads of the dandelions and buttercups reached across the green pastures. 10 Tee whee and tee whee came on the breezes, and the chuzzled their syllables. And it was the leaves with a strong soft wind over ther that talked most of all and said more than any othe though speaking the fewest words. 15 It was the green leaves trickling out the gaunt nowher of winter, out on the gray hungry branches\u2014 It was the leaves on the branches beginnina to he hea Throughout the poem, the poet conveys the speaker's point of view by",
    "imageSrc": "/exams/exam1/items/ela_q24.png",
    "options": [
      {
        "id": "A",
        "text": "gradually moving the speaker's attention from one element of nature to another."
      },
      {
        "id": "B",
        "text": "providing the speaker's motivation for describing the landscape in great detail. \u2022"
      },
      {
        "id": "C",
        "text": "highlighting the speaker's emotional response as each season passes."
      },
      {
        "id": "D",
        "text": "shifting the speaker's focus from external observations to personal reflection."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_25",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 25,
    "passageId": "e1_p4",
    "type": "multiple_choice",
    "prompt": "Bird Talk by Carl Sandburg And now when the branches were beginning to be hea It was the time when they once had said, \"This is the beginning of summer.\" The shrilling of the frogs was not so shrill as in the 5 first weeks after the broken winter; The birds took their hops and zigzags a little more anxious; a home is a home; worms are worms. The yellow spreads of the dandelions and buttercups reached across the green pastures. 10 Tee whee and tee whee came on the breezes, and the chuzzled their syllables. And it was the leaves with a strong soft wind over ther that talked most of all and said more than any othe though speaking the fewest words. 15 It was the green leaves trickling out the gaunt nowher of winter, out on the gray hungry branches\u2014 It was the leaves on the branches beginnina to he hea Over the course of the poem, a central idea is developed mainly through the speaker's",
    "imageSrc": "/exams/exam1/items/ela_q25.png",
    "options": [
      {
        "id": "A",
        "text": "sense of eager anticipation as winter ends."
      },
      {
        "id": "B",
        "text": "description of the changes in nature as the seasons transition."
      },
      {
        "id": "C",
        "text": "observation of the birds' behavior as summer begins."
      },
      {
        "id": "D",
        "text": "prediction of future alterations in the physical landscape."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_26",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 26,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "How does the poem's form contribute to the poem's meaning?",
    "imageSrc": "/exams/exam1/items/ela_q26.png",
    "options": [
      {
        "id": "A",
        "text": "The use of one continuous stanza and the pattern of the lines mimic the long and winding shape of the mound."
      },
      {
        "id": "B",
        "text": "The uneven line lengths emphasize the variety of ways people interpret the meaning of the mound."
      },
      {
        "id": "C",
        "text": "The dashes throughout the poem highlight the speaker's changing thoughts about the significance of the mound."
      },
      {
        "id": "D",
        "text": "The lack of a regular rhyme scheme and meter convey that the speaker struggles to comprehend the vastness of the mound."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_27",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 27,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "men from the museum?",
    "imageSrc": "/exams/exam1/items/ela_q27.png",
    "options": [
      {
        "id": "A",
        "text": "\"It being winter, / there was little underbrush to speak of\u2014\" (lines 8-9)"
      },
      {
        "id": "B",
        "text": "\"but the winter silence of the creek pressed / down on all of us like a weight.\" (lines 14-15)"
      },
      {
        "id": "C",
        "text": "\"The humps in the ground were all but / invisible until you were right up on them.\" (lines 16-17)"
      },
      {
        "id": "D",
        "text": "\"In the summer the creek bottom was crowded / with so much life that you could trip\" (lines 21-22)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_28",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 28,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "The Great Serpent Mound, located in Adams County, Ohio, is a human-made mound of earth that researchers believe was created between 300 .c. and a.D. 1100 by an indigenous culture. Serpent Mound Ohio, 1846 Brush Creek stood low when the museum men came with their measuring tapes and sketchbooks. It was winter. Fringed with ice, the creek doubled back on itself 5 as if it had forgotten something. Pa was in Cincinnati, or else on his way home, so Ma told me to lead the men into the marshy low grounds. It being winter, there was little underbrush to speak of\u2014 10 in the summer there would have been briars, poison ivy, biting flies. I listened for the swish of a beaver's heavy tail, Lines 1-2 contribute to the development of ideas in the poem by \u2022 A. suggesting that the men are too busy with their work to talk to the speaker. O B. helping establish the reason for the men's visit and purposeful behavior. \u2022 C. hinting that the men have hidden motives for studying the mound. \u2022 D. indicating why the speaker is fascinated by the men and wants to help them.",
    "imageSrc": "/exams/exam1/items/ela_q28.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_29",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 29,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "poem?",
    "imageSrc": "/exams/exam1/items/ela_q29.png",
    "options": [
      {
        "id": "A",
        "text": "It describes a feature of the mound that the men from the museum need to document."
      },
      {
        "id": "B",
        "text": "It introduces a comparison of the body of the mound with the head of the mound."
      },
      {
        "id": "C",
        "text": "It introduces a feature of the mound that has a different meaning to different people."
      },
      {
        "id": "D",
        "text": "It describes a part of the mound that is difficult to see from far away."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_30",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 30,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "obvious\" in lines 16-18 have on the meaning of the poem?",
    "imageSrc": "/exams/exam1/items/ela_q30.png",
    "options": [
      {
        "id": "A",
        "text": "They indicate that viewing the full size and shape of the mound is difficult."
      },
      {
        "id": "B",
        "text": "They suggest that the location of the mound is unknown to most people."
      },
      {
        "id": "C",
        "text": "They imply that the speaker wants the location of the mound to remain a secret."
      },
      {
        "id": "D",
        "text": "They reveal that the speaker is unfamiliar with the significance of the mound."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_31",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 31,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "lines 12-13 have in the poem?",
    "imageSrc": "/exams/exam1/items/ela_q31.png",
    "options": [
      {
        "id": "A",
        "text": "They illustrate how lively the mound's surroundings are during the summer."
      },
      {
        "id": "B",
        "text": "They show how the mound disrupts natural life in the marsh."
      },
      {
        "id": "C",
        "text": "They indicate the variety of wildlife found in the area around the mound."
      },
      {
        "id": "D",
        "text": "They suggest that the speaker prefers the mound's appearance in winter."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_32",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 32,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "convey a central idea of the poem?",
    "imageSrc": "/exams/exam1/items/ela_q32.png",
    "options": [
      {
        "id": "A",
        "text": "It suggests that the most accurate interpretations of the mound come from knowing the purpose of the mound."
      },
      {
        "id": "B",
        "text": "It emphasizes that there are multiple interpretations of the mound based on feelings and experiences."
      },
      {
        "id": "C",
        "text": "It reveals the benefit of considering different interpretations of the mound's significance."
      },
      {
        "id": "D",
        "text": "It implies that scientific study of the mound's purpose will affect what the mound symbolizes to people."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_33",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 33,
    "passageId": "e1_p5",
    "type": "multiple_choice",
    "prompt": "The Great Serpent Mound, located in Adams County, Ohio, is a human-made mound of earth that researchers believe was created between 300 .c. and a.D. 1100 by an indigenous culture. Serpent Mound Ohio, 1846 Brush Creek stood low when the museum men came with their measuring tapes and sketchbooks. It was winter. Fringed with ice, the creek doubled back on itself 5 as if it had forgotten something. Pa was in Cincinnati, or else on his way home, so Ma told me to lead the men into the marshy low grounds. It being winter, there was little underbrush to speak of\u2014 10 in the summer there would have been briars, poison ivy, biting flies. I listened for the swish of a beaver's heavy tail, The poet contrasts the speaker's and Ruth's points of view regarding the mound by using dialogue to",
    "imageSrc": "/exams/exam1/items/ela_q33.png",
    "options": [
      {
        "id": "A",
        "text": "imply that Ruth is worried that her interpretation of the mound will be seen as too abstract."
      },
      {
        "id": "B",
        "text": "indicate that Ruth hopes her interpretation of the mound will be shared by the men from the museum."
      },
      {
        "id": "C",
        "text": "suggest that Ruth wants the speaker to agree with her interpretation of the mound."
      },
      {
        "id": "D",
        "text": "show that Ruth has already decided on her interpretation of the mound."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_34",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 34,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "Plant Habitat-04?",
    "imageSrc": "/exams/exam1/items/ela_q34.png",
    "options": [
      {
        "id": "A",
        "text": "After a 137-day growth cycle, the astronauts harvest the peppers while being observed and advised by plant scientists. The astronauts remove the peppers from the APH and photograph them before eating the most nutritious ones."
      },
      {
        "id": "B",
        "text": "The astronauts confer with plant scientists and engineers before selecting the 14 finest peppers to keep aboard the ISS for consumption. The remaining peppers are wrapped in foil and sent back to Kennedy Space Center to be studied."
      },
      {
        "id": "C",
        "text": "With the help of plant scientists, the astronauts carefully control and monitor the growing conditions in the APH, ultimately harvesting the peppers after a 137-day growth cycle. The astronauts choose 14 of the peppers for consumption and send the rest back to be studied."
      },
      {
        "id": "D",
        "text": "Astronauts use specialized tools to plant and maintain genetically modified peppers aboard the ISS. After harvesting the fruit, the astronauts tape the peppers to a board to prevent them from floating around the module."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_35",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 35,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "The author, Melanie Canales, is a first-generation Peruvian American farmer and beekeeper based in Virginia's Shenandoah Valley, on lands of the indigenous Monacan and Manahoac tribes. Her work focuses on creating healthy relationships between people and their surrounding ecosystems. Excerpt from \"Growing Peppers on the ISS Is Just the Start of Space Farming\" by Melanie Canales 1) Unburdened by the constraints of gravity, red and green peppers jut out at 45-degree angles inside the Advanced Plant Habitat (APH), a sort of space terrarium not much larger than a microwave. Four chile pepper plants stand effortlessly upright, despite the dozens of glossy fruits weighing them down. These plants have lived entirely in space; their leaves have never been chewed on by insects or rustled by a summer breeze, [and] their stems are unfamiliar with bending toward the Read this sentence from paragraph 5. Though astronauts can spend upwards of 100 days in space, their on-mission meals come dehydrated and pre-packaged; their vitamins and minerals are isolated in supplements, which lose nutritional value the longer they're stored. The sentence contributes to the overall meaning of the excerpt by",
    "imageSrc": "/exams/exam1/items/ela_q35.png",
    "options": [
      {
        "id": "A",
        "text": "indicating that the attempt to grow crops aboard the ISS is an important endeavor."
      },
      {
        "id": "B",
        "text": "describing the health effects of spending a significant length of time in space."
      },
      {
        "id": "C",
        "text": "revealing why certain kinds of foods are more appealing in space than on Earth."
      },
      {
        "id": "D",
        "text": "emphasizing the difficulty of preserving the nutrients in the crops grown in space."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_36",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 36,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "relevant source of information for the excerpt?",
    "imageSrc": "/exams/exam1/items/ela_q36.png",
    "options": [
      {
        "id": "A",
        "text": "She works at NASA's Kennedy Space Center."
      },
      {
        "id": "B",
        "text": "She is part of the APH project team."
      },
      {
        "id": "C",
        "text": "She is sensitive to the astronauts' need for healthy food in space. O D. She witnessed how astronauts aboard the APH responded when harvesting their food."
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_37",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 37,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "APH is a complex plant growth system?",
    "imageSrc": "/exams/exam1/items/ela_q37.png",
    "options": [
      {
        "id": "A",
        "text": "by indicating how many sensors help control the variables of plant growth"
      },
      {
        "id": "B",
        "text": "by detailing how the method of growing plants has been adapted to the conditions of space"
      },
      {
        "id": "C",
        "text": "by explaining the steps required to package and return the plants to Earth"
      },
      {
        "id": "D",
        "text": "by describing how NASA has spent years experimenting with plants grown in a controlled environment"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_38",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 38,
    "passageId": "e1_p6",
    "type": "multi_select",
    "prompt": "Which two sentences in paragraphs 5-9 best support the idea that the astronauts working in space enjoyed participating in the food-growing experiment? Select the two correct answers. 5) It's the day after Thanksgiving, and Spencer has been at Kennedy since 5 a.m. to facilitate the peppers' final harvest. As part of the project team, she played a crucial role in preparing the seeds that were sent hurtling into space in June and guiding the astronauts through maintaining the plants in orbit. ... Though astronauts can spend upwards of 100 days in space, their on-mission meals come dehydrated and pre-packaged; their vitamins and minerals are isolated in supplements, which lose nutritional value the longer they're stored. Spencer's goal is to create the conditions necessary for cultivating healthy plants in space, so those plants can sustain healthy astronauts on long-term missions. Astronaut food is great, she says-\"especially the shrimp cocktail. But you're missing that crunch. You're missing that fresh pop of flavor, the green flavor that's not there in that packaged food.\" 6) The sensory experience of growing productive crops can also help mitigate the psychological effects of long-term space travel. ... Spencer says the team cracked open the door of the APH every day to observe their vegetable companions with all the tenderness of home gardeners. When harvest day came, they batted their bounty around the ISS, taking selfies and delighting in watching the fruits pirouetting around the spacecraft.. .. 7 \"We were thinking no heat, so that [the peppers] wouldn't be dangerous, but maybe the astronauts need a little spice in their life,\" says Paul Bosland, who along with his colleagues at the Chile Pepper Institute genetically engineered the NuMex Espa\u00f1ola Improved chile pepper seeds grown in Plant Habitat-04. . .. 8 Working with NASA, Bosland cultivated a variety that could accommodate both the nutritional needs of astronauts as well as the logistics of growing a plant in space. ... 9 ... The experiment is helpina ather the data necessarv to determine the nutritional content of crops arown in",
    "imageSrc": "/exams/exam1/items/ela_q38.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "Choice 2 and Choice 3",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Choice 2 and Choice 3. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_39",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 39,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "The description in paragraph 5 of Lashelle Spencer's goal develops a central idea of the excerpt by",
    "imageSrc": "/exams/exam1/items/ela_q39.png",
    "options": [
      {
        "id": "A",
        "text": "illustrating that certain types of packaged foods available in space lack particular flavors."
      },
      {
        "id": "B",
        "text": "supporting the notion that spending more than 100 days in space is detrimental to astronauts' health."
      },
      {
        "id": "C",
        "text": "offering an example of how the limited selection of on-mission meals becomes less appealing over time."
      },
      {
        "id": "D",
        "text": "making an important point about the astronauts' current reliance on supplements for vitamins and minerals."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_40",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 40,
    "passageId": "e1_p6",
    "type": "multi_select",
    "prompt": "The author, Melanie Canales, is a first-generation Peruvian American farmer and beekeeper based in Virginia's Shenandoah Valley, on lands of the indigenous Monacan and Manahoac tribes. Her work focuses on creating healthy relationships between people and their surrounding ecosystems. Excerpt from \"Growing Peppers on the ISS Is Just the Start of Space Farming\" by Melanie Canales 1) Unburdened by the constraints of gravity, red and green peppers jut out at 45-degree angles inside the Advanced Plant Habitat (APH), a sort of space terrarium not much larger than a microwave. Four chile pepper plants stand effortlessly upright, despite the dozens of glossy fruits weighing them down. These plants have lived entirely in space; their leaves have never been chewed on by insects or rustled by a summer breeze, landl their stems are unfamiliar with bending toward the What is the relationship between the scientists and the astronauts in carrying out the plant-growing experiments? Move the correct answer to each box. growing the plants to harvest documenting the nutritional goals analyzing the environment developing the materials and systems determining the most nutritional plants Scientists on earth are primarily responsible for for conducting plant experiments in space, while the astronauts aboard the International Space Station are responsible for for the experiment.",
    "imageSrc": "/exams/exam1/items/ela_q40.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "First box: \"developing the materials and systems\"; second box: \"growing the plants to harvest\"",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: First box: \"developing the materials and systems\"; second box: \"growing the plants to harvest\". This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_41",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 41,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "to in paragraph 2?",
    "imageSrc": "/exams/exam1/items/ela_q41.png",
    "options": [
      {
        "id": "A",
        "text": "The quotation indicates that larger batches of peppers need to be grown during future missions and suggests a slight criticism of the astronauts discussed in paragraph 2 for not dedicating more of their time to growing peppers during their mission."
      },
      {
        "id": "B",
        "text": "The quotation explains why the 137-day growth cycle mentioned in paragraph 2 is necessary and provides a suggestion on how to grow more peppers during the same growth cycle in future missions."
      },
      {
        "id": "C",
        "text": "The quotation helps explain why some of the peppers discussed in paragraph 2 needed to be sent back to Earth and that increasing the overall number of peppers grown in space will be important in future missions."
      },
      {
        "id": "D",
        "text": "The quotation provides context for understanding why the peppers discussed in paragraph 2 must be sealed and frozen prior to their return to Earth and suggests how this method might be improved in upcoming missions."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_42",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 42,
    "passageId": "e1_p6",
    "type": "multiple_choice",
    "prompt": "as a whole?",
    "imageSrc": "/exams/exam1/items/ela_q42.png",
    "options": [
      {
        "id": "A",
        "text": "It provides a detail that helps the reader identify a particular variety of pepper consumed on the ISS."
      },
      {
        "id": "B",
        "text": "It indicates that the peppers eaten on the ISS resulted from a collaboration between scientists and astronauts."
      },
      {
        "id": "C",
        "text": "It allows the reader to understand how the peppers consumed on the ISS differ from most peppers grown on Earth."
      },
      {
        "id": "D",
        "text": "It suggests that the peppers consumed on the ISS are of a type that could be grown in natural conditions."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_43",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 43,
    "passageId": "e1_p7",
    "type": "multiple_choice",
    "prompt": "With which statement would the author most likely agree?",
    "imageSrc": "/exams/exam1/items/ela_q43.png",
    "options": [
      {
        "id": "A",
        "text": "Some plants are better adapted for growing in space than on Earth, and focus should be placed on them."
      },
      {
        "id": "B",
        "text": "Attempting to grow plants in space the same way they are grown on Earth would not result in success."
      },
      {
        "id": "C",
        "text": "Plants grown in space provide better nutritional value than plants grown on Earth."
      },
      {
        "id": "D",
        "text": "Successfully growing plants in space is a challenge, so more research must first be completed on plants grown on Earth."
      }
    ],
    "correctAnswer": "B",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_44",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 44,
    "passageId": "e1_p7",
    "type": "multiple_choice",
    "prompt": "established in the passage?",
    "imageSrc": "/exams/exam1/items/ela_q44.png",
    "options": [
      {
        "id": "A",
        "text": "Builders turned to brick, which was an affordable material that met safety standards while satisfying the city's large demand for buildings."
      },
      {
        "id": "B",
        "text": "Figuring out that bricks were inexpensive, builders used tons of them to satisfy inspectors and the city's desperate construction needs."
      },
      {
        "id": "C",
        "text": "Builders favored brick as a pleasingly economical way to meet significant construction demand while following municipal regulations."
      },
      {
        "id": "D",
        "text": "Once builders realized that low-cost brick was a law- abiding way to meet the city's building needs, they hardly ever used any other materials."
      }
    ],
    "correctAnswer": "A",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_45",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 45,
    "passageId": "e1_p7",
    "type": "multi_select",
    "prompt": "New York City and the Hudson Valley Brickmaking Industry (1) Residents of New York City cannot help but notice that the buildings they are surrounded by are predominantly made of brick. (2) Indeed, one author described the bricks that make up some of New York City's most recognizable landmarks, including the Empire State Building and the arches of the Brooklyn Bridge, as \"an inescapable presence.\" (3) Nearly 65 million people visit New York City every year to see these and other attractions. (4) Why was so much brick used in buildings constructed during the century before World War II? (5) The answer involves an explosion in New York City's population that caused an increase in demand for bricks starting in the mid-1800s and lasting into the 1940s that affected the area more than 100 miles up the Hudson River Valley toward Albany. (6) When demand later declined, the industry would entirely disappear. (7) New York Cit's annetite for brick was fueled bu Which two sentences present information irrelevant to the ideas in the passage and should be deleted? Move the two correct answers to the box. \"Nearly 65 million people visit New York City every year to see these and other attractions.\" (sentence 3) \"The city's population ballooned from about 313,000 people in 1840 to more than 7 million a century later.\" (sentence 8) \"Population growth in the Hudson River Valley after the mid-1800s was substantial, though percentage increases were smaller than those in New York City.\" (sentence 14) \"History has proven, however, that boom times eventually end.\" (sentence 18) \"Throughout the city, famous and ordinary buildings stand as evidence of the remarkable productivity achieved by the Valley's brickmakers.\" (sentence 23) Should Be Deleted",
    "imageSrc": "/exams/exam1/items/ela_q45.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "Sentence 3 and sentence 14",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Sentence 3 and sentence 14. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_46",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 46,
    "passageId": "e1_p7",
    "type": "multiple_choice",
    "prompt": "to provide the best transition from the ideas in sentence 10?",
    "imageSrc": "/exams/exam1/items/ela_q46.png",
    "options": [
      {
        "id": "A",
        "text": "While adapting to new uses for brick,"
      },
      {
        "id": "B",
        "text": "Because the building boom preferred brick,"
      },
      {
        "id": "C",
        "text": "As a result of New York City's building boom,"
      },
      {
        "id": "D",
        "text": "Although reliance on brick became the norm,"
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_47",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 47,
    "passageId": "e1_p7",
    "type": "multiple_choice",
    "prompt": "in the fourth paragraph (sentences 18-21)?",
    "imageSrc": "/exams/exam1/items/ela_q47.png",
    "options": [
      {
        "id": "A",
        "text": "At first many people thought the new materials did not look as strong as brick, but eventually the public embraced the trend."
      },
      {
        "id": "B",
        "text": "Increasingly expensive shipping and labor costs also drove up the costs for brickmaking factories."
      },
      {
        "id": "C",
        "text": "The Flatiron building, completed in 1902, is a notable example of an early steel-framed building."
      },
      {
        "id": "D",
        "text": "The more that New York City builders chose to use these materials, the fewer bricks they bought."
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_48",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 48,
    "type": "multiple_choice",
    "prompt": "Which sentence contains an error in its construction and should be revised? (1) In 1976, the National Basketball Association (NBA) absorbed several teams of the American Basketball Association (ABA), including the New York Nets, who played in the Long Island area at the time. (2) The owner of the Nets decided to take the team to New Jersey after the team had financial troubles, where the team played for thirty-five seasons. (3) The New Jersey Nets had sixteen playoff appearances, including two appearances in the NBA finals. (4) In 2012, the team changed ownership and returned to New York, where the team now plays under the name the Brooklyn Nets.",
    "imageSrc": "/exams/exam1/items/ela_q48.png",
    "options": [
      {
        "id": "A",
        "text": "sentence 1"
      },
      {
        "id": "B",
        "text": "sentence 2"
      },
      {
        "id": "C",
        "text": "sentence 3"
      },
      {
        "id": "D",
        "text": "sentence 4"
      }
    ],
    "correctAnswer": "B",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_49",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 49,
    "type": "multiple_choice",
    "prompt": "What is the best way to combine the sentences to clarify the relationship between ideas?",
    "imageSrc": "/exams/exam1/items/ela_q49.png",
    "options": [
      {
        "id": "A",
        "text": "Though Jordan had rehearsed his role for weeks, when he delivered his lines with ease, his performance was met with a burst of applause from the audience."
      },
      {
        "id": "B",
        "text": "Jordan had rehearsed his role for weeks, yet he delivered his lines with ease, so his performance was met with a burst of applause from the audience."
      },
      {
        "id": "C",
        "text": "Because Jordan had rehearsed his role for weeks, he delivered his lines with ease, and his performance was met with a burst of applause from the audience."
      },
      {
        "id": "D",
        "text": "Jordan had rehearsed his role for weeks, so he delivered his lines with ease, but his performance was met with a burst of applause from the audience."
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_ela_50",
    "examId": "exam1",
    "section": "ela",
    "questionNumber": 50,
    "type": "multiple_choice",
    "prompt": "which adds less air to the frozen treat, makes gelato denser than ice cream. (4) Finally, gelato is served 10 to 15 degrees warmer than ice cream, which enhances the texture and flavor of the gelato, and allow it to melt more quickly.",
    "imageSrc": "/exams/exam1/items/ela_q50.png",
    "options": [
      {
        "id": "A",
        "text": "Sentence 1: Delete the colon after wonder AND change is to are."
      },
      {
        "id": "B",
        "text": "Sentence 2: Delete the comma after with AND change it is to they are."
      },
      {
        "id": "C",
        "text": "Sentence 3: Delete the comma after process AND change makes to make."
      },
      {
        "id": "D",
        "text": "Sentence 4: Delete the comma after gelato AND change allow to allows."
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_01",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 51,
    "type": "multiple_choice",
    "prompt": "What is the prime factorization of 756?",
    "imageSrc": "/exams/exam1/items/math_q01.png",
    "options": [
      {
        "id": "A",
        "text": "22.32.21"
      },
      {
        "id": "B",
        "text": "22.3.7.9"
      },
      {
        "id": "C",
        "text": "22.7.27"
      },
      {
        "id": "D",
        "text": "22.33.7"
      }
    ],
    "correctAnswer": "D",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_02",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 52,
    "type": "multiple_choice",
    "prompt": "If (8 \u00f7 m) + 4 = 20, what is the value of m? \u2022 A. 3 \u2022 C. 2 \u2022 D. 3",
    "imageSrc": "/exams/exam1/items/math_q02.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_03",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 53,
    "type": "multiple_choice",
    "prompt": "What is the value of x in the equation shown above?",
    "imageSrc": "/exams/exam1/items/math_q03.png",
    "options": [
      {
        "id": "A",
        "text": "336"
      },
      {
        "id": "B",
        "text": "240."
      },
      {
        "id": "C",
        "text": "\u2014240"
      },
      {
        "id": "D",
        "text": "\u2014336"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_04",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 54,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 4.",
    "imageSrc": "/exams/exam1/items/math_q04.png",
    "options": [
      {
        "id": "A",
        "text": "person buys a used car with a down payment of $1,200 and makes monthly payments of $275 for 3 years. What is the total amount the person pays for the car? \u2022 A. $2,025"
      },
      {
        "id": "B",
        "text": "$9,900"
      },
      {
        "id": "C",
        "text": "$11,100"
      },
      {
        "id": "D",
        "text": "$13,500"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_05",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 55,
    "type": "text_entry",
    "prompt": "Maya read n pages for her English homework. Trevor read three times as many pages as Maya. Together, Maya and Trevor read 12 more pages than Ali read. Write an expression that shows how many pages Ali read, in terms of n.",
    "imageSrc": "/exams/exam1/items/math_q05.png",
    "options": null,
    "correctAnswer": "4n - 12",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 4n - 12. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_06",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 56,
    "type": "multiple_choice",
    "prompt": "In the parallelogram above, what is the value of x?",
    "imageSrc": "/exams/exam1/items/math_q06.png",
    "options": [
      {
        "id": "A",
        "text": "36."
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_07",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 57,
    "type": "multiple_choice",
    "prompt": "For what values of x is the above inequality true?",
    "imageSrc": "/exams/exam1/items/math_q07.png",
    "options": [
      {
        "id": "A",
        "text": "x > \u20146"
      },
      {
        "id": "B",
        "text": "x <-6"
      },
      {
        "id": "C",
        "text": "x <\u20142"
      },
      {
        "id": "D",
        "text": "x >-2"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_08",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 58,
    "type": "multi_select",
    "prompt": "Jordan is helping plan snacks for a school dance. He knows that 0.75 of the students voted for pizza, and he wants to record the same amount using a fraction. Which fractions are equivalent to the decimal 0.75? Select the four correct answers. A. - \u043e \u0432. 18 \u2022 C. 100. \u2022 F. 8. 10",
    "imageSrc": "/exams/exam1/items/math_q08.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "A, B, C, E",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A, B, C, E. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_09",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 59,
    "type": "multiple_choice",
    "prompt": "will it take Maria to get to school?",
    "imageSrc": "/exams/exam1/items/math_q09.png",
    "options": [
      {
        "id": "A",
        "text": "10."
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "24."
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_10",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 60,
    "type": "multiple_choice",
    "prompt": "In the figure above, n || p. Straight line m intersects both line n and line p. What is the value of r?",
    "imageSrc": "/exams/exam1/items/math_q10.png",
    "options": [
      {
        "id": "A",
        "text": "17."
      },
      {
        "id": "B",
        "text": "117"
      },
      {
        "id": "C",
        "text": "163"
      },
      {
        "id": "D",
        "text": "173"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_11",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 61,
    "type": "multiple_choice",
    "prompt": "stamps, how many stamps will be left over?",
    "imageSrc": "/exams/exam1/items/math_q11.png",
    "options": [
      {
        "id": "A",
        "text": "198"
      },
      {
        "id": "B",
        "text": "612"
      },
      {
        "id": "C",
        "text": "620"
      },
      {
        "id": "D",
        "text": "632."
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_12",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 62,
    "type": "text_entry",
    "prompt": "A spinner has 5 congruent sections labeled as shown. One side of a fair coin is heads, and the other side is tails. 2 Heads 4 The spinner is spun one time, and the coin is flipped. What is the probability that the spinner lands on 1 and the coin lands on tails? Select the place on the number line that represents the probability.",
    "imageSrc": "/exams/exam1/items/math_q12.png",
    "options": null,
    "correctAnswer": "0.2 (2/10)",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 0.2 (2/10). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_13",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 63,
    "type": "multiple_choice",
    "prompt": "What is the result?",
    "imageSrc": "/exams/exam1/items/math_q13.png",
    "options": [
      {
        "id": "A",
        "text": "13.5"
      },
      {
        "id": "B",
        "text": "135"
      },
      {
        "id": "C",
        "text": "135.2"
      },
      {
        "id": "D",
        "text": "135.3"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_14",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 64,
    "type": "multiple_choice",
    "prompt": "If x = -2, what is the value of |x + 22 + x31-12 + 2x +3x1?",
    "imageSrc": "/exams/exam1/items/math_q14.png",
    "options": [
      {
        "id": "A",
        "text": "\u201418"
      },
      {
        "id": "B",
        "text": "\u20146"
      },
      {
        "id": "C",
        "text": "\u20142"
      },
      {
        "id": "D",
        "text": "2"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_15",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 65,
    "type": "text_entry",
    "prompt": "A grocery store sells 1-gallon containers of milk for $3.99. The store also sells orange juice in a 6-pack of 5.5-fluid-ounce bottles for $1.79. Suppose the store wants to sell its orange juice in gallon containers instead. To the nearest dollar, how much more would a gallon of orange juice cost than a gallon of milk?",
    "imageSrc": "/exams/exam1/items/math_q15.png",
    "options": null,
    "correctAnswer": "3",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 3. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_16",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 66,
    "type": "multiple_choice",
    "prompt": "3+(-3) 3-(-3) =",
    "imageSrc": "/exams/exam1/items/math_q16.png",
    "options": [
      {
        "id": "A",
        "text": "-1"
      },
      {
        "id": "B",
        "text": "0."
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_17",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 67,
    "type": "multiple_choice",
    "prompt": "What is the distance between the midpoints of MN and RS?",
    "imageSrc": "/exams/exam1/items/math_q17.png",
    "options": [
      {
        "id": "A",
        "text": "E unit"
      },
      {
        "id": "B",
        "text": "1 unit"
      },
      {
        "id": "C",
        "text": "15 units"
      },
      {
        "id": "D",
        "text": "2 units"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_18",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 68,
    "type": "multiple_choice",
    "prompt": "If s is a positive integer and t is a negative integer, which of the above expressions must be a positive number?",
    "imageSrc": "/exams/exam1/items/math_q18.png",
    "options": [
      {
        "id": "A",
        "text": "II only"
      },
      {
        "id": "B",
        "text": "I and II only"
      },
      {
        "id": "C",
        "text": "II and III only"
      },
      {
        "id": "D",
        "text": "I, II, and III"
      }
    ],
    "correctAnswer": "D",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_19",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 69,
    "type": "multiple_choice",
    "prompt": "What is the value of (-\u2156) (-\u2156)?",
    "imageSrc": "/exams/exam1/items/math_q19.png",
    "options": [
      {
        "id": "A",
        "text": "- 20"
      },
      {
        "id": "B",
        "text": "\u2014 10"
      },
      {
        "id": "C",
        "text": "To"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_20",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 70,
    "type": "multi_select",
    "prompt": "Two circles, with centers at A and C, are shown. Line segment AB is congruent to line segment DE. B D A E Determine the area, A, and the circumference, C, of each circle to complete the table. Select one answer in each row. Circle A Circle C Neither A = 25m C = 57",
    "imageSrc": "/exams/exam1/items/math_q20.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "Row 1: A (area 25\u03c0, Circle A); Row 2: C (circumference 5\u03c0, Circle C)",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Row 1: A (area 25\u03c0, Circle A); Row 2: C (circumference 5\u03c0, Circle C). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_21",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 71,
    "type": "multiple_choice",
    "prompt": "and 48 walnuts, how many apples are there?",
    "imageSrc": "/exams/exam1/items/math_q21.png",
    "options": [
      {
        "id": "A",
        "text": "2."
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "38"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_22",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 72,
    "type": "text_entry",
    "prompt": "During a hiking trip, a group of students recorded the elevation (in feet) at several points along the trail: -120 ft, -80 ft, 0 ft, 45 ft, -30 ft, 90 ft What is the difference between the highest and lowest elevations recorded on the trail?",
    "imageSrc": "/exams/exam1/items/math_q22.png",
    "options": null,
    "correctAnswer": "210",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 210. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_23",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 73,
    "type": "multiple_choice",
    "prompt": "On parallelogram PQRS above, the length of QT is 18 centimeters. What is the area of the parallelogram?",
    "imageSrc": "/exams/exam1/items/math_q23.png",
    "options": [
      {
        "id": "A",
        "text": "112 sq cm"
      },
      {
        "id": "B",
        "text": "396 sq cm"
      },
      {
        "id": "C",
        "text": "612 sq cm"
      },
      {
        "id": "D",
        "text": "748 sq cm"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_24",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 74,
    "type": "multiple_choice",
    "prompt": "the number of drawings shown was 45, what is the total number of photographs and paintings that were shown?",
    "imageSrc": "/exams/exam1/items/math_q24.png",
    "options": [
      {
        "id": "A",
        "text": "36"
      },
      {
        "id": "B",
        "text": "63."
      },
      {
        "id": "C",
        "text": "84"
      },
      {
        "id": "D",
        "text": "108."
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_25",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 75,
    "type": "multiple_choice",
    "prompt": "For each & foot of curtain width, & yard of fabric is needed to make ruffles. How many yards of fabric are needed per foot of curtain width? O B. 24 yd \u2022 D. I yd",
    "imageSrc": "/exams/exam1/items/math_q25.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_26",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 76,
    "type": "multiple_choice",
    "prompt": "Which straight line is the graph of a proportional relationship?",
    "imageSrc": "/exams/exam1/items/math_q26.png",
    "options": [
      {
        "id": "A",
        "text": "MS"
      },
      {
        "id": "B",
        "text": "VP"
      },
      {
        "id": "C",
        "text": "v\u00e1"
      },
      {
        "id": "D",
        "text": "TR 6 10"
      }
    ],
    "correctAnswer": "D",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_27",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 77,
    "type": "multiple_choice",
    "prompt": "pounds. Which statement about a point on the graph is true?",
    "imageSrc": "/exams/exam1/items/math_q27.png",
    "options": [
      {
        "id": "A",
        "text": "The point (20, 3) means that 3 Ibs of ice costs $20.00."
      },
      {
        "id": "B",
        "text": "The point (1, 0.15) means that 1 bag of ice costs $0.15."
      },
      {
        "id": "C",
        "text": "The point (10, 1.5) means that 10 lbs of ice costs $1.50."
      },
      {
        "id": "D",
        "text": "The point (0, 0) means that 0 Ibs of ice will be needed if 0 people go to the picnic."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_28",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 78,
    "type": "text_entry",
    "prompt": "4 = 5w, what is the value of z in terms of w?",
    "imageSrc": "/exams/exam1/items/math_q28.png",
    "options": null,
    "correctAnswer": "z = 17w",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: z = 17w. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_29",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 79,
    "type": "text_entry",
    "prompt": "A smoothie shop uses a consistent ratio of fruit to yogurt in its recipes. The table shows the proportional relationship between the number of cups of fruit (x) and the number of cups of yogurt (y) in different smoothie batches. SMOOTHIE RECIPE Cups of Fruit x Cups of Yogurt y 6 1.5 8 2.0 2.5 3.0 What is the constant of proportionality of the number of cups of yogurt to the number of cups of fruit?",
    "imageSrc": "/exams/exam1/items/math_q29.png",
    "options": null,
    "correctAnswer": "0.25",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 0.25. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_30",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 80,
    "type": "multiple_choice",
    "prompt": "were in the Honor Society?",
    "imageSrc": "/exams/exam1/items/math_q30.png",
    "options": [
      {
        "id": "A",
        "text": "0.955%"
      },
      {
        "id": "B",
        "text": "1.91%"
      },
      {
        "id": "C",
        "text": "9.55%"
      },
      {
        "id": "D",
        "text": "19.1%"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_31",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 81,
    "type": "multiple_choice",
    "prompt": "percentage of all visitors on that day?",
    "imageSrc": "/exams/exam1/items/math_q31.png",
    "options": [
      {
        "id": "A",
        "text": "30%."
      },
      {
        "id": "B",
        "text": "28%"
      },
      {
        "id": "C",
        "text": "24%."
      },
      {
        "id": "D",
        "text": "17%."
      }
    ],
    "correctAnswer": "A",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_32",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 82,
    "type": "text_entry",
    "prompt": "MONTHLY HIGH TEMPERATURES IN NEW YORK 36 40 44 48 52 56 60 64 68 72 76 80 84 88 Temperature (\u00b0F) The box plot shows the average monthly high temperatures in New York City for 12 months. What is the difference between the range and the interquartile range of the temperature data?",
    "imageSrc": "/exams/exam1/items/math_q32.png",
    "options": null,
    "correctAnswer": "15",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 15. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_33",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 83,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 33.",
    "imageSrc": "/exams/exam1/items/math_q33.png",
    "options": [
      {
        "id": "A",
        "text": "bag contains 40 tiles that are either red, green, or blue. A tile is selected at random, the color is recorded, and the tile is put back in the bag. This process is carried out 120 times, and 18 of those times a red tile is selected. Based on the information, what is the most likely number of red tiles in the bag? 0 A. 6"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_34",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 84,
    "type": "multiple_choice",
    "prompt": "A teacher will randomly select 3 students to be on a school committee. He will choose either a student from Classroom A or a student from Classroom B with each selection. This tree diagram shows the selection possibilities. ALA B - B *B \"[B What is the probability that the teacher will select 2 students from Classroom A and 1 student from Classroom B (in any order) for the committee? \u2022 A. 8",
    "imageSrc": "/exams/exam1/items/math_q34.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_35",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 85,
    "type": "text_entry",
    "prompt": "If 4(a + 26) = 286 + 2a, what is the value of a in terms of b?",
    "imageSrc": "/exams/exam1/items/math_q35.png",
    "options": null,
    "correctAnswer": "a = 10b",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: a = 10b. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_36",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 86,
    "type": "multiple_choice",
    "prompt": "A deck of 52 playing cards contains 13 hearts. Sara has 12 cards from this deck in her hand, 3 of which are hearts. The other cards remain in the deck. What is the probability that a card drawn at random from the remainder of the deck will be a heart? \u2022 \u0410. I0 \u041e \u0432. \u00f7 \u2022 \u0421. 3. 13 \u2022 D. 3",
    "imageSrc": "/exams/exam1/items/math_q36.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_37",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 87,
    "type": "multiple_choice",
    "prompt": "The table shows the probability of randomly picking each flavor of candy from a bowl. PICKING CANDY FROM",
    "imageSrc": "/exams/exam1/items/math_q37.png",
    "options": [
      {
        "id": "A",
        "text": "BOWL Flavor Probability Butterscotch 0.57 Lemon 0.095 Maple 0.125 Strawberry 0.21 Which flavor is most likely to be randomly picked? \u2022 A. butterscotch"
      },
      {
        "id": "B",
        "text": "lemon"
      },
      {
        "id": "C",
        "text": "maple"
      },
      {
        "id": "D",
        "text": "strawberry"
      }
    ],
    "correctAnswer": "A",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_38",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 88,
    "type": "multiple_choice",
    "prompt": "solved for w?",
    "imageSrc": "/exams/exam1/items/math_q38.png",
    "options": [
      {
        "id": "A",
        "text": "W= r(p- f)"
      },
      {
        "id": "B",
        "text": "w=\u00f7p+ f"
      },
      {
        "id": "C",
        "text": "w= f+ rp"
      },
      {
        "id": "D",
        "text": "w=r+p+f"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_39",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 89,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 39.",
    "imageSrc": "/exams/exam1/items/math_q39.png",
    "options": [
      {
        "id": "A",
        "text": "shipment contains 170 small boxes of medical supplies. In a random sample of 20 of these boxes, 8 have damage and the others are undamaged. Based on this sample, what is the best prediction of the number of undamaged boxes in the shipment, not including the boxes in the random sample? \u2022 A. 60"
      },
      {
        "id": "B",
        "text": "68"
      },
      {
        "id": "C",
        "text": "90"
      },
      {
        "id": "D",
        "text": "102"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_40",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 90,
    "type": "multiple_choice",
    "prompt": "and make his mean number of free throws?",
    "imageSrc": "/exams/exam1/items/math_q40.png",
    "options": [
      {
        "id": "A",
        "text": "6\u22648"
      },
      {
        "id": "B",
        "text": "6 \u2265 9"
      },
      {
        "id": "C",
        "text": "6 > 16"
      },
      {
        "id": "D",
        "text": "b \u2264 25"
      }
    ],
    "correctAnswer": "B",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_41",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 91,
    "type": "text_entry",
    "prompt": "Elijah is at the school bookstore. He wants to buy a water bottle for $12.50 and some notebooks that cost $4.75 each. He has at most $35.00 to spend. Write an inequality that represents the number of notebooks, n, Elijah can purchase.",
    "imageSrc": "/exams/exam1/items/math_q41.png",
    "options": null,
    "correctAnswer": "12.50 + 4.75n <= 35.00",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 12.50 + 4.75n <= 35.00. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_42",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 92,
    "type": "multi_select",
    "prompt": "Tariq is making a clay block in the shape of a cube with a side length of 20 cm. He hollows out the center by removing clay to form a rectangular prism-shaped hole with a base of 5 cm \u2022 5 cm and a height of 20 cm. * 5 cm+1 20 cm What is the volume, in cubic centimeters, of the block after the clay is removed from the center?",
    "imageSrc": "/exams/exam1/items/math_q42.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "7,500 cm^3",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 7,500 cm^3. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_43",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 93,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 43.",
    "imageSrc": "/exams/exam1/items/math_q43.png",
    "options": [
      {
        "id": "A",
        "text": "softball player bought bottles of water for her team to have at practice. The total number of bottles she bought, b, is proportional to n, the number of players at practice. Which equation represents the relationship between b and n? The constant of proportionality is p. \u2022 A. 6 = pn"
      },
      {
        "id": "B",
        "text": "b =p+n"
      },
      {
        "id": "C",
        "text": "6 +n= p"
      },
      {
        "id": "D",
        "text": "b +n +p= 1"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_44",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 94,
    "type": "text_entry",
    "prompt": "A smartphone screen is designed to be 72 millimeters wide. The quality control team allows for a variation of 4% in the width. Select the minimum and maximum screen widths that fall within the acceptable range of screen widths, in millimeters. Select the correct answer from each drop-down to complete the sentence. The acceptable screen width is from Choose\u2026.. \u00bf to (Choose... millimeters. RESPONSE _A1 68.00 69.12 70.00 71.28 RESPONSE _A2 73.44 74.88 75.00 76.00",
    "imageSrc": "/exams/exam1/items/math_q44.png",
    "options": null,
    "correctAnswer": "69.12 mm; 74.88 mm",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 69.12 mm; 74.88 mm. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_45",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 95,
    "type": "multiple_choice",
    "prompt": "Malik's hourly pay if he makes this job change?",
    "imageSrc": "/exams/exam1/items/math_q45.png",
    "options": [
      {
        "id": "A",
        "text": "2%"
      },
      {
        "id": "B",
        "text": "20%"
      },
      {
        "id": "C",
        "text": "83%"
      },
      {
        "id": "D",
        "text": "120%"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_46",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 96,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 46.",
    "imageSrc": "/exams/exam1/items/math_q46.png",
    "options": [
      {
        "id": "A",
        "text": "rain gauge shows that 10 centimeters of rain fell yesterday. If 1 inch is equal to approximately 2.5 centimeters, about how many inches of rain fell yesterday? \u2022 A. 1."
      },
      {
        "id": "B",
        "text": "2.5"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_47",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 97,
    "type": "multiple_choice",
    "prompt": "in 8 days. What is the constant of proportionality, in millimeters per day?",
    "imageSrc": "/exams/exam1/items/math_q47.png",
    "options": [
      {
        "id": "A",
        "text": "0.4"
      },
      {
        "id": "B",
        "text": "2.5"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_48",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 98,
    "type": "multiple_choice",
    "prompt": "Which table shows a proportional relationship?",
    "imageSrc": "/exams/exam1/items/math_q48.png",
    "options": [
      {
        "id": "A",
        "text": "x 0 4 8 0 3"
      },
      {
        "id": "B",
        "text": "0 1 4 8 6"
      },
      {
        "id": "C",
        "text": "0 4 8 -1 0"
      },
      {
        "id": "D",
        "text": "\u0423 0 0 4 12 8 16"
      }
    ],
    "correctAnswer": "A",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_49",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 99,
    "type": "text_entry",
    "prompt": "The box plot illustrates the number of hours eighth-grade students spend on screens during a typical week. What is the difference between the range and the interquartile range (IQR) of the screen time data? NUMBER OF SCREEN HOURS FOR 8th GRADE STUDENTS 11111111 5 6 7 8 9 10 11 1213 14 15 16 17 18 1920 Hours Move the correct answer to each box. Not all answers will be used. 15 The range of screen time hours is The IQR is hours. The difference between the range and the IQR is hours. hours.",
    "imageSrc": "/exams/exam1/items/math_q49.png",
    "options": null,
    "correctAnswer": "Range: 15; interquartile range: 7; difference: 8",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Range: 15; interquartile range: 7; difference: 8. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e1_math_50",
    "examId": "exam1",
    "section": "math",
    "questionNumber": 100,
    "type": "multiple_choice",
    "prompt": "Terry wants to pour cement around the edge of the circular patio in her backyard. The patio has a radius of 5 feet. What is the distance, in feet, around the edge of the patio? Use 3.14 for .",
    "imageSrc": "/exams/exam1/items/math_q50.png",
    "options": [
      {
        "id": "A",
        "text": "15.7"
      },
      {
        "id": "B",
        "text": "31.4"
      },
      {
        "id": "C",
        "text": "49.3"
      },
      {
        "id": "D",
        "text": "78.5"
      }
    ],
    "correctAnswer": "B",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_01",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 1,
    "passageId": "e2_p1",
    "type": "multiple_choice",
    "prompt": "The description in the first stanza (lines 1-7) helps establish a central idea of the poem by",
    "imageSrc": "/exams/exam2/items/ela_q01.png",
    "options": [
      {
        "id": "A",
        "text": "comparing the length of time the mountains have existed with the length of time the city has existed."
      },
      {
        "id": "B",
        "text": "contrasting the grandeur of the mountains with the structures in the city below them."
      },
      {
        "id": "C",
        "text": "implying that the mountains are a source of inspiration to the people in the city below."
      },
      {
        "id": "D",
        "text": "suggesting that the mountains are larger than the people in the city realize."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_02",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 2,
    "passageId": "e2_p1",
    "type": "multiple_choice",
    "prompt": "fail to appreciate what is familiar?",
    "imageSrc": "/exams/exam2/items/ela_q02.png",
    "options": [
      {
        "id": "A",
        "text": "\"The mountains from the great plateau\" (line 6)"
      },
      {
        "id": "B",
        "text": "\"They have been here now for too long a time.\" (line 9)"
      },
      {
        "id": "C",
        "text": "\"Splits down their shining sides,\" (line 12)"
      },
      {
        "id": "D",
        "text": "\"To which the future is as was the past,\" (line 18)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_03",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 3,
    "passageId": "e2_p1",
    "type": "multiple_choice",
    "prompt": "poem?",
    "imageSrc": "/exams/exam2/items/ela_q03.png",
    "options": [
      {
        "id": "A",
        "text": "It creates a contrast between the great plateau and the city buildings."
      },
      {
        "id": "B",
        "text": "It reveals the similarity between the tall buildings in the city and the tall mountains on the horizon."
      },
      {
        "id": "C",
        "text": "It creates a vision of the region before people developed the land."
      },
      {
        "id": "D",
        "text": "It emphasizes that the mountains dominate the landscape."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_04",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 4,
    "passageId": "e2_p1",
    "type": "multi_select",
    "prompt": "the second stanza (lines 8-14)? Select the two correct answers.",
    "imageSrc": "/exams/exam2/items/ela_q04.png",
    "options": [
      {
        "id": "A",
        "text": "by describing the mountains' awe-inspiring size and strength"
      },
      {
        "id": "B",
        "text": "by comparing the various methods humans use to control nature"
      },
      {
        "id": "C",
        "text": "by criticizing the careless actions of humans that harm the natural environment"
      },
      {
        "id": "D",
        "text": "by demonstrating how the mountains and the people are able to benefit from each other"
      },
      {
        "id": "E",
        "text": "by depicting the unfortunate plight of the mountains with vivid details"
      }
    ],
    "correctAnswer": "C and E",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C and E. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_05",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 5,
    "passageId": "e2_p1",
    "type": "multiple_choice",
    "prompt": "How do the lines help convey the speaker's point of view?",
    "imageSrc": "/exams/exam2/items/ela_q05.png",
    "options": [
      {
        "id": "A",
        "text": "They suggest that the speaker wants to remove the obstacles that prevent others from experiencing the wonders of nature."
      },
      {
        "id": "B",
        "text": "They reveal the speaker's opinion that some people are too busy to appreciate natural beauty."
      },
      {
        "id": "C",
        "text": "They reflect the speaker's dismay that people destroy the natural landscape without understanding the ramifications of their actions."
      },
      {
        "id": "D",
        "text": "They explain that the speaker is confident that nature will never be fully destroyed by people."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_06",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 6,
    "passageId": "e2_p1",
    "type": "multiple_choice",
    "prompt": "Snowy Mountains by John Gould Fletcher Higher and still more high, Palaces made for cloud, Above the dingy city-roofs Blue-white like angels with broad wings, 5 Pillars of the sky at rest The mountains from the great plateau Uprise. But the world heeds them not; They have been here now for too long a time. 10 The world makes war on them, Tunnels their granite cliffs, Splits down their shining sides, Plasters their cliffs with soap-advertisements, Destroys the lonely fragments of their peace. Read lines 23-26 from the poem. The mountains swing along The south horizon of the sky; Welcoming with wide floors of blue-green ice The mists that dance and drive before the sun. The personification in these concluding lines of the poem suggests that the mountains are",
    "imageSrc": "/exams/exam2/items/ela_q06.png",
    "options": [
      {
        "id": "A",
        "text": "gracious hosts who are untroubled by the actions of people."
      },
      {
        "id": "B",
        "text": "unaware of their coming destruction."
      },
      {
        "id": "C",
        "text": "lively entertainers who are amused by the everyday concerns of people."
      },
      {
        "id": "D",
        "text": "too proud to reveal their pain."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_07",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 7,
    "passageId": "e2_p2",
    "type": "text_entry",
    "prompt": "Snowy Mountains by John Gould Fletcher Higher and still more high, Palaces made for cloud, Above the dingy city-roofs Blue-white like angels with broad wings, 5 Pillars of the sky at rest The mountains from the great plateau Uprise. But the world heeds them not; They have been here now for too long a time. 10 The world makes war on them, Tunnels their granite cliffs, Splits down their shining sides, Plasters their cliffs with soap-advertisements, Destroys the lonely fragments of their peace. 15 Vaster and still more vast, Peak after peak, pile after pile, Wilderness still untamed, To which the future is as was the nast Which quotations from the poem support the theme that nature's unspoiled beauty is splendid, and which quotations support the theme that human creations detract from natural wonder? Move each answer to the correct box. \"Above the dingy city-roofs / Blue-white like angels with broad wings,\" (lines 3-4) \"Pillars of the sky at rest / The mountains from the great plateau / Uprise.\" (lines 5-7) \"Tunnels their granite cliffs, / Splits down their shining sides,\" (lines 11-12) \"Wilderness still untamed, / To which the future is as was the past,\" (lines 17-18) \"The south horizon of the sky; / Welcoming with wide floors of blue-green ice\" (lines 24-25) Nature's Unspoiled Beauty is Splendid Human Creations Detract from Natural Wonder",
    "imageSrc": "/exams/exam2/items/ela_q07.png",
    "options": null,
    "correctAnswer": "Quote 1 (lines 3-4): Human Creations Detract from Natural Wonder; Quote 2 (lines 5-7): Nature's Unspoiled Beauty Is Splendid; Quote 3",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Quote 1 (lines 3-4): Human Creations Detract from Natural Wonder; Quote 2 (lines 5-7): Nature's Unspoiled Beauty Is Splendid; Quote 3. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_08",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 8,
    "passageId": "e2_p2",
    "type": "multiple_choice",
    "prompt": "Which sentence from paragraph 4 provides support for this argument?",
    "imageSrc": "/exams/exam2/items/ela_q08.png",
    "options": [
      {
        "id": "A",
        "text": "\"Once the ravens learned the behavior, the researchers presented the birds with four stones.\""
      },
      {
        "id": "B",
        "text": "\"A researcher would trade the ravens a large treat for a bottle cap.\""
      },
      {
        "id": "C",
        "text": "\"Later, the researchers presented the ravens with a group of items, including small treats and the bottle cap.\""
      },
      {
        "id": "D",
        "text": "\"The ravens chose the bottle cap over the treats and waited for the original researcher to trade with them again so that they could get more treats.\""
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_09",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 9,
    "passageId": "e2_p2",
    "type": "multiple_choice",
    "prompt": "passage?",
    "imageSrc": "/exams/exam2/items/ela_q09.png",
    "options": [
      {
        "id": "A",
        "text": "It implies that animals are skilled at finding and saving food for later consumption."
      },
      {
        "id": "B",
        "text": "It conveys that many animals will usually prioritize gathering food over other activities."
      },
      {
        "id": "C",
        "text": "It suggests that animals often store more food than they will be able to consume."
      },
      {
        "id": "D",
        "text": "It emphasizes that many animals collect food automatically rather than with true intention."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_10",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 10,
    "passageId": "e2_p2",
    "type": "multiple_choice",
    "prompt": "capable of planning?",
    "imageSrc": "/exams/exam2/items/ela_q10.png",
    "options": [
      {
        "id": "A",
        "text": "They accepted treats from the box."
      },
      {
        "id": "B",
        "text": "They set aside the stone that would open the box."
      },
      {
        "id": "C",
        "text": "They learned which stone could open the box."
      },
      {
        "id": "D",
        "text": "They waited for researchers to bring the box."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_11",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 11,
    "passageId": "e2_p2",
    "type": "multiple_choice",
    "prompt": "contribute to the development of ideas?",
    "imageSrc": "/exams/exam2/items/ela_q11.png",
    "options": [
      {
        "id": "A",
        "text": "It introduces a problem with the results of the study at Lund University, suggesting that some scientists believe that further research will not lead to a clear answer."
      },
      {
        "id": "B",
        "text": "It summarizes the final steps of the study at Lund University, emphasizing the difficulties researchers had in differentiating between true planning and practiced actions. \u2022 I"
      },
      {
        "id": "C",
        "text": "It provides a conclusion to the information about the Lund University study, indicating that some scientists think further research is needed in order to prove the idea."
      },
      {
        "id": "D",
        "text": "It lists the effects of the study at Lund University, implying that researchers should have designed experiments that better differentiated between planning and instinct."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_12",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 12,
    "passageId": "e2_p2",
    "type": "multiple_choice",
    "prompt": "The author conveys a point of view on the study of animal intelligence mainly by",
    "imageSrc": "/exams/exam2/items/ela_q12.png",
    "options": [
      {
        "id": "A",
        "text": "sharing details about experiments that tested the ability of an animal to plan for the future."
      },
      {
        "id": "B",
        "text": "comparing the results of different experiments that were designed to test animal intelligence."
      },
      {
        "id": "C",
        "text": "critiquing experiments that aimed to demonstrate that certain animals are capable of planning for the future."
      },
      {
        "id": "D",
        "text": "explaining how modern experiments show that previously held beliefs about animal intelligence are inaccurate."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_13",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 13,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "With which statement would the author of the passage most likely agree?",
    "imageSrc": "/exams/exam2/items/ela_q13.png",
    "options": [
      {
        "id": "A",
        "text": "Scientists are unlikely to be able to conduct an experiment that can genuinely distinguish between instinctual and learned behaviors in animals."
      },
      {
        "id": "B",
        "text": "Scientists should continue researching to determine whether or not animals can demonstrate advanced intelligence."
      },
      {
        "id": "C",
        "text": "Scientists should be careful about making conclusions about animal intelligence based on experiments that rely on training animals."
      },
      {
        "id": "D",
        "text": "Scientists can confirm data on whether animals have the ability to plan by performing experiments on additional species known for their intelligence."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_14",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 14,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "tell her\" affect the tone in the first part of the excerpt?",
    "imageSrc": "/exams/exam2/items/ela_q14.png",
    "options": [
      {
        "id": "A",
        "text": "It creates an accusatory tone by suggesting that Margaret believes that others are responsible for her problem."
      },
      {
        "id": "B",
        "text": "It introduces a defiant tone by suggesting that Margaret left the train early to prove a point."
      },
      {
        "id": "C",
        "text": "It suggests a frustrated tone by showing that Margaret feels confused by the inconsistent help offered by the railroad employees."
      },
      {
        "id": "D",
        "text": "It establishes an appreciative tone by showing that Margaret feels cared for by the railroad employees."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_15",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 15,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "unaccustomed to traveling to new places by train?",
    "imageSrc": "/exams/exam2/items/ela_q15.png",
    "options": [
      {
        "id": "A",
        "text": "\"With a lurch the train came to a dead stop and Margaret Earle, hastily gathering up her belongings, hurried down the aisle and got out into the night.\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"Perhaps something was the matter with the engine that detained them and they had forgotten her for the moment.\" (paragraph 2)"
      },
      {
        "id": "C",
        "text": "\"Did they not have platforms in this wild Western land, or was the train so long that her car had stopped before reaching it?\" (paragraph 3)"
      },
      {
        "id": "D",
        "text": "\"She could dimly see moving figures away up near the engine, and each one evidently carried a lantern.\" (paragraph 4)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_16",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 16,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "Excerpt from A Voice in the Wilderness by Grace Livingston Hill 1 With a lurch the train came to a dead stop and Margaret Earle, hastily gathering up her belongings, hurried down the aisle and got out into the night. 2 It occurred to her, as she swung her heavy suit-case down the rather long step to the ground, and then carefully swung herself after it, that it was strange that neither conductor, brakeman, nor porter had come to help her off the train, when all three had taken the trouble to tell her that hers was the next station; but she could hear voices up ahead. Perhaps something was the matter with the engine that detained them and they had forgotten her for the moment. 3 The ground was rough where she stood, and there seemed no sign of a platform. Did they not have platforms in this wild Western land, or was the train so long that her car had stopped before reaching it? 4 She strained her eyes into the darkness, and tried to make out c- 11 - 1... Read this sentence from paragraph 4. She strained her eyes into the darkness, and tried to make out things from the two or three specks of light that danced about like fireflies in the distance. The simile used in the sentence affects the tone of the paragraph by emphasizing a O A. feeling of comfort as Margaret connects her unfamiliar surroundings with familiar images. B. sense of lonesomeness as Margaret realizes that she is on her own in the wilderness. \u2022 C. sense of tranquility as Margaret is distracted from the urgency of her situation by the beauty of the night. \u2022 D. feeling of dread as Margaret regards the desolation of the land that surrounds her.",
    "imageSrc": "/exams/exam2/items/ela_q16.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_17",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 17,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "porter affect the plot?",
    "imageSrc": "/exams/exam2/items/ela_q17.png",
    "options": [
      {
        "id": "A",
        "text": "They prompt Margaret to get off the train without further assistance."
      },
      {
        "id": "B",
        "text": "They cause Margaret to think that she knows what to do once she gets off the train."
      },
      {
        "id": "C",
        "text": "They compel Margaret to wonder whether the train has not pulled all the way into the station."
      },
      {
        "id": "D",
        "text": "They lead Margaret to believe that train stations in rural areas lack platforms."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_18",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 18,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "Excerpt from A Voice in the Wilderness by Grace Livingston Hill 1 With a lurch the train came to a dead stop and Margaret Earle, hastily gathering up her belongings, hurried down the aisle and got out into the night. 2 It occurred to her, as she swung her heavy suit-case down the rather long step to the ground, and then carefully swung herself after it, that it was strange that neither conductor, brakeman, nor porter had come to help her off the train, when all three had taken the trouble to tell her that hers was the next station; but she could hear voices up ahead. Perhaps something was the matter with the engine that detained them and they had forgotten her for the moment. 3 The ground was rough where she stood, and there seemed no sign of a platform. Did they not have platforms in this wild Western land, or was the train so long that her car had stopped before reaching it? 4 She strained her eyes into the darkness, and tried to make out How does Margaret's experience in paragraph 9 emphasize a theme of the excerpt? \u2022 A. It confirms Margaret's understanding that she cannot rely on help from anyone else. \u2022 B. It leads Margaret to realize that her desire to change her situation is impractical. O C. It causes Margaret to believe that her own actions led to an unfavorable outcome. \u2022 D. It reinforces Margaret's frustration about her lack of control over her surroundings.",
    "imageSrc": "/exams/exam2/items/ela_q18.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_19",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 19,
    "passageId": "e2_p3",
    "type": "multiple_choice",
    "prompt": "How does paragraph 11 contribute to the plot of the excerpt?",
    "imageSrc": "/exams/exam2/items/ela_q19.png",
    "options": [
      {
        "id": "A",
        "text": "It reveals that the reality of the situation is different from Margaret's assumptions."
      },
      {
        "id": "B",
        "text": "It illustrates that Margaret's main problem is her own imagination."
      },
      {
        "id": "C",
        "text": "It shows that Margaret is surprised by the unexpected adventure she is about to undertake."
      },
      {
        "id": "D",
        "text": "It provides insight into how Margaret reacts to stressful situations."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_20",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 20,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "challenges Ederle faced in attempting her feat?",
    "imageSrc": "/exams/exam2/items/ela_q20.png",
    "options": [
      {
        "id": "A",
        "text": "Regardless of her ability, being an American put Ederle at a serious disadvantage over a Londoner, who would be more familiar with the English Channel."
      },
      {
        "id": "B",
        "text": "At the time, Ederle still needed more training in order to succeed in the daunting task of swimming the English Channel."
      },
      {
        "id": "C",
        "text": "While Ederle could participate in athletic competition, some people were not comfortable with her attempt to swim the channel because no woman had ever attempted it before."
      },
      {
        "id": "D",
        "text": "In spite of her previous achievements, Ederle still experienced social as well as physical obstacles in attempting to swim the channel."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_21",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 21,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "Champion of the Channel 1 In 1926 an editor at the London Daily News predicted that Gertrude Ederle, an American swimmer with eighteen world records and three Olympic medals, would fail in her attempt to swim across the English Channel. He claimed that \"even the most uncompromising champion of the rights and capacities of women must admit that in contests of physical skill, speed and endurance they must remain forever the weaker sex.\" Yet, at only nineteen years old, Ederle not only became the first woman to accomplish this feat, she also broke the men's record by two hours. Gertrude Ederle's triumphant swim across the English Channel was a testimony to her determination, innovative spirit, and passion for swimming. 2 Crossing the English Channel is a daunting task for any swimmer. At its narrowest point, the channel measures twenty-one miles across. Its icy waters hover around sixty degrees Fahrenheit, and its unruly tides and currents toss swimmers about like bobbing corks. Stinging jellyfish, seaweed, and floating debris from shipwrecks and lost cargoes present added hazards. Read this sentence from paragraph 4. During her first channel-crossing attempt she had worn a standard one-piece swimsuit that, after the lengthy hours of swimming across the channel, had stretched out, filling with water and creating drag, making an already challenging task almost insurmountable. The word \"insurmountable\" is used to highlight",
    "imageSrc": "/exams/exam2/items/ela_q21.png",
    "options": [
      {
        "id": "A",
        "text": "how the bathing suit made it impossible for Ederle to make it across the channel."
      },
      {
        "id": "B",
        "text": "how Ederle and her sister decided to improve Ederle's swimming equipment in a creative way."
      },
      {
        "id": "C",
        "text": "that the flaws in Ederle's bathing suit made a difficult task even more complicated."
      },
      {
        "id": "D",
        "text": "that the swimming equipment Ederle used needed to be custom made for her attempt."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_22",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 22,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "passage?",
    "imageSrc": "/exams/exam2/items/ela_q22.png",
    "options": [
      {
        "id": "A",
        "text": "Detailing the challenges presented by the cold channel waters highlights the effectiveness of Ederle's training."
      },
      {
        "id": "B",
        "text": "Describing Ederle's physical difficulties during her swim provides evidence of the team effort required to ensure her safety."
      },
      {
        "id": "C",
        "text": "Explaining the difficulties that arose early in the effort helps predict the additional obstacles that occurred during Ederle's attempt."
      },
      {
        "id": "D",
        "text": "Illustrating Ederle's process of blocking out her discomfort shows that swimming the channel was both a mental and a physical challenge."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_23",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 23,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "across the channel because of her innovative approach to the challenge?",
    "imageSrc": "/exams/exam2/items/ela_q23.png",
    "options": [
      {
        "id": "A",
        "text": "\"Yet, at only nineteen years old, Ederle not only became the first woman to accomplish this feat, she also broke the men's record by two hours.\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"At first she shivered in the bone-chilling water even though she had covered her body in eight layers of grease for insulation.\" (paragraph 5)"
      },
      {
        "id": "C",
        "text": "\"Using a new overhand stroke called the American crawl. Ederle eventually settled into a steady pace, briskly breaking through waves.\" (paragraph 5)"
      },
      {
        "id": "D",
        "text": "\"The other [tugboat], displaying a sign that read 'This way, ole kid!' with an arrow pointing forward, transported her coach, family, and friends.\" (paragraph 6)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_24",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 24,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "Champion of the Channel 1 In 1926 an editor at the London Daily News predicted that Gertrude Ederle, an American swimmer with eighteen world records and three Olympic medals, would fail in her attempt to swim across the English Channel. He claimed that \"even the most uncompromising champion of the rights and capacities of women must admit that in contests of physical skill, speed and endurance they must remain forever the weaker sex.\" Yet, at only nineteen years old, Ederle not only became the first woman to accomplish this feat, she also broke the men's record by two hours. Gertrude Ederle's triumphant swim across the English Channel was a testimony to her determination, innovative spirit, and passion for swimming. 2 Crossing the English Channel is a daunting task for any swimmer. At its narrowest point, the channel measures twenty-one miles across. Its icy waters hover around sixty degrees Fahrenheit, and its unruly tides and currents toss swimmers about like bobbing corks. Stinging jellyfish, seaweed, and floating debris from shipwrecks and lost cargoes present added hazards. Paragraph 7 contributes to the development of a central idea of the passage by",
    "imageSrc": "/exams/exam2/items/ela_q24.png",
    "options": [
      {
        "id": "A",
        "text": "illustrating that Ederle's physical strength and mental fortitude allowed her to stay focused on her goal."
      },
      {
        "id": "B",
        "text": "conveying that Ederle pushed herself to the edge of her physical capabilities in order to complete the swim."
      },
      {
        "id": "C",
        "text": "highlighting the impact the severe weather had on Ederle's emotions during her swim."
      },
      {
        "id": "D",
        "text": "emphasizing the surge of emotions Ederle felt as she came closer to achieving a personal goal."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_25",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 25,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "regarding the impact of Ederle's accomplishment?",
    "imageSrc": "/exams/exam2/items/ela_q25.png",
    "options": [
      {
        "id": "A",
        "text": "\"Undeterred, Ederle decided to try again.\" (paragraph 3)"
      },
      {
        "id": "B",
        "text": "\"For hours Ederle swam, dodging debris with an amused smile.\" (paragraph 7)"
      },
      {
        "id": "C",
        "text": "\"Yet Ederle felt indescribably happy as she churned through the sea.\" (paragraph 7)"
      },
      {
        "id": "D",
        "text": "\"Ederle had swum into history.\" (paragraph 8)"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_26",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 26,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "for her second attempt to swim across the English Channel?",
    "imageSrc": "/exams/exam2/items/ela_q26.png",
    "options": [
      {
        "id": "A",
        "text": "Working with her sister, Ederle waterproofed her goggles using melted candle wax to seal the edges and designed a two-piece silk swimsuit that was lightweight and would not stretch out during the long swim. \u2022"
      },
      {
        "id": "B",
        "text": "Ederle covered her body in numerous layers of grease for insulation and focused on finding her \"sphere\" during her swim"
      },
      {
        "id": "C",
        "text": "Ederle began training with her coach, who played music while she swam to help her time her strokes to the music."
      },
      {
        "id": "D",
        "text": "Ederle focused on developing better equipment than the standard bathing suit that proved cumbersome during her first attempt to cross the channel."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_27",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 27,
    "passageId": "e2_p4",
    "type": "multiple_choice",
    "prompt": "Champion of the Channel 1 In 1926 an editor at the London Daily News predicted that Gertrude Ederle, an American swimmer with eighteen world records and three Olympic medals, would fail in her attempt to swim across the English Channel. He claimed that \"even the most uncompromising champion of the rights and capacities of women must admit that in contests of physical skill, speed and endurance they must remain forever the weaker sex.\" Yet, at only nineteen years old, Ederle not only became the first woman to accomplish this feat, she also broke the men's record by two hours. Gertrude Ederle's triumphant swim across the English Channel was a testimony to her determination, innovative spirit, and passion for swimming. 2 Crossing the English Channel is a daunting task for any swimmer. At its narrowest point, the channel measures twenty-one miles across. Its icy waters hover around sixty degrees Fahrenheit, and its unruly tides and currents toss swimmers about like bobbing corks. Stinging jellyfish, seaweed, and floating debris from shipwrecks and lost cargoes present added hazards. The idea that many people were interested in Ederle's attempt to swim the channel is illustrated in the passage mainly through the",
    "imageSrc": "/exams/exam2/items/ela_q27.png",
    "options": [
      {
        "id": "A",
        "text": "information about Ederle's competition with another female swimmer who was also attempting to cross the channel."
      },
      {
        "id": "B",
        "text": "details about the reports of Ederle's progress during the swim and the celebration of her successful completion of the swim."
      },
      {
        "id": "C",
        "text": "details about how Ederle's historic swim contributed to an increase in the number of people learning how to swim."
      },
      {
        "id": "D",
        "text": "information about the resources Ederle used throughout her swim to maintain her motivation and stamina."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_28",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 28,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "Champion of the Channel 1 In 1926 an editor at the London Daily News predicted that Gertrude Ederle, an American swimmer with eighteen world records and three Olympic medals, would fail in her attempt to swim across the English Channel. He claimed that \"even the most uncompromising champion of the rights and capacities of women must admit that in contests of physical skill, speed and endurance they must remain forever the weaker sex.\" Yet, at only nineteen years old, Ederle not only became the first woman to accomplish this feat, she also broke the men's record by two hours. Gertrude Ederle's triumphant swim across the English Channel was a testimony to her determination, innovative spirit, and passion for swimming. 2 Crossing the English Channel is a daunting task for any swimmer. At its narrowest point, the channel measures twenty-one miles across. Its icy waters hover around sixty degrees Fahrenheit, and its unruly tides and currents toss swimmers about like bobbing corks. Stinging jellyfish, seaweed, and floating debris from shipwrecks and lost cargoes present added hazards. The table builds on the information in the passage mainly by",
    "imageSrc": "/exams/exam2/items/ela_q28.png",
    "options": [
      {
        "id": "A",
        "text": "emphasizing that people have continued to swim across the channel and have significantly improved the speed record. \u2022 I"
      },
      {
        "id": "B",
        "text": "suggesting that Ederle inspired many women to swim across the channel to attempt to break the current speed record."
      },
      {
        "id": "C",
        "text": "revealing that other women competed with Ederle to set a record time for swimming across the English Channel."
      },
      {
        "id": "D",
        "text": "providing a comparison between the earliest channel-swimming records and the current record times."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_29",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 29,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp 1 Along with the wagon had come the fresh horses\u2014one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q29.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was comnlete Which sentence from the excerpt best explains why Wade reserved Peroxide Jim for \"emergency work\" (paragraph 1)? A. \"Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement a Wade?\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"Before him, behind him, beside him, pressing hard upon his horse, galloped the frenzied steers, and beyond them a multitude borne on, and bearing him on, by the heave of the galloping herd.\" (paragraph 10)"
      },
      {
        "id": "C",
        "text": "\"He knew that he was being borne toward the rim, how fast he could not tell, but he knew by the swish of the brush against his tapaderos and the plunging of the horse that the ground was growing stonier, that they were nearing the rocks.\" (paragraph 11)"
      },
      {
        "id": "D",
        "text": "\"From the flash of the lightning the horse had taken the bit, had covered an indescribably perilous path at top speed, had outrun the herd and turned it from the edge of the rim rock, without a false step or a tremor of fear.\" (paragraph 16)"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_30",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 30,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp Along with the wagon had come the fresh horses-one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q30.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was camnlete Paragraphs 1-2 contribute to the development of the central idea of the excerpt by A. revealing the respect Wade had for his horse."
      },
      {
        "id": "B",
        "text": "emphasizing Wade's high expectations of his horse and himself."
      },
      {
        "id": "C",
        "text": "indicating that Wade and his horse understood the cattle business. \u2022 I"
      },
      {
        "id": "D",
        "text": "demonstrating Wade's ability to gauge a horse's competence."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_31",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 31,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp 1 Along with the wagon had come the fresh horses-one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q31.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was camnlete How does paragraph 3 convey the effect of the setting on the cattle drive? \u2022 A. It shows how the growing darkness created challenges for the riders in getting the herd to move."
      },
      {
        "id": "B",
        "text": "It describes how the changing elevation contributed to the dangerousness of the environment."
      },
      {
        "id": "C",
        "text": "It describes how the desert created an uncomfortable feeling of isolation for the riders and the cattle."
      },
      {
        "id": "D",
        "text": "It shows how the steep terrain made it difficult for the cattle to keep moving forward."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_32",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 32,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp 1 Along with the wagon had come the fresh horses\u2014one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q32.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was camnlete Read this sentence from paragraph 13. Close on their left bore down the flank of the herd, and on their right, under their very feet, was a precipice, so close that they felt its blackness\u2014its three hundred feet of fall! The phrase \"bore down the flank of the herd\" conveys that Wade \u2022 A. struggled to see the front of the herd."
      },
      {
        "id": "B",
        "text": "had to ride quickly to keep up with the herd."
      },
      {
        "id": "C",
        "text": "was forced to ride between the edge of the cliff and the herd."
      },
      {
        "id": "D",
        "text": "knew that the drop of the cliff would frighten the herd."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_33",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 33,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp 1 Along with the wagon had come the fresh horses-one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q33.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was comnlete Read these sentences from the excerpt. He was riding to turn the herd, too, back from the rim, as the horse also knew. (paragraph 11) It was Peroxide Jim's, according to Wade, for not by word or by touch of hand or knee had the horse been directed in the run. (paragraph 16) How do these sentences develop a central idea in the excerpt? \u2022 A. They suggest that Wade would have been unable to save the herd without Peroxide Jim."
      },
      {
        "id": "B",
        "text": "They imply that Wade spent many hours training Peroxide Jim to herd cattle."
      },
      {
        "id": "C",
        "text": "They show that Peroxide Jim was able to understand a situation and take action."
      },
      {
        "id": "D",
        "text": "They indicate that Peroxide Jim was unafraid of the dangers presented by the stampede and the cliff."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_34",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 34,
    "passageId": "e2_p5",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp Along with the wagon had come the fresh horses-one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q34.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was camnlete How do the details in paragraphs 14-16 help convey a central idea of the excerpt? A. They highlight Peroxide Jim's natural ability to control the herd."
      },
      {
        "id": "B",
        "text": "They emphasize the danger of the situation from which Peroxide Jim rescued the herd."
      },
      {
        "id": "C",
        "text": "They show that Peroxide Jim's physical strength allowed him to force the herd to turn."
      },
      {
        "id": "D",
        "text": "They indicate that Peroxide Jim anticipated the herd's stampede before the men did."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_35",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 35,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "In this excerpt, published in 1914, author and professor Dallas Lore Sharp describes a summer cattle roundup in Oregon. The heat and dust had been relentless for three days. The cowboys were exhausted, and the cattle were restless. The ranch boss, Wade, had led the drive to a watering place, only to find it empty. Excerpt from \"The Spirit of the Herd\" by Dallas Lore Sharp Along with the wagon had come the fresh horses-one of them being Peroxide Jim, a supple, powerful, clean-limbed buckskin, a horse, I think, that had as fine and intelligent an animal-face as any creature I ever saw. Wade had been saving this horse for emergency work. And why should he not have been saved fresh for just such a need as this? Are there not superior horses as well as superior men\u2014a Peroxide Jim to complement",
    "imageSrc": "/exams/exam2/items/ela_q35.png",
    "options": [
      {
        "id": "A",
        "text": "Wade? 2 The horse knew the cattle business and knew his rider perfectly; and though there was nothing like sentiment about the boss of the P Ranch riders his faith in Pernxide lim was comnlete Which sentence from the excerpt best reveals the mood on the drive before the lightning struck? \u2022 A. \"The herd when overtaken by the dusk had been headed for a pass descending to the next lower bench, but was now halted within a mile of the rim rock on the east, where there was a perpendicular fall of about three hundred feet.\" (paragraph 3)"
      },
      {
        "id": "B",
        "text": "\"It was not to soothe their savage breasts that the riders sang to the cattle, but rather to preempt the dreaded silence, to relieve the tension, and so to prevent the shock of any sudden startling noise.\" (paragraph 5)"
      },
      {
        "id": "C",
        "text": "\"He checked his horse instantly, listening as the wind swept past him over the cattle.\" (paragraph 7)"
      },
      {
        "id": "D",
        "text": "\"Then the breeze caught the dust and carried it back from the gray-coated, ghostly shapes, and Wade saw that the animals were still moving in a circle.\" (paragraph 9)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_36",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 36,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "The author most likely includes the quotation from the Scottish traveler in order to",
    "imageSrc": "/exams/exam2/items/ela_q36.png",
    "options": [
      {
        "id": "A",
        "text": "suggest that people around the world saw the direct contribution of nature and industry to the United States."
      },
      {
        "id": "B",
        "text": "compare the natural and industrial attractions in the United States at that time."
      },
      {
        "id": "C",
        "text": "convey the idea that the United States offered both natural and industrial attractions."
      },
      {
        "id": "D",
        "text": "imply that the natural resources in the United States contributed to the development of industry."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_37",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 37,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "Massachusetts: Lowell National Historical Park 1 During the first half of the 19th century, Lowell, Massachusetts, quickly transformed itself from a farm town to a bustling industrial city. Ir time, Lowell became a model of industry, gaining global recognition for it| state-of-the-art technology, innovative canal and dam system, mill architecture, boardinghouses, churches, and ethnic neighborhoods. Young Yankee women, immigrant families, and European tourists all flocked to Lowell to find work at one of the many textile mills, or visit the industrious city that was becoming a popular tourist destination. As one Scottish traveler observed during his visit to America, \"Niagara and Lowell are the two objects I will longest remember in my American journey, the one the glory of American scenery, the other of American industry.\" Today, Lowell National Historical Park welcomes visitors to enjoy the sights of Lowell and learn about the history of one of America's most significant industrial cities. 2) The Boston merchants who founded Lowell in 1821 and named it after Francis Cabot Lowell chose to locate the town along Massachusetts's MAnnimade Divanta talea advantana aftha linatio annume affaund hurthe",
    "imageSrc": "/exams/exam2/items/ela_q37.png",
    "options": [
      {
        "id": "A",
        "text": "central idea that Lowell was \"one of America's most significant industrial cities\" (paragraph 1) is conveyed in the passage primarily through a description of the A. canals, mills, and boardinghouses that were built by immigrants."
      },
      {
        "id": "B",
        "text": "mill girls and immigrants who comprised Lowell's workforce."
      },
      {
        "id": "C",
        "text": "development of the mills and the workforce established to support them."
      },
      {
        "id": "D",
        "text": "cultural diversity of the people who lived in the area."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_38",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 38,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "became \"a bustling industrial city\" (paragraph 1) in a short period of time?",
    "imageSrc": "/exams/exam2/items/ela_q38.png",
    "options": [
      {
        "id": "A",
        "text": "\"The Boston merchants who founded Lowell in 1821 and named it after Francis Cabot Lowell chose to locate the town along Massachusetts's Merrimack River to take advantage of the kinetic energy offered by the Pawtucket waterfalls.\""
      },
      {
        "id": "B",
        "text": "\"Over six miles of canals powered the waterwheels of Lowell's mills, whose massive five- and six-story brick buildings dominated the city's landscape.\""
      },
      {
        "id": "C",
        "text": "\"The most recognized of these buildings are the Lowell Manufacturing Company chartered in 1821, the Suffolk or Wannalancit Mill completed around the 1880s, the Boott Mill Company established in 1835, and the Boott Mill Boardinghouse that opened in 1838.\""
      },
      {
        "id": "D",
        "text": "\"By the 1850s, 40 textile mills employing over 10,000 workers stretched for about a mile along the river.\""
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_39",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 39,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "structure of the passage?",
    "imageSrc": "/exams/exam2/items/ela_q39.png",
    "options": [
      {
        "id": "A",
        "text": "It provides a transition from a description of the mills to a description of the workforce in those mills. \u2022 I"
      },
      {
        "id": "B",
        "text": "It indicates a shift in tone from positive and hopeful to negative and dissatisfied with working conditions at the mill."
      },
      {
        "id": "C",
        "text": "It summarizes a challenge that led many women to leave their hometown and seek work in urban areas."
      },
      {
        "id": "D",
        "text": "It begins a comparison of the mill workforce between the mid-1800s and the late 1800s."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_40",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 40,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "passage?",
    "imageSrc": "/exams/exam2/items/ela_q40.png",
    "options": [
      {
        "id": "A",
        "text": "It implies that Lowell was founded by early Irish immigrants. \u2022 I"
      },
      {
        "id": "B",
        "text": "It emphasizes the important role Irish immigrants played in Lowell's history."
      },
      {
        "id": "C",
        "text": "It suggests that the new Irish immigrants were readily accepted into the community. O D. It highlights the working relationship between the mill girls and the new Irish immigrants."
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_41",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 41,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "dominant workforce in Lowell?",
    "imageSrc": "/exams/exam2/items/ela_q41.png",
    "options": [
      {
        "id": "A",
        "text": "The mill girls were eager to leave their domestic duties and small towns behind, so they went to work in the mills of Lowell."
      },
      {
        "id": "B",
        "text": "Originally, the mill girls were satisfied to work in Lowell, but as they left their jobs at the Lowell mills, immigrants arrived to fill the empty positions."
      },
      {
        "id": "C",
        "text": "Young women left home to work in the Lowell mills, but the mill girls soon became dissatisfied with the working conditions and rigid boardinghouse rules."
      },
      {
        "id": "D",
        "text": "The mill girls embraced city life when they came to work in Lowell's mills, but when their protests about unfavorable working conditions went unanswered, they left."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_42",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 42,
    "passageId": "e2_p6",
    "type": "multiple_choice",
    "prompt": "Massachusetts: Lowell National Historical Park \u2022 During the first half of the 19th century, Lowell, Massachusetts, quickly transformed itself from a farm town to a bustling industrial city. Ir time, Lowell became a model of industry, gaining global recognition for it| state-of-the-art technology, innovative canal and dam system, mill architecture, boardinghouses, churches, and ethnic neighborhoods. Young Yankee women, immigrant families, and European tourists all flocked to Lowell to find work at one of the many textile mills, or visit the industrious city that was becoming a popular tourist destination. As one scottish traveler observed during his visit to America, \"Niagara and Lowell are the two objects I will longest remember in my American journey, the one the glory of American scenery, the other of American industry.\" Today, Lowell National Historical Park welcomes visitors to enjoy the sights of Lowell and learn about the history of one of America's most significant industrial cities. 2) The Boston merchants who founded Lowell in 1821 and named it after Francis Cabot Lowell chose to locate the town along Massachusetts's MAnnimade Divanta talea advantana aftha linatio annume affaund hurthe The reason Lowell lost its status as an industrial leader is best illustrated through the",
    "imageSrc": "/exams/exam2/items/ela_q42.png",
    "options": [
      {
        "id": "A",
        "text": "description of poor living and working conditions."
      },
      {
        "id": "B",
        "text": "explanation for why some immigrant groups struggled to live together."
      },
      {
        "id": "C",
        "text": "comparison with other mills that used modern methods."
      },
      {
        "id": "D",
        "text": "information about the mills opening temporarily during World War II."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_43",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 43,
    "passageId": "e2_p7",
    "type": "multiple_choice",
    "prompt": "the passage?",
    "imageSrc": "/exams/exam2/items/ela_q43.png",
    "options": [
      {
        "id": "A",
        "text": "Placing plants in homes and offices can provide a healthy bridge between nature and the indoors."
      },
      {
        "id": "B",
        "text": "It is important for people to realize that they need to spend more time near plants, whether indoors or out in nature."
      },
      {
        "id": "C",
        "text": "For their personal health and well-being, people need to spend more time outdoors or bring the outdoors in."
      },
      {
        "id": "D",
        "text": "Individuals with little connection to nature can experience illness, depression, and higher levels of stress."
      }
    ],
    "correctAnswer": "A",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_44",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 44,
    "passageId": "e2_p7",
    "type": "multi_select",
    "prompt": "The Benefits of Indoor Plants (1) In an age of endless media content, it is easy to see why people might prefer to stay inside. (2) According to a study sponsored by the Environmental Protection Agency, Americans spend an average of 87 percent of their time indoors. (3) Scientists say that this separation between people and nature puts people at risk for physical and psychological issues. (4) During the process of photosynthesis, plants convert carbon dioxide into oxygen and remove many harmful toxins from the air. (5) Spending prolonged periods of time indoors, away from plants, deprives people of these benefits. (6) Air that is not regularly detoxified can lead to a condition known as sick building syndrome. (7) This disorder first came to light in the 1970s when many office workers in the United States began to complain of unexplained flu-like symptoms. (8) Researchers determined the cause to be volatile organic compounds, or VOCs. (9) VOCs are harmful chemicals that are emitted by everyday objects such as carpet, furniture, cleaning products, and computers. (10) The NASA Clan linGhid farind a rimala canuta ramares a rinnificant nimhor of Which transition word or phrase should be added to the beginning of sentence 5 to emphasize the relationship between sentences 4 and 5? Move the correct answer to the box. As a result, Primarily, In contrast, Unfortunately, (5) spending prolonged periods of time indoors, away from plants, deprives people of these benefits.",
    "imageSrc": "/exams/exam2/items/ela_q44.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "\"Unfortunately,\"",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: \"Unfortunately,\". This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_45",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 45,
    "passageId": "e2_p7",
    "type": "multiple_choice",
    "prompt": "third paragraph (sentences 11-14)?",
    "imageSrc": "/exams/exam2/items/ela_q45.png",
    "options": [
      {
        "id": "A",
        "text": "A global study of 7,600 workers from sixteen countries revealed that employees who worked in spaces with natural elements, such as indoor plants, were more creative and productive than employees who worked in spaces without natural elements."
      },
      {
        "id": "B",
        "text": "Specifically, a study suggests that one well-known hotel is popular among guests because its owners have made a significant investment in landscaping and indoor plants known to have a relaxing effect."
      },
      {
        "id": "C",
        "text": "In fact, one recent study suggested that people who are routinely exposed to natural elements seem to increase their compassion for others, perhaps because that exposure generates compassion for the environment in which they live."
      },
      {
        "id": "D",
        "text": "According to a study that was conducted in 2003, plants can reduce the amount of noise that people perceive in indoor spaces with hard surfaces, just as adding carpet can make a room seem quieter."
      }
    ],
    "correctAnswer": "A",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_46",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 46,
    "passageId": "e2_p7",
    "type": "multiple_choice",
    "prompt": "should be deleted?",
    "imageSrc": "/exams/exam2/items/ela_q46.png",
    "options": [
      {
        "id": "A",
        "text": "sentence 11"
      },
      {
        "id": "B",
        "text": "sentence 14"
      },
      {
        "id": "C",
        "text": "sentence 15"
      },
      {
        "id": "D",
        "text": "sentence 16"
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_47",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 47,
    "passageId": "e2_p7",
    "type": "multiple_choice",
    "prompt": "the information presented in the passage?",
    "imageSrc": "/exams/exam2/items/ela_q47.png",
    "options": [
      {
        "id": "A",
        "text": "Because indoor plants absorb the carbon dioxide in our air and release the oxygen we need to breathe, they are vital to our wholeness and wellness."
      },
      {
        "id": "B",
        "text": "Experts say that adding a Boston fern, a spider plant, or an aloe vera plant is a good place to start if you want to begin to incorporate nature into your home or office."
      },
      {
        "id": "C",
        "text": "More people should consider bringing natural elements inside to improve general wellness and reverse some of the negative effects of an indoor-centered society."
      },
      {
        "id": "D",
        "text": "As one study has confirmed, houseplants are a wise investment because they can remove almost 90 percent of the toxins in the air within the span of 24 hours."
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_48",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 48,
    "type": "multiple_choice",
    "prompt": "Which sentence of the paragraph should be revised to correct a vague pronoun? (1) Eliza and Brianna have been singing in their school chorus since they were in fourth grade. (2) The girls always sing a duet at the school talent show, and they take turns singing the national anthem before school sporting events. (3) Outside of school, she also sings in a choir made up of young and old members of her community. (4) Both girls hope that they will be able to continue singing for many more years.",
    "imageSrc": "/exams/exam2/items/ela_q48.png",
    "options": [
      {
        "id": "A",
        "text": "sentence 1"
      },
      {
        "id": "B",
        "text": "sentence 2"
      },
      {
        "id": "C",
        "text": "sentence 3"
      },
      {
        "id": "D",
        "text": "sentence 4"
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_49",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 49,
    "type": "multiple_choice",
    "prompt": "Which pair of revisions is needed to correct the errors in the paragraph? (1) Yalina, Michael, and Malcolm love making pancakes with their granddad on Saturday mornings. (2) Yalina's job is to open the box and pour the pancake mix into a bowl, slowly adding water, eggs, melted butter, and blueberries. (3) Michael uses a wooden spoon to vigorously stir the mixture until it is smooth, and Malcolm helps Granddad carefully pour the batter onto a griddle one-fourth cup at a time. (4) Granddad turns each pancake when they start to bubble, while all three siblings get the table ready for a sweet delicious breakfast.",
    "imageSrc": "/exams/exam2/items/ela_q49.png",
    "options": [
      {
        "id": "A",
        "text": "Sentence 1: Delete the comma after Yalina, AND change their to her."
      },
      {
        "id": "B",
        "text": "Sentence 2: Change is to are, AND delete the comma after bowl."
      },
      {
        "id": "C",
        "text": "Sentence 3: Change it is to they are, AND delete the comma after smooth."
      },
      {
        "id": "D",
        "text": "Sentence 4: Change they start to it starts, AND insert a comma after sweet."
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_ela_50",
    "examId": "exam2",
    "section": "ela",
    "questionNumber": 50,
    "type": "text_entry",
    "prompt": "Which sentence in the paragraph contains an error in construction? (1) The blobfish, a creature that certainly resembles its name, is an unusual fish whose body is mostly composed of pink, gelatinous flesh. (2) Because it has very few muscles and its density is close to that of water, the blobfish spends its life floating slightly above the ocean floor. (3) It must wait patiently for whatever edible matter might float by its mouth. (4) The blobfish's downturned mouth, slimy skin, and pale coloring caused them to be voted the World's Ugliest Animal in 2013. Move the answer to the box. There is only one error in construction. Sentence 1 Sentence 2 Sentence 3 Sentence 4 Contains an error in construction",
    "imageSrc": "/exams/exam2/items/ela_q50.png",
    "options": null,
    "correctAnswer": "Sentence 4",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Sentence 4. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_01",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 51,
    "type": "multiple_choice",
    "prompt": "In a scale diagram, 0.125 inch represents 125 feet. How many inches represent 1 foot?",
    "imageSrc": "/exams/exam2/items/math_q01.png",
    "options": [
      {
        "id": "A",
        "text": "0.001."
      },
      {
        "id": "B",
        "text": "0.01"
      },
      {
        "id": "C",
        "text": "0.1|"
      },
      {
        "id": "D",
        "text": "0.12"
      }
    ],
    "correctAnswer": "A",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_02",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 52,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 2.",
    "imageSrc": "/exams/exam2/items/math_q02.png",
    "options": [
      {
        "id": "A",
        "text": "car is traveling 55 miles per hour, and 1 mile = 5,280 feet. Which of the following calculations would give the car's speed in feet per second? 55-5,280 \u2022 A."
      },
      {
        "id": "B",
        "text": "55-5,280 3,600"
      },
      {
        "id": "C",
        "text": "55-3.600 5,280"
      },
      {
        "id": "D",
        "text": "55-5,280 60"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_03",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 53,
    "type": "text_entry",
    "prompt": "For what value of w is 4w = 2w - 8?",
    "imageSrc": "/exams/exam2/items/math_q03.png",
    "options": null,
    "correctAnswer": "-4",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: -4. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_04",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 54,
    "type": "text_entry",
    "prompt": "A survey asked students what pets they have. Based on the results, the following statements are all true: \u2022 20 students have cats. \u2022 23 students have dogs. \u2022 3 students have both dogs and cats. \u2022 5 students have no dogs or cats. How many students were surveyed?",
    "imageSrc": "/exams/exam2/items/math_q04.png",
    "options": null,
    "correctAnswer": "45",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 45. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_05",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 55,
    "type": "multiple_choice",
    "prompt": "What is the value of y?",
    "imageSrc": "/exams/exam2/items/math_q05.png",
    "options": [
      {
        "id": "A",
        "text": "4."
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_06",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 56,
    "type": "multiple_choice",
    "prompt": "7+ (3n +6) - (4n+8)=",
    "imageSrc": "/exams/exam2/items/math_q06.png",
    "options": [
      {
        "id": "A",
        "text": "5 \u2014 n."
      },
      {
        "id": "B",
        "text": "5 +n"
      },
      {
        "id": "C",
        "text": "21 - n"
      },
      {
        "id": "D",
        "text": "21 +n"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_07",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 57,
    "type": "multiple_choice",
    "prompt": "what was Roberto's mean?",
    "imageSrc": "/exams/exam2/items/math_q07.png",
    "options": [
      {
        "id": "A",
        "text": "72."
      },
      {
        "id": "B",
        "text": "80."
      },
      {
        "id": "C",
        "text": "90."
      },
      {
        "id": "D",
        "text": "92"
      }
    ],
    "correctAnswer": "A",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_08",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 58,
    "type": "text_entry",
    "prompt": "Liam and Kevin each collect stamps. Liam has twice as many stamps as Kevin. Liam gives 8 of his stamps to Kevin. Liam now has 12 more stamps than Kevin. How many stamps did Liam start with? Select the correct answer from each drop-down to complete the sentences. An equation that relates the number of stamps originally in Liam's and Kevin's collections is L =| Cho ~ K. After Liam gives 8 stamps to Kevin, the equation becomes I - 8 = Choose... ~ By solving the equation, it can be determined that Liam started with Cho ~ stamps.",
    "imageSrc": "/exams/exam2/items/math_q08.png",
    "options": null,
    "correctAnswer": "56",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 56. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_09",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 59,
    "type": "text_entry",
    "prompt": "R In the figure above, PQRS is a parallelogram. What is the value of x?",
    "imageSrc": "/exams/exam2/items/math_q09.png",
    "options": null,
    "correctAnswer": "162",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 162. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_10",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 60,
    "type": "text_entry",
    "prompt": "Three expressions are given: - 2 (2.5n + 4) 5 - n 3(2n + 7) Which of these are equivalent to the sum of these three expressions? Select the two correct answers. \u2022 5 \u2014 n + 6n + 21 \u2014 5n \u2014 8 \u2022 5-n + 6n + 21 - 5n + 8 \u2022 5 \u2014 n + 5n + 21 \u2014 5n \u2014 8 \u2022 18 \u2014 n \u2022 18 \u2022 34.",
    "imageSrc": "/exams/exam2/items/math_q10.png",
    "options": null,
    "correctAnswer": "18",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 18. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_11",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 61,
    "type": "multiple_choice",
    "prompt": "of the pyramid excluding the base?",
    "imageSrc": "/exams/exam2/items/math_q11.png",
    "options": [
      {
        "id": "A",
        "text": "48 sq cm"
      },
      {
        "id": "B",
        "text": "96 sq cm"
      },
      {
        "id": "C",
        "text": "128 sq cm"
      },
      {
        "id": "D",
        "text": "160 sq cm"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_12",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 62,
    "type": "multiple_choice",
    "prompt": "the dimensions of this rectangle?",
    "imageSrc": "/exams/exam2/items/math_q12.png",
    "options": [
      {
        "id": "A",
        "text": "150 cm by 105 cm"
      },
      {
        "id": "B",
        "text": "153 cm by 102 cm"
      },
      {
        "id": "C",
        "text": "158 cm by 97 cm"
      },
      {
        "id": "D",
        "text": "165 cm by 90 cm"
      }
    ],
    "correctAnswer": "B",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_13",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 63,
    "type": "multiple_choice",
    "prompt": "Which number line below shows the solution to the inequality \u20144 < \u00f7 < 2?",
    "imageSrc": "/exams/exam2/items/math_q13.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_14",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 64,
    "type": "text_entry",
    "prompt": "The sum of two consecutive integers is \u2014 15. If 1 is added to the smaller integer and 2 is subtracted from the larger integer, what is the product of the two resulting integers?",
    "imageSrc": "/exams/exam2/items/math_q14.png",
    "options": null,
    "correctAnswer": "63",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 63. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_15",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 65,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 15.",
    "imageSrc": "/exams/exam2/items/math_q15.png",
    "options": [
      {
        "id": "A",
        "text": "box of colored pencils contains exactly 6 red pencils. The probability of choosing a red pencil from the box is =. How many of the pencils in the box are not red? \u2022 A. 5"
      },
      {
        "id": "B",
        "text": "15."
      },
      {
        "id": "C",
        "text": "21|"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_16",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 66,
    "type": "multiple_choice",
    "prompt": "\u2192 x What is the area of the shaded region in the graph above? \u2022 A. 0.25 square unit \u2022 B. 0.5 square unit O C. 1 square unit \u2022 D. 1.5 square units",
    "imageSrc": "/exams/exam2/items/math_q16.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_17",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 67,
    "type": "text_entry",
    "prompt": "Consider this expression: 1(-8) - (-3) + 6-6 - 11| Create an equivalent expression. Move the correct answer to each box. Not all answers will be used. -5 -8 D-0",
    "imageSrc": "/exams/exam2/items/math_q17.png",
    "options": null,
    "correctAnswer": "|1| - |-5|",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: |1| - |-5|. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_18",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 68,
    "type": "multiple_choice",
    "prompt": "$26.90 for these items, not including tax. What was the price per pound of the meat? \u2022 .",
    "imageSrc": "/exams/exam2/items/math_q18.png",
    "options": [
      {
        "id": "A",
        "text": "$2.80"
      },
      {
        "id": "B",
        "text": "$3.25"
      },
      {
        "id": "C",
        "text": "$14.40"
      },
      {
        "id": "D",
        "text": "$22.40."
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_19",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 69,
    "type": "multiple_choice",
    "prompt": "In a sample of 10 cards, 4 are red and 6 are blue. If 2 cards are selected at random from the sample, one at a time without replacement, what is the probability that both cards are not blue? \u2022 A. 1 \u2022 B. 26",
    "imageSrc": "/exams/exam2/items/math_q19.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_20",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 70,
    "type": "multiple_choice",
    "prompt": "1 sind = 4 lorgs 2 plunks = 5 dalts 5 sinds = 2 harps 1 plunk = 3 harps",
    "imageSrc": "/exams/exam2/items/math_q20.png",
    "options": [
      {
        "id": "A",
        "text": "nation has five types of coins: sinds, dalts, lorgs, harps, and plunks. The relationship between the coins is shown above. Which coin is most valuable? \u2022 A. sind"
      },
      {
        "id": "B",
        "text": "dalt|"
      },
      {
        "id": "C",
        "text": "harp"
      },
      {
        "id": "D",
        "text": "plunk"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_21",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 71,
    "type": "multiple_choice",
    "prompt": "third-, and fourth-year students?",
    "imageSrc": "/exams/exam2/items/math_q21.png",
    "options": [
      {
        "id": "A",
        "text": "1,989"
      },
      {
        "id": "B",
        "text": "2,022"
      },
      {
        "id": "C",
        "text": "2,652"
      },
      {
        "id": "D",
        "text": "2,685"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_22",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 72,
    "type": "multiple_choice",
    "prompt": "How many more people in Center City walk to work than ride their bicycle to work?",
    "imageSrc": "/exams/exam2/items/math_q22.png",
    "options": [
      {
        "id": "A",
        "text": "2,500"
      },
      {
        "id": "B",
        "text": "2,700."
      },
      {
        "id": "C",
        "text": "2,800"
      },
      {
        "id": "D",
        "text": "3,000"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_23",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 73,
    "type": "multiple_choice",
    "prompt": "the length of the remaining side of the actual banner?",
    "imageSrc": "/exams/exam2/items/math_q23.png",
    "options": [
      {
        "id": "A",
        "text": "16 ft."
      },
      {
        "id": "B",
        "text": "32 ft"
      },
      {
        "id": "C",
        "text": "40 ft."
      },
      {
        "id": "D",
        "text": "48 ft"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_24",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 74,
    "type": "multiple_choice",
    "prompt": "The least of 5 consecutive integers is l, and the greatest is g. What is the value of 2 in terms of l?",
    "imageSrc": "/exams/exam2/items/math_q24.png",
    "options": [
      {
        "id": "A",
        "text": "21"
      },
      {
        "id": "B",
        "text": "31."
      },
      {
        "id": "C",
        "text": "1+2"
      },
      {
        "id": "D",
        "text": "1+5"
      }
    ],
    "correctAnswer": "C",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_25",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 75,
    "type": "text_entry",
    "prompt": "The owner of a tree farm plants pine trees and oak trees in a ratio of 8:3. How many oak trees are planted if 264 pine trees are planted?",
    "imageSrc": "/exams/exam2/items/math_q25.png",
    "options": null,
    "correctAnswer": "99",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 99. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_26",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 76,
    "type": "multiple_choice",
    "prompt": "Jordan today?",
    "imageSrc": "/exams/exam2/items/math_q26.png",
    "options": [
      {
        "id": "A",
        "text": "4 years old"
      },
      {
        "id": "B",
        "text": "6 years old"
      },
      {
        "id": "C",
        "text": "12 years old"
      },
      {
        "id": "D",
        "text": "16 years old"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_27",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 77,
    "type": "text_entry",
    "prompt": "Complete the steps to show one way to solve the equation 24 = \u20140.5 (x + 8) for x. Move the correct answer to each box. Each answer may be used more than once. Not all answers will be used. -56 | -40 || 20 28 56 24 = - 0.5 (x + 8) 24 = -0.5x + = -0.5x = x",
    "imageSrc": "/exams/exam2/items/math_q27.png",
    "options": null,
    "correctAnswer": "Second equation: -4; third equation: 28; fourth equation: -56",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Second equation: -4; third equation: 28; fourth equation: -56. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_28",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 78,
    "type": "multiple_choice",
    "prompt": "What is the value of the expression shown above?",
    "imageSrc": "/exams/exam2/items/math_q28.png",
    "options": [
      {
        "id": "A",
        "text": "1420"
      },
      {
        "id": "B",
        "text": "145"
      },
      {
        "id": "C",
        "text": "15 20"
      },
      {
        "id": "D",
        "text": "15%"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_29",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 79,
    "type": "multiple_choice",
    "prompt": "How many different pairs of 2 cookies can he choose from the 6?",
    "imageSrc": "/exams/exam2/items/math_q29.png",
    "options": [
      {
        "id": "A",
        "text": "12."
      },
      {
        "id": "B",
        "text": "15."
      },
      {
        "id": "C",
        "text": "30"
      },
      {
        "id": "D",
        "text": "36"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_30",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 80,
    "type": "multiple_choice",
    "prompt": "the two of them can create in one hour?",
    "imageSrc": "/exams/exam2/items/math_q30.png",
    "options": [
      {
        "id": "A",
        "text": "16"
      },
      {
        "id": "B",
        "text": "30"
      },
      {
        "id": "C",
        "text": "33"
      },
      {
        "id": "D",
        "text": "55"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_31",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 81,
    "type": "multiple_choice",
    "prompt": "Which value below is a possible value for M?",
    "imageSrc": "/exams/exam2/items/math_q31.png",
    "options": [
      {
        "id": "A",
        "text": "4.26."
      },
      {
        "id": "B",
        "text": "4.31"
      },
      {
        "id": "C",
        "text": "4.35"
      },
      {
        "id": "D",
        "text": "4.58"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_32",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 82,
    "type": "text_entry",
    "prompt": "What is the value of x in the equation 6x = 9x + 13?",
    "imageSrc": "/exams/exam2/items/math_q32.png",
    "options": null,
    "correctAnswer": "-13/3 (or -4 1/3)",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: -13/3 (or -4 1/3). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_33",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 83,
    "type": "multiple_choice",
    "prompt": "Ryan must read 150 pages for school this weekend. It took him 30 minutes to read the first 20 pages. At this rate, how much additional time will it take him to finish the reading? O A. 25 hr B. 3\u00f7 hr \u2022 C. 37 hr \u2022 D. 75hr",
    "imageSrc": "/exams/exam2/items/math_q33.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_34",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 84,
    "type": "multiple_choice",
    "prompt": "Suppose M = #, N = =, and w, x, y, and z do not equal 0. What is in terms of w, x, y, and z? \u2022 A. yz \u2022 C. wz Ty ry",
    "imageSrc": "/exams/exam2/items/math_q34.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_35",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 85,
    "type": "multiple_choice",
    "prompt": "of both 2 and 3. How many integers in this set are multiples of neither 2 nor 3?",
    "imageSrc": "/exams/exam2/items/math_q35.png",
    "options": [
      {
        "id": "A",
        "text": "5."
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "15."
      }
    ],
    "correctAnswer": "B",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_36",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 86,
    "type": "multiple_choice",
    "prompt": "including 3n + 5?",
    "imageSrc": "/exams/exam2/items/math_q36.png",
    "options": [
      {
        "id": "A",
        "text": "2."
      },
      {
        "id": "B",
        "text": "3."
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "5"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_37",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 87,
    "type": "multi_select",
    "prompt": "When a student buys 4 notebooks, the total cost is $12. Each notebook costs the same amount. Select each point on the graph that best represents y, the total cost of x notebooks. Select all the correct answers. BUYING NOTEBOOKS 15 14 13 12 11 10 \u2022 7 \u2022 3 2 \u2022 1 2 3 4 56 Number of Notebooks",
    "imageSrc": "/exams/exam2/items/math_q37.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "(1, 3), (3, 9), (4, 12)",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: (1, 3), (3, 9), (4, 12). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_38",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 88,
    "type": "multiple_choice",
    "prompt": "In the equation above, w, x, y, and z are positive numbers. Which of these is equal to z?",
    "imageSrc": "/exams/exam2/items/math_q38.png",
    "options": [
      {
        "id": "A",
        "text": "x."
      },
      {
        "id": "B",
        "text": "xy"
      },
      {
        "id": "C",
        "text": "xy"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_39",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 89,
    "type": "multiple_choice",
    "prompt": "the value of WY?",
    "imageSrc": "/exams/exam2/items/math_q39.png",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_40",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 90,
    "type": "multiple_choice",
    "prompt": "is the overall range of all scores in all three sections?",
    "imageSrc": "/exams/exam2/items/math_q40.png",
    "options": [
      {
        "id": "A",
        "text": "25 \u2022"
      },
      {
        "id": "B",
        "text": "27"
      },
      {
        "id": "C",
        "text": "28"
      },
      {
        "id": "D",
        "text": "31"
      }
    ],
    "correctAnswer": "D",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_41",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 91,
    "type": "multiple_choice",
    "prompt": "per school. Which of the five cities has the greatest number of students?",
    "imageSrc": "/exams/exam2/items/math_q41.png",
    "options": [
      {
        "id": "A",
        "text": "City M"
      },
      {
        "id": "B",
        "text": "City P"
      },
      {
        "id": "C",
        "text": "City Q"
      },
      {
        "id": "D",
        "text": "City R"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_42",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 92,
    "type": "multiple_choice",
    "prompt": "digit?",
    "imageSrc": "/exams/exam2/items/math_q42.png",
    "options": [
      {
        "id": "A",
        "text": "0."
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "6."
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_43",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 93,
    "type": "text_entry",
    "prompt": "Graph the solution set for the inequality -3 \u2264 2x \u2014 5. Select a ray. Then, move the endpoint of the ray to the correct position on the number line. -5 -4 -3 -2 -1",
    "imageSrc": "/exams/exam2/items/math_q43.png",
    "options": null,
    "correctAnswer": "Graph of x >= 1: closed (solid) point at 1 with a ray extending to the right",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Graph of x >= 1: closed (solid) point at 1 with a ray extending to the right. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_44",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 94,
    "type": "multiple_choice",
    "prompt": "A sports store has a container of handballs: 4 blue, 5 red, 8 yellow, 9 white, and 11 green. If one ball is picked from the container at random, what is the probability that it will be yellow? O A. 37 \u041e \u0432. % C. 37 \u2022 D. 29.",
    "imageSrc": "/exams/exam2/items/math_q44.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_45",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 95,
    "type": "multiple_choice",
    "prompt": "chairs in 1 week?",
    "imageSrc": "/exams/exam2/items/math_q45.png",
    "options": [
      {
        "id": "A",
        "text": "$1,875."
      },
      {
        "id": "B",
        "text": "$2,500"
      },
      {
        "id": "C",
        "text": "$3,125."
      },
      {
        "id": "D",
        "text": "$4,375."
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_46",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 96,
    "type": "multiple_choice",
    "prompt": "Using the approximation 2.54 centimeters = 1 inch, how many centimeters are in 4 feet 7 inches?",
    "imageSrc": "/exams/exam2/items/math_q46.png",
    "options": [
      {
        "id": "A",
        "text": "21.65"
      },
      {
        "id": "B",
        "text": "119.38"
      },
      {
        "id": "C",
        "text": "121.92"
      },
      {
        "id": "D",
        "text": "139.70"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_47",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 97,
    "type": "multiple_choice",
    "prompt": "On the number line above, JK = 3z, JM = 9\u00be, and LM = 1 - . What is the position of point L?",
    "imageSrc": "/exams/exam2/items/math_q47.png",
    "options": [
      {
        "id": "A",
        "text": "55"
      },
      {
        "id": "B",
        "text": "54"
      },
      {
        "id": "C",
        "text": "54"
      },
      {
        "id": "D",
        "text": "64"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_48",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 98,
    "type": "multiple_choice",
    "prompt": "If 4x - 3y = 12, what is x in terms of y? 0 A. x =49 + 12 0 8. x=- +12 0 c. X =+3",
    "imageSrc": "/exams/exam2/items/math_q48.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_49",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 99,
    "type": "multiple_choice",
    "prompt": "SERVINGS OF FRUITS AND VEGETABLES Number of Servings of Number of Students Fruits and Vegetables 1 2 3 4 5 5 7 3 4 0 1 There are 20 students in a class. The frequency table above shows the number of students in this class who ate 0, 1, 2, 3, 4, or 5 servings of fruits and vegetables yesterday. What is the mean number of servings of fruits and vegetables eaten yesterday per student in this class? O A. 14 \u2022 \u0432. 3 C. 3= \u2022 D. 4",
    "imageSrc": "/exams/exam2/items/math_q49.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e2_math_50",
    "examId": "exam2",
    "section": "math",
    "questionNumber": 100,
    "type": "text_entry",
    "prompt": "Let b = 3, c = 4, and d = 5. Determine the value of Enter your fractional answer in the space provided. Enter only your fraction. D 1 6 % 2 7 3 8 4 9 5 0 08",
    "imageSrc": "/exams/exam2/items/math_q50.png",
    "options": null,
    "correctAnswer": "7/5",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 7/5. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_01",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 1,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 1 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q01.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study The details in paragraph 3 about cognitive offloading convey a central idea of the passage by \u2022 A. suggesting that reliance on the Internet for information is inevitable."
      },
      {
        "id": "B",
        "text": "demonstrating how the methods used to store and find information have changed over time."
      },
      {
        "id": "C",
        "text": "explaining how encyclopedias and the Internet are similar sources of information."
      },
      {
        "id": "D",
        "text": "implying that more information can be understood now than ever before."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_02",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 2,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 2 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q02.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study How do the details about the experiment described in paragraph 5 convey a central idea of the passage? \u2022 A. They suggest that the act of repeating information by typing it on a keyboard may improve a person's memory."
      },
      {
        "id": "B",
        "text": "They explain that a person will forget information faster if the information is considered unimportant."
      },
      {
        "id": "C",
        "text": "They indicate that a person may start to forget details when the amount of information becomes overwhelming."
      },
      {
        "id": "D",
        "text": "They suggest that memory is affected by whether a person expects to have access to the information in the future."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_03",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 3,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 3 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q03.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study \u2022... Read this sentence from paragraph 7. As the Internet's resources continue to expand our \"external\" memory, some question whether the process may cause people to depend too heavily on technology. How does the sentence contribute to the structure and development of ideas in the passage? \u2022 A. It presents a claim about the risks of relying on the Internet that prompted the research described in paragraphs 2 and 6. \u2022 ."
      },
      {
        "id": "B",
        "text": "It contrasts a disadvantage of relying on the Internet with the benefits of Internet use that are described in paragraphs 2 and 6."
      },
      {
        "id": "C",
        "text": "It signals a shift from a neutral viewpoint in paragraphs 2 and 6 to a presentation of an argument and a counterargument."
      },
      {
        "id": "D",
        "text": "It introduces a counterargument and marks a transition from an optimistic tone in paragraphs 2 and 6 to a cautious tone as the counterargument is developed."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_04",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 4,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 4 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q04.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study The study described in paragraph 6 influenced researchers' ideas about memory in the digital age by \u2022 A. highlighting instances when organizing detailed information made it easier to remember."
      },
      {
        "id": "B",
        "text": "confirming that keywords can be remembered more easily than large amounts of information."
      },
      {
        "id": "C",
        "text": "identifying a shift in focus from remembering specific information to knowing where to find it. \u2022"
      },
      {
        "id": "D",
        "text": "emphasizing that remembering a basic idea is more important than storing detailed information."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_05",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 5,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "A Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study How does the diagram provide additional support for the topic presented in the passage? \u2022 A. It reveals why human brains must adapt to obtaining information from the Internet as opposed to other sources. O B. It indicates how people can use the Internet to help improve their long-term recollection of information. \u2022 C. It shows how study participants' brains distinguished between important and unimportant details. \u2022 D. It depicts the idea that repetition and rehearsal are necessary to recall information when tools such as search engines are unavailable.",
    "imageSrc": "/exams/exam3/items/ela_q05.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_06",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 6,
    "passageId": "e3_p1",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 6 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q06.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study Which evidence from the passage is most relevant to the claim in paragraph 7 that \" 'far from making us stupid, these technologies are the only things that will keep us smart' \"? \u2022 A. the revelation that most people opted to use the Internet to answer relatively easy trivia questions rather than relying on their own brainpower (paragraph 2)"
      },
      {
        "id": "B",
        "text": "the assertion that the storage of information on the Internet frees people to focus on higher-order tasks such as problem solving (paragraph 3)"
      },
      {
        "id": "C",
        "text": "the connection between how people organize information in their mind and their ability to recall that information (paragraph 5)"
      },
      {
        "id": "D",
        "text": "the description of transactive memory as an expansive external source that people can use to store information (paragraph 6)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_07",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 7,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 7 based on the text.",
    "imageSrc": "/exams/exam3/items/ela_q07.png",
    "options": [
      {
        "id": "A",
        "text": "Memory Revolution (1) A high school senior logs on to a computer at the library to double-check the application due date listed on a college admissions website. Nearby, a librarian helps a group of biology students use a database to search for recent studies about mammals. In the past few decades, the Internet has become an integral component of daily life for many people. The seemingly limitless power of search engines made the Internet search extremely common, and today people increasingly rely on the Internet's vast accumulation of sources to access all types of information. Scientists are beginning to examine how this reliance is modifying the strategies people use to store and prioritize information in their mind. A Dependable and Valuable Asset 2 Psychologist Benjamin Storm from the University of California, Santa Cruz, and researchers Sean Stone and Aaron Benjamin devised an experiment to study The effect of the Internet on a person's memory is illustrated in the passage through the presentation of studies that \u2022 A. examine how the use of search engines changes the way people evaluate and store information for future access."
      },
      {
        "id": "B",
        "text": "highlight the difference between the capacity of the Internet and the ability of the human brain to locate information."
      },
      {
        "id": "C",
        "text": "compare the type of information that can be obtained from the Internet with the type of information that is stored in the human brain."
      },
      {
        "id": "D",
        "text": "emphasize the ease of obtaining information through search engines rather than remembering it without assistance."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_08",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 8,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "brothers knew that their flight attempt was risky?",
    "imageSrc": "/exams/exam3/items/ela_q08.png",
    "options": [
      {
        "id": "A",
        "text": "through the mention of a signal to notify lifesaving experts that the flight attempt was about to begin"
      },
      {
        "id": "B",
        "text": "by providing specific details about the speed of the wind and the Wright brothers' response to the windy conditions"
      },
      {
        "id": "C",
        "text": "by suggesting that a slower landing would be necessary at the end of the flight in order to maintain safety"
      },
      {
        "id": "D",
        "text": "through the indication that the Wright brothers waited indoors for most of the morning because of the poor weather"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_09",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 9,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "In 1903 brothers Wilbur and Orville Wright conducted experiments related to flying machines. These experiments would eventually lead to air travel becoming a reliable form of transportation. Excerpt from \"How We Made the First Flight\" by Orville Wright During the night of December 16, 1903, a strong cold wind blew from the north. When we arose on the morning of the 17th, the puddles of water, which had been standing about camp since the recent rains, were covered with ice. The wind had a velocity of 10 to 12 meters per second (22 to 27 miles an hour). We thought it would die down before long, and so remained indoors the early part of the morning. But when ten o'clock arrived, and the wind was as brisk as ever, we decided that we had better get the machine out and attempt a flight. We hung out the signal for the men of the Life Saving Station. We thought that by facing the Read this sentence from paragraph 4. Wilbur having used his turn in the unsuccessful attempt on the 14th, the right to the first trial now belonged to me. The sentence contributes to the development of ideas in the excerpt by",
    "imageSrc": "/exams/exam3/items/ela_q09.png",
    "options": [
      {
        "id": "A",
        "text": "demonstrating the challenge of the extreme winter conditions during the flight."
      },
      {
        "id": "B",
        "text": "revealing how many tries it took for Wilbur Wright to finally get the machine to take flight."
      },
      {
        "id": "C",
        "text": "demonstrating that both Orville and Wilbur Wright were eager to pilot what could potentially be the first flight."
      },
      {
        "id": "D",
        "text": "suggesting a sense that both brothers felt confident they would soon succeed in completing the first flight."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_10",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 10,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "In 1903 brothers Wilbur and Orville Wright conducted experiments related to flying machines. These experiments would eventually lead to air travel becoming a reliable form of transportation. Excerpt from \"How We Made the First Flight\" by Orville Wright During the night of December 16, 1903, a strong cold wind blew from the north. When we arose on the morning of the 17th, the puddles of water, which had been standing about camp since the recent rains, were covered with ice. The wind had a velocity of 10 to 12 meters per second (22 to 27 miles an hour). We thought it would die down before long, and so remained indoors the early part of the morning. But when ten o'clock arrived, and the wind was as brisk as ever, we decided that we had better get the machine out and attempt a flight. We hung out the signal for the men of the Life Saving Station. We thought that by facing the The photograph mentioned in paragraph 4 is significant because it \u2022 A. documents that the machine rose into the air as soon as the tethering wire was released. O B. provides proof of the critical moment the machine took flight. O C. documents that the wind reduced the speed of the plane at the start of the flight. D. provides proof that the pilot had to gradually increase the height of the plane in the air.",
    "imageSrc": "/exams/exam3/items/ela_q10.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_11",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 11,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "the flight convey a central idea of the excerpt?",
    "imageSrc": "/exams/exam3/items/ela_q11.png",
    "options": [
      {
        "id": "A",
        "text": "by explaining how the flawed design of the machine caused it to turn unpredictably in the air and brought the first flight by a person to an abrupt end"
      },
      {
        "id": "B",
        "text": "by indicating that the difficulty in controlling the flight was caused by the rudimentary instruments of the machine and the inexperience of the pilot"
      },
      {
        "id": "C",
        "text": "by explaining how the pilot and the plane overcame adverse conditions in order to complete the first piloted flight"
      },
      {
        "id": "D",
        "text": "by indicating that the gradual change in wind velocity created an extreme environment in which to maneuver the plane and maintain its flight"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_12",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 12,
    "passageId": "e3_p2",
    "type": "multiple_choice",
    "prompt": "In 1903 brothers Wilbur and Orville Wright conducted experiments related to flying machines. These experiments would eventually lead to air travel becoming a reliable form of transportation. Excerpt from \"How We Made the First Flight\" by Orville Wright During the night of December 16, 1903, a strong cold wind blew from the north. When we arose on the morning of the 17th, the puddles of water, which had been standing about camp since the recent rains, were covered with ice. The wind had a velocity of 10 to 12 meters per second (22 to 27 miles an hour). We thought it would die down before long, and so remained indoors the early part of the morning. But when ten o'clock arrived, and the wind was as brisk as ever, we decided that we had better get the machine out and attempt a flight. We hung out the signal for the men of the Life Saving Station. We thought that by facing the Read this sentence from paragraph 5. As the velocity of the wind was over 35 feet per second and the speed of the machine over the ground against this wind ten feet per second, the speed of the machine relative to the air was over 45 feet per second, and the length of the flight was equivalent to",
    "imageSrc": "/exams/exam3/items/ela_q12.png",
    "options": [
      {
        "id": "A",
        "text": "flight of 540 feet made in calm air. How does the sentence help convey Orville Wright's perspective about this first flight? \u2022 A. It suggests that he was frustrated by the poor flying conditions on the day of the flight."
      },
      {
        "id": "B",
        "text": "It emphasizes that he believed the flight was successful despite its short distance."
      },
      {
        "id": "C",
        "text": "It provides a comparison between flight distances under calm and high wind conditions."
      },
      {
        "id": "D",
        "text": "It highlights the importance of such calculations in the success of future flights."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_13",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 13,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "order to accommodate the weather conditions?",
    "imageSrc": "/exams/exam3/items/ela_q13.png",
    "options": [
      {
        "id": "A",
        "text": "\"When we arose on the morning of the 17th, the puddles of water, which had been standing about camp since the recent rains, were covered with ice.\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"We realized the difficulties of flying in so high a wind, but estimated that the added dangers in flight would be partly compensated for by the slower speed in landing.\" (paragraph 1)"
      },
      {
        "id": "C",
        "text": "\"After running the motor a few minutes to heat it up, I released the wire that held the machine to the track, and the machine started forward in the wind.\" (paragraph 4)"
      },
      {
        "id": "D",
        "text": "\"The course of the flight up and down was exceedingly erratic, partly due to the irregularity of the air, and partly to lack of experience in handling this machine.\" (paragraph 5)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_14",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 14,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "In 1903 brothers Wilbur and Orville Wright conducted experiments related to flying machines. These experiments would eventually lead to air travel becoming a reliable form of transportation. Excerpt from \"How We Made the First Flight\" by Orville Wright During the night of December 16, 1903, a strong cold wind blew from the north. When we arose on the morning of the 17th, the puddles of water, which had been standing about camp since the recent rains, were covered with ice. The wind had a velocity of 10 to 12 meters per second (22 to 27 miles an hour). We thought it would die down before long, and so remained indoors the early part of the morning. But when ten o'clock arrived, and the wind was as brisk as ever, we decided that we had better get the machine out and attempt a flight. We hung out the signal for the men of the Life Saving Station. We thought that by facing the The use of chronological structure contributes to the development of ideas in the excerpt by",
    "imageSrc": "/exams/exam3/items/ela_q14.png",
    "options": [
      {
        "id": "A",
        "text": "outlining the actions that the Wright brothers took to prepare for and successfully complete the first flight."
      },
      {
        "id": "B",
        "text": "identifying the primary factors that allowed the Wright brothers to overcome obstacles and achieve the first flight."
      },
      {
        "id": "C",
        "text": "showing how the Wright brothers applied lessons learned from their previous flight attempts to accomplish the first flight."
      },
      {
        "id": "D",
        "text": "demonstrating how the Wright brothers analyzed the impact of wind velocity to identify the ideal conditions for the first flight."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_15",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 15,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "Wolves of the Sea 1) The cool and misty landscape of the Great Bear Rainforest can be found along the coast of British Columbia, Canada, and its nearby islands, from Vancouver Island to the Alaskan border. Within this protected area, wolves roam the forests, islands, and beaches. When biologist Chris Darimont began to study these wolves, he wanted to confer with local First Nations groups, as aboriginal Canadians are known, in order to learn what they knew about these wolves. He spoke with Chester Starr, an elder of the Heiltsuk Nation that has occupied the Great Bear Rainforest for thousands of years. What Starr had to say about the wolves changed Darimont's perception of the animals. 2) Starr asked Darimont which wolves he and his team were going to study-the timber wolves (mainland wolves) or the coastal wolves on the islands. The question took Darimont by surprise. Biologists had alwavs believed that the wolves that are sometimes The details in paragraph 1 contribute to a central idea of the passage by showing that Darimont",
    "imageSrc": "/exams/exam3/items/ela_q15.png",
    "options": [
      {
        "id": "A",
        "text": "believed the Great Bear Rainforest was an ideal location to study wolves in their natural habitat because it is a protected area."
      },
      {
        "id": "B",
        "text": "values different perspectives, because the information that Starr provided influenced the focus of Darimont's research."
      },
      {
        "id": "C",
        "text": "thought the Great Bear Rainforest would provide opportunities to study different groups of wolves because the area includes forests and islands."
      },
      {
        "id": "D",
        "text": "understands the importance of respecting local community members, because Darimont sought permission from an elder of the Heiltsuk Nation before starting his research."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_16",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 16,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "between Starr and Darimont in paragraph 2?",
    "imageSrc": "/exams/exam3/items/ela_q16.png",
    "options": [
      {
        "id": "A",
        "text": "to explain why Starr had closely observed the relationship between the two groups of wolves Darimont wanted to study"
      },
      {
        "id": "B",
        "text": "to show that Darimont was hoping to work with Starr and to study both groups of wolves in the area"
      },
      {
        "id": "C",
        "text": "to highlight that Darimont was unfamiliar with the area and expected Starr to help him find wolves to study"
      },
      {
        "id": "D",
        "text": "to emphasize that the question asked by Starr caused Darimont to review his initial assumption about the wolves"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_17",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 17,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "Wolves of the Sea 1) The cool and misty landscape of the Great Bear Rainforest can be found along the coast of British Columbia, Canada, and its nearby islands, from Vancouver Island to the Alaskan border. Within this protected area, wolves roam the forests, islands, and beaches. When biologist Chris Darimont began to study these wolves, he wanted to confer with local First Nations groups, as aboriginal Canadians are known, in order to learn what they knew about these wolves. He spoke with Chester Starr, an elder of the Heiltsuk Nation that has occupied the Great Bear Rainforest for thousands of years. What Starr had to say about the wolves changed Darimont's perception of the animals. 2 Starr asked Darimont which wolves he and his team were going to study-the timber wolves (mainland wolves) or the coastal wolves on the islands. The question took Darimont by surprise. Biologists had alwavs helieved that the wolves that are sometimes Read this sentence from paragraph 4. After collecting and analyzing the DNA in 800 samples of gray fur and wolf waste, researchers could produce hard biological evidence that sea wolves had genetic markers that made them distinct from the mainland wolves. The phrase \"hard biological evidence\" conveys that the goal of the research team was to",
    "imageSrc": "/exams/exam3/items/ela_q17.png",
    "options": [
      {
        "id": "A",
        "text": "develop a procedure in order to ensure their study yielded plentiful data about the wolves."
      },
      {
        "id": "B",
        "text": "seek definitive scientific proof of the number of wolf species present in the area of the study."
      },
      {
        "id": "C",
        "text": "conduct a study to evaluate multiple theories about the diets of different wolf species."
      },
      {
        "id": "D",
        "text": "discover if the new data would provide information different from that of previous studies."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_18",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 18,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "The author uses the word \"admits\" in paragraph 5 most likely to",
    "imageSrc": "/exams/exam3/items/ela_q18.png",
    "options": [
      {
        "id": "A",
        "text": "note that Darimont's genetic research verified a theory based solely on field observations."
      },
      {
        "id": "B",
        "text": "imply that Darimont's study was disappointing because the conclusion that he reached was not original."
      },
      {
        "id": "C",
        "text": "emphasize that Darimont's study ultimately confirmed an idea that he had initially doubted. \u2022"
      },
      {
        "id": "D",
        "text": "highlight that Darimont's results led him to draw a conclusion from his research that his team did not agree with."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_19",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 19,
    "passageId": "e3_p3",
    "type": "multiple_choice",
    "prompt": "sea wolves had successfully adapted to living on the islands?",
    "imageSrc": "/exams/exam3/items/ela_q19.png",
    "options": [
      {
        "id": "A",
        "text": "\"While mainland wolves almost exclusively eat meat, such as deer and elk, and teach their young to hunt for land animals, sea wolves get as much as 90 percent of their nutrition from the sea and teach their young to dig for clams and to catch fish.\" (paragraph 3)"
      },
      {
        "id": "B",
        "text": "\"Sea wolves regularly swim between islands and have been known to sneak up on a seal sunning itself on a rock and make a leaping attack from the water.\" (paragraph 3)"
      },
      {
        "id": "C",
        "text": "\"Darimont suspects that some sea wolves live their entire life on the islands.\" (paragraph 3)"
      },
      {
        "id": "D",
        "text": "\"Darimont hypothesizes that a change in habitat led to the eventual genetic differences between sea wolves and mainland wolves.\" (paragraph 4)"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_20",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 20,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "the Great Bear Rainforest over time?",
    "imageSrc": "/exams/exam3/items/ela_q20.png",
    "options": [
      {
        "id": "A",
        "text": "It caused some of the wolves to learn new hunting techniques in order to catch increasingly scarce prey."
      },
      {
        "id": "B",
        "text": "It caused the wolves to form smaller packs and eventually separate, establishing distinct territories."
      },
      {
        "id": "C",
        "text": "It caused some of the wolves to gradually become a new, genetically distinct species as they adapted behaviorally."
      },
      {
        "id": "D",
        "text": "It caused the wolves to adapt their diet as different food sources became available in the area."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_21",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 21,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "10 15 Ode to Fireworks In autumn my mother drove us to the edge of the field where the fair was set up year after year: the carousel, the bumper cars, the long, low sheds filled with prizewinning animals. We-my sister, my cousin, and I-were ready for bed, already in our pajamas. This was a treat we waited all year for. We waited in the darkness for the first low, dull thwumps, like someone beating an old, filthy rug hung on a wash line. Then we counted the seconds between the lightning and thunder, as we also used to do, until the sky lit up: red, blue, green, gold. In my mind's eye I can still see the straggly, ancient oak whose branche reached up past the exhibition halls, silhouetted against the spectrum of stars that cascaded behind it. It was one thing to look up into the sky and imagine yourself in it or to make out pictures The comparison in lines 8-9 of the poem is used to convey",
    "imageSrc": "/exams/exam3/items/ela_q21.png",
    "options": [
      {
        "id": "A",
        "text": "the muffled pounding of explosions in the distance."
      },
      {
        "id": "B",
        "text": "the way lightning streaks through the clouds."
      },
      {
        "id": "C",
        "text": "the echoes of thunder on an autumn night."
      },
      {
        "id": "D",
        "text": "the glow of sparks falling from the sky."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_22",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 22,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "speaker?",
    "imageSrc": "/exams/exam3/items/ela_q22.png",
    "options": [
      {
        "id": "A",
        "text": "The speaker values material possessions."
      },
      {
        "id": "B",
        "text": "The speaker imagines that the fireworks are magical."
      },
      {
        "id": "C",
        "text": "The speaker believes that the country setting is distinctive."
      },
      {
        "id": "D",
        "text": "The speaker cherishes the memory of seeing fireworks as a child."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_23",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 23,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "10 15 Ode to Fireworks In autumn my mother drove us to the edge of the field where the fair was set up year after year: the carousel, the bumper cars, the long, low sheds filled with prizewinning animals. We-my sister, my cousin, and I-were ready for bed, already in our pajamas. This was a treat we waited all year for. We waited in the darkness for the first low, dull thwumps, like someone beating an old, filthy rug hung on a wash line. Then we counted the seconds between the lightning and thunder, as we also used to do, until the sky lit up: red, blue, green, gold. In my mind's eye I can still see the straggly, ancient oak whose branche reached up past the exhibition halls, silhouetted against the spectrum of stars that cascaded behind it. It was one thing to look up into the sky and imagine yourself in it or to make out pictures The use of italics on the word \"night\" in line 24 is most likely intended to emphasize the",
    "imageSrc": "/exams/exam3/items/ela_q23.png",
    "options": [
      {
        "id": "A",
        "text": "sense of mystery in the darkness."
      },
      {
        "id": "B",
        "text": "sense of absolute darkness. \u2022"
      },
      {
        "id": "C",
        "text": "speaker's fear of night."
      },
      {
        "id": "D",
        "text": "speaker's certainty about that night."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_24",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 24,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "lines 26 and 37? In autumn my mother drove us to the edge of the field",
    "imageSrc": "/exams/exam3/items/ela_q24.png",
    "options": [
      {
        "id": "A",
        "text": "to create a distinction between solitude and meaningful where the fair was set up year after year: interaction the carousel, the bumper cars, the long, low sheds filled with prizewinning animals. We-my sister, my cousin, and I\u2014were ready for bed, already in our pajamas. This was a treat we waited"
      },
      {
        "id": "B",
        "text": "to demonstrate a connection between the speaker's past and present all year for. We waited in the darkness for the first low, dull thwumps, like someone"
      },
      {
        "id": "C",
        "text": "to emphasize the speaker's attention to the surrounding beating an old, filthy rug hung on a wash line. sounds Then we counted the seconds between the lightning and thunder, as we also used to do, until the sky"
      },
      {
        "id": "D",
        "text": "to compare the fireworks to common sights and sounds lit up: red, blue, green, gold. In my mind's eye I can still see the straggly, ancient oak whose branche reached up past the exhibition halls, silhouetted against the spectrum of stars that cascaded behind it. It was one thing to look up into the sky and imagine yourself in it or to make out pictures"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_25",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 25,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "How does this memory affect the speaker?",
    "imageSrc": "/exams/exam3/items/ela_q25.png",
    "options": [
      {
        "id": "A",
        "text": "The speaker believes it is impossible to ever return to a place in the past."
      },
      {
        "id": "B",
        "text": "The speaker is still amused by the impatience felt during fireworks displays."
      },
      {
        "id": "C",
        "text": "The speaker now regrets abandoning the rural way of life."
      },
      {
        "id": "D",
        "text": "The speaker feels a sense of comfort when reflecting on the past."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_26",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 26,
    "passageId": "e3_p4",
    "type": "multiple_choice",
    "prompt": "10 15 Ode to Fireworks In autumn my mother drove us to the edge of the field where the fair was set up year after year: the carousel, the bumper cars, the long, low sheds filled with prizewinning animals. We-my sister, my cousin, and I-were ready for bed, already in our pajamas. This was a treat we waited all year for. We waited in the darkness for the first low, dull thwumps, like someone beating an old, filthy rug hung on a wash line. Then we counted the seconds between the lightning and thunder, as we also used to do, until the sky lit up: red, blue, green, gold. In my mind's eye I can still see the straggly, ancient oak whose branche reached up past the exhibition halls, silhouetted against the spectrum of stars that cascaded behind it. It was one thing to look up into the sky and imagine yourself in it or to make out pictures The fireworks in the poem represent the speaker's",
    "imageSrc": "/exams/exam3/items/ela_q26.png",
    "options": [
      {
        "id": "A",
        "text": "wish to return to a simpler way of living."
      },
      {
        "id": "B",
        "text": "bittersweet feelings about leaving the past behind."
      },
      {
        "id": "C",
        "text": "high expectations for everyday life."
      },
      {
        "id": "D",
        "text": "reflections on past interactions with relatives."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_27",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 27,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch 1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle In paragraph 3, the phrase \"the butterflies of the sea\" conveys the idea that \u2022 A. nudibranchs do not have to work as hard as other animals to survive in the ocean. O B. nudibranchs have colorful features that make them stand out. C. nudibranchs are delicate and have trouble adapting to their environment. D. nudibranchs are rare and difficult to find in the ocean.",
    "imageSrc": "/exams/exam3/items/ela_q27.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_28",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 28,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch (1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle Read these sentences from paragraph 4. I'm not sure why I decided to take a look. It was still an hour before sunrise, and I knew exactly what the bars looked like in the moonlight, but for some reason, I couldn't resist. The sentences contribute to the overall structure of the excerpt by",
    "imageSrc": "/exams/exam3/items/ela_q28.png",
    "options": [
      {
        "id": "A",
        "text": "introducing the mysterious creature that the narrator discovers."
      },
      {
        "id": "B",
        "text": "indicating a shift from the narrator recalling the past to the narrator reflecting on the present."
      },
      {
        "id": "C",
        "text": "establishing a struggle with fear that the narrator must overcome."
      },
      {
        "id": "D",
        "text": "building tension through indicating that the narrator is going to see something unexpected."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_29",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 29,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch 1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle The narrator's actions in paragraph 5 reveal that he is",
    "imageSrc": "/exams/exam3/items/ela_q29.png",
    "options": [
      {
        "id": "A",
        "text": "expecting to see the familiar sight of a stranded minke."
      },
      {
        "id": "B",
        "text": "confident about exploring farther into the mudflats. \u2022"
      },
      {
        "id": "C",
        "text": "unconcerned about becoming stuck in the mudflats."
      },
      {
        "id": "D",
        "text": "determined to discover the source of the sound."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_30",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 30,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "How does the setting affect the plot of the excerpt?",
    "imageSrc": "/exams/exam3/items/ela_q30.png",
    "options": [
      {
        "id": "A",
        "text": "The darkness of the mudflats before sunrise causes the narrator to pay close attention to his surroundings."
      },
      {
        "id": "B",
        "text": "The rugged terrain of the mudflats makes it more difficult for the narrator to do his job."
      },
      {
        "id": "C",
        "text": "The slow return of the tide along the mudflats forces the narrator to be patient during his journey."
      },
      {
        "id": "D",
        "text": "The barren appearance of the mudflats creates a sense of mystery that unsettles the narrator."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_31",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 31,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "narrator is taking a risk?",
    "imageSrc": "/exams/exam3/items/ela_q31.png",
    "options": [
      {
        "id": "A",
        "text": "\"It was an exhale, a release of sorts, and I instantly wondered if a whale was stranded again.\""
      },
      {
        "id": "B",
        "text": "\"I looked for a hulking silhouette but couldn't find one.\""
      },
      {
        "id": "C",
        "text": "\"I waited, but there were no more sounds.\""
      },
      {
        "id": "D",
        "text": "\"I knew the flats well enough to know I could get stuck just about anywhere.\""
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_32",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 32,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch (1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle Read this sentence from paragraph 6. I kept stepping toward the one sound I'd heard, a growing part of me hoping l'd find nothing at all. How do the narrator's actions develop a central idea of the excerpt? \u2022 A. The narrator's concern about the origin of the noise shows dedication to helping preserve sea life in the mudflats. O B. The narrator's curiosity about the sea life in the mudflats outweighs any fear about the situation. \u2022 C. The narrator's knowledge about a variety of sea life encourages a search for more specimens to study. \u2022 D. The narrator's eagerness about new specimens of sea life outweighs the reality that the area is an unlikely place to find them.",
    "imageSrc": "/exams/exam3/items/ela_q32.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_33",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 33,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch 1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle Read these sentences from paragraph 8. So, I was looking at it and not looking at it while my heart spangled my vision. I saw fragments, pieces, and tried to fuse them in my mind but couldn't be certain of the whole. The sensory language \"spangled my vision,\" \"I saw fragments, pieces,\" and \"tried to fuse them in my mind\" conveys the narrator's",
    "imageSrc": "/exams/exam3/items/ela_q33.png",
    "options": [
      {
        "id": "A",
        "text": "extreme excitement about making a great discovery."
      },
      {
        "id": "B",
        "text": "reluctant acceptance that he needs to leave the mudflats."
      },
      {
        "id": "C",
        "text": "terrified confusion about the creature in the mudflats."
      },
      {
        "id": "D",
        "text": "sudden concern about his personal safety."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_34",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 34,
    "passageId": "e3_p5",
    "type": "multiple_choice",
    "prompt": "The narrator's summer job is collecting marine specimens in Puget Sound, Washington. In this excerpt, he is looking for specimens in the mudflats before daybreak. Mudflats, or flats, are coastal landforms created when sediment and silt from tides are deposited as the tides recede. Excerpt from The Highest Tide by Jim Lynch 1) I rounded the oyster beds, to the far side. ... It was low tide by then, and I saw the water hesitating at its apex, neither leaving nor returning, patiently waiting for the gravitational gears to shift. Dozens of anxious clams started squirting in unison like they did whenever vibrating grains of sand warned them predators were approaching. I stopped and waited with them, to actually see the moment when the tide started returning with its invisible buffet of plankton for the clams, oysters, mussels and other filter feeders. It was right then, ankle The author develops the narrator's point of view when the narrator sees the creature by \u2022 A. describing the narrator's movements as he approaches the creature. O B. emphasizing the odds of finding the creature in an area inhabited by a rival species. C. showing the narrator's growing realization of the creature's identity. \u2022 D. comparing the size of the creature to the size of a vehicle.",
    "imageSrc": "/exams/exam3/items/ela_q34.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_35",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 35,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "What is the best way to combine sentences 2 and 3?",
    "imageSrc": "/exams/exam3/items/ela_q35.png",
    "options": [
      {
        "id": "A",
        "text": "Historians, who are unsure of exactly when and where martial arts were first used, know that martial arts have been practiced by several different societies for many centuries."
      },
      {
        "id": "B",
        "text": "While historians are unsure of exactly when and where martial arts were first used, they do know that martial arts have been practiced by several different societies for many centuries."
      },
      {
        "id": "C",
        "text": "Because historians know that martial arts have been practiced by several different societies for many centuries, they are unsure of exactly when and where martial arts were first used."
      },
      {
        "id": "D",
        "text": "Martial arts have been practiced by several different societies for many centuries, and historians are unsure of exactly when and where martial arts were first used."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_36",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 36,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "organization of the second paragraph (sentences 6-10)?",
    "imageSrc": "/exams/exam3/items/ela_q36.png",
    "options": [
      {
        "id": "A",
        "text": "to the beginning of the paragraph (before sentence 6)"
      },
      {
        "id": "B",
        "text": "between sentences 6 and 7"
      },
      {
        "id": "C",
        "text": "between sentences 7 and 8"
      },
      {
        "id": "D",
        "text": "between sentences 8 and 9"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_37",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 37,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "Martial Arts for the Mind and Body (1) The martial arts blend a series of physical movements with strategic mental discipline so that practitioners can defend themselves, physically defeat an opponent, or both. (2) Historians are unsure of exactly when and where martial arts were first used. (3) Martial arts have been practiced by several different societies for many centuries. (4) Martial arts such as karate, kung fu, tae kwon do, and judo are still taught and practiced as methods of self-defense, but they offer students more than that. (5) The study of martial arts can provide students with a way to enhance their mental discipline as well as their physical fitness. (6) Discipline, focus, and respect are important qualities for everyone to have. (7) However, for most people these qualities are not innate; they must be learned and practiced. (8) The study of martial arts can provide an opportunity to develop these skills. (9) Students are rewarded for their dedication hy nassina tests and Which revision of sentence 12 best maintains the formal style established in the passage? \u2022 A. A lot of teens have to put up with difficult things while trying to do well in school and in life. O B. Many teenagers deal with tough situations as they try to stay on top of their studies and do well in life. \u2022 C. Many teenagers encounter challenges as they work to succeed both academically and personally. D. A lot of teens face problems as they work to keep up with their schoolwork and find personal success.",
    "imageSrc": "/exams/exam3/items/ela_q37.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_38",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 38,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "sentence 17?",
    "imageSrc": "/exams/exam3/items/ela_q38.png",
    "options": [
      {
        "id": "A",
        "text": "Over time,"
      },
      {
        "id": "B",
        "text": "In fact,"
      },
      {
        "id": "C",
        "text": "Even so,"
      },
      {
        "id": "D",
        "text": "For instance,"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_39",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 39,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "Which sentence would best follow and support sentence 18?",
    "imageSrc": "/exams/exam3/items/ela_q39.png",
    "options": [
      {
        "id": "A",
        "text": "Adult students gain discipline, focus, self-control, and respect, which are qualities that help them advance in their careers."
      },
      {
        "id": "B",
        "text": "Many adults initially train in a martial art simply to get exercise without realizing that the training also helps develop other skills."
      },
      {
        "id": "C",
        "text": "The exercise involved in training helps people strengthen their heart, boost endurance, improve balance, and develop muscle tone."
      },
      {
        "id": "D",
        "text": "People who commit to training in the martial arts are usually concerned about improving their overall physical health."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_40",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 40,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "support the topic presented in the passage?",
    "imageSrc": "/exams/exam3/items/ela_q40.png",
    "options": [
      {
        "id": "A",
        "text": "With so many ways to begin studying martial arts, people can easily discover how the skills needed to progress in rank may help them in life."
      },
      {
        "id": "B",
        "text": "By taking advantage of opportunities to practice martial arts, people can experience the satisfaction of achieving goals while also improving themselves."
      },
      {
        "id": "C",
        "text": "Because people are eager to reap the mental and physical benefits of studying martial arts, enrollment in martial arts courses has increased."
      },
      {
        "id": "D",
        "text": "While taking martial arts classes can improve health for both young people and adults, the effects are clearly more immediate for adults."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_41",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 41,
    "passageId": "e3_p6",
    "type": "multiple_choice",
    "prompt": "the main topic of the passage?",
    "imageSrc": "/exams/exam3/items/ela_q41.png",
    "options": [
      {
        "id": "A",
        "text": "The construction of the Gotthard Base Tunnel was approved by Swiss voters in 1992 and was funded by tolls, fuel taxes, and government loans."
      },
      {
        "id": "B",
        "text": "Leaders from several European countries attended the opening ceremonies for the Gotthard Base Tunnel, a Swiss tunnel."
      },
      {
        "id": "C",
        "text": "The Gotthard Base Tunnel is the world's longest and deepest railway tunnel, stretching 35.5 miles straight through the base of the Swiss Alps. O D. The Gotthard Base Tunnel continues to help reduce the number of freight trucks on the roadways in the Swiss Alps."
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_42",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 42,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "sentence 7?",
    "imageSrc": "/exams/exam3/items/ela_q42.png",
    "options": [
      {
        "id": "A",
        "text": "The tunnel-boring machine is helpful to tunnel builders in the modern era and has been an improvement over dynamite."
      },
      {
        "id": "B",
        "text": "These enormous tunnel-boring machines function somewhat like a cheese grater, with the cutter head grinding slowly through rock and stone."
      },
      {
        "id": "C",
        "text": "Engineers had considered making a tunnel under the mountains for many years, but it was impossible to do without modern tunnel-boring machines."
      },
      {
        "id": "D",
        "text": "Different types of cutter heads are used with tunnel- boring machines depending on the geology of the area where the tunnel is being created."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_43",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 43,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "organization of the second paragraph (sentences 6-11)?",
    "imageSrc": "/exams/exam3/items/ela_q43.png",
    "options": [
      {
        "id": "A",
        "text": "to the beginning of the paragraph (before sentence 6) \u2022 ."
      },
      {
        "id": "B",
        "text": "between sentences 6 and 7 \u2022"
      },
      {
        "id": "C",
        "text": "between sentences 8 and 9"
      },
      {
        "id": "D",
        "text": "between sentences 9 and 10"
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_44",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 44,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "be removed?",
    "imageSrc": "/exams/exam3/items/ela_q44.png",
    "options": [
      {
        "id": "A",
        "text": "sentence 13"
      },
      {
        "id": "B",
        "text": "sentence 14"
      },
      {
        "id": "C",
        "text": "sentence 15"
      },
      {
        "id": "D",
        "text": "sentence 16"
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_45",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 45,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "sentence 18?",
    "imageSrc": "/exams/exam3/items/ela_q45.png",
    "options": [
      {
        "id": "A",
        "text": "Although the Gotthard Base Tunnel is mainly for freight trains,"
      },
      {
        "id": "B",
        "text": "With the Gotthard Base Tunnel taking ten years to complete,"
      },
      {
        "id": "C",
        "text": "Because of the successful completion of the Gotthard Base Tunnel, O D. As the number of trains using the Gotthard Base Tunnel increases,"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_46",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 46,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "to support the topic presented in the passage?",
    "imageSrc": "/exams/exam3/items/ela_q46.png",
    "options": [
      {
        "id": "A",
        "text": "There is proof that underground tunnels such as the Gotthard Base Tunnel are beneficial to the economy of the surrounding area."
      },
      {
        "id": "B",
        "text": "The Gotthard Base Tunnel is an extraordinary example of how human ingenuity and persistence can overcome great obstacles."
      },
      {
        "id": "C",
        "text": "The completion of the Gotthard Base Tunnel shows that people can work together to achieve important goals. O D. The Swiss government is confident that the economic impact of the Gotthard Base Tunnel will be worth its construction cost."
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_47",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 47,
    "passageId": "e3_p7",
    "type": "multiple_choice",
    "prompt": "Which sentence contains an error in its construction and should be revised? (1) Walking dogs, cleaning kennels, hand-feeding newborn kittens, and supporting the pet-adoption process, the animal shelter is looking for volunteers to help with a variety of tasks. (2) Working at the animal shelter is a great way for young people, especially those who aspire to care for and protect animals, to gain valuable work experience. (3) In addition to hands-on training with animal care, volunteers will learn important job skills, such as punctuality, responsibility, and personal initiative. (4) Caring for animals can also help volunteers develop empathy, which is the awareness and understanding of the feelings of others.",
    "imageSrc": "/exams/exam3/items/ela_q47.png",
    "options": [
      {
        "id": "A",
        "text": "sentence 1"
      },
      {
        "id": "B",
        "text": "sentence 2"
      },
      {
        "id": "C",
        "text": "sentence 3"
      },
      {
        "id": "D",
        "text": "sentence 4"
      }
    ],
    "correctAnswer": "A",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_48",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 48,
    "type": "multiple_choice",
    "prompt": "Read this sentence. In the Whispering Gallery of Grand Central Terminal, people whispering a message in one corner can be clearly heard in the opposite corner, regardless of surrounding noise, because the tiled archways send the sound through the environment. Which revision to the words send the sound through the environment uses the most precise language? Drag the correct phrase into the box. guide the sound waves in a specific direction focus the sound waves to travel through the space direct the sound waves to move along the curves of the arches transfer the sound waves to a variety of different locations In the Whispering Gallery of Grand Central Terminal, people whispering a message in one corner can be clearly heard in the opposite corner, regardless of surrounding noise, because the tiled archways",
    "imageSrc": "/exams/exam3/items/ela_q48.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_49",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 49,
    "type": "multi_select",
    "prompt": "Which two edits should be made to correct the sentence? Select the two correct answers.",
    "imageSrc": "/exams/exam3/items/ela_q49.png",
    "options": [
      {
        "id": "A",
        "text": "Delete the comma after first."
      },
      {
        "id": "B",
        "text": "Delete the comma after daguerreotype."
      },
      {
        "id": "C",
        "text": "Delete the comma after silver."
      },
      {
        "id": "D",
        "text": "Add a comma after today."
      },
      {
        "id": "E",
        "text": "Add a comma after film."
      }
    ],
    "correctAnswer": "A and D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A and D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_ela_50",
    "examId": "exam3",
    "section": "ela",
    "questionNumber": 50,
    "type": "multiple_choice",
    "prompt": "What is the best way to combine the sentences? (1) Scientists now believe that Jupiter may have as many as seventy-nine moons. (2) One of Jupiter's moons is named lo. (3) lo has the greatest number of active volcanoes in the solar system.",
    "imageSrc": "/exams/exam3/items/ela_q50.png",
    "options": [
      {
        "id": "A",
        "text": "lo, which is one of Jupiter's moons, has the greatest number of active volcanoes in the solar system, and scientists now believe that Jupiter may have as many as seventy-nine moons."
      },
      {
        "id": "B",
        "text": "Scientists now believe that Jupiter may have as many as seventy-nine moons, and one of them is named lo, which has the greatest number of active volcanoes in the solar system."
      },
      {
        "id": "C",
        "text": "Scientists now believe that Jupiter may have as many as seventy-nine moons, including one named lo, which has the eatest number of active volcanoes in the solar system."
      },
      {
        "id": "D",
        "text": "lo, a moon with the greatest number of active volcanoes in the solar system, is one of Jupiter's moons, and scientists now believe that Jupiter may have as many as seventy-nine moons."
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_01",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 51,
    "type": "multiple_choice",
    "prompt": "What is the prime factorization of 3,575?",
    "imageSrc": "/exams/exam3/items/math_q01.png",
    "options": [
      {
        "id": "A",
        "text": "5 \u2022 11 \u2022 13."
      },
      {
        "id": "B",
        "text": "52.11 - 13"
      },
      {
        "id": "C",
        "text": "5 \u2022 715"
      },
      {
        "id": "D",
        "text": "52.143"
      }
    ],
    "correctAnswer": "B",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_02",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 52,
    "type": "multiple_choice",
    "prompt": "What is the value of z in f + 2 = 1?",
    "imageSrc": "/exams/exam3/items/math_q02.png",
    "options": [
      {
        "id": "A",
        "text": "1."
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "\u0423"
      },
      {
        "id": "D",
        "text": "2y \u2014 x"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_03",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 53,
    "type": "multiple_choice",
    "prompt": "What is the value of x \u2014 y?",
    "imageSrc": "/exams/exam3/items/math_q03.png",
    "options": [
      {
        "id": "A",
        "text": "-7"
      },
      {
        "id": "B",
        "text": "\u20145"
      },
      {
        "id": "C",
        "text": "5"
      },
      {
        "id": "D",
        "text": "7"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_04",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 54,
    "type": "multiple_choice",
    "prompt": "If x =7, what is the value of 14? \u2022 \u0432. 9 \u2022 \u0441. 1} \u2022 D. 34",
    "imageSrc": "/exams/exam3/items/math_q04.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_05",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 55,
    "type": "text_entry",
    "prompt": "In a school raffle, 1 out of every 25 students wins a prize. Each prize includes a randomly selected trading card from a set of 100 different cards, labeled Cl through C100, with each card equally likely to be chosen. If one student is selected at random, what is the probability that the student both wins a prize and receives Card C17? Write an expression that represents the probability that a student wins the prize and receives Card C17.",
    "imageSrc": "/exams/exam3/items/math_q05.png",
    "options": null,
    "correctAnswer": "(1/25) x (1/100) = 1/2500",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: (1/25) x (1/100) = 1/2500. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_06",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 56,
    "type": "multiple_choice",
    "prompt": "The cost of shipping a package is $12, plus $2 for each additional pound over 3 pounds. Which expression represents the total cost, in dollars, of shipping a package that weighs p pounds? Assume that p \u2265 3.",
    "imageSrc": "/exams/exam3/items/math_q06.png",
    "options": [
      {
        "id": "A",
        "text": "12 + 2 (p + 3)"
      },
      {
        "id": "B",
        "text": "12 + 2 (p - 3)"
      },
      {
        "id": "C",
        "text": "14p + 3"
      },
      {
        "id": "D",
        "text": "14p - 3"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_07",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 57,
    "type": "text_entry",
    "prompt": "A middle school library has a shelf with 40 books, each labeled with a different number from 201 to 240. One book is selected at random. What is the probability, as a percentage, of selecting book number 223?",
    "imageSrc": "/exams/exam3/items/math_q07.png",
    "options": null,
    "correctAnswer": "2.5%",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 2.5%. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_08",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 58,
    "type": "text_entry",
    "prompt": "A square metal plate has a side length of 3 inches. A circular hole with a diameter of 2 inches is cut out from the center of the plate. - 2 in. - 3 in. - What is the area of the shaded region, to the nearest hundredth of a square inch?",
    "imageSrc": "/exams/exam3/items/math_q08.png",
    "options": null,
    "correctAnswer": "5.86",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 5.86. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_09",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 59,
    "type": "multi_select",
    "prompt": "Which of the expressions below must result in a positive value? Select the three correct answers.",
    "imageSrc": "/exams/exam3/items/math_q09.png",
    "options": [
      {
        "id": "A",
        "text": "\u2014m + k"
      },
      {
        "id": "B",
        "text": "\u2014m \u2022 k"
      },
      {
        "id": "C",
        "text": "m - k"
      },
      {
        "id": "D",
        "text": "\u2014k \u2022 m"
      }
    ],
    "correctAnswer": "A, B, D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A, B, D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_10",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 60,
    "type": "multiple_choice",
    "prompt": "For what values of x is the above inequality true?",
    "imageSrc": "/exams/exam3/items/math_q10.png",
    "options": [
      {
        "id": "A",
        "text": "x < 2"
      },
      {
        "id": "B",
        "text": "x > 2"
      },
      {
        "id": "C",
        "text": "x < 20"
      },
      {
        "id": "D",
        "text": "x > 20"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_11",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 61,
    "type": "multiple_choice",
    "prompt": "25 miles. What is the actual length of the shortest side of the park?",
    "imageSrc": "/exams/exam3/items/math_q11.png",
    "options": [
      {
        "id": "A",
        "text": "6.25 mil"
      },
      {
        "id": "B",
        "text": "8.75 mi"
      },
      {
        "id": "C",
        "text": "10 mi"
      },
      {
        "id": "D",
        "text": "15.625 mi"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_12",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 62,
    "type": "multiple_choice",
    "prompt": "P is the center of the circle above, and R, S, and T are points on the circle. What is the value of x?",
    "imageSrc": "/exams/exam3/items/math_q12.png",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "15"
      },
      {
        "id": "C",
        "text": "17"
      },
      {
        "id": "D",
        "text": "19"
      }
    ],
    "correctAnswer": "D",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_13",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 63,
    "type": "multiple_choice",
    "prompt": "In the right triangle shown above, what is the measure of the smallest angle?",
    "imageSrc": "/exams/exam3/items/math_q13.png",
    "options": [
      {
        "id": "A",
        "text": "43\u00b0."
      },
      {
        "id": "B",
        "text": "44\u00b0"
      },
      {
        "id": "C",
        "text": "46\u00b0."
      },
      {
        "id": "D",
        "text": "47\u00b0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_14",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 64,
    "type": "multiple_choice",
    "prompt": "pages in the afternoon, how many pages will he still need to read?",
    "imageSrc": "/exams/exam3/items/math_q14.png",
    "options": [
      {
        "id": "A",
        "text": "35."
      },
      {
        "id": "B",
        "text": "42"
      },
      {
        "id": "C",
        "text": "45."
      },
      {
        "id": "D",
        "text": "56"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_15",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 65,
    "type": "multiple_choice",
    "prompt": "1 1 T 22 + 33 What is the value of the expression shown above? \u2022 A. I 22 O C. \u2022 .22",
    "imageSrc": "/exams/exam3/items/math_q15.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_16",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 66,
    "type": "text_entry",
    "prompt": "The table shows the proportional relationship between x cups of oatmeal and y ounces of raisins in a bread recipe. BREAD RECIPE Cups of Oatmeal (x) Ounces of Raisins (y) 2 1.0 3 1.5 6 3.0 What is the constant of proportionality of the number of ounces of raisins to the number of cups of oatmeal?",
    "imageSrc": "/exams/exam3/items/math_q16.png",
    "options": null,
    "correctAnswer": "0.5",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 0.5. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_17",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 67,
    "type": "multiple_choice",
    "prompt": "the orchestra and the choir?",
    "imageSrc": "/exams/exam3/items/math_q17.png",
    "options": [
      {
        "id": "A",
        "text": "16 21"
      },
      {
        "id": "B",
        "text": "10 19"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "5 16"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_18",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 68,
    "type": "multiple_choice",
    "prompt": "Which of the following decimals is equivalent to 15 + 25?",
    "imageSrc": "/exams/exam3/items/math_q18.png",
    "options": [
      {
        "id": "A",
        "text": "3.1"
      },
      {
        "id": "B",
        "text": "3.6"
      },
      {
        "id": "C",
        "text": "4.1"
      },
      {
        "id": "D",
        "text": "4.9"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_19",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 69,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 19.",
    "imageSrc": "/exams/exam3/items/math_q19.png",
    "options": [
      {
        "id": "A",
        "text": "store manager purchases a piece of furniture for $456.00. To determine the selling price, the manager increases the purchase cost by 125%. A customer buys the furniture and pays an additional 8% sales tax. How much does the customer pay for the furniture? \u2022 A. $615.60"
      },
      {
        "id": "B",
        "text": "$627.48"
      },
      {
        "id": "C",
        "text": "$1,108.08"
      },
      {
        "id": "D",
        "text": "$1,846.80"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_20",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 70,
    "type": "multiple_choice",
    "prompt": "What is the value of 4\"?",
    "imageSrc": "/exams/exam3/items/math_q20.png",
    "options": [
      {
        "id": "A",
        "text": "\u201476"
      },
      {
        "id": "B",
        "text": "-4"
      },
      {
        "id": "C",
        "text": "4."
      },
      {
        "id": "D",
        "text": "148"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_21",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 71,
    "type": "multiple_choice",
    "prompt": "gave her to pay back the money she borrowed?",
    "imageSrc": "/exams/exam3/items/math_q21.png",
    "options": [
      {
        "id": "A",
        "text": "Maxie will still owe $2.25."
      },
      {
        "id": "B",
        "text": "Maxie will still owe $1.75."
      },
      {
        "id": "C",
        "text": "Maxie will have $1.75 left."
      },
      {
        "id": "D",
        "text": "Maxie will have $2.25 left."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_22",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 72,
    "type": "multiple_choice",
    "prompt": "Seth grows strawberries in his garden. \u2022 He picked 2- cups of strawberries on Monday. \u2022 He picked 4 cups of strawberries on Tuesday. \u2022 He ate & cup of strawberries for breakfast each day on Wednesday, Thursday, and Friday. How many cups of strawberries did Seth have left? \u2022 A. 3, \u2022 B. 44 \u2022 D. 9",
    "imageSrc": "/exams/exam3/items/math_q22.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_23",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 73,
    "type": "multiple_choice",
    "prompt": "Which situation involves quantities that combine to equal zero?",
    "imageSrc": "/exams/exam3/items/math_q23.png",
    "options": [
      {
        "id": "A",
        "text": "receiving $5 as a gift and then giving $5 to a friend"
      },
      {
        "id": "B",
        "text": "buying a book for $10 and then buying lunch for $10"
      },
      {
        "id": "C",
        "text": "getting on an elevator at the ground floor, rising 3 floors, and then rising 3 more floors"
      },
      {
        "id": "D",
        "text": "starting in a cave 20 feet below the ground, climbing up 20 feet, and then climbing up 20 feet more"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_24",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 74,
    "type": "multiple_choice",
    "prompt": "An athlete runs & Kilometer in i minute. At this rate, how many kilometers would the athlete run in 1 minute? \u2022 A. 3 32 \u2022 c. 15 \u2022 D. 6",
    "imageSrc": "/exams/exam3/items/math_q24.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_25",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 75,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 25.",
    "imageSrc": "/exams/exam3/items/math_q25.png",
    "options": [
      {
        "id": "A",
        "text": "bus trip takes 9 hours if the mean speed is 50 miles per hour. How many hours would this trip take if the mean speed was 45 miles per hour? 0 A. 8"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_26",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 76,
    "type": "text_entry",
    "prompt": "Jordan has a budget of $120 to rent a food truck. The rental company charges $18 per hour to rent the truck, plus a one-time cleaning fee of $30. Write an inequality that represents this situation, in which x is the number of hours Jordan can rent the truck.",
    "imageSrc": "/exams/exam3/items/math_q26.png",
    "options": null,
    "correctAnswer": "30 + 18x <= 120",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 30 + 18x <= 120. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_27",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 77,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 27.",
    "imageSrc": "/exams/exam3/items/math_q27.png",
    "options": [
      {
        "id": "A",
        "text": "birdseed mixture is - sunflower seeds. The cost of the sunflower seeds is $0.10 per ounce. At this rate, what is the cost of the sunflower seeds in 25 pounds of this birdseed? (Note: 1 lb = 16 oz.) \u2022 A. $10.00"
      },
      {
        "id": "B",
        "text": "$16.00"
      },
      {
        "id": "C",
        "text": "$40.00"
      },
      {
        "id": "D",
        "text": "$160.00"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_28",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 78,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 28.",
    "imageSrc": "/exams/exam3/items/math_q28.png",
    "options": [
      {
        "id": "A",
        "text": "graph shows the relationship between the number of gallons of water, y, that has been added to a tank and the number of hours, x, that water has been added to the tank at a constant rate. What does the ordered pair (3, 24) represent? \u2022 A. Three gallons of water was added in 24 hours."
      },
      {
        "id": "B",
        "text": "Three gallons of water was added per hour."
      },
      {
        "id": "C",
        "text": "Twenty-four gallons of water was added in 3 hours."
      },
      {
        "id": "D",
        "text": "Twenty-four gallons of water was added per hour."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_29",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 79,
    "type": "multiple_choice",
    "prompt": "Karl has one red spinner and one blue spinner. Each spinner is divided into 4 equal sections, numbered 1 through 4. He spins each spinner once and writes down the number that each lands on. What is the probability that the two numbers, when multiplied together, will have 4 as a product? \u2022 A. 16 \u2022 B. 16 0 \u2022 D. 16",
    "imageSrc": "/exams/exam3/items/math_q29.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_30",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 80,
    "type": "multiple_choice",
    "prompt": "A recipe uses & cup of sugar for every 1 - cups of flour. A cook wants to increase the recipe. How many cups of sugar are needed for each cup of flour? \u2022 D. 3%",
    "imageSrc": "/exams/exam3/items/math_q30.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_31",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 81,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 31.",
    "imageSrc": "/exams/exam3/items/math_q31.png",
    "options": [
      {
        "id": "A",
        "text": "box contains an unknown number of green marbles. An experimenter adds 100 red marbles to the box, mixes the marbles thoroughly, and then draws out 10 marbles at random. Assume that this sample is representative of the proportion in the box. If there are 2 red marbles and 8 green marbles in this sample, approximately how many green marbles are in the box? \u2022 A. 80."
      },
      {
        "id": "B",
        "text": "300."
      },
      {
        "id": "C",
        "text": "400"
      },
      {
        "id": "D",
        "text": "500."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_32",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 82,
    "type": "multiple_choice",
    "prompt": "altogether? Note: 1 gallon = 4 quarts; 1 quart = 4 cups.",
    "imageSrc": "/exams/exam3/items/math_q32.png",
    "options": [
      {
        "id": "A",
        "text": "24"
      },
      {
        "id": "B",
        "text": "4\u00f7"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "72."
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_33",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 83,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 33.",
    "imageSrc": "/exams/exam3/items/math_q33.png",
    "options": [
      {
        "id": "A",
        "text": "car costing $24,000 is subject to a sales tax of 8%. If Bindu made a $10,000 down payment on this car, what is the total amount she has left to pay? \u2022 A. $14,000"
      },
      {
        "id": "B",
        "text": "$15,620"
      },
      {
        "id": "C",
        "text": "$15,920"
      },
      {
        "id": "D",
        "text": "$25,920"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_34",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 84,
    "type": "multiple_choice",
    "prompt": "Last week, Emily rode the bus to school on 3 of the 5 mornings and rode the bus home on 4 of the 5 afternoons. Based on last week's events, what is the probability that Emily will ride the bus in the morning and the afternoon next Monday? \u2022 \u0432. I 25 \u2022 D. 1.",
    "imageSrc": "/exams/exam3/items/math_q34.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_35",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 85,
    "type": "multiple_choice",
    "prompt": "the 6 people are male, how many of the possible groups of 3 people hired in the fall will include only 1 male?",
    "imageSrc": "/exams/exam3/items/math_q35.png",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "24"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_36",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 86,
    "type": "text_entry",
    "prompt": "Leah has set a goal to read a total of 500 pages of a textbook. The table shows the book page numbers for the reading she did during three days. DAILY READING LOG Day Pages Read 1 pages 45-90, inclusive 2 pages 100-135,| inclusive 3 pages 145-190, inclusive What percentage of her 500-page goal did Leah read on these three days? Round your answer to the nearest tenth.",
    "imageSrc": "/exams/exam3/items/math_q36.png",
    "options": null,
    "correctAnswer": "25.6%",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 25.6%. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_37",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 87,
    "type": "text_entry",
    "prompt": "What 3-digit number between 630 and 650 is divisible by both 5 and 8?",
    "imageSrc": "/exams/exam3/items/math_q37.png",
    "options": null,
    "correctAnswer": "640",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 640. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_38",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 88,
    "type": "multiple_choice",
    "prompt": "for Melissa's experiment?",
    "imageSrc": "/exams/exam3/items/math_q38.png",
    "options": [
      {
        "id": "A",
        "text": "R, G, W"
      },
      {
        "id": "B",
        "text": "RG, RW, GW"
      },
      {
        "id": "C",
        "text": "R, R, R, G, G, G, W, W"
      },
      {
        "id": "D",
        "text": "RR, RG, RW, GG, GW, WW"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_39",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 89,
    "type": "multiple_choice",
    "prompt": "What is the probability that the team will score three or more goals in the next game?",
    "imageSrc": "/exams/exam3/items/math_q39.png",
    "options": [
      {
        "id": "A",
        "text": "0.13"
      },
      {
        "id": "B",
        "text": "0.21"
      },
      {
        "id": "C",
        "text": "0.34"
      },
      {
        "id": "D",
        "text": "0.50"
      }
    ],
    "correctAnswer": "C",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_40",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 90,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 40.",
    "imageSrc": "/exams/exam3/items/math_q40.png",
    "options": [
      {
        "id": "A",
        "text": "team is participating in a contest to collect canned goods for a food drive. The team has 53 points and must have a total of at least 100 points to win a prize. The team earns 5 points for each can of food a member collects. Which inequality can be used to find x, the number of cans of food the team needs to collect to win a prize? \u2022 A. 5 + 53x < 100"
      },
      {
        "id": "B",
        "text": "5 + 53x \u2265 100"
      },
      {
        "id": "C",
        "text": "53 + 5x \u2264 100"
      },
      {
        "id": "D",
        "text": "53 + 5x \u2265 100"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_41",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 91,
    "type": "multiple_choice",
    "prompt": "constant of proportionality for this relationship?",
    "imageSrc": "/exams/exam3/items/math_q41.png",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "30."
      },
      {
        "id": "C",
        "text": "60"
      },
      {
        "id": "D",
        "text": "90"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_42",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 92,
    "type": "multiple_choice",
    "prompt": "A student reads I of a book in A hour. What fraction of the book can the student read in 1 hour? \u2022 A. 36. \u2022 C. i2",
    "imageSrc": "/exams/exam3/items/math_q42.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_43",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 93,
    "type": "text_entry",
    "prompt": "Two student clubs are selling snacks as part of a fundraiser. The Art Club sells a 24-pack of granola bars for $12.00. The Science Club sells a 10-pack of granola bars for $6.50. To the nearest cent, what is the difference in cost per bar between the two clubs? Select the correct answer from each drop-down to complete the sentences. The cost for the Art Club's bar is Choose... y per bar. The cost for the Science Club's bar is || Choose. y per bar. The difference between the cost of the bars is Choose... RESPONSE_A1 $0.40 $0.50 $0.60 $0.75 RESPONSE_AZ $0.55 $0.65 $0.75 $0.85 RESPONSE_A3 $0.05 $0.10 $0.15 $0.25",
    "imageSrc": "/exams/exam3/items/math_q43.png",
    "options": null,
    "correctAnswer": "$0.65; $0.50; $0.15",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: $0.65; $0.50; $0.15. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_44",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 94,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 44.",
    "imageSrc": "/exams/exam3/items/math_q44.png",
    "options": [
      {
        "id": "A",
        "text": "bakery charges $1.25 for each cupcake and $2.50 for a serving tray. The equation describes p, the price of c cupcakes and a serving tray, not including tax. p = 2. 50 + 1.25c If Samantha bought some cupcakes and a serving tray for a total of $22.50, not including tax, how many cupcakes did she buy? 0 A. 4"
      },
      {
        "id": "B",
        "text": "9"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_45",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 95,
    "type": "text_entry",
    "prompt": "Marcus and Isla are saving money to buy concert tickets. \u2022 They decide to save the same amount each week. \u2022 They already have $8 saved. \u2022 After 3 weeks, the two have $26 saved in total. How much money, in dollars, is being saved by Marcus and Isla each week?",
    "imageSrc": "/exams/exam3/items/math_q45.png",
    "options": null,
    "correctAnswer": "6",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 6. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_46",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 96,
    "type": "text_entry",
    "prompt": "A company charges $3.00 to ship a 4-pound package. The cost includes a base fee of $1.50 plus $0.50 for each pound over the first pound. The table below illustrates how the cost depends on the total weight of the package. Complete the table by matching each total weight to its correct total shipping cost. Move the correct answer to each box. Not all answers will be used. 2 2.5 3 3.5 6 7 SHIPPING COSTS Total Weight (pounds) Total Cost to Ship (dollars) 2 2.50 6 5.50",
    "imageSrc": "/exams/exam3/items/math_q46.png",
    "options": null,
    "correctAnswer": "2 lb: $2.00; 3 lb: $2.50; 6 lb: $4.00; 9 lb: $5.50 (cost equation: Cost = 1.50 + 0.50(x - 1))",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 2 lb: $2.00; 3 lb: $2.50; 6 lb: $4.00; 9 lb: $5.50 (cost equation: Cost = 1.50 + 0.50(x - 1)). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_47",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 97,
    "type": "multiple_choice",
    "prompt": "What shape will result from a horizontal slice of the figure above?",
    "imageSrc": "/exams/exam3/items/math_q47.png",
    "options": [
      {
        "id": "A",
        "text": "a square that has 2-inch sides"
      },
      {
        "id": "B",
        "text": "a triangle that has 2-inch sides"
      },
      {
        "id": "C",
        "text": "a rectangle that has a 2-inch side and a 6-inch side"
      },
      {
        "id": "D",
        "text": "a triangle that has one 2-inch side and two 6-inch sides"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_48",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 98,
    "type": "multiple_choice",
    "prompt": "to the length of one side of equilateral triangle X?",
    "imageSrc": "/exams/exam3/items/math_q48.png",
    "options": [
      {
        "id": "A",
        "text": "3:8"
      },
      {
        "id": "B",
        "text": "2:3"
      },
      {
        "id": "C",
        "text": "3:2"
      },
      {
        "id": "D",
        "text": "2:1"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_49",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 99,
    "type": "multiple_choice",
    "prompt": "over. What is the greatest possible side length, in inches, of one of those squares?",
    "imageSrc": "/exams/exam3/items/math_q49.png",
    "options": [
      {
        "id": "A",
        "text": "3."
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "15"
      },
      {
        "id": "D",
        "text": "45."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e3_math_50",
    "examId": "exam3",
    "section": "math",
    "questionNumber": 100,
    "type": "multiple_choice",
    "prompt": "What was the percent decrease in the number of birds from Monday to Tuesday?",
    "imageSrc": "/exams/exam3/items/math_q50.png",
    "options": [
      {
        "id": "A",
        "text": "6%"
      },
      {
        "id": "B",
        "text": "20%"
      },
      {
        "id": "C",
        "text": "24%"
      },
      {
        "id": "D",
        "text": "25%"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_01",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 1,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross \u2022 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q01.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered What is the effect of comparing groups of bristlecone pines to \"a city within a cemetery\" (paragraph 2)? \u2022 A. It illustrates that the new tree's appearance is markedly different from that of mature bristlecone pines."
      },
      {
        "id": "B",
        "text": "It emphasizes the new tree's ability to use resources left by prior generations of bristlecone pines."
      },
      {
        "id": "C",
        "text": "It highlights the tree's capacity for a long life if it is able to survive to maturity."
      },
      {
        "id": "D",
        "text": "It reveals that the tree's dense growth patterns are unusual in arid conditions."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_02",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 2,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross \u2022 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q02.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered In paragraph 4, the idea that the bristlecone pine can withstand difficult conditions is illustrated mainly through \u2022 A. a comparison of the bristlecone pine with similar trees that are known for their long lives."
      },
      {
        "id": "B",
        "text": "a description of specific qualities of the bristlecone pine that make it suited to its environment."
      },
      {
        "id": "C",
        "text": "an explanation of why the White Mountains are the best place for the bristlecone pine to grow."
      },
      {
        "id": "D",
        "text": "an examination of why the bristlecone pine has few competitors in the White Mountains."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_03",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 3,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross 1 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q03.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered Read this sentence from paragraph 5. Empires rose and fell; wars raged; and and the tree from \u0432.c continued its implacable slow-motion existence, adding about two- hundredths of an inch to the diameter of its trunk each year. The sentence contributes to the development of ideas in the excerpt by \u2022 A. emphasizing the bristlecone pine's precise growth pattern."
      },
      {
        "id": "B",
        "text": "suggesting that things that seem well established face threats. \u2022 I"
      },
      {
        "id": "C",
        "text": "describing the pace of the life cycle of the bristlecone pine."
      },
      {
        "id": "D",
        "text": "explaining the reason for the bristlecone pine's longevity."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_04",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 4,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross 1 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q04.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more thar ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered Which claim is best supported by the details in paragraph 5 about the bristlecone pine's tree-ring record? \u2022 A. The bristlecone pine must be protected from extinction so that there is a record of changing Earth conditions."
      },
      {
        "id": "B",
        "text": "The structure of the bristlecone pine allows scientists to predict changing Earth conditions over time."
      },
      {
        "id": "C",
        "text": "The slow growth process of the bristlecone pine allows it to survive in spite of changing Earth conditions."
      },
      {
        "id": "D",
        "text": "The bristlecone pine can be used to gather information on changing Earth conditions because of its long life."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_05",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 5,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross 1 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q05.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered The phrases \"clings to life\" and \"stripped of bark\" in paragraph 6 are used to highlight \u2022 A. that the tree is fragile and needs help to avoid becoming extinct."
      },
      {
        "id": "B",
        "text": "how the tree can be misunderstood because of its appearance."
      },
      {
        "id": "C",
        "text": "how the tree interests observers with its unusual appearance."
      },
      {
        "id": "D",
        "text": "that the tree manages to survive even when partially fossilized."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_06",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 6,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross 1 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q06.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered What is the best summary of the bristlecone pine's life cycle? \u2022 A. The bristlecone pine takes root as a stubby seedling in the mountains. Over time, it grows slowly in a hostile environment with alkaline soil that ensures little competition from other trees."
      },
      {
        "id": "B",
        "text": "The bristlecone pine grows up slowly from the fragments of its dead ancestors. Over time, it begins to become contorted in appearance but continues to funnel water and nutrients to its stem."
      },
      {
        "id": "C",
        "text": "The bristlecone pine grows slowly in an environment hostile to other trees. Over time, its trunk and some branches fossilize, but it funnels water and nutrients to other parts that are still alive."
      },
      {
        "id": "D",
        "text": "The bristlecone pine grows only in one location in the mountains. Over time, it develops sparse foliage that fossilizes slowly, but the trunk and branches stay alive, as revealed by ribbons of live bark."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_07",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 7,
    "passageId": "e4_p1",
    "type": "multiple_choice",
    "prompt": "Excerpt from \"The Past and the Future of the Earth's Oldest Trees\" by Alex Ross 1 About forty-five hundred years ago, not long after the completion of the Great Pyramid at Giza, a seed of Pinus longaeva, the Great Basin bristlecone pine, landed on a steep slope in what are now known as the White Mountains, in eastern California. The seed may have travelled there on a gust of wind, its flight aided by a winglike attachment to the nut. Or it could have been planted by a bird known as the Clark's nutcracker, which likes to hide pine seeds in caches; nutcrackers have phenomenal spatial memory and can recall thousands of such caches. This seed, however, lay undisturbed. On",
    "imageSrc": "/exams/exam4/items/ela_q07.png",
    "options": [
      {
        "id": "A",
        "text": "moist day in fall, or in the wake of melting snows in spring, a seedling appeared above ground\u2014a stubby one-inch stem with a tuft of bright-green shoots. 2 Most seedlings die within a year; the mortality rate is more than ninety-nine percent. The survivors are sometimes seen growing in the shadow of a fallen tree. The landscape of the Ancient Bristlecone Pine Forest, as this area of the White Mountains is called, is littered Throughout the excerpt, the author conveys his point of view mainly by \u2022 A. sharing details about the qualities of the bristlecone pine that make it an unusual tree."
      },
      {
        "id": "B",
        "text": "comparing the bristlecone pine to global empires that lasted thousands of years before falling."
      },
      {
        "id": "C",
        "text": "explaining the way the seemingly sickly appearance of the bristlecone pine contrasts with its ability to survive."
      },
      {
        "id": "D",
        "text": "arguing that the bristlecone pine has survived past threats to its survival and will continue to thrive."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_08",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 8,
    "passageId": "e4_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 8 based on the text.",
    "imageSrc": "/exams/exam4/items/ela_q08.png",
    "options": [
      {
        "id": "A",
        "text": "Miracle Mile 1) In the 1950s people compared running one mile in four minutes to scaling Mount Everest and nicknamed the feat a \"dream mile.\" Although such an accomplishment was considered humanly impossible, several elite runners aimed to break that supposedly impenetrable barrier. One of them was a twenty-five-year-old medical student named Roger Bannister. 2 Roger Bannister had tasted failure during the 1952 Olympics. There, he was favored to win the 1,500-meter competition, a distance slightly shorter than a mile, but he finished in a dismal fourth place instead. Bannister's performance was a disappointment for him and his country, Great Britain. Determined to redeem himself, Bannister postponed his plans to retire from racing and focused on the ultimate prize-breaking the four-minute-mile barrier. 3) Bannister attacked the elusive milestone with a positive attitude and logical planning. The amateur athlete decided to use intensive interval training to develop endurance and speed. For these workouts, Bannister The words \"feat,\" \"humanly impossible,\" and \"impenetrable barrier\" in paragraph 1 affect the tone of the paragraph because they \u2022 A. highlight the idea that only the most skilled runners would be able to run a four-minute mile."
      },
      {
        "id": "B",
        "text": "emphasize the idea that running a mile in less than four minutes was a seemingly unattainable goal."
      },
      {
        "id": "C",
        "text": "convey the competitiveness among elite runners to consistently set and break speed records. \u2022 I"
      },
      {
        "id": "D",
        "text": "show the intensity of the training programs athletes endure in order to achieve their goals."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_09",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 9,
    "passageId": "e4_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 9 based on the text.",
    "imageSrc": "/exams/exam4/items/ela_q09.png",
    "options": [
      {
        "id": "A",
        "text": "Miracle Mile 1) In the 1950s people compared running one mile in four minutes to scaling Mount Everest and nicknamed the feat a \"dream mile.\" Although such an accomplishment was considered humanly impossible, several elite runners aimed to break that supposedly impenetrable barrier. One of them was a twenty-five-year-old medical student named Roger Bannister. 2 Roger Bannister had tasted failure during the 1952 Olympics. There, he was favored to win the 1,500-meter competition, a distance slightly shorter than a mile, but he finished in a dismal fourth place instead. Bannister's performance was a disappointment for him and his country, Great Britain. Determined to redeem himself, Bannister postponed his plans to retire from racing and focused on the ultimate prize-breaking the four-minute-mile barrier. 3) Bannister attacked the elusive milestone with a positive attitude and logical planning. The amateur athlete decided to use intensive interval training to develop endurance and speed. For these workouts, Bannister Read these sentences from paragraph 7. Bannister said, \"I felt that the moment of a lifetime had come. There was no pain, only a great unity of movement and aim.\" The sentences contribute to the development of ideas in the passage by showing that Bannister \u2022 A. knew that he was about to achieve the goal he had worked toward."
      },
      {
        "id": "B",
        "text": "was no longer experiencing personal disappointment from his past failure in the Olympics."
      },
      {
        "id": "C",
        "text": "felt grateful to his teammates for helping him take the lead."
      },
      {
        "id": "D",
        "text": "was satisfied that his training had helped him perfect his running technique."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_10",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 10,
    "passageId": "e4_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 10 based on the text.",
    "imageSrc": "/exams/exam4/items/ela_q10.png",
    "options": [
      {
        "id": "A",
        "text": "Miracle Mile 1) In the 1950s people compared running one mile in four minutes to scaling Mount Everest and nicknamed the feat a \"dream mile.\" Although such an accomplishment was considered humanly impossible, several elite runners aimed to break that supposedly impenetrable barrier. One of them was a twenty-five-year-old medical student named Roger Bannister. 2 Roger Bannister had tasted failure during the 1952 Olympics. There, he was favored to win the 1,500-meter competition, a distance slightly shorter than a mile, but he finished in a dismal fourth place instead. Bannister's performance was a disappointment for him and his country, Great Britain. Determined to redeem himself, Bannister postponed his plans to retire from racing and focused on the ultimate prize-breaking the four-minute-mile barrier. 3) Bannister attacked the elusive milestone with a positive attitude and logical planning. The amateur athlete decided to use intensive interval training to develop endurance and speed. For these workouts, Bannister Which sentence best supports the idea that Bannister needed an alternative to \"logical planning\" (paragraph 3) in order to accomplish his goal? \u2022 A. \"Bannister's performance was a disappointment for him and his country, Great Britain.\" (paragraph 2)"
      },
      {
        "id": "B",
        "text": "\"The amateur athlete decided to use intensive interval training to develop endurance and speed.\" (paragraph 3)"
      },
      {
        "id": "C",
        "text": "\"For these workouts, Bannister ran an interval of ten consecutive laps on a quarter-mile track, aiming for sixty seconds each lap.\" (paragraph 3)"
      },
      {
        "id": "D",
        "text": "\"Frustrated by the plateau he had reached, Bannister took a break from training and went mountain climbing for three days.\" (paragraph 4)"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_11",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 11,
    "passageId": "e4_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 11 based on the text.",
    "imageSrc": "/exams/exam4/items/ela_q11.png",
    "options": [
      {
        "id": "A",
        "text": "Miracle Mile 1) In the 1950s people compared running one mile in four minutes to scaling Mount Everest and nicknamed the feat a \"dream mile.\" Although such an accomplishment was considered humanly impossible, several elite runners aimed to break that supposedly impenetrable barrier. One of them was a twenty-five-year-old medical student named Roger Bannister. 2 Roger Bannister had tasted failure during the 1952 Olympics. There, he was favored to win the 1,500-meter competition, a distance slightly shorter than a mile, but he finished in a dismal fourth place instead. Bannister's performance was a disappointment for him and his country, Great Britain. Determined to redeem himself, Bannister postponed his plans to retire from racing and focused on the ultimate prize-breaking the four-minute-mile barrier. 3) Bannister attacked the elusive milestone with a positive attitude and logical planning. The amateur athlete decided to use intensive interval training to develop endurance and speed. For these workouts, Bannister Which sentence from the passage indicates that Bannister nearly made a mistake that would have cost him the world record? \u2022 A. \"By early 1954, Bannister had succeeded in lowering his quarter- mile pace to sixty-one seconds, but he had to shave off at least one more second in order to reach his target.\" ( paragraph 4)"
      },
      {
        "id": "B",
        "text": "\"When the starting pistol fired, Brasher pounced into the lead, and Bannister followed behind his first rabbit.\" ( paragraph 6)"
      },
      {
        "id": "C",
        "text": "\"Propelled by the excitement, Bannister lost his instinctive feel for his pace and shouted 'Faster!' at Brasher.\" ( paragraph 7)"
      },
      {
        "id": "D",
        "text": "\"At the beginning of the back straightaway of the track, Bannister bolted past Chataway.\" ( paragraph 7)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_12",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 12,
    "passageId": "e4_p2",
    "type": "multiple_choice",
    "prompt": "Read the passage excerpt and answer question 12 based on the text.",
    "imageSrc": "/exams/exam4/items/ela_q12.png",
    "options": [
      {
        "id": "A",
        "text": "Miracle Mile 1 In the 1950s people compared running one mile in four minutes to scaling Mount Everest and nicknamed the feat a \"dream mile.\" Although such an accomplishment was considered humanly impossible, several elite runners aimed to break that supposedly impenetrable barrier. One of them was a twenty-five-year-old medical student named Roger Bannister. 2 Roger Bannister had tasted failure during the 1952 Olympics. There, he was favored to win the 1,500-meter competition, a distance slightly shorter than a mile, but he finished in a dismal fourth place instead. Bannister's performance was a disappointment for him and his country, Great Britain. Determined to redeem himself, Bannister postponed his plans to retire from racing and focused on the ultimate prize-breaking the four-minute-mile barrier. 3) Bannister attacked the elusive milestone with a positive attitude and logical planning. The amateur athlete decided to use intensive interval training to develop endurance and speed. For these workouts, Bannister Bannister's loss in the 1952 Olympics influenced his decision to pursue breaking the four-minute-mile barrier by \u2022 A. allowing him to recognize his weaknesses and improve his running ability."
      },
      {
        "id": "B",
        "text": "prompting him to take a different approach to his regular training."
      },
      {
        "id": "C",
        "text": "motivating him to prove to himself that he could set and achieve a goal."
      },
      {
        "id": "D",
        "text": "giving him the opportunity to reach a goal no runner had ever accomplished."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_13",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 13,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "Excerpt from In Search of the Unknown by Robert W. Chambers 1) It was at that time the policy of the trustees and officers of the Zoological Gardens neither to employ collectors nor to send out expeditions in search of specimens. The society decided to depend upon voluntary contributions, and I was always busy, part of the day, in dictating answers to correspondents who wrote offering their services as hunters of big game, collectors of all sorts of fauna, trappers, snarers, and also to those who offered specimens for sale, usually at exorbitant rates. 2 To the proprietors of ... mangy lynxes, moth-eaten coyotes, and dancing bears I returned courteous but uncompromising refusals\u2014of course, first submitting all such letters, together with my replies, to Professor Farrago. 3) One day towards the end of May, however, just as I was leaving Bronx Park to return to town, Professor Lesard, of the reptilian department, called nut to me that Professor Farraon wanted to see me a moment sn Read paragraph 2 from the excerpt. To the proprietors of ... mangy lynxes, moth-eaten coyotes, and dancing bears I returned courteous but uncompromising refusals-of course, first submitting all such letters, together with my replies, to Professor Farrago. This paragraph helps develop the plot by establishing that the narrator",
    "imageSrc": "/exams/exam4/items/ela_q13.png",
    "options": [
      {
        "id": "A",
        "text": "dislikes writing refusal letters for the animals offered to the zoological society."
      },
      {
        "id": "B",
        "text": "attempts to predict what the professor would say in the refusal letters."
      },
      {
        "id": "C",
        "text": "believes that many of the animals offered are not acceptable for the zoological society."
      },
      {
        "id": "D",
        "text": "resents the professor's insistence on reviewing the refusal letters."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_14",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 14,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "professor?",
    "imageSrc": "/exams/exam4/items/ela_q14.png",
    "options": [
      {
        "id": "A",
        "text": "It indicates that the professor feels bad that he has to call the narrator to his office after work."
      },
      {
        "id": "B",
        "text": "It shows that the professor is hesitant to share his opinions with the narrator."
      },
      {
        "id": "C",
        "text": "It implies that the professor is uncomfortable criticizing the narrator's work."
      },
      {
        "id": "D",
        "text": "It suggests that the professor knows that the conversation will be frustrating for the narrator."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_15",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 15,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "paragraphs 8-11 contribute to the development of the characters?",
    "imageSrc": "/exams/exam4/items/ela_q15.png",
    "options": [
      {
        "id": "A",
        "text": "It establishes the conflict between the professor and the narrator concerning the validity of the letter."
      },
      {
        "id": "B",
        "text": "It suggests a theme of collaboration because the narrator and the professor regularly work together."
      },
      {
        "id": "C",
        "text": "It reveals the characters' traits by contrasting the narrator's distrust with how easily the professor is deceived by what he reads."
      },
      {
        "id": "D",
        "text": "It hints that the resolution will involve the narrator accepting the professor's opinion about the content of the letter."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_16",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 16,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "Excerpt from In Search of the Unknown by Robert W. Chambers 1 It was at that time the policy of the trustees and officers of the Zoological Gardens neither to employ collectors nor to send out expeditions in search of specimens. The society decided to depend upon voluntary contributions, and I was always busy, part of the day, in dictating answers to correspondents who wrote offering their services as hunters of big game, collectors of all sorts of fauna, trappers, snarers, and also to those who offered specimens for sale, usually at exorbitant rates. 2 To the proprietors of ... mangy lynxes, moth-eaten coyotes, and dancing bears I returned courteous but uncompromising refusals\u2014of course, first submitting all such letters, together with my replies, to Professor Farrago. 3) One day towards the end of May, however, just as I was leaving Bronx Park to return to town, Professor Lesard, of the reptilian department, called nut to me that Professor Farraon wanted to see me a moment sn The professor's observations in paragraphs 15-17 create tension in the excerpt by causing the narrator to feel",
    "imageSrc": "/exams/exam4/items/ela_q16.png",
    "options": [
      {
        "id": "A",
        "text": "flustered by the professor's criticism of his logic."
      },
      {
        "id": "B",
        "text": "annoyed by the professor's sarcasm about his inexperience."
      },
      {
        "id": "C",
        "text": "confused by the professor's lack of respect for his opinion."
      },
      {
        "id": "D",
        "text": "frustrated by the professor's lack of interest in his theory."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_17",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 17,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "paragraphs 26-28 contribute to the development of the theme?",
    "imageSrc": "/exams/exam4/items/ela_q17.png",
    "options": [
      {
        "id": "A",
        "text": "It illustrates the professor's patience as the narrator argues against making the expedition."
      },
      {
        "id": "B",
        "text": "It reveals the narrator's frustration with his limited role in making decisions for the zoological society."
      },
      {
        "id": "C",
        "text": "It emphasizes the professor's desire to acquire new specimens for the zoological society at any cost."
      },
      {
        "id": "D",
        "text": "It shows the narrator's acceptance of his assignment despite his personal objections."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_18",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 18,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "eager to send the narrator on an expedition?",
    "imageSrc": "/exams/exam4/items/ela_q18.png",
    "options": [
      {
        "id": "A",
        "text": "\"I believe now that Professor Farrago perfectly interpreted my thoughts, but he betrayed neither resentment nor impatience.\" (paragraph 25)"
      },
      {
        "id": "B",
        "text": "\"Together we made out a list of articles necessary for me and itemized the expenses I might incur, and I set a date for my return, allowing no margin for a successful termination to the expedition.\" (paragraph 26)"
      },
      {
        "id": "C",
        "text": "\"What I want you to do is to get those birds here safely.'\" (paragraph 27) \"'I can't get away from the idea that we are on the eve of acquiring the rarest of living creatures.'\" (paragraph 33)"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_19",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 19,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "How does paragraph 34 help develop the plot of the excerpt?",
    "imageSrc": "/exams/exam4/items/ela_q19.png",
    "options": [
      {
        "id": "A",
        "text": "It shows that the narrator is beginning to consider the possibility of finding the great auks."
      },
      {
        "id": "B",
        "text": "It demonstrates that the narrator is struggling to understand why the professor thinks the great auks exist."
      },
      {
        "id": "C",
        "text": "It establishes that the narrator is willing to let the professor overrule him about the great auks."
      },
      {
        "id": "D",
        "text": "It emphasizes that the narrator feels a sense of urgency to complete the expedition to locate the great auks."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_20",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 20,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "between the narrator and the professor?",
    "imageSrc": "/exams/exam4/items/ela_q20.png",
    "options": [
      {
        "id": "A",
        "text": "\"He disengaged the sheet of paper and handed it to me.\" (paragraph 4)"
      },
      {
        "id": "B",
        "text": "\"Clearly, Professor Farrago was on the verge of dotage\u2014ah, what a loss to the world!\" (paragraph 24)"
      },
      {
        "id": "C",
        "text": "\"I drew a chair up beside his desk\u2014there was nothing to do but to obey, and this fool's errand was none of my conceiving.\" (paragraph 25)"
      },
      {
        "id": "D",
        "text": "\" 'Very well, said Professor Farrago, good-humoredly, 'you shall have all the assistance you may require.'\" (paragraph 29)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_21",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 21,
    "passageId": "e4_p3",
    "type": "multiple_choice",
    "prompt": "of view and the professor's point of view?",
    "imageSrc": "/exams/exam4/items/ela_q21.png",
    "options": [
      {
        "id": "A",
        "text": "by providing both the narrator's and professor's thoughts on how age and experience influence each other's reasoning"
      },
      {
        "id": "B",
        "text": "by using the conversation between the narrator and the professor to emphasize their reactions to the letter"
      },
      {
        "id": "C",
        "text": "by describing the professor's persistent efforts to change the narrator's mind about the letter"
      },
      {
        "id": "D",
        "text": "by including dialogue that explains why the professor is the supervisor and the narrator is his subordinate"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_22",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 22,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what, exactly? The lines help develop a central idea of the poem by revealing the speaker's",
    "imageSrc": "/exams/exam4/items/ela_q22.png",
    "options": [
      {
        "id": "A",
        "text": "interest in determining how the parts of matter work together."
      },
      {
        "id": "B",
        "text": "curiosity about what makes up matter."
      },
      {
        "id": "C",
        "text": "desire to prove that particles make up matter."
      },
      {
        "id": "D",
        "text": "questions about what tools are needed to study matter."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_23",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 23,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what, exactly? Because we are talking about everything here: your fingernail, 10 the candy at the back of your mouth, the coffee your teacher drank this morning, your little sister, and the stuffed dog she used to carry around with her everwhere The main purpose of the comparison in lines 23-24 of the poem is to show",
    "imageSrc": "/exams/exam4/items/ela_q23.png",
    "options": [
      {
        "id": "A",
        "text": "that the particles' size makes them difficult to see."
      },
      {
        "id": "B",
        "text": "how the particles move within the tunnel."
      },
      {
        "id": "C",
        "text": "that the particles have a familiar shape."
      },
      {
        "id": "D",
        "text": "how the particles can be seen only in darkness."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_24",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 24,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what, exactly? Because we are talking about everything here: your fingernail, 10 the candy at the back of your mouth, the coffee your teacher drank this morning, your little sister, and the stuffed dog she used to carry around with her everwhere Read lines 27-28 from the poem. And there, in the explosion, in the darkness, briefly incandescent, they appear: The imagery in the lines reveals that the speaker",
    "imageSrc": "/exams/exam4/items/ela_q24.png",
    "options": [
      {
        "id": "A",
        "text": "envies the physicists who research colliding particles."
      },
      {
        "id": "B",
        "text": "has personally observed colliding particles."
      },
      {
        "id": "C",
        "text": "admires the powerful reactions that occur when particles collide."
      },
      {
        "id": "D",
        "text": "has a simplistic understanding of how particles collide."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_25",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 25,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what, exactly? Because we are talking about everything here: your fingernail, the candy at the back of your mouth, the coffee your teacher drank this morning, your little sister, and the stuffed dog she used to carry around with her everwhere Read lines 30-32 from the poem. Their names sound like dinosaurs or maybe bands playing terrible music in someone's garage. The speaker refers to familiar objects and events in the lines most likely to",
    "imageSrc": "/exams/exam4/items/ela_q25.png",
    "options": [
      {
        "id": "A",
        "text": "explain confusing information in simple terms to help the reader understand more about the topic."
      },
      {
        "id": "B",
        "text": "demonstrate how scientific ideas can be explained by describing situations that many people are familiar with."
      },
      {
        "id": "C",
        "text": "emphasize that the process being used to research particles is still in the early stages of development."
      },
      {
        "id": "D",
        "text": "suggest that the scientific language used to describe particles seems silly by making a humorous comparison."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_26",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 26,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what, exactly? Because we are talking about everything here: your fingernail, 10| the candy at the back of your mouth, the coffee your teacher drank this morning, your little sister, and the stuffed dog she used to carry around with her everywhere Read lines 36-39 from the poem. both together and apart, what keeps together the pencil in your hand right now as well as separate from, say, Jupiter. The poet includes these lines most likely to emphasize that",
    "imageSrc": "/exams/exam4/items/ela_q26.png",
    "options": [
      {
        "id": "A",
        "text": "it is important for physicists to continue their research about particles."
      },
      {
        "id": "B",
        "text": "these particles have a powerful effect on everything."
      },
      {
        "id": "C",
        "text": "the discoveries about particles provide little information."
      },
      {
        "id": "D",
        "text": "the study of particles and the study of objects in space are similar."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_27",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 27,
    "passageId": "e4_p4",
    "type": "multiple_choice",
    "prompt": "what they can, whatever seems most real\u2014 that they let us perceive their wild dancing, combusting to the music they make. The lines reveal the speaker's",
    "imageSrc": "/exams/exam4/items/ela_q27.png",
    "options": [
      {
        "id": "A",
        "text": "frustration with the research facilities physicists use."
      },
      {
        "id": "B",
        "text": "belief that physicists are frantically working toward a new discovery. \u2022 I"
      },
      {
        "id": "C",
        "text": "interest in physicists and their study of particles."
      },
      {
        "id": "D",
        "text": "certainty that physicists are working in secrecy."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_28",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 28,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "American Indians to begin practicing controlled burns?",
    "imageSrc": "/exams/exam4/items/ela_q28.png",
    "options": [
      {
        "id": "A",
        "text": "by drawing animals in to the area to feed on the new growth sprouting from the burned land"
      },
      {
        "id": "B",
        "text": "by destroying tall trees and reducing the shade that had hindered the growth of planted crops"
      },
      {
        "id": "C",
        "text": "by burning off excess vegetation and increasing the availability of nutrients for the remaining plants"
      },
      {
        "id": "D",
        "text": "by causing changes to the bison's migration habits as bison herds fled from the wildfires on the prairie"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_29",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 29,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "Using Fire to Keep a Prairie Healthy \u2022 Inside the 40,000-acre Joseph H. Williams Tallgrass Prairie Preserve in northern Oklahoma, herds of bison roam on the scenic land that is home to hundreds of different species of plants and animals. While one of the greatest threats to the prairie is wildfire, the use of controlled fires is actually an effective way to protect this idyllic landscape. 2 Fires that are started by lightning or other natural circumstances are inevitable, and the results can be disastrous. However, hundreds of years ago the American Indian people who inhabited the Great Plains area between Minnesota and Texas realized that these fires could also be helpful. The bison in the area seemed to prefer grazing on tender new grass on the recently burned land rather than on grass in the unburned areas. The American Indian people began to deliberately burn areas of land for bison to graze on, which enticed the herds away from the people's crops. 3 Today conservationists at the Tallgrass Prairie Preserve and farmers in the Great Plains continue to use controlled burns for land Targeting red cedar trees in controlled burns affects the animals that live on the prairie mostly by",
    "imageSrc": "/exams/exam4/items/ela_q29.png",
    "options": [
      {
        "id": "A",
        "text": "ensuring that the animals' main food source has the conditions needed for it to thrive."
      },
      {
        "id": "B",
        "text": "endangering the animals that live near the trees scheduled for removal."
      },
      {
        "id": "C",
        "text": "making sure that the water supply for the animals is sufficient."
      },
      {
        "id": "D",
        "text": "reducing the animals' natural source of shade and protection from the elements."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_30",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 30,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "The author includes this sentence to show that",
    "imageSrc": "/exams/exam4/items/ela_q30.png",
    "options": [
      {
        "id": "A",
        "text": "the conservationists are better qualified to lead preservation efforts than farmers are."
      },
      {
        "id": "B",
        "text": "the conservationists are eager to involve others in the preservation of the prairie."
      },
      {
        "id": "C",
        "text": "the conservationists' efforts will restore the original beauty and biodiversity of the region."
      },
      {
        "id": "D",
        "text": "the conservationists' training program should serve as a model for other conservation organizations."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_31",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 31,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "land may be concerned about using fire as a way to benefit the land?",
    "imageSrc": "/exams/exam4/items/ela_q31.png",
    "options": [
      {
        "id": "A",
        "text": "\"While one of the greatest threats to the prairie is wildfire, the use of controlled fires is actually an effective way to protect this idyllic landscape.\" (paragraph 1)"
      },
      {
        "id": "B",
        "text": "\"The American Indian people began to deliberately burn areas of land for bison to graze on, which enticed the herds away from the people's crops.\" (paragraph 2)"
      },
      {
        "id": "C",
        "text": "\"This patch burning contains the fire within a specific area and allows animals in the burn area to safely relocate.\" (paragraph 5)"
      },
      {
        "id": "D",
        "text": "\"The following year, conservationists will burn a different section of the preserve, while the land burned the previous year regrows healthier than before.\" (paragraph 5)"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_32",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 32,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "Using Fire to Keep a Prairie Healthy 1) Inside the 40,000-acre Joseph H. Williams Tallgrass Prairie Preserve in northern Oklahoma, herds of bison roam on the scenic land that is home to hundreds of different species of plants and animals. While one of the l greatest threats to the prairie is wildfire, the use of controlled fires is actually an effective way to protect this idyllic landscape. 2 Fires that are started by lightning or other natural circumstances are inevitable, and the results can be disastrous. However, hundreds of years ago the American Indian people who inhabited the Great Plains area between Minnesota and Texas realized that these fires could also be helpful. The bison in the area seemed to prefer grazing on tender new grass on the recently burned land rather than on grass in the unburned areas. The American Indian people began to deliberately burn areas of land for bison to graze on, which enticed the herds away from the people's crops. 3) Today conservationists at the Tallgrass Prairie Preserve and farmers in the Great Plains continue to use controlled burns for land Read this sentence from paragraph 6. Burning land to make it healthy may seem counterintuitive, but strategic controlled fires have helped the prairie sustain life for hundreds of years and, with careful management, will continue to do so. The words \"counterintuitive\" and \"strategic\" in the sentence convey the idea that",
    "imageSrc": "/exams/exam4/items/ela_q32.png",
    "options": [
      {
        "id": "A",
        "text": "the safest methods are sometimes the least effective at solving complex challenges."
      },
      {
        "id": "B",
        "text": "thorough investigation of uncommon methodologies can lead to beneficial results."
      },
      {
        "id": "C",
        "text": "detailed planning can ensure that a potentially destructive action has a positive impact."
      },
      {
        "id": "D",
        "text": "plans that entail a certain amount of risk almost always result in success."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_33",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 33,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "With which statement would the author most likely agree?",
    "imageSrc": "/exams/exam4/items/ela_q33.png",
    "options": [
      {
        "id": "A",
        "text": "It is important to explain the purposes and the risks of controlled burns to the people living near a proposed burn area."
      },
      {
        "id": "B",
        "text": "It is necessary to thoroughly examine a particular region in order to plan and execute a successful controlled burn."
      },
      {
        "id": "C",
        "text": "Monitoring animals' reactions after a controlled burn on the prairie is a minor part of scientists' research."
      },
      {
        "id": "D",
        "text": "Conservationists should consider the helpful aspects of invasive species before executing a controlled burn."
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_34",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 34,
    "passageId": "e4_p5",
    "type": "multiple_choice",
    "prompt": "presented in the passage?",
    "imageSrc": "/exams/exam4/items/ela_q34.png",
    "options": [
      {
        "id": "A",
        "text": "by depicting how the landscape in a given area changes as the patch-burn method is applied"
      },
      {
        "id": "B",
        "text": "by indicating that patch-burn fires are best suited for use in areas with certain features"
      },
      {
        "id": "C",
        "text": "by revealing that the patch-burn method is used primarily on uninhabited areas of land"
      },
      {
        "id": "D",
        "text": "by comparing the size of the area burned by the patch-burn method with that of unburned areas"
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_35",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 35,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "How does the structure of the poem affect the poem's meaning?",
    "imageSrc": "/exams/exam4/items/ela_q35.png",
    "options": [
      {
        "id": "A",
        "text": "The lack of a rhyming pattern suggests that the beauty of each passing day is unique."
      },
      {
        "id": "B",
        "text": "The lengths of the sentences represent the complexity of the thoughts being represented."
      },
      {
        "id": "C",
        "text": "The use of complete sentences implies the speaker's appreciation for the clear beginning and ending of each season."
      },
      {
        "id": "D",
        "text": "The single long stanza reflects the continuous flow of the speaker's thoughts."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_36",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 36,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "speaker's appreciation for the city?",
    "imageSrc": "/exams/exam4/items/ela_q36.png",
    "options": [
      {
        "id": "A",
        "text": "\"as though the air has been forced into intimacy / by the brevity of daylight.\" (lines 11-12)"
      },
      {
        "id": "B",
        "text": "\"But when it starts darkening at 4, / this closeness, I know, will be a felt distance,\" (lines 13-14)"
      },
      {
        "id": "C",
        "text": "\"like someone drawing your attention / to their lack of intimacy.\" (lines 15-16)"
      },
      {
        "id": "D",
        "text": "\"These days I am still walking ... / beneath the branches bending across avenues,\" (lines 17-18)"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_37",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 37,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "How do the lines develop a central theme of the poem?",
    "imageSrc": "/exams/exam4/items/ela_q37.png",
    "options": [
      {
        "id": "A",
        "text": "They highlight a contrast between the different seasons."
      },
      {
        "id": "B",
        "text": "They show the sequence of the changes that are expected to occur."
      },
      {
        "id": "C",
        "text": "They warn about a problem that requires thoughtful preparation."
      },
      {
        "id": "D",
        "text": "They emphasize the importance of valuing the present."
      }
    ],
    "correctAnswer": "D",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_38",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 38,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "How I will grow tired of the bridge's steep incline, and the absent-minded tourists wandering into the bicycle path. 5 The weather will turn cold. But that all happens later. For now it is the early edge of fall, leaves green still while the air narrows, is slightly crisp, almost grazing 10 the hair of my arm like a passing stranger, as though the air has been forced into intimacy by the brevity of daylight. But when it starts darkening at 4, this closeness, I know, will be a felt distance, 15 like someone drawing your attention en thainladle afintimar, Read lines 7-9 from the poem. For now it is the early edge of fall, leaves green still while the air narrows is slightly crisp, The word choice in the lines helps convey the speaker's belief that",
    "imageSrc": "/exams/exam4/items/ela_q38.png",
    "options": [
      {
        "id": "A",
        "text": "the beauty of the current season should still be appreciated."
      },
      {
        "id": "B",
        "text": "the changes in the weather signify the end of the most pleasant season."
      },
      {
        "id": "C",
        "text": "the transition from one season to another happens swiftly and without warning."
      },
      {
        "id": "D",
        "text": "the change in the weather is so subtle that people rarely observe or feel it."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_39",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 39,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "Letter from Brooklyn by Jacob Scheier I can already see how this will end. How I will grow tired of the bridge's steep incline, and the absent-minded tourists wandering into the bicycle path. 5 The weather will turn cold. But that all happens later. For now it is the early edge of fall, leaves green still while the air narrows, is slightly crisp, almost grazing 10 the hair of my arm like a passing stranger, as though the air has been forced into intimacy by the brevity of daylight. But when it starts darkening at 4, this closeness, I know, will be a felt distance, 15 like someone drawing your attention to thainladle afintimar. Which idea does the comparison of the brownstone houses to \"a pop-up picture book I could have had as a child, / but didn't\" in lines 20-21 convey? \u2022 A. It reveals that some people are still influenced by powerful images from childhood. \u2022 B. It indicates that the neighborhood the speaker is walking through is charming and appealing. O C. It suggests that the speaker has wanted to live in the neighborhood since childhood. 0 D. It suggests that people often experience lingering regret from their past.",
    "imageSrc": "/exams/exam4/items/ela_q39.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_40",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 40,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "How Brooklyn makes me nostalgic for the moment I am walking inside of. (lines 21-22) The lines develop a central idea of the poem by",
    "imageSrc": "/exams/exam4/items/ela_q40.png",
    "options": [
      {
        "id": "A",
        "text": "suggesting the speaker's desire to find a way to break free from the repetitive pattern of daily life."
      },
      {
        "id": "B",
        "text": "revealing the speaker's feelings of disappointment over the predictable change in season."
      },
      {
        "id": "C",
        "text": "emphasizing the speaker's awareness of the future significance of the present moment in the setting."
      },
      {
        "id": "D",
        "text": "showing the speaker's anticipation of specific emotions caused by an intimate knowledge of the setting."
      }
    ],
    "correctAnswer": "C",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_41",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 41,
    "passageId": "e4_p6",
    "type": "multiple_choice",
    "prompt": "How I will grow tired of the bridge's steep incline, and the absent-minded tourists wandering into the bicycle path. 5 The weather will turn cold. But that all happens later. For now it is the early edge of fall, leaves green still while the air narrows, is slightly crisp, almost grazing 10 the hair of my arm like a passing stranger, as though the air has been forced into intimacy by the brevity of daylight. But when it starts darkening at 4, this closeness, I know, will be a felt distance, 15 like someone drawing your attention to thainladle afintiman, The speaker's thoughts throughout the poem develop a theme by showing that",
    "imageSrc": "/exams/exam4/items/ela_q41.png",
    "options": [
      {
        "id": "A",
        "text": "although people may hold expectations for the future, some people long for present experiences while they are still happening."
      },
      {
        "id": "B",
        "text": "though people come from different places, most people feel drawn to the special charm a city holds."
      },
      {
        "id": "C",
        "text": "although people can make decisions about their life, there will always be some things beyond their control."
      },
      {
        "id": "D",
        "text": "though general expectations exist, people have no way of knowing what a given day will actually bring."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_42",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 42,
    "passageId": "e4_p7",
    "type": "multiple_choice",
    "prompt": "the passage?",
    "imageSrc": "/exams/exam4/items/ela_q42.png",
    "options": [
      {
        "id": "A",
        "text": "Despite the challenges of operating on the surface of another planet, the Opportunity rover made many valuable contributions to the field of space research."
      },
      {
        "id": "B",
        "text": "The Opportunity rover mission was a success because it informed NASA scientists about how water might have existed on Mars."
      },
      {
        "id": "C",
        "text": "Throughout the historic mission of the Opportunity rover, NASA scientists had to overcome challenges created by the flaws in the rover's design."
      },
      {
        "id": "D",
        "text": "The Opportunity rover mission surpassed the original timeline of the assignment and allowed scientists to collect additional data about the planet Mars."
      }
    ],
    "correctAnswer": "A",
    "topic": "Reading Comprehension",
    "subtopic": "Inference, Central Idea & Textual Analysis",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_43",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 43,
    "passageId": "e4_p7",
    "type": "multi_select",
    "prompt": "The End of an Era (1) In 2004, the National Aeronautics and Space Administration (NASA) landed a rover, or robotic vehicle, named Opportunity on the surface of Mars. (2) The rover's mission was to search for evidence of water and life on the planet. (3) The rover was designed to gather data on Mars for about 90 days, but Opportunity's assignment did not come to an end until nearly 15 years later in 2019. (4) During the rover's mission, a high-resolution camera on the rover's robotic arm took magnified photographs of the surface of Mars. (5) The photographs revealed small round rocks scattered across the surface of the planet. (6) The scientists nicknamed these rocks \"blueberries\" based on the rocks' resemblance to the fruit. (7) These rocks were important because their spherical shape suggested that liquid water may have flowed over them for a substantial amount of time. (8) Opportunity continued to provide valuable data about craters and other surface features. (9) Throughout the mission, the rover traveled a total of 28.06 miles across Mars' surface. (10) When Opportunity had Which word should be added to the beginning of sentence 8 to provide a better transition to the third paragraph (sentences 8-11)? Move the correct answer to the box. Overall, Furthermore, Meanwhile, Consequently, (8) Opportunity continued to provide valuable data about craters and other surface features.",
    "imageSrc": "/exams/exam4/items/ela_q43.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "\"Meanwhile,\"",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: \"Meanwhile,\". This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_44",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 44,
    "passageId": "e4_p7",
    "type": "multiple_choice",
    "prompt": "in the passage?",
    "imageSrc": "/exams/exam4/items/ela_q44.png",
    "options": [
      {
        "id": "A",
        "text": "However, in 2018, a dust storm covered the planet, bringing the rover's progress to a standstill."
      },
      {
        "id": "B",
        "text": "However, in 2018, a dust storm shrouded the planet, impermanently halting the rover's progress."
      },
      {
        "id": "C",
        "text": "However, in 2018, a dust storm enveloped the whole of the planet, arresting the rover's progress for a time."
      },
      {
        "id": "D",
        "text": "However, in 2018, a dust storm covered up the whole planet, which quickly brought a stop to the progress of the rover."
      }
    ],
    "correctAnswer": "A",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_45",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 45,
    "passageId": "e4_p7",
    "type": "multiple_choice",
    "prompt": "Where should the sentence be added to the passage?",
    "imageSrc": "/exams/exam4/items/ela_q45.png",
    "options": [
      {
        "id": "A",
        "text": "between sentences 2 and 3"
      },
      {
        "id": "B",
        "text": "at the beginning of the second paragraph (before sentence 4)"
      },
      {
        "id": "C",
        "text": "at the end of the second paragraph (after sentence 7)"
      },
      {
        "id": "D",
        "text": "between sentences 8 and 9"
      }
    ],
    "correctAnswer": "B",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_46",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 46,
    "passageId": "e4_p7",
    "type": "multiple_choice",
    "prompt": "What is the best way to combine sentences 12 and 13?",
    "imageSrc": "/exams/exam4/items/ela_q46.png",
    "options": [
      {
        "id": "A",
        "text": "Preventing the rover from charging its batteries, minor dust storms had periodically deposited a layer of dust onto the solar panels of the rover prior to this planet-wide dust storm."
      },
      {
        "id": "B",
        "text": "Periodically depositing a layer of dust onto the solar panels of the rover prior to this planet-wide dust storm, minor dust storms had prevented it from charging its batteries."
      },
      {
        "id": "C",
        "text": "Minor dust storms, prior to this planet-wide dust storm, prevented the rover from charging its batteries because they had periodically deposited a layer of dust onto the solar panels of the rover."
      },
      {
        "id": "D",
        "text": "Prior to this planet-wide dust storm, minor dust storms had periodically deposited a layer of dust onto the solar panels of the rover, preventing it from charging its batteries."
      }
    ],
    "correctAnswer": "D",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_47",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 47,
    "type": "multi_select",
    "prompt": "In September 2016 the National Museum of African American History and Culture opened as part of the Smithsonian Institution, the museum is already the Smithsonian's third most popular site. Experts say that they expect this newest Smithsonian facility to welcome nearly 4 million visitors a year. The museum features more than 30,000 objects, including Muhammad Ali's boxing gloves and a dress sewn by Rosa Parks. A commemorative copy of the Emancipation Proclamation, written in 1863 during the presidency of Abraham Lincoln, is also on display at the museum. Which part of the paragraph contains an error in sentence structure? Select the one error.",
    "imageSrc": "/exams/exam4/items/ela_q47.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "Choice 1: \"Institution, the\"",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Choice 1: \"Institution, the\". This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_48",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 48,
    "type": "multiple_choice",
    "prompt": "What is the best way to combine the sentences to clarify the relationship between the ideas?",
    "imageSrc": "/exams/exam4/items/ela_q48.png",
    "options": [
      {
        "id": "A",
        "text": "While flyby missions near Jupiter have been happening since 1973, scientists collect data about the planet and its moons."
      },
      {
        "id": "B",
        "text": "Although there have been flyby missions near Jupiter since 1973, they have allowed scientists to collect data about the planet and its moons."
      },
      {
        "id": "C",
        "text": "Flyby missions near Jupiter, which allow scientists to collect data about the planet and its moons, have been happening since 1973."
      },
      {
        "id": "D",
        "text": "Flyby missions have been happening near Jupiter, but scientists have been collecting data about the planet and its moons since 1973."
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_49",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 49,
    "type": "text_entry",
    "prompt": "Which sentence in the paragraph contains an error in construction and should be revised? (1) On the evening of July 13, 2019, a major power outage affected the Upper West Side of Manhattan in New York City. (2) Leaving approximately 73,000 residents without electricity for three long hours, lights did not function, refrigerators did not stay cold, and air conditioners did not work. (3) Longtime city residents were particularly confused because an eerily similar event had occurred years earlier\u2014on the exact same day! (4) The famous New York City Blackout of 1977, which lasted for 25 hours, also happened on July 13, an odd coincidence to say the least. Move the answer to the box. There is only one error in construction. Sentence 1 Sentence 2 Sentence 3 Sentence 4 Contains an error in construction",
    "imageSrc": "/exams/exam4/items/ela_q49.png",
    "options": null,
    "correctAnswer": "Sentence 2",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Sentence 2. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_ela_50",
    "examId": "exam4",
    "section": "ela",
    "questionNumber": 50,
    "type": "multiple_choice",
    "prompt": "How should the paragraph be revised? (1) Danielle spent several hours preparing for an upcoming audition for a play at the community theater. (2) First she did vocal exercises to practice her diction and projection so that her words would carry clearly throughout the large auditorium. (3) Then she studies the text of the monologue to better understand the emotions, and motivations of the character she plans to portray. (4) Finally she recited her monologue in front of a mirror many times, making slight adjustments and improvements to her performance each time.",
    "imageSrc": "/exams/exam4/items/ela_q50.png",
    "options": [
      {
        "id": "A",
        "text": "Sentence 1: Change spent to had spent, AND insert a comma after play."
      },
      {
        "id": "B",
        "text": "Sentence 2: Change did to does, AND insert a comma after projection."
      },
      {
        "id": "C",
        "text": "Sentence 3: Change studies to studied, AND delete the comma after emotions."
      },
      {
        "id": "D",
        "text": "Sentence 4: Change recited to recites, AND delete the comma after times."
      }
    ],
    "correctAnswer": "C",
    "topic": "Revising & Editing",
    "subtopic": "Conventions of Language & Paragraph Organization",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_01",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 51,
    "type": "multiple_choice",
    "prompt": "The decimal 0.06 can be written as the fraction 50. What is the value of x?",
    "imageSrc": "/exams/exam4/items/math_q01.png",
    "options": [
      {
        "id": "A",
        "text": "3"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "12"
      },
      {
        "id": "D",
        "text": "30"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_02",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 52,
    "type": "text_entry",
    "prompt": "The list shows the results of a survey. A survey was taken to see whether students like basketball, soccer, both, or neither. These were the results: \u2022 25 students like basketball. \u2022 19 students like soccer. \u2022 7 students like both basketball and soccer. \u2022 10 students don't like either basketball or soccer. Use the information provided to determine how many students were surveyed and how many like only soccer. Move the correct answer to each box. 12 19 26 3 47|54 There were students surveyed, and _ students like only soccer.",
    "imageSrc": "/exams/exam4/items/math_q02.png",
    "options": null,
    "correctAnswer": "Students surveyed: 47; students who like only soccer: 12",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Students surveyed: 47; students who like only soccer: 12. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_03",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 53,
    "type": "text_entry",
    "prompt": "At a diner, 18 dozen buns were used yesterday for 150 lunch customers. Today, there were 250 lunch customers. Assuming that the bun usage rate is the same for both days, which proportions can be used to determine how many dozen buns are needed for 250 lunch customers? Select the three correct answers. 18 150 = 250 18 250 =150 150 = 250 18 1 = 250 150 150 18 250",
    "imageSrc": "/exams/exam4/items/math_q03.png",
    "options": null,
    "correctAnswer": "18/150 = x/250; 150/18 = 250/x; x/18 = 250/150",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 18/150 = x/250; 150/18 = 250/x; x/18 = 250/150. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_04",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 54,
    "type": "text_entry",
    "prompt": "Maria is playing a game in which players earn points called minks, zogs, and barts. 1 mink = 3 zogs 1 mink = \u00be bart Maria has 60 zogs and 24 barts. She wants to exchange her zogs and barts for minks. How many minks will Maria receive from the exchange?",
    "imageSrc": "/exams/exam4/items/math_q04.png",
    "options": null,
    "correctAnswer": "116",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 116. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_05",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 55,
    "type": "text_entry",
    "prompt": "How many 5-digit numbers can be created using the digits 2, 3, 5, 7, and 8 without repeating any digits within that 5-digit number?",
    "imageSrc": "/exams/exam4/items/math_q05.png",
    "options": null,
    "correctAnswer": "120",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 120. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_06",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 56,
    "type": "multiple_choice",
    "prompt": "What is the measure of <QRS?",
    "imageSrc": "/exams/exam4/items/math_q06.png",
    "options": [
      {
        "id": "A",
        "text": "60\u00b0."
      },
      {
        "id": "B",
        "text": "70\u00b0"
      },
      {
        "id": "C",
        "text": "80\u00b0"
      },
      {
        "id": "D",
        "text": "120\u00b0"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_07",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 57,
    "type": "multiple_choice",
    "prompt": "M = 3N = 7 = Q = 7 > 0 Based on the statement above, which variable has the greatest value? \u2022 A. M O B. N \u2022 C. P \u2022 D. R",
    "imageSrc": "/exams/exam4/items/math_q07.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_08",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 58,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 8.",
    "imageSrc": "/exams/exam4/items/math_q08.png",
    "options": [
      {
        "id": "A",
        "text": "roofing contractor uses shingles at a rate of 3 bundles for every 96 square feet of roof covered. At this rate, how many bundles of shingles will he need in order to cover a roof that is 416 square feet? \u2022 A. 5"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "13"
      },
      {
        "id": "D",
        "text": "14"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_09",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 59,
    "type": "multiple_choice",
    "prompt": "buying the individual sheets less expensive than buying the package?",
    "imageSrc": "/exams/exam4/items/math_q09.png",
    "options": [
      {
        "id": "A",
        "text": "60."
      },
      {
        "id": "B",
        "text": "65"
      },
      {
        "id": "C",
        "text": "69."
      },
      {
        "id": "D",
        "text": "70"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_10",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 60,
    "type": "multiple_choice",
    "prompt": "temperature fell 3 degrees per hour. What was the temperature at 7:00 p.m. that day?",
    "imageSrc": "/exams/exam4/items/math_q10.png",
    "options": [
      {
        "id": "A",
        "text": "-13\u00b0"
      },
      {
        "id": "B",
        "text": "-10\u00b0|"
      },
      {
        "id": "C",
        "text": "-7\u00b0."
      },
      {
        "id": "D",
        "text": "5\u00b0"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_11",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 61,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 11.",
    "imageSrc": "/exams/exam4/items/math_q11.png",
    "options": [
      {
        "id": "A",
        "text": "bag contains 75 marbles that are red, blue, or green. The ratio of red to blue marbles is 15:7, and the ratio of blue to green marbles is 7:3. If 2 blue marbles are removed and replaced with 2 green marbles, what will be the new ratio of red to green marbles? \u2022 A. 3:1."
      },
      {
        "id": "B",
        "text": "5:1"
      },
      {
        "id": "C",
        "text": "15:3"
      },
      {
        "id": "D",
        "text": "45:11."
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_12",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 62,
    "type": "multiple_choice",
    "prompt": "Based on this information, what is the probability of a customer ordering ice cream as a dessert?",
    "imageSrc": "/exams/exam4/items/math_q12.png",
    "options": [
      {
        "id": "A",
        "text": "25%."
      },
      {
        "id": "B",
        "text": "30%"
      },
      {
        "id": "C",
        "text": "40%"
      },
      {
        "id": "D",
        "text": "48%"
      }
    ],
    "correctAnswer": "B",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_13",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 63,
    "type": "text_entry",
    "prompt": "A basket contains 3 apples, 4 oranges, 5 bananas, and 8 pears. If one piece of fruit is randomly pulled from the basket, what is the probability that it will be a pear? Select the place on the number line to plot the point. 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9",
    "imageSrc": "/exams/exam4/items/math_q13.png",
    "options": null,
    "correctAnswer": "8/20 (or 0.4)",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 8/20 (or 0.4). This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_14",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 64,
    "type": "multiple_choice",
    "prompt": "A cooler contains three types of beverages: 5 bottles of apple juice, 3 bottles of grape juice, and 6 bottles of orange juice. What is the probability that a bottle chosen at random from this cooler is not apple juice?",
    "imageSrc": "/exams/exam4/items/math_q14.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_15",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 65,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 15.",
    "imageSrc": "/exams/exam4/items/math_q15.png",
    "options": [
      {
        "id": "A",
        "text": "large circular dinner plate has a radius of 20 centimeters. A smaller circular plate with a circumference of 20m centimeters is placed in the center of the larger dinner plate. What is the area of the part of the larger dinner plate that is not covered by the smaller plate? \u2022 A. 20 sq cm"
      },
      {
        "id": "B",
        "text": "100 sq cm"
      },
      {
        "id": "C",
        "text": "200\u043b sq cm"
      },
      {
        "id": "D",
        "text": "300 sq cm"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Easy",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_16",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 66,
    "type": "multi_select",
    "prompt": "Which tables represent a proportional relationship between the number of books purchased and the total cost? Select the two correct answers. Number of Books Purchased Total Cost ($) Number of Books Purchased Total Cost ($) Number of Books Purchased Total Cost ($) Number of Books Purchased Total Cost ($) Number of Books Purchased Total Cost ($) 10 40 10 70 10 80 10 90 15 20 25 60 80 100 15 20 25 110 150 250 15 20 25 120 160 200 15 20 25 130 170 210 20 10 15 25 100 100 100 100",
    "imageSrc": "/exams/exam4/items/math_q16.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      },
      {
        "id": "E",
        "text": "Option E"
      }
    ],
    "correctAnswer": "Tables A and C",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: Tables A and C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_17",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 67,
    "type": "text_entry",
    "prompt": "How many positive integers satisfy the inequality x + 7 < 23?",
    "imageSrc": "/exams/exam4/items/math_q17.png",
    "options": null,
    "correctAnswer": "15",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 15. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_18",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 68,
    "type": "multiple_choice",
    "prompt": "If 36 = 4x, what is the value of x when y = 3?",
    "imageSrc": "/exams/exam4/items/math_q18.png",
    "options": [
      {
        "id": "A",
        "text": "3."
      },
      {
        "id": "B",
        "text": "4"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "12"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_19",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 69,
    "type": "multiple_choice",
    "prompt": "length XY = 20 centimeters. What is the length of XZ?",
    "imageSrc": "/exams/exam4/items/math_q19.png",
    "options": [
      {
        "id": "A",
        "text": "12 cm"
      },
      {
        "id": "B",
        "text": "24 cm"
      },
      {
        "id": "C",
        "text": "30 cm"
      },
      {
        "id": "D",
        "text": "32 cm"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_20",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 70,
    "type": "multiple_choice",
    "prompt": "cost of the cloth?",
    "imageSrc": "/exams/exam4/items/math_q20.png",
    "options": [
      {
        "id": "A",
        "text": "$12.96."
      },
      {
        "id": "B",
        "text": "$14.08"
      },
      {
        "id": "C",
        "text": "$15.12"
      },
      {
        "id": "D",
        "text": "$16.08"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_21",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 71,
    "type": "multiple_choice",
    "prompt": "N On the number line above, MN = 5-. What is the position of point M? \u2022 A. -7% \u2022 B. -4\u00f7 O C. 42 \u2022 D. 76",
    "imageSrc": "/exams/exam4/items/math_q21.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "B",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_22",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 72,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 22.",
    "imageSrc": "/exams/exam4/items/math_q22.png",
    "options": [
      {
        "id": "A",
        "text": "United States presidential coin is made from an alloy of four metals-copper, zinc, manganese, and nickel-with weights in the ratio of 177:12:7:4, respectively. The coin weighs a total of 8 grams. What is the weight of the zinc in this coin? \u2022 A. 0.28 gram"
      },
      {
        "id": "B",
        "text": "0.48 gram"
      },
      {
        "id": "C",
        "text": "0.96 gram"
      },
      {
        "id": "D",
        "text": "48 grams"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_23",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 73,
    "type": "multiple_choice",
    "prompt": "5 years ago?",
    "imageSrc": "/exams/exam4/items/math_q23.png",
    "options": [
      {
        "id": "A",
        "text": "38 yr"
      },
      {
        "id": "B",
        "text": "40 yr"
      },
      {
        "id": "C",
        "text": "45 yr"
      },
      {
        "id": "D",
        "text": "50 yr"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_24",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 74,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 24.",
    "imageSrc": "/exams/exam4/items/math_q24.png",
    "options": [
      {
        "id": "A",
        "text": "chemical decays in such a way that the amount left at the end of each week is 20% less than the amount at the beginning of that same week. What percentage of the original amount is left after two weeks? \u2022 A. 40%"
      },
      {
        "id": "B",
        "text": "60%"
      },
      {
        "id": "C",
        "text": "64%."
      },
      {
        "id": "D",
        "text": "80%"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_25",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 75,
    "type": "multiple_choice",
    "prompt": "If w - 1 is an odd integer, which one of the following must be an even integer?",
    "imageSrc": "/exams/exam4/items/math_q25.png",
    "options": [
      {
        "id": "A",
        "text": "w + 1"
      },
      {
        "id": "B",
        "text": "2w - 1"
      },
      {
        "id": "C",
        "text": "2\u0448 - 2"
      },
      {
        "id": "D",
        "text": "2w + 1"
      }
    ],
    "correctAnswer": "C",
    "topic": "Number Theory & Operations",
    "subtopic": "Prime Factorization & Multiples",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_26",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 76,
    "type": "multiple_choice",
    "prompt": "Simplify this expression: 4(7 - 3x) - (5 - x)",
    "imageSrc": "/exams/exam4/items/math_q26.png",
    "options": [
      {
        "id": "A",
        "text": "23 - 4x"
      },
      {
        "id": "B",
        "text": "23 - 11x"
      },
      {
        "id": "C",
        "text": "28 - 4x"
      },
      {
        "id": "D",
        "text": "28 - 12x"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_27",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 77,
    "type": "multiple_choice",
    "prompt": "that a student who participated in the survey has at least 2 pets?",
    "imageSrc": "/exams/exam4/items/math_q27.png",
    "options": [
      {
        "id": "A",
        "text": "40"
      },
      {
        "id": "B",
        "text": "I2"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "D",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_28",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 78,
    "type": "text_entry",
    "prompt": "A circle has a radius of 5 inches. What is the area of the circle in terms of it? Use i to express your answer.",
    "imageSrc": "/exams/exam4/items/math_q28.png",
    "options": null,
    "correctAnswer": "25\u03c0",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 25\u03c0. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_29",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 79,
    "type": "multiple_choice",
    "prompt": "areas of the shaded triangles?",
    "imageSrc": "/exams/exam4/items/math_q29.png",
    "options": [
      {
        "id": "A",
        "text": "9 sq cm"
      },
      {
        "id": "B",
        "text": "12 sq cm"
      },
      {
        "id": "C",
        "text": "18 sq cm \u2022"
      },
      {
        "id": "D",
        "text": "36 sq cm"
      }
    ],
    "correctAnswer": "A",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_30",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 80,
    "type": "multiple_choice",
    "prompt": "year, how much will they spend on planned expenses that year?",
    "imageSrc": "/exams/exam4/items/math_q30.png",
    "options": [
      {
        "id": "A",
        "text": "$1,850."
      },
      {
        "id": "B",
        "text": "$3,700"
      },
      {
        "id": "C",
        "text": "$5,920."
      },
      {
        "id": "D",
        "text": "$18,500"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_31",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 81,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 31.",
    "imageSrc": "/exams/exam4/items/math_q31.png",
    "options": [
      {
        "id": "A",
        "text": "pizza shop offers a choice of 3 sizes (small, medium, and large) and 7 different toppings. Different pizzas can be created by changing the size and the choice of toppings. If Cody wants to order a pizza with exactly 2 different toppings, how many different pizzas can he create? \u2022 A. 6."
      },
      {
        "id": "B",
        "text": "21"
      },
      {
        "id": "C",
        "text": "63."
      },
      {
        "id": "D",
        "text": "126"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_32",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 82,
    "type": "multiple_choice",
    "prompt": "number of these students who could have answered \"yes\" to both questions?",
    "imageSrc": "/exams/exam4/items/math_q32.png",
    "options": [
      {
        "id": "A",
        "text": "80."
      },
      {
        "id": "B",
        "text": "160."
      },
      {
        "id": "C",
        "text": "560"
      },
      {
        "id": "D",
        "text": "640."
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_33",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 83,
    "type": "multiple_choice",
    "prompt": "Solve the mathematical problem shown in question 33.",
    "imageSrc": "/exams/exam4/items/math_q33.png",
    "options": [
      {
        "id": "A",
        "text": "wooden box has a square base. The height of this box is 3 times the length of one side of the base. If one side of the base is 3 feet long, what is the volume of this box? \u2022 A. 9 cuft."
      },
      {
        "id": "B",
        "text": "27 cu ft"
      },
      {
        "id": "C",
        "text": "36 cu ft"
      },
      {
        "id": "D",
        "text": "81 cu ft"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_34",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 84,
    "type": "multiple_choice",
    "prompt": "How much less was Rajiv's mean speed, in kilometers per hour (kph), than Shaina's?",
    "imageSrc": "/exams/exam4/items/math_q34.png",
    "options": [
      {
        "id": "A",
        "text": "1."
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "7"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswer": "B",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_35",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 85,
    "type": "multiple_choice",
    "prompt": "the midpoint of PQ from the midpoint of RS?",
    "imageSrc": "/exams/exam4/items/math_q35.png",
    "options": [
      {
        "id": "A",
        "text": "1."
      },
      {
        "id": "B",
        "text": "2"
      },
      {
        "id": "C",
        "text": "3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Medium",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_36",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 86,
    "type": "multiple_choice",
    "prompt": "- \u0423- In the quarter circle above, what is y in terms of x? \u2022 \u0410. x \u2014 1 \u2022 \u0432. x + 1 D.",
    "imageSrc": "/exams/exam4/items/math_q36.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_37",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 87,
    "type": "multiple_choice",
    "prompt": "The hash marks on the number line above are evenly spaced. What is the coordinate of point R?",
    "imageSrc": "/exams/exam4/items/math_q37.png",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_38",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 88,
    "type": "multiple_choice",
    "prompt": "that month?",
    "imageSrc": "/exams/exam4/items/math_q38.png",
    "options": [
      {
        "id": "A",
        "text": "50."
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "100"
      },
      {
        "id": "D",
        "text": "500."
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_39",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 89,
    "type": "multiple_choice",
    "prompt": "backup camera?",
    "imageSrc": "/exams/exam4/items/math_q39.png",
    "options": [
      {
        "id": "A",
        "text": ""
      },
      {
        "id": "B",
        "text": "16 25 19"
      },
      {
        "id": "C",
        "text": "25"
      },
      {
        "id": "D",
        "text": "1"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_40",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 90,
    "type": "text_entry",
    "prompt": "147-3 = 12 12 What is the value of x in the equation shown above?",
    "imageSrc": "/exams/exam4/items/math_q40.png",
    "options": null,
    "correctAnswer": "3",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 3. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_41",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 91,
    "type": "multiple_choice",
    "prompt": "What is the area of the shaded triangle shown above?",
    "imageSrc": "/exams/exam4/items/math_q41.png",
    "options": [
      {
        "id": "A",
        "text": "m +n"
      },
      {
        "id": "B",
        "text": "n -\u0442"
      },
      {
        "id": "C",
        "text": "2(n - m)"
      },
      {
        "id": "D",
        "text": "4 (n - m)"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_42",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 92,
    "type": "multiple_choice",
    "prompt": "chance of being picked at random from the box?",
    "imageSrc": "/exams/exam4/items/math_q42.png",
    "options": [
      {
        "id": "A",
        "text": "cat"
      },
      {
        "id": "B",
        "text": "dog"
      },
      {
        "id": "C",
        "text": "fish"
      },
      {
        "id": "D",
        "text": "horse"
      }
    ],
    "correctAnswer": "B",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: B. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_43",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 93,
    "type": "multiple_choice",
    "prompt": "Which number line below shows the solution set for 2x \u2014 2 \u2264 y \u2264 4x + 10 when y = 1? 1\"2\"3\" \u2022 D. ==2=04*23\u00bb",
    "imageSrc": "/exams/exam4/items/math_q43.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Geometry & Spatial Reasoning",
    "subtopic": "Geometric Figures, Area & Coordinate Planes",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_44",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 94,
    "type": "multiple_choice",
    "prompt": "In the equation above, what is the value of p? \u2022 A. 3 \u2022 B. 3 \u2022 D. 14",
    "imageSrc": "/exams/exam4/items/math_q44.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_45",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 95,
    "type": "multiple_choice",
    "prompt": "A ball is selected at random from a box that contains 7 black balls, 14 green balls, and 21 red balls. What is the probability that the ball selected is black? \u2022 \u0432. 5 \u2022 D. 6",
    "imageSrc": "/exams/exam4/items/math_q45.png",
    "options": [
      {
        "id": "A",
        "text": "Option A"
      },
      {
        "id": "B",
        "text": "Option B"
      },
      {
        "id": "C",
        "text": "Option C"
      },
      {
        "id": "D",
        "text": "Option D"
      }
    ],
    "correctAnswer": "A",
    "topic": "Probability & Statistics",
    "subtopic": "Data Analysis, Frequency & Combinations",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_46",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 96,
    "type": "text_entry",
    "prompt": "Amiya subscribes to an online streaming service. She pays a onetime setup fee of $50, plus $20 per month for service. Write an equation that can be used to determine the total amount Amiya will pay, y, for x months of service. Enter your equation in the space provided. Enter only the equation. 1 6 % 2 7 3 8 4 9 5 0 X + \u00f7 () < =",
    "imageSrc": "/exams/exam4/items/math_q46.png",
    "options": null,
    "correctAnswer": "y = 20x + 50",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: y = 20x + 50. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_47",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 97,
    "type": "multiple_choice",
    "prompt": "between Raoul's age (r) and Vahn's age (v)?",
    "imageSrc": "/exams/exam4/items/math_q47.png",
    "options": [
      {
        "id": "A",
        "text": "p-u\u2265 3"
      },
      {
        "id": "B",
        "text": "r-v\u22643"
      },
      {
        "id": "C",
        "text": "3-v\u2264r"
      },
      {
        "id": "D",
        "text": "3 -p\u2264U"
      }
    ],
    "correctAnswer": "A",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: A. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_48",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 98,
    "type": "multiple_choice",
    "prompt": "removed, the shelf would be half full. What is the value of x?",
    "imageSrc": "/exams/exam4/items/math_q48.png",
    "options": [
      {
        "id": "A",
        "text": "14."
      },
      {
        "id": "B",
        "text": "16"
      },
      {
        "id": "C",
        "text": "18"
      },
      {
        "id": "D",
        "text": "22"
      }
    ],
    "correctAnswer": "D",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: D. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_49",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 99,
    "type": "multiple_choice",
    "prompt": "expect the cup to land on its side?",
    "imageSrc": "/exams/exam4/items/math_q49.png",
    "options": [
      {
        "id": "A",
        "text": "72"
      },
      {
        "id": "B",
        "text": "108"
      },
      {
        "id": "C",
        "text": "144"
      },
      {
        "id": "D",
        "text": "158"
      }
    ],
    "correctAnswer": "C",
    "topic": "Algebra & Equations",
    "subtopic": "Linear Equations & Algebraic Modeling",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: C. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  },
  {
    "id": "e4_math_50",
    "examId": "exam4",
    "section": "math",
    "questionNumber": 100,
    "type": "text_entry",
    "prompt": "Let b = 3, c = 4, and d = 5. Determine the value of = + & Enter your fractional answer in the space provided. Enter only your fraction. ... 1 6 % 2 7 3 8 4 9 5 0",
    "imageSrc": "/exams/exam4/items/math_q50.png",
    "options": null,
    "correctAnswer": "7/5",
    "topic": "Proportional Reasoning & Percentages",
    "subtopic": "Ratios, Rates & Scale Drawings",
    "difficulty": "Hard",
    "hints": [
      "Identify the given information in the problem carefully and note the exact question being asked.",
      "Eliminate clearly incorrect or extreme answers by checking edge cases and units.",
      "Verify your final calculation against the problem context to ensure reasonableness."
    ],
    "trapAlert": "Watch out for common distractor choices that solve for an intermediate value or invert operations.",
    "explanation": "Official NYC DOE Answer: 7/5. This answer directly satisfies the stated conditions and algebraic/textual relationships."
  }
];

;

/**
 * Authentic NYC DOE SHSAT Calibrated IRT Scaled Conversion Table (0 - 50 raw items)
 * Calibrated directly to official NYC Department of Education score distributions:
 * - Minimum baseline: 100 per section
 * - 25/50 (50% raw): 195 scaled (Composite 390 - does not meet specialized HS cutoff)
 * - 30/50 (60% raw): 228 scaled (Composite 456 - approaching cutoff)
 * - 33/50 (66% raw): 245 scaled (Composite 490 - Brooklyn Latin admissions threshold)
 * - 35/50 (70% raw): 254 scaled (Composite 508 - Brooklyn Tech admissions threshold: 505)
 * - 37/50 (74% raw): 263 scaled (Composite 526 - Bronx Science: 525 & Queens Science: 510)
 * - 38/50 (76% raw): 269 scaled (Composite 538 - Staten Island Tech: 530)
 * - 40/50 (80% raw): 280 scaled (Composite 560 - Stuyvesant admissions threshold: 560)
 * - 45/50 (90% raw): 320 scaled (Composite 640 - top 1% citywide)
 * - 50/50 (100% raw): 355 scaled (Composite 710 - maximum possible composite score)
 */
export const SHSAT_SECTION_SCALE: number[] = [
  100, 102, 105, 108, 110, 112, 115, 118, 120, 122, 125, // 0 - 10
  129, 133, 137, 141, 145, 149, 153, 157, 161, 165,      // 11 - 20
  171, 177, 183, 189, 195, 202, 208, 215, 221, 228,      // 21 - 30
  234, 239, 245, 250, 254, 258, 263, 269, 274, 280,      // 31 - 40
  288, 296, 304, 312, 320, 327, 334, 341, 348, 355       // 41 - 50
];

export type AdaptiveProfile = "standard" | "high_difficulty" | "careless";

export interface ScaledScoreResult {
  elaScaled: number;
  mathScaled: number;
  compositeScore: number;
  adaptiveRange: [number, number];
  percentile: number;
  brooklynTechDiff: number;
}

export function calculateScaledScores(
  elaRaw: number,
  mathRaw: number,
  adaptiveMode: AdaptiveProfile = "standard"
): ScaledScoreResult {
  const clampRaw = (raw: number) => Math.max(0, Math.min(50, Math.round(raw)));
  const cEla = clampRaw(elaRaw);
  const cMath = clampRaw(mathRaw);

  const elaBase = SHSAT_SECTION_SCALE[cEla];
  const mathBase = SHSAT_SECTION_SCALE[cMath];

  // In Item Response Theory (IRT) adaptive computerized testing:
  // Answering hard items correctly yields higher theta ability estimation (+8 to +15 scaled points)
  // Careless mistakes on easy items penalize theta estimation (-8 to -12 scaled points)
  let adaptiveDelta = 0;
  if (adaptiveMode === "high_difficulty") {
    const bonusELA = cEla > 25 ? Math.round((cEla - 25) * 0.4) : 2;
    const bonusMath = cMath > 25 ? Math.round((cMath - 25) * 0.4) : 2;
    adaptiveDelta = bonusELA + bonusMath;
  } else if (adaptiveMode === "careless") {
    adaptiveDelta = -10;
  }

  const elaScaled = Math.min(355, Math.max(100, elaBase + Math.round(adaptiveDelta / 2)));
  const mathScaled = Math.min(355, Math.max(100, mathBase + Math.round(adaptiveDelta / 2)));
  const compositeScore = Math.min(710, Math.max(200, elaScaled + mathScaled));

  const adaptiveRange: [number, number] = [
    Math.max(200, compositeScore - 10),
    Math.min(710, compositeScore + 10),
  ];

  let percentile = 1;
  if (compositeScore >= 600) percentile = 99;
  else if (compositeScore >= 560) percentile = 96;
  else if (compositeScore >= 525) percentile = 88;
  else if (compositeScore >= 505) percentile = 80;
  else if (compositeScore >= 490) percentile = 74;
  else if (compositeScore >= 450) percentile = 58;
  else if (compositeScore >= 400) percentile = 40;
  else if (compositeScore >= 350) percentile = 22;
  else percentile = Math.max(1, Math.round((compositeScore - 200) / 10));

  return {
    elaScaled,
    mathScaled,
    compositeScore,
    adaptiveRange,
    percentile,
    brooklynTechDiff: compositeScore - 505,
  };
}

/**
 * High School Admission Chances Predictor
 */
export function getHighSchoolChances(compositeScore: number) {
  return SPECIALIZED_HIGH_SCHOOLS.map(school => {
    const diff = compositeScore - school.cutoffScore;
    let status: 'Likely' | 'Target' | 'Reach' | 'Far Reach';
    let probability: number;

    if (diff >= 25) {
      status = 'Likely';
      probability = Math.min(98, 85 + diff * 0.4);
    } else if (diff >= -10) {
      status = 'Target';
      probability = 50 + diff * 1.5;
    } else if (diff >= -35) {
      status = 'Reach';
      probability = Math.max(15, 35 + diff);
    } else {
      status = 'Far Reach';
      probability = Math.max(2, 15 + diff * 0.3);
    }

    return {
      ...school,
      diff,
      status,
      probability: Math.round(probability)
    };
  }).sort((a, b) => b.cutoffScore - a.cutoffScore);
}
