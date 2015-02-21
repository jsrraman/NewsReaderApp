/**
 * Created by rajaraman on 20/02/15.
 */

// Navigation header items
var navigationHeaderItems = ["Headlines", "News", "Business", "Technology", "Science", "Sports", "Entertainment"];

// News items
// Headlines
var headlinesList = [{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02317/13MP_RUSSELL_2317142f.jpg",
    "summary": "Fodder for funnies",
    "detail": "Several seats might have been empty at Russell Peters’ show in Chennai, but the mosquitoes were in full attendance. The Indo-Canadian comic kept swatting them away throughout the show, and even stood in between two fans to keep them away. “One even bit me on my head while I was backstage,” he complained." +
    "<br>" + "<br>" +
    "The crowd at the YMCA College of Physical Education was ready for Russell, with hooting and yelling every time his name was mentioned. DJ Spinbad entertained the crowd with classic hip-hop numbers interspersed with several audio and audio-visual warnings about what would happen if anyone was found recording the show."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02310/13feb_rmdwscns3_14_2310424f.jpg",
    "summary": "Kalam calls on brother",
    "detail": "After a gap of about nine months, former President A. P. J. Abdul Kalam visited his family at House of Kalam, his ancestral home, here on Friday." +
    "<br>" + "<br>" +
    "Mr. Kalam, who was on a day’s visit to the district, came to his house in the afternoon and had lunch with his 99-year-old brother A. P. J. M. Maraikayar and interacted with other family members." +
    "<br>" + "<br>" +
    "Mr. Kalam spent about two hours, before leaving for Madurai."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02309/12feb_dgrajhi3__MA_2309204f.jpg",
    "summary": "Communication barrier biggest handicap to Tamils",
    "detail": "Lack of communication skill, especially in Hindi and English, is the biggest handicap for hard working and intelligent Tamil students, who cannot express their talents fully well, according to NCC Tiruchi Group Commander V.B. Jayaraj." +
    "<br>" + "<br>" +
    "Talking to media persons after inspecting 7{+t}{+h}NCC Battalion here on Thursday, he said the students from Tami Nadu were hard working and intelligent, but they were not able to communicate properly in English." +
    "<br>" + "<br>" +
    "They could not face competitive exams and compete with others at the national level. Learning additional languages at young age would help them scale new heights, he noted."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02306/DE11BJP_OFFICE__DE_2306754g.jpg",
    "summary": "Bedi says sorry to Modi",
    "detail": "The Bhartiya Janata Party’s chief ministerial candidate Kiran Bedi appeared with folded hand minutes after she lost her seat to Aam Aadmi Party’s S. K. Bagga in the Krishna Nagar constituency by over 2,200 votes." +
    "<br>" + "<br>" +
    "Apologising to Prime Minister Narendra Modi and her party leaders for “letting them down”, Ms. Bedi, who lost the Krishna Nagar seat that has been a BJP bastion since 1993, said, “I want to thank the BJP leadership which reposed trust in me. I apologise to everyone...I could not fulfil their expectations.”" +
    "<br>" + "<br>" +
    "“The BJP’s loss in Delhi is not the PM’s defeat. The party will asses the results,” said Ms. Bedi, speaking to media persons outside her South Delhi residence."
}, {
    "thumbnailUrl": "http://farm6.staticflickr.com/5323/9902848784_cbd10ba3ca_c.jpg",
    "summary": "The truth about NASA’s moon exploration",
    "detail": "About 46 years ago, NASA detected two lifeforms on the Moon. These lifeforms were able to use sophisticated technology, as NASA could easily verify from their audio and video transmissions that we intercepted." +
    "<br>" + "<br>" +
    "I’ve actually seen the video, and the beings seemed humanoid to me, but quite frankly, I think it’s hard to say for sure because of the bulky protective shielding they were wearing at all times"
}];

