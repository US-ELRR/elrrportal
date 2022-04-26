import axios from 'axios';
import { unstable_batchedUpdates } from 'react-dom';
import { useState, useEffect, useMemo } from 'react';
import { Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function EmploymentCourseScatterPlot({ userId }) {
  // fetch the data from the the db
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = {
    indexAxis: 'x', // x or y
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
        labels: {},
      },
      title: {
        display: true,
        text: 'Distribution of Courses by Status',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Employment Date',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: '# of Courses',
        },
        min: 0,

        ticks: {
          // forces step size to be 50 units
          stepSize: 1,
        },
      },
    },
  };

  const chartData = useMemo(() => {
    // null check for the data
    if (!data?.history) return;

    // get the avg of the data

    // build the chart data
    return {
      labels: data.history.map((item) => item.employmentDate),
      datasets: [
        {
          label: 'Completed',
          type: 'bar',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'COMPLETED')
                .length
          ),
          backgroundColor: '#00b89450',
          borderColor: '#00b894',
          borderWidth: 2,
        },
        {
          label: 'Registered',
          type: 'bar',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'REGISTERED')
                .length
          ),
          // purple hex
          backgroundColor: '#ffb60050',
          borderColor: '#ffb600',
          borderWidth: 2,
        },
        {
          label: 'Abandoned',
          type: 'bar',
          data: data.history.map(
            (item) =>
              item.courses.filter((course) => course.status === 'ABANDONED')
                .length
          ),
          backgroundColor: '#ff4d4d50',
          borderColor: '#ff4d4d',
          borderWidth: 2,
        },
      ],
    };
  }, [data]);

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/historical/employment-course-distribution/${userId}`)
        .then((res) => {
          unstable_batchedUpdates(() => {
            setData(res.data);
            setLoading(false);
            setError(null);
          });
        })
        .catch((err) => {
          unstable_batchedUpdates(() => {
            setData([]);
            setLoading(false);
            setError(err);
          });
        });
    }
  }, [userId]);

  console.log('chartData', chartData);

  return chartData ? (
    <Chart data={chartData} options={options} />
  ) : (
    <div className='text-center mt-10 h-[17.18rem] rounded shadow text-gray-900 font-semibold font-mono flex justify-center items-center bg-white '>
      {error && 'Error retrieving data'}
    </div>
  );
}
