import './header.css';

function Header() {
  return (
    <div className='header'>
      <h2 className='mb-4 animate__animated animate__fadeInDown'>
        Rohan's Desk
      </h2>
      <h3>
        <div className='animate__animated animate__fadeInUp'>
          <span className='animate__animated animate__fadeInUp'>Where</span>{' '}
          <span className='header-span animate__animated animate__fadeInUp'>
            Law
          </span>{' '}
          <span className='header-span animate__animated animate__fadeInUp'>
            Cricket
          </span>{' '}
          <span>and </span>
          <span className='header-span animate__animated animate__fadeInUp'>
            Administration
          </span>
        </div>
        <div className='animate__animated animate__fadeInUp'>
          are played on One Turf{' '}
        </div>
      </h3>
    </div>
  );
}

export default Header;