// News
var newsList = [{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/01773/metro_1773870f.jpg",
    "summary": "Metro Rail for IT corridor in Chennai?",
    "detail": "Every day, it takes G. Satish nearly an hour to commute from Semmenchery to Madhya Kailash. This routine tires out commuters like him by the time they get to work." +
    "<br>" + "<br>" +
    "Though there are hundreds of buses plying on the IT corridor (also known as Rajiv Gandhi Salai or Old Mahabalipuram Road), till Kelambakkam, the roads have become choked over time owing to rapidly-increasing vehicle population." +
    "<br>" + "<br>" +
    "“If only the government would consider a Metro Rail line along this corridor, travel would become far more comfortable,” says Mr. Satish."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02317/20FEBUDH_Vividh_TH_2317870f.jpg",
    "summary": "Vividh Bharati launches FM service for Chennai",
    "detail": "Rajyavardhan Singh Rathore, minister of State (MoS) for information and broadcasting (I&B), was in Chennai on Friday to set in motion Vividh Bharati’s new FM service." +
    "<br>" + "<br>" +
    "Vividh Bharati began in Chennai in 1957." +
    "<br>" + "<br>" +
    "The FM services will ensure the entire city is covered as almost every smart device has the capacity to receive FM waves, the MoS said." +
    "<br>" + "<br>" +
    "“In Chennai, Vividh Bharati has eight hours of local programming for people who like to listen to shows in their own language. The introduction of FM services will ensure a wider coverage in the city,” he said. The MoS also said expanding radio coverage is one of the agendas of the Modi government at the Centre."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02294/31MP_GOVT__ELEMENT_2294977f.jpg",
    "summary": "What’s in a name in Chennai?",
    "detail": "Of late, I keep getting this message on WhatsApp, Facebook and email that claims to give information on how various localities in the city got their names. People forward it to me asking me if I can vouch for the veracity of the information. Sadly, the answer is no, for these stories are but flights of fancy." +
    "<br>" + "<br>" +
    "Take for instance this oft-repeated tale of Kodambakkam taking its name from Ghoda Bagh ostensibly because the Nawabs tethered their horses there. If that were indeed the case, the ruler and his entourage must have had quite a walk each morning from Chepauk to get on to their mounts. The earliest British records I can trace refer to the place as Corumbat and Codamback, both dating to 1661. No mention of horses or gardens for them. If Kodambakkam was Ghoda Bagh should Nungambakkam by the same logic not be Nunga Bagh and therefore a historic nudist colony?"
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02294/29jantkrns1-man_30_2294607f.jpg",
    "summary": "Aavin milk shake ‘elusive’ for schoolchildren",
    "detail": "It is a case of “sweet idea” that has eluded schoolchildren." +
    "<br>" + "<br>" +
    "About three years ago, a proposal was mooted to provide mango milk shake as part of the noon meal scheme. This followed the then Chief Minister Jayalalithaa’s announcement at the Collectors’ conference in November 2011. The advice given to Aavin (Tamil Nadu Cooperative Milk Producers’ Federation) to examine the option was aimed at helping horticulture farmers of the Krishnagiri district, who were then hit hard by political instability in parts of the Middle East, one of the main markets for processed pulp." +
    "<br>" + "<br>" +
    "Citing various reasons, the original idea was given a quiet burial. Eventually, the proposal was turned into an opportunity of revenue generation for Aavin, which was till recently incurring huge losses."
},{
    "thumbnailUrl": "https://s.yimg.com/cd/resizer/2.0/FIT_TO_WIDTH-w500/234ccbee58a765cefd8fce7405bc68f98ff11023.jpg",
    "summary": "Lenovo Has Been Selling Laptops with Malware Pre-Installed",
    "detail": "Computer maker Lenovo has been shipping laptops prepackaged with malware that makes you more vulnerable to hackers — all for the sake of serving you advertisements. " +
    "<br>" + "<br>" +
    " Made by a company called “Superfish,” the software is essentially an Internet browser add-on that injects ads onto websites you visit."
}];

// Business
var businessList = [{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02092/5TH_RAGHURAM_RAJAN_2092440f.jpg",
    "summary": "Rajan warns against ‘Appellate Raj’",
    "detail": "In a veiled attack on suggestions made by the government-appointed Financial Sector Legislative Reforms Commission (FSLRC) panel for overhaul of financial sector laws, Reserve Bank of India Governor Raghuram Rajan, on Friday, said the country should not end up in ‘Appellate Raj’ after escaping the ‘License Permit Raj.’" +
    "<br>" + "<br>" +
    "The comments assume significance in the wake of the high-profile FSLRC having suggested creating a single appellate authority for all financial sector watchdogs, including the RBI."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02317/TH21_BU_ANIL_SWARU_2317377f.jpg",
    "summary": "Coal auction to benefit power consumers: Swarup",
    "detail": "Respective states will get nearly Rs.1 lakh crore, including royalty, over the next 30 years from 16 coal blocks sold so far through the ongoing auction, Coal Secretary Anil Swarup said here on Friday." +
    "<br>" + "<br>" +
    "Besides, the reverse auction for the power sector would result in benefits to the tune of Rs.37,050 crore to end-users by way of a cut in tariff, Mr. Swarup said. The government has put on block 19 mines in the first tranche of auction. Companies such as Jindal Power, Hindalco and Ultratech and others have bagged 16 of them so far."
}, {
    "thumbnailUrl": "http://www.moneycontrol.com/news_image_files/2014/356x200/b/Budget2014_arun_jaitley10_356x200_3938_356.jpg",
    "summary": "India's gold imports may rise to 35-40 tonnes in February",
    "detail": "India's gold imports are likely to rise to 35-40 tonnes in the current month as compared to 26 tonnes in the corresponding period last year, according to gold and silver refiner." +
    "<br>" + "<br>" +
    "The country has already imported 23.2 tonnes of gold in the first fortnight of this month. Total shipments at the end of the month could reach 35-40 tonnes."
}, {
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02317/20TH_SEBI_2317339f.jpg",
    "summary": "SEBI cracks the whip on Rs.1,800 crore tax evasion case",
    "detail": "In a fresh clampdown on entities misusing stock markets for evading taxes, watchdog SEBI on Friday imposed trading restrictions on 33 entities and suspended trading in one listed company, which have been found to have made undue gains of over Rs. 1,800 crore." +
    "<br>" + "<br>" +
    "While 24 entities have been barred from the entire capital markets, nine others have been restrained from trading in the shares of Kamalakshi Finance Corp Ltd. The trading has also been suspended in its shares till further orders."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02317/VBK-20-U_K__SINHA_2317297f.jpg",
    "summary": "SEBI warns of stern action if stolen govt. info is used in markets",
    "detail": "Amid a major crackdown on alleged leak of classified documents from Petroleum Ministry, capital markets watchdog SEBI on Friday warned it will take stern action if such stolen information was being used in the markets." +
    "<br>" + "<br>" +
    "Cracking down on a suspected case of corporate espionage, Delhi police has arrested five persons, including two Ministry officials and some middlemen, in connection with the alleged leak of classified government documents to private sector companies for money."
}];

