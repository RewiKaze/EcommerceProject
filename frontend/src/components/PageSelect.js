import Pagination from "@material-ui/lab/Pagination";

const PageSelect = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  {
    /* <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={"p" + number} className="page-item">
              <a href="!#" className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul> */
  }
  return (
    <Pagination
      count={pageNumbers.length}
      onChange={(_, page) => {
        paginate(page);
        console.log(page);
      }}
      variant="outlined"
      color="primary"
    />
  );
};
export default PageSelect;
