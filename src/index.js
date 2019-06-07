/**
 * @param {*} zip should be a string or number.
 * String is preferred since APO zips can start with zero
 */
const isZipApo = (zip) => {
  const zipString = zip.toString();
  const firstThree = zipString.slice(0, 3);
  const apoPrefixes = ['340', '090', '091', '092', '093', '094', '095', '096', '097', '098', '962', '963', '964', '965', '966'];
  const isApo = apoPrefixes.indexOf(firstThree) !== -1;
  return isApo;
};

const isStateApo = (code) => {
  const apoCodes = ['AE', 'AA', 'AP'];
  const isApo = apoCodes.indexOf(code) !== -1;
  return isApo;
};

export default isZipApo;

export { isStateApo };