// Technology
// Business
var technologyList = [{
    "thumbnailUrl": "http://static.ibnlive.in.com/ibnlive/pix/sitepix/02_2015/moto-maxx-200215.jpg",
    "summary": "Motorola’s Moto Maxx coming to India soon, teases Flipkart",
    "detail": "Motorola is in all likelihood bringing the battery-packed Moto Maxx (a global variant of the Motorola Droid Turbo) to India soon. Motorola’s India sales partner Flipkart, in a tweet teased about an upcoming Moto device that given by the little details provided, point to the Moto Maxx." +
    "<br>" + "<br>" +
    "There’s a Moto beast coming your way exclusively on Flipkart. Stay tuned for more details, tweeted Flipkart with the image in the tweet mentioning “turbocharged” and “ballistic nylon fairing.”"
}, {
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02314/TH19-HEART-BRSC_2314709f.jpg",
    "summary": "Nanoparticles target fat deposits in blood vessels",
    "detail": "Specially formulated ultra-tiny particles could curtail the growth of fat-laden deposits in blood vessels that can produce heart attacks and strokes, according to research from two groups of scientists in the U.S." +
    "<br>" + "<br>" +
    "Cardiovascular disease is a leading cause of ill-health and death worldwide. High levels of cholesterol in the blood along with chronic inflammation in arterial walls lead to ‘plaques’ of fatty deposits getting established in blood vessels and growing in size."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02314/TH19-SWARNA-BRSC_2314713f.jpg",
    "summary": "Small molecule with a huge potential",
    "detail": "Recent findings on the role of IP7, a lesser known molecule, have revealed that it has potential to be developed as a drug for the prevention of stroke and cancer chemotherapy." +
    "<br>" + "<br>" +
    "ATP molecule is known as a storehouse of energy and fuels the physiological activities. Another equally important but lesser known molecule is IP7, which too carries high energy and regulates many processes in the cell. This molecule consists of a sugar inositol and seven phosphate groups. Its levels in a cell are approximately thousand fold lower than those of ATP."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02314/TH19-TUBER-BRSC_2314712f.jpg",
    "summary": "Working towards personalised TB treatment",
    "detail": "Three major global research centres in India will receive funding coming out of collaboration between the UK Medical Research Council (MRC) and the Department for Biotechnology (DBT), India. The Department for Biotechnology will match the funding provided by UK through MRC and Newton Fund." +
    "<br>" + "<br>" +
    "The Chennai-based National Institute for Research in Tuberculosis (NIRT) will get one million pounds in funding from UK and DBT will provide an equivalent amount over a three-year period to develop new diagnostic tools and new treatments to address the sharp rise in cases of multi-drug resistant tuberculosis (MTB). The initiative will start in May/June this year."
},{
    "thumbnailUrl": "http://www.thehindu.com/multimedia/dynamic/02314/TH19-DEATHS-BRSC_2314710f.jpg",
    "summary": "Displacement cuts life expectancy among tribal people",
    "detail": "Displacement does more than efface identities and disrupt livelihoods, it can reduce life expectancy, finds a DNA study of a tribal community relocated from Madhya Pradesh’s Kuno Wildlife Sanctuary." +
    "<br>" + "<br>" +
    "Around 8,000 Sahariya tribal people were moved out of their ancestral homes in Kuno in 1998-2002 to make space for Asiatic lions brought in from Gujarat. The families suffered “acute stress” as they coped with their radically changed life in unfamiliar, semi-urbanized surroundings 10 km away, says a paper in Proceedings of the National Academy of Sciences."
}];