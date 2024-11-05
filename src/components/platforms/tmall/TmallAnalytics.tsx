import React from 'react';
import { TmallSalesAnalysis } from './TmallSalesAnalysis';

interface Props {
  dateRange: string;
}

export function TmallAnalytics({ dateRange }: Props) {
  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">🛍️</div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">天猫平台数据分析</p>
          </div>
        </div>
      </div>

      <TmallSalesAnalysis dateRange={dateRange} />
    </div>
  );
}