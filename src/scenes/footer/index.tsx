import Logo from "@/assets/portfolio-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Front-end developer working in the health technology industry.
          </p>
          <p>© Rory McDonnell</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0"></div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <a href="mailto:rorymcdonnell95@gmail.com">
            <p className="my-5">rorymcdonnell95@gmail.com</p>
          </a>
          <a href="tel:+34674741160">
            <p>(+34) 674 741 160</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
