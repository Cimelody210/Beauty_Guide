/**
 * Get pagination metadata.
 * @param {number} page - Current page number.
 * @param {number} limit - Items per page limit.
 * @param {number} totalItems - Total number of items.
 * @param {Array} array - Array of maintainIMEI list.
 * @returns {object} Paginator object containing pagination metadata.
 */
const Paginator = (page, limit, totalItems, array) => {
  const currentPage = page;
  const perPage = limit;
  const total = totalItems;
  const lastPage = Math.ceil(total / perPage);

  return {
    currentPage,
    perPage,
    total,
    lastPage,
    hasPages: lastPage > 1,
    hasMorePages: currentPage < lastPage,
    firstItem: (currentPage - 1) * perPage + 1,
    lastItem: Math.min(currentPage * perPage, total),
    count: array ? Math.min(array.length, perPage) : 0,
  };
};

export default Paginator;
