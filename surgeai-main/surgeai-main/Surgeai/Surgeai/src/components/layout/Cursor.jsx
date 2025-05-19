// import { useEffect } from 'react';

// const Cursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector('.cursor');
//     const trail = document.querySelector('.cursor-trail');

//     const moveCursor = (e) => {
//       cursor.style.left = `${e.clientX}px`;
//       cursor.style.top = `${e.clientY}px`;
//       trail.style.left = `${e.clientX}px`;
//       trail.style.top = `${e.clientY}px`;
//     };

//     window.addEventListener('mousemove', moveCursor);

//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//     };
//   }, []);

//   return (
//     <>
//       <div className="cursor"></div>
//       <div className="cursor-trail"></div>
//     </>
//   );
// };

// export default Cursor;