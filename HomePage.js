import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Article from './Pictures/Article.png';
import Article_2 from './Pictures/Article_2.png';
import Article_3 from './Pictures/Article_3.png';
import Article_4 from './Pictures/Article_4.png';
import Article_5 from './Pictures/Article_5.png';

const HomePage = () => {

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return 'Good Morning';
        if (hour < 18) return 'Good Afternoon';
        return 'Good Evening';
    };
    const [quote, setQuote] = useState('');

    const quotes = [
        { author: "Mark Twain", text: "The secret of getting ahead is getting started." },
        { author: "Oscar Wilde", text: "Be yourself; everyone else is already taken." },
        { author: "Bob Ross", text: "We don't make mistakes, just happy little accidents." },
        { author: "Helen Keller", text: "Although the world is full of suffering, it is also full of the overcoming of it." },
        { author: "Martin Luther King Jr.", text: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy." },
        { author: "Harriet Beecher Stowe", text: "When you get into a tight place and everything goes against you, till it seems as though you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn." },
        { author: "Albert Einstein", text: "In the middle of difficulty lies opportunity." },
        { author: "Maya Angelou", text: "You will face many defeats in life, but never let yourself be defeated." },
        { author: "Confucius", text: "It does not matter how slowly you go as long as you do not stop." },
        { author: "Anne Frank", text: "How wonderful it is that nobody need wait a single moment before starting to improve the world." },
        { author: "Ralph Waldo Emerson", text: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
        { author: "J.K. Rowling", text: "Rock bottom became the solid foundation on which I rebuilt my life." },
        { author: "Viktor Frankl", text: "When we are no longer able to change a situation, we are challenged to change ourselves." },
        { author: "Franklin D. Roosevelt", text: "When you come to the end of your rope, tie a knot and hang on." },
        { author: "Oprah Winfrey", text: "Turn your wounds into wisdom." },
        { author: "Albert Einstein", text: "In the middle of difficulty lies opportunity." },
        { author: "Yogi Berra", text: "When you come to a fork in the road, take it." },
        { author: "Winston Churchil", text: "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals." },
        { author: "Albert Einstein", text: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
        { author: "Ellen DeGeneres", text: "Follow your passion. Stay true to yourself. Never follow someone else’s path unless you’re in the woods and you’re lost and you see a path. By all means, you should follow that." },
        { author: "Tina Fey", text: "Say yes and you'll figure it out afterwards." },
        { author: "Will Rogers", text: "Even if you are on the right track, you will get run over if you just sit there." },
        { author: "Lucille Ball", text: "The more things you do, the more you can do." },
        { author: "Steve Martin", text: "A day without sunshine is like, you know, night." },
        { author: "Mitch Hedberg", text: "I used to play sports. Then I realized you can buy trophies. Now I’m good at everything." }
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    }, []);

    return (
        <div className="container">
            <div className="welcome-container">
                <div className="hero-section">
                    <h2>{getGreeting()}, Welcome to Angelus!</h2>
                    <div className="quote-container">
                        <p>"{quote.text}" - <i>{quote.author}</i></p>
                    </div>
                </div>
            </div>

            {/* Adding News Articles */}

            <div className="Heading">
                <h2>News </h2>
            </div>
            <div className="articles">
                <div className="article-container">
                    <h3>Flaxseed Benefits Gut Microbiome, Reduce Breast Cancer Risk</h3>
                    <div className="content-container">
                        <img src={Article} alt="Article 1" />
                        <div className="text-container">
                            <p> A recent study highlighted the intriguing connection between the gut microbiome and breast cancer risk, focusing particularly on the role of flaxseed consumption. Researchers discovered that certain gut bacteria influence microRNA expression in the mammary gland, which plays a key role in breast cancer development. Intriguingly, flaxseed intake appears to modify this gut microbiome-mammary gland relationship, suggesting potential benefits in breast cancer prevention. This finding opens up new avenues for dietary intervention in cancer risk management, underscoring the complex interplay between diet, gut health, and disease prevention. Further research is needed to confirm these findings in humans.</p>
                            <a href="https://www.medicalnewstoday.com/articles/flaxseed-benefits-gut-microbiome-reduce-breast-cancer-risk"
                                className="read-more-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="article-container">
                    <h3>New Breast Cancer Treatment Approved for NHS Use Brings Life-changing Hope for Scottish Patients</h3>
                    <div className="content-container">
                        <img src={Article_2} alt="Article 2" />
                        <div className="text-container">
                            <p>The Scottish Medicines Consortium has approved a new breast cancer treatment, trastuzumab deruxtecan (Enhertu), for NHS use in Scotland. This medication targets HER2-low breast cancer, marking a first in treatment options for this cancer type. Patricia Snow, diagnosed with this cancer, expresses her hope that the treatment will allow her more time with her family. Baroness Delyth Morgan of Breast Cancer Now emphasizes the significant impact of this drug, offering life-extending benefits compared to chemotherapy. The urgency for its availability across the UK is highlighted, as it promises to transform the management of incurable secondary breast cancer in Scotland.</p>
                            <a href="https://news.stv.tv/scotland/new-breast-cancer-treatment-approved-for-nhs-use-brings-life-changing-hope-for-scottish-patients"
                                className="read-more-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="article-container">
                    <h3>What Not to Say to Someone with Breast Cancer</h3>
                    <div className="content-container">
                        <img src={Article_3} alt="Article 3" />
                        <div className="text-container">
                            <p>Being a breast cancer survivor has highlighted the impact of language on support and mental health. The American Cancer Society defines a survivor as anyone diagnosed with cancer. A common sentiment among survivors is the dislike of "battle" language, which implies control over the disease and diminishes the experiences of those who don't survive. Additionally, phrases that minimize the severity of cancer or place survivors on a pedestal are often unhelpful. Instead, person-first language, specific offers of help, and sensitivity to individual beliefs are recommended. Michele Pilon, a Mental Health First Aid National Trainer and breast cancer survivor, emphasizes the importance of thoughtful communication and support tailored to the survivor's needs and preferences.</p>
                            <a href="https://www.mentalhealthfirstaid.org/2023/10/what-not-to-say-to-someone-with-breast-cancer/"
                                className="read-more-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="article-container">
                    <h3>10 Thoughtful Gifts for Cancer Patients</h3>
                    <div className="content-container">
                        <img src={Article_4} alt="Article 4" />
                        <div className="text-container">
                            <p>Choosing the right gift for a cancer patient involves considering comfort and personal preference. Practical items like cozy clothes, stress-relieving aromatherapy products, and warm head coverings can offer physical comfort. For mental relaxation and entertainment, books, movies, or subscriptions to streaming services are thoughtful. Personal care items tailored to the side effects of cancer treatment are also beneficial. When selecting food-related gifts, consider any dietary changes due to treatment. Importantly, avoid assuming the patient's interest in cancer-related materials or imposing strong fragrances. The key is to provide support and comfort tailored to the individual's needs and preferences during their treatment journey.</p>
                            <a href="https://www.verywellhealth.com/gifts-for-a-cancer-patient-430521"
                                className="read-more-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="article-container">
                    <h3>How to look after yourself while caring for someone else</h3>
                    <div className="content-container">
                        <img src={Article_5} alt="Article 5" />
                        <div className="text-container">
                            <p>Caring for someone with cancer can be overwhelming, but self-care is crucial for both the caregiver and the patient. Effective self-care involves open communication with trusted individuals or support groups and realistic expectations about caregiving responsibilities. Staying organized, supporting the patient's independence, and maintaining a positive relationship are key. Regular breaks, physical health care, and finding personal relaxation methods are vital for caregivers' mental health. It's important to recognize one's limits and seek help when needed, ensuring that both the caregiver and the patient receive the support they require.</p>
                            <a href="https://practicebusiness.co.uk/how-to-look-after-yourself-while-caring-for-someone-else"
                                className="read-more-button"
                                target="_blank"
                                rel="noopener noreferrer">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


