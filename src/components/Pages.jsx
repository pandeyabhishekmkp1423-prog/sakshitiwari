import { useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import About from './About';
import Expertise from './Expertise';
import Hero from './Hero';
import Repertoire from './Repertoire';
import { BotanicalSprig, ColorSwatches, SectionDivider, StarSparkle } from './Decorations';

const collaborationFormats = [
  {
    title: 'Brand campaigns',
    copy: 'On-camera storytelling for beauty, fashion, lifestyle, and culture-led brands.',
  },
  {
    title: 'Short-form video',
    copy: 'Expressive reels and creator content shaped around a clear visual idea.',
  },
  {
    title: 'Dance & movement',
    copy: 'Kathak, Abhinaya, choreography, and movement designed for stage or screen.',
  },
  {
    title: 'Screen projects',
    copy: 'Character-driven work for feature films, OTT series, and independent stories.',
  },
];

const visualStories = [
  { title: 'Character, in close-up', category: 'Screen acting', image: 'photo-1524504388940-b1c1722653e1', alt: 'Demo portrait placeholder for screen acting' },
  { title: 'A body in rhythm', category: 'Dance & movement', image: 'photo-1517841905240-472988babdf9', alt: 'Demo portrait placeholder for dance and movement' },
  { title: 'Made for the frame', category: 'Editorial & brand', image: 'photo-1534528741775-53994a69daeb', alt: 'Demo portrait placeholder for editorial and brand work' },
];

function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.append(descriptionTag);
    }
    descriptionTag.content = description;
  }, [title, description]);

  return null;
}

