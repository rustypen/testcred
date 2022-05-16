function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center my-10">
      <div>
        <img
          src="/assets/images/Credore Logo Variations/Full logo V1@4x.png"
          alt="logo"
          className="w-16"
        />
      </div>
      <div className="flex items-center mt-6">
        <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          &copy; {new Date().getFullYear()} by{' '}
          <a href="https://credore.xyz" rel="nofollow">
            Credore
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
