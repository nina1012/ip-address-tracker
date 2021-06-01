const validateInput = address => {
  const ipRegex = new RegExp(
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  );

  const domainNameRegex = new RegExp(
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/
  );

  switch (true) {
    case ipRegex.test(address):
      return ` https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${address}`;
    case domainNameRegex.test(address):
      return ` https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&domain=${address}`;
    default:
      console.error('error');
  }
};

export { validateInput };
