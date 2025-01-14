const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="border-r border-black-300 pr-2">Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-2">
        <a
          className="social-icon"
          href="https://www.instagram.com/charlesvelasco_/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/instagram.svg"
            className="w-1/2 h-1/2"
            alt="instagram"
          />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/carlosed-velasco/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/assets/linkedin.svg"
            className="w-1/2 h-1/2"
            alt="linkedin"
          />
        </a>
        <a
          className="social-icon"
          href="https://github.com/CharlesVela66"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/github.svg" className="w-1/2 h-1/2" alt="github" />
        </a>
      </div>
      <p className="text-white-500">
        {new Date().getFullYear()}, Carlos, V. All rights reserved
      </p>
    </section>
  );
};

export default Footer;
