'use client';
export default function Error({ reset }) {
  return (
    <div className='error-page'>
        <h2>Something went wrong!</h2>
        <small>
            For Developers: the occurrence of errors could be due to limitations on
            <span className='gradient-text'> Deezer API </span>
            requests.
        </small>
        <button onClick={ () => reset() }>Try again</button>
    </div>
  );
};