function StoryCard({ item }) {
  return (
    <Link to="/contact" className="work-tile">
      <span className="work-image">
        <img
          src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`}
          alt={item.alt}
          loading="lazy"
        />
      </span>
      <span className="work-caption">
        <strong>{item.title}</strong>
        <span>{item.category}</span>
      </span>
    </Link>
  );
}

function CollaborationSection() {
  return (
    <section className="collaboration-section relative overflow-hidden">
      <div className="content-width py-20 md:py-24 relative z-10">
        <div className="collaboration-heading">
          <div><p className="eyebrow">CREATOR PARTNERSHIPS</p><h2>Good stories make<br /><em>good collaborations.</em></h2></div>
          <p>Bring a clear point of view to your next campaign with an actor, dancer, and digital creator. From the first brief to the final frame, every project starts with a strong story.</p>
        </div>
        <div className="collaboration-grid">
          {collaborationFormats.map((item, index) => (
            <article className="collaboration-card" key={item.title}>
              <span className="collaboration-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <Link to="/contact" aria-label={`Ask about ${item.title}`}><ArrowRight /></Link>
            </article>
          ))}
        </div>
      </div>
      <SectionDivider fill="#FFFFFF" />
    </section>
  );
}

function StorySection() {
  return (
    <section className="story-section relative overflow-hidden bg-white">
      <div className="content-width story-layout">
        <div className="story-feature-image">
          <img src="/Blush-Toned%20Editorial%20Portrait%20Collage.png" alt="Blush-toned editorial portrait collage featuring Sakshi Tiwari" loading="lazy" />
        </div>
        <div className="story-feature-copy">
          <StarSparkle className="w-5 h-5 text-[#D97373] mb-4" />
          <p className="eyebrow">A CREATOR WITH A POINT OF VIEW</p>
          <h2>Rooted in tradition.<br /><em>Ready for the frame.</em></h2>
          <p>Classical Kathak and expressive Abhinaya meet contemporary performance in Sakshi's work. The result is a versatile creative practice for film, digital campaigns, fashion editorials, and movement-led storytelling.</p>
          <Link to="/about" className="text-link">More about Sakshi <ArrowUpRight /></Link>
        </div>
      </div>
      <SectionDivider fill="#FFF5EC" />
    </section>
  );
}

function AvailabilityFaq() {
  return (
    <section className="faq-section section-pad">
      <div className="content-width faq-layout">
        <div><p className="eyebrow">A FEW DETAILS</p><h2>Before we<br /><em>get started.</em></h2></div>
        <div className="faq-list">
          <details><summary>What kinds of projects is Sakshi available for?</summary><p>Feature films, Hindi cinema, OTT and web series, commercial campaigns, fashion editorials, dance videos, and choreography-led projects.</p></details>
          <details><summary>Where is Sakshi based?</summary><p>Sakshi is based in India and can travel for selected productions and brand collaborations.</p></details>
          <details><summary>How can I request rates or audience insights?</summary><p>Send a project brief through the contact page. Current audience insights, deliverables, and rates can be shared for the specific campaign.</p></details>
        </div>
      </div>
      <SectionDivider fill="#FBE8E5" />
    </section>
  );
}

function HomeContact() {
  return (
    <section id="contact" className="home-contact relative overflow-hidden">
      <BotanicalSprig className="home-contact-sprig" />
      <div className="content-width home-contact-content">
        <p className="eyebrow">CASTING / BRAND PARTNERSHIPS / EDITORIAL</p>
        <h2>Let's make something<br /><em>people remember.</em></h2>
        <p>Share a little about the role, campaign, or creative idea. Sakshi is based in India and available to travel for select projects.</p>
        <Link to="/contact" className="button button-dark">Start an inquiry <ArrowUpRight /></Link>
        <a href="https://www.instagram.com/sakshieeyyy.xo/" target="_blank" rel="noreferrer" className="home-contact-instagram"><Instagram /> @sakshieeyyy.xo</a>
      </div>
      <SectionDivider fill="#FFFFFF" />
    </section>
  );
}

export function HomePage() {
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <PageMeta title="Sakshi Tiwari | Indian Actress, Kathak Dancer & Creator" description="Meet Sakshi Tiwari, an Indian actress, Kathak dancer, and movement artist available for screen acting, OTT projects, dance, editorials, and brand collaborations." />
      <Hero />
      <About />
      <Repertoire onSelectCard={scrollToContact} />
      <Expertise />
      <section className="featured-stories section-pad">
        <div className="content-width">
          <div className="section-heading">
            <div><p className="eyebrow">ON CAMERA & IN MOTION</p><h2>Stories worth <em>stepping into.</em></h2></div>
            <Link to="/work" className="text-link">Explore all disciplines <ArrowUpRight /></Link>
          </div>
          <div className="story-grid">{visualStories.map((item) => <StoryCard item={item} key={item.title} />)}</div>
        </div>
      </section>
      <section className="editorial-collage-band" aria-label="Editorial portrait collage">
        <img
          src="/Blush-Toned%20Editorial%20Portrait%20Collage.png"
          alt="Blush-toned editorial portrait collage celebrating Sakshi's acting, dance, and movement work"
          loading="lazy"
        />
      </section>
      <CollaborationSection />
      <StorySection />
      <AvailabilityFaq />
      <HomeContact />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageMeta title="About Sakshi Tiwari | Actor, Dancer & Movement Artist" description="Learn about Sakshi Tiwari's acting practice, Kathak and Abhinaya training, screen presence, choreography, and creative work in India." />
      <About />
      <Expertise />
      <CollaborationSection />
      <HomeContact />
    </>
  );
}

export function WorkPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageMeta title="Work & Services | Sakshi Tiwari" description="Explore screen acting, Hindi film and OTT performance, Kathak dance, Abhinaya, choreography, editorial, and commercial campaign work with Sakshi Tiwari." />
      <Repertoire onSelectCard={() => navigate('/contact')} />
      <Expertise />
      <section className="featured-stories section-pad">
        <div className="content-width">
          <div className="section-heading"><div><p className="eyebrow">CREATIVE PRACTICE</p><h2>Three ways into <em>a story.</em></h2></div></div>
          <div className="story-grid">{visualStories.map((item) => <StoryCard item={item} key={item.title} />)}</div>
        </div>
      </section>
      <CollaborationSection />
      <HomeContact />
    </>
  );
}

export function MediaKitPage() {
  return (
    <>
      <PageMeta title="Media Kit & Brand Collaborations | Sakshi Tiwari" description="Brand partnership formats, creator campaigns, fashion editorials, and movement-led video collaborations with Sakshi Tiwari. Request current rates and audience insights." />
      <section className="media-hero reference-hero">
        <div className="content-width">
          <p className="eyebrow">MEDIA KIT & BRAND PARTNERSHIPS</p>
          <h1>Make it memorable.<br /><em>Make it meaningful.</em></h1>
          <p>Creator campaigns, fashion editorials, and movement-led stories with a distinct on-camera point of view.</p>
          <Link to="/contact" className="button button-dark">Request the media kit <ArrowUpRight /></Link>
        </div>
        <StarSparkle className="media-sparkle media-sparkle-one" />
        <StarSparkle className="media-sparkle media-sparkle-two" />
        <SectionDivider fill="#FFFFFF" />
      </section>
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="content-width media-content">
          <div className="media-block">
            <p className="eyebrow">CAMPAIGN FORMATS</p>
            <h2>Creative fit, first.</h2>
            <ul className="format-list">
              {collaborationFormats.map((item) => <li key={item.title}>{item.title}<span>{item.copy}</span></li>)}
            </ul>
          </div>
          <div className="media-block">
            <p className="eyebrow">PLATFORM & AVAILABILITY</p>
            <h2>One point of contact.</h2>
            <p>Based in India and available to travel for select projects. Audience insights, deliverables, and rates are shared directly so every partnership can be scoped to the brief.</p>
            <p className="platform-handle"><Instagram /> Instagram <strong>@sakshieeyyy.xo</strong></p>
            <Link to="/contact" className="button button-dark">Discuss a partnership <ArrowUpRight /></Link>
          </div>
        </div>
        <SectionDivider fill="#FBE8E5" />
      </section>
      <HomeContact />
    </>
  );
}