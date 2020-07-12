import React, {useState, useEffect} from 'react';
import { Button, Image } from 'semantic-ui-react'
import Cookies from 'js-cookie'

const News = () => {

    const FakeNews = {"status":"ok","totalResults":38,"articles":[{"source":{"id":null,"name":"MMA Fighting"},"author":"Damon Martin","title":"Jorge Masvidal: Kamaru Usman was the better man tonight, but ‘I know the formula’ to beat him now - MMA Fighting","description":"Jorge Masvidal pays homage to Kamaru Usman on a job well done, but after spending five rounds with him, he’s confident in what he’d do different in a rematch.","url":"https://www.mmafighting.com/2020/7/12/21321604/jorge-masvidal-kamaru-usman-was-the-better-man-tonight-but-i-know-the-formula-to-beat-him-now","urlToImage":"https://cdn.vox-cdn.com/thumbor/FrHySYHHISzucdRobs8G1W3QCgE=/0x0:3416x1788/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/20079258/1255678623.jpg.jpg","publishedAt":"2020-07-12T14:00:00Z","content":"Jorge Masvidal can give credit where credit is due.\r\nDespite accepting a UFC 251 main event bout against welterweight king Kamaru Usman on just six days notice, Masvidal had no desire to make excuses… [+3758 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Ben Strauss","title":"ESPN suspends Adrian Wojnarowski, its top NBA reporter, after profane email to senator - The Washington Post","description":"ESPN suspended its star NBA reporter after he sent a profane email to Sen. Josh Hawley (R-Mo.).","url":"https://www.washingtonpost.com/sports/2020/07/12/adrian-wojnarowski-suspended-espn-email-senator-josh-hawley/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LJNALZVFWQI6VCMOWINZVA7XSI.jpg&w=1440","publishedAt":"2020-07-12T13:51:00Z","content":"Wojnarowski is still expected to be part of ESPNs coverage of the NBA season in Orlando, just at a later date. The suspension is believed to be between one and two weeks, according to those same peop… [+2397 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"Nicole Acevedo","title":"A Latino family lost a father to COVID-19. The obituary blamed the 'carelessness of politicians.' - NBC News","description":"An Arizona Latino family whose father, Mark Urquiza, died of coronavirus publicly wrote in the obituary about their anger over the state's lack of strict measures to contain the virus.","url":"https://www.nbcnews.com/news/latino/latino-family-lost-father-covid-19-obituary-blamed-carelessness-politicians-n1233113","urlToImage":"https://media2.s-nbcnews.com/j/newscms/2020_28/3396249/200710-mark-anthony-urquiza-2x1-se-721p_9a7bee4f6963e0252f99b3f4a2d685be.nbcnews-fp-1200-630.jpg","publishedAt":"2020-07-12T13:43:00Z","content":"Kristin Urquiza, 39, was grieving over the fact that her family could only allow about a dozen people at the burial of her father, Mark Anthony Urquiza, after his long battle against the coronavirus.… [+7650 chars]"},{"source":{"id":null,"name":"Page Six"},"author":"Jackie Salo","title":"Naya Rivera's ex Ryan Dorsey, father swim lake as search continues for missing actress - Page Six","description":"Dorsey and his former father-in-law embraced before getting into the water with other family members to pay tribute to the missing “Glee” star.","url":"https://pagesix.com/2020/07/12/naya-riveras-ex-ryan-dorsey-father-swim-lake-as-search-continues/","urlToImage":"https://pagesix.com/wp-content/uploads/sites/3/2020/07/200710-naya-rivera-disbelief-1.jpg?quality=90&strip=all&w=1200","publishedAt":"2020-07-12T13:07:00Z","content":"Naya Rivera’s ex-husband Ryan Dorsey and her father waded the same waters where she was presumed to have drowned as the search continued for the missing actress, according to reports.\r\nDorsey and Riv… [+1080 chars]"},{"source":{"id":null,"name":"Lifehacker.com"},"author":"Elizabeth Yuko","title":"How to See a Comet That Won't Be Visible for Another 6,000 Years - Lifehacker","description":"Mark your calendar.","url":"https://lifehacker.com/how-to-see-a-comet-that-wont-be-visible-for-another-6-0-1844345120","urlToImage":"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jcut4id1wtjaaqnyvvk3.jpg","publishedAt":"2020-07-12T13:00:00Z","content":"Thanks to COVID-19, you may not get to take your kids to the planetarium any time soon. But if theyre into astronomy, youre in luck, because we should be able to see a comet starting tonight. Known a… [+1749 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Derek Hawkins, Felicia Sonmez, Robert Costa","title":"Coronavirus update: DeVos pushes for school reopenings as states report record infections - The Washington Post","description":"Nine states in nearly every major region of the country reported record new single-day caseloads on Saturday.","url":"https://www.washingtonpost.com/nation/2020/07/12/coronavirus-update-us/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/22YEOAGDRMI6VCIINCRLT2XJ4A.jpg&w=1440","publishedAt":"2020-07-12T12:54:00Z","content":"DeVos added on Fox News Sunday that the Trump administration was looking at all the options for pulling federal funding from schools that dont open in the fall. American investment in education is a … [+6304 chars]"},{"source":{"id":null,"name":"Theguardian.comworld"},"author":"Guardian staff reporter","title":"500,000 Hongkongers cast 'protest vote' against security law - The Guardian","description":"Unofficial poll will choose pro-democracy candidates for legislative council elections","url":"https://amp.theguardian.comworld/2020/jul/12/500000-hongkongers-cast-protest-vote-against-security-law","urlToImage":"https://i.guim.co.uk/img/media/bbe14d9f891425111b75ccd86904a6a5540200e4/0_135_5760_3456/master/5760.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=938ee681b1723ce2f842da5feb7c195d","publishedAt":"2020-07-12T12:47:00Z","content":"Hundreds of thousands of Hong Kong citizens queued to cast ballots over the weekend in what the Chinese-ruled citys opposition camp says is a symbolic protest vote against a tough national security l… [+1715 chars]"},{"source":{"id":null,"name":"Forbes"},"author":"Dave Thier","title":"How To Get Your Free Copy Of ‘Watch Dogs 2’ By Watching Ubisoft Forward: Where To Watch And What Time - Forbes","description":"Here's how to get your free copy of 'Watch Dogs 2' by watching Ubisoft Forward: where to watch and what time to log in.","url":"https://www.forbes.com/sites/davidthier/2020/07/12/how-to-get-your-free-copy-of-watch-dogs-2-by-watching-ubisoft-forward-where-to-watch-and-what-time/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f0b02e2bba72f0007648f26%2F0x0.jpg","publishedAt":"2020-07-12T12:37:00Z","content":"Watch Dogs 2\r\nCredit: Ubisoft\r\nToday is Ubisofts big Ubisoft Forward event, replacing the standard E3 with previews of all of its upcoming big games: Assassins Creed Valhalla, Far Cry 6, Watch Dogs L… [+2033 chars]"},{"source":{"id":"fox-news","name":"Fox News"},"author":"Associated Press","title":"Pope Francis says he is 'deeply pained' over Turkey's decision on Hagia Sophia - Fox News","description":"Pope Francis said on Sunday that he is “deeply pained” over the decision by Turkey to change the status of Hagia Sophia — which was originally built in Istanbul as a Christian cathedral — from a museum to a mosque.","url":"https://www.foxnews.com/world/pope-francis-turkey-hagia-sofia","urlToImage":"https://static.foxnews.com/foxnews.com/content/uploads/2020/07/AP20193769946878.jpg","publishedAt":"2020-07-12T12:30:16Z","content":"Pope Francis said on Sunday that he is “deeply pained” over the decision by Turkey to change the status of Hagia Sophia — which was originally built in Istanbul as a Christian cathedral — from a muse… [+1758 chars]"},{"source":{"id":"cnn","name":"CNN"},"author":"Analysis By Maeve Reston, CNN","title":"Trump gives in to the mask but takes new risks with schools - CNN","description":"President Donald Trump finally wore a mask in public during a visit to wounded service members at Walter Reed. But he continues to sow confusion by minimizing the impact of the coronavirus and pushing for the reopening of schools.","url":"https://www.cnn.com/2020/07/12/politics/trump-mask-coronavirus-schools-reopening/index.html","urlToImage":"https://cdn.cnn.com/cnnnext/dam/assets/200711185808-03-trump-walter-reed-0711-super-tease.jpg","publishedAt":"2020-07-12T12:17:00Z","content":null},{"source":{"id":null,"name":"Motley Fool"},"author":"David Jagielski","title":"3 Top Growth Stocks to Buy Right Now - Motley Fool","description":"These stocks all grew by more than 40% in their most recent quarters.","url":"https://www.fool.com/investing/2020/07/12/3-top-growth-stocks-to-buy-right-now.aspx","urlToImage":"https://g.foolcdn.com/editorial/images/581855/bar-chart-showing-numbers-getting-higher.jpg","publishedAt":"2020-07-12T12:06:00Z","content":"Investing in growth stocks can enhance your portfolio. These stocks tend to be more popular than plain old dividend stocks because growing businesses also tend to rise in value. Plus, the capital app… [+4901 chars]"},{"source":{"id":"engadget","name":"Engadget"},"author":"","title":"'Fall Guys' brings mini-game battle royale to PS4 and Steam on August 4th - Engadget","description":"'Fall Guys' is coming to PS4 and Steam on August 4th, bringing the battle royale concept to kid-friendly mini-games.","url":"https://www.engadget.com/fall-guys-arrives-august-4th-104310324.html","urlToImage":"https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-07%2Fd1eb9450-c3b7-11ea-93bd-eef3750e2db6&client=amp-blogside-v2&signature=5a4c6228e8265fea00e100d047eddea083410c13","publishedAt":"2020-07-12T11:06:21Z","content":"If you want a battle royale-like experience but want something more family-friendly than Call of Duty or Fortnite, you won’t have to wait much longer. Mediatonic and Devolver have announced that Fall… [+680 chars]"},{"source":{"id":"wired","name":"Wired"},"author":"David Nield","title":"How Two-Factor Authentication Keeps Your Accounts Safe - WIRED","description":"Here are some of the best authenticator apps and options. It may take a moment to set up, but once you have 2FA enabled where it counts, you can rest easier.","url":"https://www.wired.com/story/protect-accounts-two-factor-authentication/","urlToImage":"https://media.wired.com/photos/5f08dfa483bb093ee176f181/191:100/w_1280,c_limit/Security-2factor-numbers-1131590675.jpg","publishedAt":"2020-07-12T11:00:00Z","content":"If you want to keep your online accounts safe, adding two-factor authentication (2FA) is the single most important step you can take. While no security measure is 100 percent hackproof, 2FA is going … [+2346 chars]"},{"source":{"id":"politico","name":"Politico"},"author":null,"title":"Tammy Duckworth bursts into VP contention - POLITICO","description":"The Purple Heart recipient has captured the imagination of donors and the Biden team.","url":"https://www.politico.com/news/2020/07/12/tammy-duckworth-vp-contention-357234","urlToImage":"https://static.politico.com/5d/e1/365ea4ca419b86f65eb42b8e216d/200425-duckworth-gty-773.jpg","publishedAt":"2020-07-12T10:55:00Z","content":"A contingent of Duckworth-for-VP backers, including high-dollar donors and a politically active veterans group, has intensified efforts on her behalf in the past two weeks, pushing her as the best ch… [+2905 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Ledyard King, Michael Collins","title":"Polls show Trump is losing to Joe Biden. They said the same thing 4 years ago against Hillary Clinton - USA TODAY","description":"Polls got it wrong when they showed Hillary Clinton defeating Trump in 2016. But pollsters say surveys showing Biden over Trump are  more trustworthy.","url":"https://www.usatoday.com/story/news/politics/elections/2020/07/12/election-2020-trump-trails-biden-polling-he-trailed-clinton-too/5398025002/","urlToImage":"https://www.gannett-cdn.com/presto/2020/07/11/USAT/07a3bb82-5de3-4337-b3c2-d4d01bec5abf-split.jpg?crop=799,449,x0,y0&width=1600&height=800&fit=bounds","publishedAt":"2020-07-12T10:00:54Z","content":"President Donald Trump is criticizing former President Barack Obama's efforts to lift some sanctions against Cuba and warns that the presumptive Democratic nominee, Joe Biden, would even embrace soci… [+13245 chars]"},{"source":{"id":null,"name":"Express"},"author":"Chanel Georgina","title":"Type 2 diabetes: The 50p vegetable proven to reduce blood sugar and prevent complications - Express","description":"TYPE 2 DIABETES is akin to walking a tightrope - one misstep and your blood sugar is out of balance. Which 50p vegetable has been proven to reduce blood sugar and prevent complications?","url":"https://www.express.co.uk/life-style/health/1308411/type-2-diabetes-diet-cucumber-lower-blood-sugar","urlToImage":"https://cdn.images.express.co.uk/img/dynamic/11/750x445/1308411.jpg","publishedAt":"2020-07-12T09:42:50Z","content":null},{"source":{"id":"the-wall-street-journal","name":"The Wall Street Journal"},"author":"Annie Gasparro and Jaewon Kang","title":"From Flour to Canned Soup, Coronavirus Surge Pressures Food Supplies - The Wall Street Journal","description":"Food makers work to meet rising demand after initial lockdowns ate through inventories","url":"https://www.wsj.com/articles/coronavirus-surge-challenges-struggling-food-supply-chains-11594546200","urlToImage":"https://images.wsj.net/im-208182/social","publishedAt":"2020-07-12T09:30:00Z","content":"Grocers are having trouble staying stocked with goods from flour to soups as climbing coronavirus case numbers and continued lockdowns pressure production and bolster customer demand.\r\nManufacturers … [+239 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"The Associated Press","title":"Dengue prevention efforts stifled by coronavirus pandemic, doctors warn - NBC News","description":"Coronavirus restrictions to tackle the spread of COVID-19 are hampering efforts to prevent the spread of Dengue, doctors have warned.","url":"https://www.nbcnews.com/news/world/dengue-prevention-efforts-stifled-coronavirus-pandemic-doctors-warn-n1233597","urlToImage":"https://media1.s-nbcnews.com/j/newscms/2020_28/3396373/afp_1tb1ph_5578b5d8497e3911917511bf0770b6fc.nbcnews-fp-1200-630.jpg","publishedAt":"2020-07-12T09:20:00Z","content":"Restrictions put in place to slow the spread of the coronavirus, are hampering efforts to cope with seasonal outbreaks of dengue, an incurable, mosquito-borne disease, doctors have warned.\r\nAlso know… [+3307 chars]"},{"source":{"id":null,"name":"Daily Mail"},"author":"By Glenn Garner For Dailymail.com","title":"Darius Rucker splits from wife Beth Leonard: 'We have so much love in our hearts for each other' - Daily Mail","description":"The 54-year-old took a page from Gwyneth Paltrow's book, writing: 'Beth and I would like to share that after much reflection we have made the decision to consciously uncouple.'","url":"https://www.dailymail.co.uk/tvshowbiz/article-8514045/Darius-Rucker-splits-wife-Beth-Leonard-love-hearts-other.html","urlToImage":"https://i.dailymail.co.uk/1s/2020/07/12/01/30660284-0-image-a-69_1594512527584.jpg","publishedAt":"2020-07-12T07:12:27Z","content":"Darius Rucker's marriage is the latest celebrity relationship casualty of the global COVID-19 pandemic. \r\nThe three-time Grammy winner is separating from wife Beth Leonard after 20 years of marriage.… [+2541 chars]"},{"source":{"id":null,"name":"BBC News"},"author":"https://www.facebook.com/bbcnews","title":"Coronavirus: Donald Trump finally wears mask in public - BBC News","description":"The US president previously said he could not see himself wearing a mask in public.","url":"https://www.bbc.com/news/world-us-canada-53378439","urlToImage":"https://ichef.bbci.co.uk/images/ic/1024x576/p08kjv5c.jpg","publishedAt":"2020-07-12T06:05:14Z","content":"Media playback is unsupported on your device\r\nMedia captionPresident Trump: \"I've never been against masks but I do believe they have a time and a place\"\r\nUS President Donald Trump has worn a mask in… [+3446 chars]"},{"source":{"id":null,"name":"HYPEBEAST"},"author":"Jeff Yeung","title":"Ubisoft's Chief Creative Officer Serge Hascoët Resigns Following Sexual Misconduct Allegations - HYPEBEAST","description":"Along with more executives.","url":"https://hypebeast.com/2020/7/ubisoft-executives-serge-hascoet-resignation-sexual-misconduct","urlToImage":"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F07%2Fubisoft-executives-serge-hascoet-resignation-sexual-misconduct-tw.jpg?w=960&cbr=1&q=90&fit=max","publishedAt":"2020-07-12T04:32:00Z","content":"Earlier this month, amid various sexual abuse and misconduct allegations, Ubisoft’s CEO Yves Guillemot issued a written statement announcing that change will be coming to the video game developer and… [+2556 chars]"},{"source":{"id":null,"name":"Deadline"},"author":"Brandon Choe","title":"Disney World Reopening Gets Mixed First Reactions As Fans Give Park’s Welcome Back Videos Horror Treatment - Deadline","description":"As Disney reopened their premier theme park, Walt Disney World, today in Florida amid exploding coronavirus numbers, social media immediately took the entertainment conglomerate to task by criticizing the decision to resume theme parks operations, calling pre…","url":"https://deadline.com/2020/07/disney-world-reopening-mixed-reactions-welcome-videos-the-shining-the-shining-1202983541/","urlToImage":"https://pmcdeadline2.files.wordpress.com/2020/07/shutterstock_editorial_10708731f.jpg?w=1024","publishedAt":"2020-07-12T03:23:00Z","content":"As Disney reopened their premier theme park, Walt Disney World, today in Florida amid exploding coronavirus numbers, social media immediately took the entertainment conglomerate to task by criticizin… [+1386 chars]"},{"source":{"id":null,"name":"SpaceNews"},"author":"Jeff Foust","title":"NASA implements changes to planetary protection policies for moon and Mars missions - SpaceNews","description":"NASA announced July 9 two new directives regarding planetary protection for missions to the moon and Mars based on an independent review board last year.","url":"https://spacenews.com/nasa-implements-changes-to-planetary-protection-policies-for-moon-and-mars-missions/","urlToImage":"https://spacenews.com/wp-content/uploads/2019/10/artemis-astros.jpg","publishedAt":"2020-07-11T23:40:24Z","content":"WASHINGTON NASA announced July 9 two new directives regarding planetary protection for missions to the moon and Mars that implement recommendations of an independent review board last year.\r\nThe two … [+5111 chars]"},{"source":{"id":null,"name":"pgatour.com"},"author":"Staff, PGATOUR.COM","title":"Workday Charity Open, Round 4: Leaderboard, tee times, TV times - pgatour.com","description":"The PGA TOUR continues Sunday in Round 4 of the Workday Charity Open at Muirfield Village. Due to the threat of inclement weather, tee times were moved up to 7 a.m. - 9 a.m. in threesomes off split tees. Here's everything you need to know to follow the action.","url":"https://www.pgatour.com/news/2020/07/12/how-to-watch-workday-charity-open-round-4-live-scores-tee-times-tv-times-muirfield-village.html","urlToImage":"https://pga-tour-res.cloudinary.com/image/upload/c_fill,f_auto,h_538,q_auto,w_960/v1/pgatour/editorial/2020/07/11/htw-rd4-847-stanbadz.jpg","publishedAt":"2020-07-11T23:27:44Z","content":"The PGA TOUR continues Sunday in Round 4 of the Workday Charity Open at Muirfield Village. Due to the threat of inclement weather, tee times were moved up to 7 a.m. - 9 a.m. in threesomes off split t… [+927 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Kelly Tyko","title":"7-Eleven's Free Slurpee Day was canceled and there are fewer food deals, Tax Day freebies due to COVID-19 - MSN Money","description":"7-Eleven's annual Free Slurpee Day has been canceled, Chick-fil-A Cow Appreciation Day postponed and the July Tax Day isn't a day of free food.","url":"https://www.usatoday.com/story/money/food/2020/07/11/7-eleven-free-slurpee-day-tax-day-freebies-covid-19/5419934002/","urlToImage":"https://www.gannett-cdn.com/presto/2019/07/09/USAT/e498b462-3504-40fe-8580-b66100531e76-slurpeesmaller.jpg?crop=5472,3078,x0,y1076&width=3200&height=1680&fit=bounds","publishedAt":"2020-07-11T22:49:00Z","content":"Tax Day is NOT April 15 this year. The federal filing deadline was pushed to July 15, but may differ based on the state your taxes are filed in.\r\nUSA TODAY\r\nThe coronavirus, which causes the disease … [+6642 chars]"},{"source":{"id":null,"name":"Tdalabamamag.com"},"author":"Stephen M. Smith","title":"SEC-only schedule or TCU: What will Alabama do for 2020 season? - Touchdown Alabama Magazine","description":"Because of the global Coronavirus pandemic, three conferences in the power five of college football have transitioned to having conference-only schedules in the fall.  With the ACC, Big 12 and Pac-12 going this route, the Southeastern Conference and Big 12 co…","url":"https://tdalabamamag.com/2020/07/11/watch-sec-only-schedule-or-tcu-where-does-alabama-football-go-from-here/","urlToImage":"https://i0.wp.com/tdalabamamag.com/wp-content/uploads/2017/03/Nick-Saban-1.jpg?resize=1000%2C600&ssl=1","publishedAt":"2020-07-11T22:41:39Z","content":"Because of the global Coronavirus pandemic, three conferences in the power five of college football have transitioned to having conference-only schedules in the fall. \r\nWith the ACC, Big 12 and Pac-1… [+1409 chars]"},{"source":{"id":"nbc-news","name":"NBC News"},"author":"Lauren Egan","title":"Trump on commuting Roger Stone's sentence: 'Very happy with what I did' - NBC News","description":"President Donald Trump said that Roger Stone was entangled in \"an illegal Witch Hunt,” in his first comment since commuting his prison sentence.","url":"https://www.nbcnews.com/politics/donald-trump/trump-roger-stone-was-targeted-illegal-witch-hunt-n1233575","urlToImage":"https://media1.s-nbcnews.com/j/newscms/2019_04/2729106/190125-roger-stone-donald-trump-al-0733_7499e022c0866e23ebeae9f9ba5abe04.nbcnews-fp-1200-630.jpg","publishedAt":"2020-07-11T22:30:00Z","content":"WASHINGTON President Donald Trump said Saturday that he was \"happy\" with his decision to commute Roger Stone's prison sentence and said that his former aide was entangled in \"an illegal Witch Hunt,\" … [+2820 chars]"},{"source":{"id":null,"name":"Spaceflight Now"},"author":null,"title":"SpaceX test-fires Falcon 9 rocket launch next week with Korean military satellite - Spaceflight Now","description":null,"url":"https://spaceflightnow.com/2020/07/11/spacex-test-fires-falcon-9-rocket-launch-next-week-with-south-korean-military-satellite/","urlToImage":null,"publishedAt":"2020-07-11T22:07:37Z","content":"A Falcon 9 rocket — without its payload fairing — fired up on Cape Canaveral’s Complex 40 launch Saturday for a pre-flight test-firing. Credit: William Harwood/CBS News\r\nHours after calling off a lau… [+3954 chars]"},{"source":{"id":"the-washington-post","name":"The Washington Post"},"author":"Yasmeen Abutaleb, Josh Dawsey, Laurie McGinley","title":"Fauci is sidelined by the White House as he steps up blunt talk on pandemic - The Washington Post","description":"Trump hasn’t talked to the scientist since early June, saying ‘he’s made a lot of mistakes.'","url":"https://www.washingtonpost.com/politics/2020/07/11/fauci-trump-coronavirus/","urlToImage":"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7LEJQ7UE74I6VANDS2IMTCARCE.jpg&w=1440","publishedAt":"2020-07-11T21:43:00Z","content":"In recent days, the 79-year-old scientist and director of the National Institute of Allergy and Infectious Diseases has found himself directly in the presidents crosshairs. During a Fox News intervie… [+14147 chars]"},{"source":{"id":null,"name":"Forbes"},"author":"Carlie Porterfield","title":"Leaving Airplane Middle Seats Empty Could Cut Coronavirus Risk Almost In Half, A Study Says - Forbes","description":"According to the study, blocking middle seats could make flying in the pandemic significantly safer.","url":"https://www.forbes.com/sites/carlieporterfield/2020/07/11/leaving-airplane-middle-seats-empty-could-cut-coronavirus-risk-almost-in-half-a-study-says/","urlToImage":"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1220346180%2F0x0.jpg","publishedAt":"2020-07-11T21:39:00Z","content":"A new research paper from the Massachusetts Institute of Technology estimates that blocking out the middle seat on airplanes could cause the likelihood of passengers being infected with coronavirus t… [+2940 chars]"},{"source":{"id":null,"name":"Variety"},"author":"Marc Malkin","title":"‘The Old Guard’ Director Gina Prince-Bythewood on Casting KiKi Layne - Variety","description":"Gina Prince-Bythewood has always wanted to direct an action movie. Her dream was finally realized with “The Old Guard,” an adaptation of the graphic novel of the same name about a group of immortal mercenaries (Charlize Theron, KiKi Layne, Matthew Schoenaerts…","url":"https://variety.com/2020/film/news/the-old-guard-director-gina-prince-bythewood-on-casting-kiki-layne-1234703876/","urlToImage":"https://pmcvariety.files.wordpress.com/2020/07/gina-prince-bythewood.jpg?w=1000","publishedAt":"2020-07-11T21:29:00Z","content":"Gina Prince-Bythewood has always wanted to direct an action movie.\r\nHer dream was finally realized with “The Old Guard,” an adaptation of the graphic novel of the same name about a group of immortal … [+4240 chars]"},{"source":{"id":"the-times-of-india","name":"The Times of India"},"author":"TNN","title":"Amitabh Bachchan, son Abhishek in hospital with coronavirus - Times of India","description":"MUMBAI: India’s leading actor Amitabh Bachchan used the social media late on Saturday to announce he is Covid-19 po","url":"https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/amitabh-bachchan-son-abhishek-in-hospital-with-coronavirus/articleshow/76916466.cms","urlToImage":"https://static.toiimg.com/thumb/msid-76917390,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-53255/76917390.jpg","publishedAt":"2020-07-11T20:47:00Z","content":"MUMBAI: Indias leading actor Amitabh Bachchan used the social media late on Saturday to announce he is Covid-19 positive. His actor-son Abhishek tweeted he too had tested positive. Rumours began arou… [+2063 chars]"},{"source":{"id":null,"name":"New York Times"},"author":"Pam Belluck, Apoorva Mandavilli, Benedict Carey","title":"How to Reopen Schools: What Science and Other Countries Teach Us - The New York Times","description":"The pressure to bring American students back to classrooms is intense, but the calculus is tricky with infections still out of control in many communities.","url":"https://www.nytimes.com/2020/07/11/health/coronavirus-schools-reopen.html","urlToImage":"https://static01.nyt.com/images/2020/07/12/science/00virus-schools-reopen01/00virus-schools-reopen01-facebookJumbo.jpg","publishedAt":"2020-07-11T20:07:00Z","content":"In one community in northern France, Crépy-en-Valois, two high school teachers became ill with Covid-19 in early February, before schools closed. Scientists from the Institut Pasteur later tested the… [+2495 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":"Reuters Editorial","title":"Wife of Brazil's Bolsonaro, and her two daughters, test negative for coronavirus - Reuters","description":"Michelle Bolsonaro, the wife of Brazilian President Jair Bolsonaro who is sick with the new coronavirus, said on Saturday that she and her two daughters had tested negative for the virus.","url":"https://www.reuters.com/article/us-health-coronavirus-bolsonaro-idUSKCN24C0OQ","urlToImage":"https://s4.reutersmedia.net/resources/r/?m=02&d=20200711&t=2&i=1525396193&w=1200&r=LYNXNPEG6A0DV","publishedAt":"2020-07-11T17:19:00Z","content":"RIO DE JANEIRO (Reuters) - Michelle Bolsonaro, the wife of Brazilian President Jair Bolsonaro who is sick with the new coronavirus, said on Saturday that she and her two daughters had tested negative… [+563 chars]"},{"source":{"id":null,"name":"BloombergQuint"},"author":"Rachel Adams-Heard","title":"Heat Wave Drives People Inside in Covid’s Hottest Hot Spots - BloombergQuint","description":"Heat Wave Drives People Inside in Covid’s Hottest Hot Spots","url":"https://www.bloombergquint.com/onweb/heat-wave-drives-people-inside-in-covid-s-hottest-hot-spots","urlToImage":"https://gumlet.assettype.com/bloombergquint%2F2018-08%2F3a8e2237-2edb-4494-bcf2-231993fb6108%2FBLOOMBERG_LOGO.png?rect=0%2C56%2C1920%2C1008&w=1200&auto=format%2Ccompress&ogImage=true","publishedAt":"2020-07-11T14:13:43Z","content":""},{"source":{"id":null,"name":"Global News"},"author":"Meghan Collie and lannehensley","title":"Coronavirus can be airborne, but that's not how it typically spreads: experts - MSN Canada","description":"Experts say doctors have always known that airborne transmission plays a role in the spread of the novel coronavirus.","url":"http://globalnews.ca/news/7157111/coronavirus-airborne-spread/","urlToImage":"https://shawglobalnews.files.wordpress.com/2020/05/gettyimages-1222778332.jpg?quality=85&strip=all&w=720&h=379&crop=1","publishedAt":"2020-07-11T10:00:00Z","content":"The World Health Organization (WHO) acknowledged emerging evidence of the airborne spread of the novel coronavirus on Tuesday after a group of scientists urged the organization to update its guidance… [+9484 chars]"},{"source":{"id":null,"name":"BGR"},"author":"Mike Wehner","title":"NASA’s Curiosity rover is on a road trip - BGR","description":"NASA is sending its Curiosity rover on a journey to a new area of Mount Sharp, the massive peak that sits in the center of the Gale Crater. The journey is short by Earth standards at just over a mile, but it’ll be a big accomplishment for the aging robot. Whe…","url":"https://bgr.com/2020/07/10/mars-curiosity-rover-nasa-road-trip/","urlToImage":"https://boygeniusreport.files.wordpress.com/2019/05/capture-26.jpg?quality=70&strip=all","publishedAt":"2020-07-11T00:30:00Z","content":"<ul><li>NASA is sending its Curiosity rover on a journey to a new area of Mount Sharp, the massive peak that sits in the center of the Gale Crater. </li><li>The journey is short by Earth standards at… [+2509 chars]"},{"source":{"id":"google-news","name":"Google News"},"author":null,"title":"Goya Foods boycott takes off after its CEO praises Trump - CNN","description":null,"url":"https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NWsza1BUWTRsZGPSAQA?oc=5","urlToImage":null,"publishedAt":"2020-07-10T21:37:14Z","content":null}]}

    const [news, setNews] = useState([])

    const fetchNews = async () => {
        const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=73a7fb6e64dc4d4d8417e0b152f75606' + 
        'pageSize=100'
        let req = new Request(url)
        try {
            const newNews = await fetch(req)
            if (!newNews.status === 200) {
                return null
            } else {
                setNews(await newNews.json())
                localStorage.setItem('theNews', JSON.stringify(newNews))
            }
        }
        catch(err) {
            console.log(err)
        }
    }

    const checkLastFetchTime = () => {
        const IN_SIX_HOURS = 0.25;
        const lastNewsUpdate = Cookies.get('last_fetched_time');
        if(!lastNewsUpdate) {
            fetchNews();
            Cookies.set('last_fetched_time', Date.now(), {
                expires: IN_SIX_HOURS
            });
        } else {
            if(localStorage.getItem('theNews')){
            const oldNews = JSON.parse(localStorage.getItem('theNews'))
            setNews(oldNews)
            }
        }
    }

    useEffect(() => {
        checkLastFetchTime()
      const interval = setInterval(() => {
        checkLastFetchTime()
      }, 900000);
      return () => clearInterval(interval);
    }, [])
          
    const handleViewNews = url => {
        window.open(url, "test", params);
      };
    const params = `location=yes,height=720px,width=1152px,top=960,left=480,scrollbars=yes,status=yes`;

    return (
        <div>
            {FakeNews?.articles?.slice(0, 6).map((N,i) => {
                return(
                    <div className='news-container' 
                         key={i} >
                          
                                <Image 
                                    className='news-img' 
                                    src={N.urlToImage} 
                                    size='small' 
                                    onClick={() => handleViewNews(N.url)}
                                />
                            <h5 className='news-text'>{N.title}</h5>
                    </div>
                )
            })}
        </div>
    );
};

export default News;