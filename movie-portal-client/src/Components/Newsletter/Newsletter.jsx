import React from 'react';
import newsImg from '../../assets/news.png'
 
const Newsletter = () => {
    return (
<section className="newsletter flex flex-col md:flex-row justify-evenly lg:flex-row px-10 bg-base-200 rounded-lg w-11/12 mx-auto max-w-screen-2xl mb-10">
<div>
<img
    className="newsletter-img  max-w-sm"
    src={newsImg}
    alt="Newsletter graphic"
  />
</div>
<div className='flex flex-col items-center justify-center space-y-5'>
<div className="newsletter-text text-center">
    <h1 className="text-3xl font-bold">Stay in the Loop!</h1>
    <p className="text-base text-gray-600 mt-2">
      Be the first to know about the latest movie releases, <br /> exclusive trailers, and must-watch blockbusters. Subscribe now to get updates straight to your inbox!
    </p>
  </div>
  <div className="newsletter-email flex flex-col sm:flex-row items-center gap-4">
    <input
      className="input input-bordered w-full sm:w-96"
      type="email"
      placeholder="youremail@example.com"
    />
    <button className="Subscribe-btn btn btn-primary w-full sm:w-auto">
      Subscribe
    </button>
  </div>
</div>
</section>

    );
};

export default Newsletter;