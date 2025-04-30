import React from 'react';


const testimonials = [
  {
    name: "Sarah N.",
    text: "This blog finally made me understand how the internet works—without making me feel dumb. Huge thanks!",
    image: "https://i.pravatar.cc/300"
  },
  {
    name: "James T.",
    text: "As someone totally new to tech, I was scared to start. This site made everything so clear and simple.",
    image: "https://i.pravatar.cc/300"
  },
  {
    name: "Leila M.",
    text: "I love how the articles break down confusing topics into real-world examples. Super helpful for beginners like me.",
    image: "https://i.pravatar.cc/300"
  },
  {
    name: "Kevin R.",
    text: "Every post feels like a friend explaining tech over coffee. I’ve learned more here than in class!",
    image: "https://i.pravatar.cc/300"
  },
  {
    name: "Anita D.",
    text: "I used this blog to prep for my first coding interview—it gave me the confidence I needed.",
    image: "https://i.pravatar.cc/300"
  },
  {
    name: "Carlos F.",
    text: "The friendly tone and clear explanations make this my go-to site for all things tech.",
    image: "https://i.pravatar.cc/300"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2>WHAT OUR READERS SAY</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img src={t.image} alt={t.name} />
            <p>“{t.text}”</p>
            <strong>- {t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}