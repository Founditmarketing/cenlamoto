import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Stephen Peters',
      content: 'This business provides the customer service that all businesses could learn to provide. The staff at National Transmission went the extra mile to help coordinate the replacement and contacted the dealer... Thank you for excellent service.',
      rating: 5,
    },
    {
      name: 'Charlie Mullins',
      content: 'Reliable. Fast. Friendly. Good warranty. Nice waiting room.',
      rating: 5,
    },
    {
      name: 'Charanda Washington',
      content: 'I had a transmission replacement! Very quick and satisfied services! The gentlemen at the shop were very polite, patient and professional! I highly recommend their services!!!!',
      rating: 5,
    },
    {
      name: 'Nick D Music',
      content: 'I had muffler delete done on my challenger and the staff were nice and answered all of my questions promptly, the service was done super quick and seemingly really enjoyed doing the work he did. Priced reasonably. Very pleasant experience.',
      rating: 5,
    },
    {
      name: 'Kaitlynn Worsham',
      content: 'Very sweet hard working people! Will help you out and explain everything very well to you! Will use them over and over again.',
      rating: 5,
    },
    {
      name: 'Alyssa White',
      content: 'Best service in CenLa!',
      rating: 5,
    },
    {
      name: 'Jessica Richey',
      content: 'I wouldn’t trust anyone else for my auto repair needs. These guys are true professionals and you can’t beat the price.',
      rating: 5,
    },
    {
      name: 'Paige Rourke',
      content: 'Reliable service, friendly team, and excellent prices! National Transmission is the best place for your auto repair needs!',
      rating: 5,
    }
  ];

  // We want two identical halves in the scroll container so translating -50% shifts exactly one full sequence perfectly
  // Just double the array instead of doing it 8 times to prevent DOM bloat and SEO spam penalties.
  const row1 = [...reviews, ...reviews]; // 16 items

  // Scramble the second row slightly for visual variance, but keep it symmetric for infinite scroll
  const offsetReviews = [...reviews.slice(4), ...reviews.slice(0, 4)];
  const row2 = [...offsetReviews, ...offsetReviews]; // 16 items

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.03),transparent)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-8 uppercase tracking-widest border border-blue-500/20 shadow-lg shadow-blue-500/10"
          >
            <ShieldCheck className="w-4 h-4" />
            Verified Google Reviews
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight">
            Institutional Trust in <br />
            <span className="text-brand-blue italic">Central Louisiana.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
            Real feedback from hundreds of private vehicle owners, corporate fleet commanders, and daily commuters who rely on our infrastructure.
          </p>
        </div>
        <div className="mt-8 text-center flex justify-center">
            <a 
              href="https://www.google.com/search?q=national+tire+and+auto+reviews" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-xl group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Read All Google Reviews
              <span className="text-slate-400 group-hover:translate-x-1 transition-transform">→</span>
            </a>
        </div>
      </div>


      {/* Cinematic Marquees */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        {/* Row 1: Left to Right (Technically scrolling left, so visually right to left) */}
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 80 }}
          className="flex gap-6 w-max"
        >
          {row1.map((review, idx) => (
            <ReviewCard key={`row1-${idx}`} review={review} />
          ))}
        </motion.div>

        {/* Row 2: Right to Left (Technically scrolling right, so visually left to right) */}
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 90 }}
          className="flex gap-6 w-max"
        >
          {row2.map((review, idx) => (
            <ReviewCard key={`row2-${idx}`} review={review} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}

interface ReviewProps {
  name: string;
  content: string;
  rating: number;
}

const ReviewCard = React.forwardRef<HTMLDivElement, { review: ReviewProps }>(({ review }, ref) => {
  return (
    <div ref={ref} className="w-[350px] md:w-[450px] shrink-0 group relative glass p-8 rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all duration-500 hover:shadow-2xl flex flex-col h-full bg-slate-900/50">
      <Quote className="absolute top-8 right-8 w-10 h-10 text-white/5 group-hover:text-brand-blue/10 transition-colors" />

      <div className="flex gap-1 mb-6">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
      </div>

      <p className="text-slate-300 mb-8 leading-relaxed font-medium italic text-base flex-1">
        "{review.content}"
      </p>

      <div className="flex items-center gap-4 mt-auto">
        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-lg font-bold text-white border border-white/10 shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-display font-bold text-white text-base">{review.name}</h4>
          <div className="flex items-center gap-1 mt-0.5">
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
});
