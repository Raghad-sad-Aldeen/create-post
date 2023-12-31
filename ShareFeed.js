//ShareFeed.js
import React from 'react';
import './ShareFeed.css'; // Import the CSS file
 const ShareFeed = () => {


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="..." defer></script>

  return (
  <div style={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '50vh',
    width: '50vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
      <div className="card card-body">
       <div className="d-flex mb-3">
        <div className="card card-body">
          <div className="d-flex mb-3">
            {/* Avatar */}
            <div className="avatar avatar-xs me-2">
              <a href=" # ">
                {' '}
                <img
                  className="avatar-img rounded-circle"
                  src="https://social.webestica.com/assets/images/avatar/03.jpg"
                  alt=" "
                  style={{ width: '40px', height: '40px' }}
                /> {' '}
              </a>
            </div>
            {/* Post input */}
            <form className="w-100">
              <textarea
                className="form-control pe-4 border-0"
                rows="3"
                placeholder="Share your thoughts..."
              ></textarea>
            </form>
          </div>
          {/* Share feed toolbar START */}
          <ul className="nav nav-pills nav-stack small fw-normal">
            <li className="nav-item">
              <a
                className="nav-link bg-light py-1 px-2 mb-0"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#feedActionPhoto"
              >
                {' '}
                <i className="bi bi-image-fill text-success pe-2"></i>Photo
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link bg-light py-1 px-2 mb-0"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#feedActionVideo"
              >
                {'   '}
                <i className="bi bi-camera-reels-fill text-info pe-2"></i>Video
              </a>
            </li>
            <li className="nav-item">
              <a
                href=" # "
                className="nav-link bg-light py-1 px-2 mb-0"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateEvents"
              >
                {' '}
                <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>Event{' '}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link bg-light py-1 px-2 mb-0"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#modalCreateFeed"
              >
                {'   '}
                <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>Feeling /Activity
              </a>
            </li>
            <li className="nav-item dropdown ms-lg-auto">
              <a
                className ="nav-link bg-light py-1 px-2 mb-0"
                href=" # "
                id="feedActionShare"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i>
              </a>
              {/* Dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="feedActionShare">
                <li>
                  <a className="dropdown-item" href=" # ">
                    {'   '}
                    <i className="bi bi-envelope fa-fw pe-2"></i>Create a poll
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href=" # ">
                    {'   '}
                    <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question{' '}
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href=" # vd">
                    {'   '}
                    <i className="bi bi-pencil-square fa-fw pe-2"></i>Help
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="modal fade" id="feedActionPhoto" tabIndex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="feedActionPhotoLabel">Upload Photo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="photoInput" className="form-label">Choose a photo:</label>
                  <input type="file" className="form-control" id="photoInput" accept="image/*" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Upload</button>
            </div>
          </div>
        </div>
      </div>
   
          {/* Share feed toolbar END */}
          </div>
        </div>
      </div>
    </div>   
  );
};
export default ShareFeed;



