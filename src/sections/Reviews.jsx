import { clientReviews } from '../../constants';
import ReviewCard from '../components/ReviewCard';

const Reviews = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">Work Experience Reviews</p>
      <div className="client-container">
        {clientReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
