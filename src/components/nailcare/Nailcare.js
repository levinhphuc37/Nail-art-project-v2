import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Nailcare.css';
const Nailcare = () => {
    return (
      <section>
            <Header />
        {/* history banner */}
        <div className="wrapper">
          <h1 style={{ color: '#911429' }}>Nail Caring tips</h1>
        </div>
        {/* history content */}
        <div className="blog-wrapper-one">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="blog-detail-section">
                  <h2 className="history-title">Nail caring tips</h2>
                  <div className="detail-img">
                    <img src="images/nail_art/Nail_care/blog3.jpg" alt="img" />
                  </div>
                  <div className="detail-content">
                    <span>28 May 2022, INTERESTING TO KNOW, MANICURE, STYLE, TRENDS</span>
                    <h3>Signs of Healthy Nails:</h3>
                    <div className="detail-pera">
                      <p> - Nail plates are a pinkish-white color</p>
                      <p className="pera-two"> - Cuticles are existent (so don't cut them!)</p>
                      <p> - Nails and white tips are even lengths</p>
                      <p> - Prominent half-moon shaped white section (called the lunula) at nail base</p>
                    </div>
                    <h3>Signs of Unhealthy Nails:</h3>
                    <div className="detail-pera">
                      <p> - Peeling or splitting nails could be dryness or the result of vitamin deficiency</p>
                      <p className="pera-two"> - Tiny white spots usually mean you're biting your nails or painting them too often</p>
                      <p> - Horizontal grooves could be from stress, high fevers, or jamming your finger</p>
                      <p> - Red, swollen skin around nails could be from removing or biting cuticles</p>
                      <p> - Spoon-shaped nails could be a sign of iron deficiency or anemia</p>
                    </div>
                    <div className="thought-wrapper">
                      <div className="thought-content">
                        <img src="images/quote-Icon.png" alt="img" />
                        <p>Great nails don't happen by chance. They happen by appointment.</p>
                        <span>- by John Doe</span>
                      </div>
                    </div>
                    {/* Additional content for the first section goes here */}
                  </div>
                </div>
  
                {/* Origin */}
                <div className="blog-detail-section">
                  <h2 className="history-title">How to get strong, healthy nails:</h2>
                  <div className="detail-img">
                    <img src="images/nail_art/Nail_care/blog1.jpg" alt="img" />
                  </div>
                  <div className="detail-content">
                    <span>28 May 2022, INTERESTING TO KNOW, MANICURE, STYLE, TRENDS</span>
                    <h3>1. Keep your hands very clean.</h3>
                    <div className="detail-pera">
                      <p>After you wash your hands, make sure nails are thoroughly grime-free by first removing all traces of polish with an acetone-free remover, which won't dry out nails</p>
                      <p className="pera-two">Apply soap to a clean toothbrush, then gently scrub nails and surrounding skin to remove dirt and exfoliate any dead skin without harsh, drying chemicals, advises Ava Shamban, M.D., a dermatologist in Los Angeles and author of Heal Your Skin.</p>
                    </div>
                    <h3>2. Be gentle on your nails.</h3>
                    <div className="detail-pera">
                      <p>Your nails are delicate, so treat them that way. Avoid using metal tools under nails, as too much digging can cause the nail plate to separate from the skin (a condition called onycholysis), common for people over 50, says Dr. Stern</p>
                      <p className="pera-two">Cleaning with chemicals and washing dishes by hand can also weaken nails. Guard them by wearing rubber, vinyl, nitrile or plastic gloves, says New York City dermatologist Janet Prystowsky, M.D., Ph.D.</p>
                    </div>
                    <h3>3. Clip your nails regularly.</h3>
                    <div className="detail-pera">
                      <p>Consistent trims are as important to your nails as they are to your hair, says Dr. Prystowsky, and make nails less prone to snags and breakage</p>
                      <p className="pera-two">So aim to clip them every two weeks, adjusting frequency as needed once you see how your nails respond.</p>
                    </div>
                    <h3>4. Prioritize nail health over length.</h3>
                    <div className="detail-pera">
                      <p>Long nails are elegant, but if you're someone who has struggled with hangnails or breakage, Dr. Shamban recommends that you keep your nails short — at least for a period of time as you allow them to grow stronger.</p>
                      <p className="pera-two">A shorter style with rounded edges looks neat and tends to be easier to manage, so you won't have to subject your nails to extra wear and tear. As long as each nail is uniform in shape and matches its nine neighbors, you won't miss the added length.</p>
                    </div>
                    <h3>5. Always keep a nail file on hand.</h3>
                    <div className="detail-pera">
                      <p>If your job or workout routine exposes your nails to potential damage, Dr. Prystowsky advises keeping a nail file handy for on-the-spot buffing of any rough edges.</p>
                      <p className="pera-two">Instead of an emory board, which can cause nails to peel and snag, try a glass (also called crystal) nail file. "A glass file will create an even edge to the nail and can be used on the weakest, brittle, and damaged nails," Dr. Stern says.</p>
                    </div>
                    <div className="thought-wrapper">
                      <div className="thought-content">
                        <img src="images/quote-Icon.png" alt="img" />
                        <p>"How to Take a Nail Selfie!” “Fruity Manicure Inspo!”</p>
                        <span>Kylie Jenner Slammed by Fans for Nearly Poking Out Stormi's Eyes With Ridiculous Claw Nails.</span>
                      </div>
                    </div>
                    <h3>6. Don't forget to take care of your nail tools, too.</h3>
                    <div className="detail-pera">
                      <p>Disinfecting your nail tools between uses is just as important as regularly cleaning your makeup brushes, and for the same reason — bacteria.</p>
                      <p className="pera-two">To keep your nails infection-free, Dr. Prystowsky advises washing metal tools with soap and water and then wiping down with rubbing alcohol. And don't forget to regularly replace disposable tools like emery boards. There's no reason to continue using a tattered tool when it's so easy to rotate in a new one for a few bucks.</p>
                    </div>
                    <h3>7. Leave your cuticles alone.</h3>
                    <div className="detail-pera">
                      <p>The cuticle has a very important purpose to serve: It seals the area at the base of the nail. So think twice about cutting or removing the cuticle, because it can break that seal of protection, leaving you vulnerable to bacteria and the possibility of infection (as well as painful and unsightly tears).</p>
                      <p className="pera-two">If you need to push back your cuticles, Debbie Palmer, D.O., the medical director of Dermatology Associates of New York in Harrison, NY, recommends doing so once per week after you shower (when skin is soft) using a wooden orange stick. Finish by massaging cuticles and nails with a cuticle oil or treatment. "Serum-like strengtheners are absorbed quickly and typically contain moisturizers to rehydrate dry, brittle nails," GH Beauty Lab chemist Danusia Wnek says.</p>
                    </div>
                    <h3>8. Protect your nails with a base coat.</h3>
                    <div className="detail-pera">
                      <p>When you're painting your nails at home, don't skip the base coat. Dr. Prystowsky points out that this step both shields the nails from being stained by polish and helps the color look more saturated and opaque with just one coat.</p>
                      <p className="pera-two">Even without color, "strengthening varnishes leave a shiny hard coating on nails; reinforce tips, making them appear thicker; and can protect against damage," says Wnek. And if you really want to take things to the next level, Dr. Shamban suggests adding a coat of clear gloss between each layer to add extra shine and protection.</p>
                    </div>
                    <h3>9. Read the labels on your polish.</h3>
                    <div className="detail-pera">
                      <p>Just as with makeup and skincare, not all nail polish brands are created equal, so make sure you're buying or using a good product.</p>
                      <p className="pera-two">Dr. Debbie Palmer urges you to steer clear of polishes containing toxic chemicals like dibutyl phthalate, formaldehyde, and toluene, as these toxins can contribute to brittleness, splitting, and cracking.</p>
                    </div>
                    <h3>10. Use a top coat to prevent nail chips.</h3>
                    <div className="detail-pera">
                      <p>Don't think you can skip a top coat, either. This step is just as important, as the top coat seals in the polish's color and adds a much-needed gloss finish to your digits.</p>
                      <p className="pera-two">Dr. Prystowsky recommends adding another top coat layer every three days to decrease chipping, so you'll get the most out of your manicure.</p>
                    </div>
                    <div className="bottom-pera">
                    <p>The ritual of having one’s nails painted by a professional was largely the preserve of the wealthy until the rise of the nail bar. Thea Green, the founder of Nails Inc, was instrumental in bringing nail bars to the UK. “My lightbulb moment came on a work trip to New York, where I noticed nail bars offering quick, cheap manicures for busy professionals. I was a 23-year-old fashion editor at Tatler at the time – but I knew there was a gap in the market here, so I went for it,” she told Management Today. She opened her first nail bar in 1999, quickly expanded across the country. More recently, she launched a “clean” nail polish range.</p>
                    <p className="pera-three">While Green was about taking the speedy nail bar to customers with a penchant for a classic manicure, the beauty entrepreneur Sharmadean Reid created a movement for a nail tribe looking for something more avant-garde. In 2009, she launched Wah Nails in Dalston, east London. This edgy manicure bar specialized in nail art – an antidote to the safe and well-mannered manicures that were all the rage, and a style that was steeped in black culture and Reid’s passion for hip-hop culture.</p>
                    <p>Nail art, of sorts, was popular in the 30s, when Joan Crawford wore the era’s popular crescent moon style, around the same time that Life magazine ran a piece on monogrammed nails. But it was black women who would be at the helm of nail art’s modern cultural resurgence. They gave it new life, from Donyale Luna, the first woman of color to appear on the cover of US Vogue, and the singer Glodean White, the wife of the late soul crooner Barry White, to exemplars in the 80s and 90s such as Coko from SWV and Janet Jackson in the futuristic Busta Rhymes video for What’s it Gonna Be?!, where she sported hoop-pierced acrylic nails.</p>
                    </div>

                    <div className="thought-wrapper">
                      <div className="thought-content">
                        <img src="images/quote-Icon.png" alt="img" />
                        <p>"How to Take a Nail Selfie!” “Fruity Manicure Inspo!”</p>
                        <span>Kylie Jenner Slammed by Fans for Nearly Poking Out Stormi's Eyes With Ridiculous Claw Nails.</span>
                      </div>
                </div>
                </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    );
  };

export default Nailcare;
