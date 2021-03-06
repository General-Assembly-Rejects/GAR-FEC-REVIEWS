import React, { PureComponent } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import axios from 'axios';

export default class Example extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('http://ec2-3-141-20-172.us-east-2.compute.amazonaws.com:3002/api/reviews').then((results) => {
      this.setState({
        zero: results.data.filter(review => review.rating === 0),
        one: results.data.filter(review => review.rating === 1),
        two: results.data.filter(review => review.rating === 2),
        three: results.data.filter(review => review.rating === 3),
        four: results.data.filter(review => review.rating === 4),
        five: results.data.filter(review => review.rating === 5),
      });
    });
  }

  render() {
    return (
      <BarChart
        width={400}
        height={200}
        data={[
            {
              name: '1 Star', count: this.state.one.length,
            },
            {
              name: '2 Star', count: this.state.two.length,
            },
            {
              name: '3 Star', count: this.state.three.length,
            },
            {
              name: '4 Star', count: this.state.four.length,
            },
            {
              name: '5 Star', count: this.state.five.length,
            },
          ]}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="rgb(0, 113, 141)" background={{ fill: 'rgb(221, 221, 221)' }} />
      </BarChart>
      
    );
  }
}
