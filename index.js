const getValueFromKey = (obj, key) => {
    const keys = key.split('.');
    let value = obj;
  
    for (const k of keys) {
      if (value === undefined) break;
      if (k.includes('[')) {
        const [arrayKey, arrayIndex] = k.split(/\[|\]/g);
        value = value[arrayKey] ? value[arrayKey][parseInt(arrayIndex)] : undefined;
      } else {
        value = value[k];
      }
    }
  
    return value !== undefined ? value : '';
  };
  
  const padora = ({ template, data }) => (
    template.replace(/\{([a-z0-9_.[\]]+)\}/gi, (_, key) => {
      const value = getValueFromKey(data, key);
      return value !== undefined && value !== '' ? value : `{${key}}`;
    })
  );
  
  module.exports = padora;
  