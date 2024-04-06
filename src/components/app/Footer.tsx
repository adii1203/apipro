const Footer = () => {
  return (
    <div className="fixed bottom-8 z-50 w-screen text-center ">
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
