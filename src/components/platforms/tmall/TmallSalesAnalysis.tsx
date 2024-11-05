import React from 'react';
import { MetricCard } from '../../common/charts/MetricCard';
import { formatters } from '../../../utils/formatters';

interface Props {
  dateRange: string;
}

export function TmallSalesAnalysis({ dateRange }: Props) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard
          title="总销售额"
          value={160000}
          change={15.8}
          formatter={formatters.currency}
          valueColor="text-blue-600"
        />
        <MetricCard
          title="总订单数"
          value={740}
          change={12.3}
          formatter={formatters.number}
          valueColor="text-green-600"
        />
        <MetricCard
          title="平均客单价"
          value={216}
          change={3.2}
          formatter={formatters.currency}
          valueColor="text-purple-600"
        />
        <MetricCard
          title="支付转化率"
          value={6.8}
          change={0.5}
          formatter={(value) => `${value}%`}
          valueColor="text-orange-600"
        />
      </div>
    </div>
  );
}