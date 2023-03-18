import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chart-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Category',
            fonstSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      />
    </>
  );
};