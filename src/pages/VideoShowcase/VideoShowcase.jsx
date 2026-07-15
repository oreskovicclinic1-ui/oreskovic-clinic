import { useEffect, useRef } from 'react';
import './VideoShowcase.css';

// To add a new video later: just add one line here.
const videos = [
  { id: 1, src: '/videos/01.mp4', title: 'Hydrafacial tretman' },
  { id: 2, src: '/videos/02.mp4', title: 'Anti-age tretman' },
  { id: 3, src: '/videos/03.mp4', title: 'Terapija ozljeda' },
  { id: 5, src: '/videos/02.mp4', title: 'Anti-age tretman' },
  { id: 6, src: '/videos/03.mp4', title: 'Terapija ozljeda' },
];

export default function VideoShowcase() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const drag = { isDown: false, startX: 0, scrollStart: 0, hasDragged: false };

    function onMouseDown(e) {
      drag.isDown = true;
      drag.hasDragged = false;
      drag.startX = e.pageX;
      drag.scrollStart = track.scrollLeft;
      track.classList.add('is-dragging');
    }

    function onMouseMove(e) {
      if (!drag.isDown) return;
      const delta = e.pageX - drag.startX;
      if (Math.abs(delta) > 5) drag.hasDragged = true;
      if (drag.hasDragged) track.scrollLeft = drag.scrollStart - delta;
    }

    function onMouseUp() {
      drag.isDown = false;
      track.classList.remove('is-dragging');
    }

    // If the pointer moved (a real drag), swallow the click that
    // follows so it doesn't accidentally toggle the video's play/pause.
    // A plain click (no movement) passes through untouched.
    function onClickCapture(e) {
      if (drag.hasDragged) {
        e.preventDefault();
        e.stopPropagation();
        drag.hasDragged = false;
      }
    }

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    track.addEventListener('click', onClickCapture, true);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  return (
    <section className="video-showcase section">
      <div className="container video-intro">
        <p className="video-kicker">TRETMANI UŽIVO</p>
        <h2 className="video-title">Pogledajte kako izgledaju naši tretmani!</h2>
      </div>

      <div className="container">
        <div className="video-row" ref={trackRef}>
          {videos.map((video) => (
            <div className="video-item" key={video.id}>
              <video className="video-item-player" controls preload="metadata">
                <source src={video.src} type="video/mp4" />
              </video>
              <p className="video-item-title">{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}