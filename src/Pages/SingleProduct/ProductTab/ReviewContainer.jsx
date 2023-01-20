import React from "react";
import { MdPerson } from "react-icons/md";

const ReviewContainer = () => {
  const ReviewLists=() => {
    return <div className="Lists mb-4">
      <h6>
        <MdPerson></MdPerson> <span>John Doe</span>
        <small>
          - <i>01 Jan 2045</i>
        </small>
      </h6>
      <div className="media-body">
        <div className="text-primary mb-2">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <i className="far fa-star"></i>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Asperiores vitae eligendi totam aperiam minima voluptates
          blanditiis sit exercitationem, quisquam soluta provident porro
          sint est cumque, reiciendis ea illo! Assumenda, consequuntur.
        </p>
      </div>
    </div>}
  return (
    <div className="ReviewContainer">
      <div className="row">
        <div className="col-md-6 reviewList">
          <h4 className="mb-4">1 review for "Product Name"</h4>
          <div className="reviewListsBlock">
            {Array.from(Array(10).keys()).map(item=><ReviewLists key={item} />)}
          </div>
        </div>
        <div className="col-md-6 reviewForm">
          <h4 className="mb-4">Leave a review</h4>
          <small>
            Your email address will not be published. Required fields are marked
            *
          </small>
          <div className="d-flex my-3">
            <p className="mb-0 mr-2">Your Rating * :</p>
            <div className="text-primary">
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="message">Your Review *</label>
              <textarea
                id="message"
                // @ts-ignore
                cols="30"
                rows={5}
                className="form-control"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email *</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group mb-0">
              <input
                type="submit"
                value="Leave Your Review"
                className="btn btn-primary px-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );

 
  
};

export default ReviewContainer;
