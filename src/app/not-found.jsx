import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found-page'>
      <h2>The page you looking for is <span className='gradient-text'>not found</span></h2>
      <small>The link you followed may ne broken, or the page may have been removed</small>
      <Link href="/">View Home Page</Link>
    </div>
  );
};