import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { Chart } from '@common/Chart';

const PRODUCT_LIMIT = 15;
const PRODUCT_OFFSET = 15;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));

  const categoryName = products?.map((product) =>product.category);
  const categoryCount = categoryName?.map((category) => category.name);

const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr]||1),prev),
{});

console.log(countOccurrences(categoryCount))

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <Chart className="mb-8 mt-2" chartData={data} />
      
    </>
  );
}
