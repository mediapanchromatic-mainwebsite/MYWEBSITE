import Accordion from 'react-bootstrap/Accordion';
import styles from '../landingPage/landing.module.scss'
import Image from 'next/image';

function FlushExample() {
  return (
    <div className={`${styles.accordionContainer} clashDisplay `}>
      <div className={`${styles.clientHeader} d-flex justify-content-center`} style={{}}>
        <Image
            src="/assets/images/icons/pencile.png"
            height={24}
            width={30}
            className={`me-3 img-fluid ${styles.clientIcon}`}
            alt="..."
        />
        <div className={styles.accordionTitle}>
          Frequently asked <p className={styles.question}><div className={styles.questionAnim}>questions</div></p>
          <Image
            src="/assets/images/icons/magnifying_glass.png"
            height={83}
            width={85}
            className={`img-fluid ${styles.magnifyingGlass}`}
            alt="..."
          />
          <div className={styles.wave}>
            <Image
              src="/assets/images/icons/wave.png"
              height={24}
              width={330}
              className={``}
              alt="..."
          />

          </div>
        </div>
    </div>
      <div className='accordion-wrapper'>
        <Accordion defaultActiveKey="0" className='homepage'>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='homepage fw-bolder fs-1 py-2'><span className='pe-5'>1 .</span> What kind of clients do you work with?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              We work with a wide range of clients — from startups and creative entrepreneurs to large corporations and legacy brands. If you have a story to tell, we’re here to shape it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span className='pe-5'>2 .</span>Do you only create videos?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Not at all. While video is our forte, we also offer website development, social media strategy, podcast production, testimonials, and end-to-end branding content.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='pe-5'>3 .</span> How involved will I be in the creative process?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              As much as you’d like to be! We collaborate closely with our clients — from ideation to final delivery — ensuring your voice is part of every frame.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header><span className='pe-5'>4 .</span> How long does a project usually take?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Timelines vary depending on the scope. A basic brand film might take 2–3 weeks, while full campaigns or website launches can span 4–6 weeks. We’ll always outline clear timelines during pre-production.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header><span className='pe-5'>5 .</span> Do you handle scripting and concept development?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Yes! We love starting from scratch. We’ll work with you to develop original concepts, scripts, storyboards, and strategies — all tailored to your goals.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header><span className='pe-5'>6 .</span> What locations do you shoot in?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              We’re based in Saket, New Delhi, but we travel across India and even globally for the right project. Wherever your story is, we’re ready to film it.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header><span className='pe-5'>7 .</span> Can you help with social media content too?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Absolutely. We specialize in crafting content that’s platform-ready — from Instagram Reels and YouTube Shorts to full campaigns, complete with copy and content calendars.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header><span className='pe-5'>8 .</span> How do I get started?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Just drop us a message or email. We’ll schedule a discovery call, understand your needs, and take it from there — easy, collaborative, and exciting!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header><span className='pe-5'>9 .</span> What are your pricing packages like?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              We offer flexible pricing based on the project scope, timeline, and deliverables. After our initial discussion, we’ll share a tailored proposal to fit your needs and budget.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header><span className='pe-5'>10 .</span>Do you offer retainer or long-term engagement models?</Accordion.Header>
            <Accordion.Body className=' text-offWhite fs-4'>
              Yes — many of our clients work with us on a monthly or campaign basis. Whether it’s ongoing content or regular strategy sessions, we love growing with brands long-term
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    </div>
  );
}

export default FlushExample;