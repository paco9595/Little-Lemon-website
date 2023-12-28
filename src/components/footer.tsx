export default function Footer() {
  return (
    <footer className="grid grid-cols-4 max-w-[887px] mx-auto text-left">
      <div>
        <img src="/Logo.svg" alt="" />
        <p className='w-4/5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          aut cumque veniam ad voluptas esse inventore
        </p>
      </div>
      <div>
        <div className="text-primary-green font-extrabold text-xl w-32">
          Doormat Navigation
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservation</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <span className="text-primary-green font-extrabold text-xl">
          Contact
        </span>
        <div>Adress</div>
        <div>phone Number</div>
        <div>Email</div>
      </div>
      <div>
        <span className="text-primary-green font-extrabold text-xl">
          Social Media Link
        </span>
        <div>Adress</div>
        <div>phone Number</div>
        <div>Email</div>
      </div>
    </footer>
  );
}
