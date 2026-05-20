function stripIdSuffixes(data) {
  if (data === null || data === undefined) return data;
  if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean') return data;
  if (Array.isArray(data)) return data.map(stripIdSuffixes);
  if (typeof data === 'object') {
    const cleaned = {};
    for (const [key, value] of Object.entries(data)) {
      if (key.endsWith('id')) continue;
      cleaned[key] = stripIdSuffixes(value);
    }
    return cleaned;
  }
  return data;
}

module.exports = (req, res, next) => {
  const originalJson = res.json.bind(res);
  res.json = (body) => {
    try {
      // Convertir a JSON puro primero para eliminar referencias circulares
      const plain = JSON.parse(JSON.stringify(body));
      return originalJson(stripIdSuffixes(plain));
    } catch (e) {
      return originalJson(body);
    }
  };
  next();
};