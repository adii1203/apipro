const Footer = () => {
  return (
    <div className=" text-center pb-3 z-50 relative mt-2 ">
      <p className="text-xs font-Poppins text-foreground">
        Made with ❤️ by{" "}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/adiidev12" // Add your github link here
          className="text-blue-500 hover:underline">
          @adiidev12
        </a>
      </p>
    </div>
  );
};

export default Footer;
