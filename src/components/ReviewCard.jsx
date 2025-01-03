const ReviewCard = ({ review }) => {
  return (
    <div className="client-review">
      <p className="text-white-600 font-normal">{review.review}</p>
      <div className="client-content">
        <div className="flex gap-2">
          <img src={review.img} className="h-12 w-12" alt={review.name} />
          <div className="text-white-600 space-y-1">
            <p className="font-semibold text-base">{review.name}</p>
            <p className="font-extralight text-sm">{review.position}</p>
          </div>
        </div>
        <div className="flex gap-2 self-end">
          <img src="/assets/star.png" className="w-6 h-6" alt="star" />
          <img src="/assets/star.png" className="w-6 h-6" alt="star" />
          <img src="/assets/star.png" className="w-6 h-6" alt="star" />
          <img src="/assets/star.png" className="w-6 h-6" alt="star" />
          <img src="/assets/star.png" className="w-6 h-6" alt="star" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
