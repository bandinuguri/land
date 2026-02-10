
import React from 'react';
import { 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ComposedChart, 
  Line, 
  Bar,
  Cell, 
  PieChart, 
  Pie, 
  XAxis, 
  YAxis, 
  LabelList,
  Legend
} from 'recharts';
import { YEARLY_STATS, AIRPORT_STATS } from '../constants';
import { 
  TrendingUp, 
  Info, 
  EyeOff, 
  Octagon, 
  Zap, 
  Siren 
} from 'lucide-react';

const StatsDashboard: React.FC = () => {
  const renderCustomLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name, count, percentage } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 22;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#475569" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central" 
        className="text-[11px] font-bold"
      >
        <tspan x={x} dy="-0.2em">{name}</tspan>
        <tspan x={x} dy="1.2em" fill="#3b82f6" fontSize="10px">{`${count}건(${percentage}%)`}</tspan>
      </text>
    );
  };

  return (
    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10 px-0.5">
      
      {/* 1. 사고의 주요 유형 및 원인 분석 */}
      <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-800 py-3.5 px-4 text-center">
          <h2 className="text-[16px] font-bold text-white tracking-tight">사고 주요 유형 및 원인 분석</h2>
        </div>
        
        <div className="p-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 bg-orange-500 rounded-full"></span>
              <h3 className="text-[15px] font-bold text-slate-800">주요 사고 유형</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <Zap className="w-5 h-5 text-orange-600 shrink-0" />
                <div>
                  <p className="text-[15px] font-bold text-slate-800">접촉 및 충돌</p>
                  <p className="text-[12px] text-slate-500">차량 간 추돌, 주기장 내 시설물 충돌</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                <Siren className="w-5 h-5 text-red-600 shrink-0" />
                <div>
                  <p className="text-[15px] font-bold text-slate-800">항공기-장비 간 접촉</p>
                  <p className="text-[12px] text-slate-500">견인/급유 중 항공기 날개 및 동체 손상</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="text-[15px] font-bold text-slate-800">핵심 원인</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col items-center text-center gap-1.5">
                <EyeOff className="w-4 h-4 text-blue-600" />
                <p className="text-[12px] font-bold text-slate-700">사주경계 미흡</p>
              </div>
              <div className="p-3.5 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex flex-col items-center text-center gap-1.5">
                <Octagon className="w-4 h-4 text-red-500" />
                <p className="text-[12px] font-bold text-slate-700">안전수칙 미준수</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 지상안전사고 현황 */}
      <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-1.5 mb-2">
          <TrendingUp className="w-4 h-4 text-blue-600" />
          <h3 className="text-[15px] font-bold text-slate-800">지상안전사고 발생 현황</h3>
        </div>
        
        <div className="h-[300px] w-full mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={YEARLY_STATS} margin={{ top: 25, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748b', fontSize: 12, fontWeight: 700 }} 
                dy={10} 
              />
              <YAxis yAxisId="left" hide />
              <YAxis yAxisId="right" orientation="right" hide />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              />
              <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                wrapperStyle={{ 
                  fontSize: '11px', 
                  fontWeight: 'bold', 
                  paddingBottom: '35px',
                  paddingTop: '0px'
                }} 
              />
              <Bar yAxisId="left" dataKey="flights" name="운항횟수" fill="#e2e8f0" barSize={32} radius={[4, 4, 0, 0]} />
              <Line yAxisId="right" type="monotone" dataKey="accidents" name="발생건수" stroke="#ef4444" strokeWidth={2} dot={{ r: 4, fill: '#ef4444', strokeWidth: 1, stroke: '#fff' }}>
                <LabelList dataKey="accidents" position="top" offset={12} style={{ fill: '#ef4444', fontSize: 13, fontWeight: 900 }} />
              </Line>
              <Line yAxisId="right" type="monotone" dataKey="rate" name="환산건수" stroke="#f97316" strokeWidth={2} dot={{ r: 3, fill: '#f97316', strokeWidth: 1, stroke: '#fff' }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-2">
          <p className="text-[13px] font-bold text-slate-700 ml-1">최근 3개년 사고 추이</p>
          <div className="grid grid-cols-3 gap-2">
            {YEARLY_STATS.slice(-3).map(s => (
              <div key={s.year} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-center">
                <p className="text-[12px] font-bold text-slate-400 mb-1">{s.year}년</p>
                <p className="text-[17px] font-black text-slate-800 leading-none">{s.accidents}건</p>
                <p className="text-[10px] text-orange-500 font-bold mt-1.5">{s.rate.toFixed(3)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 공항별 사고 분포 */}
      <section className="bg-white p-5 rounded-3xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-1.5 mb-2">
          <Info className="w-4 h-4 text-emerald-600" />
          <h3 className="text-[15px] font-bold text-slate-800">공항별 사고 분포 ('19~'24)</h3>
        </div>
        <div className="h-[220px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={AIRPORT_STATS} cx="50%" cy="50%" innerRadius={55} outerRadius={70} paddingAngle={5} dataKey="count" nameKey="name" stroke="none" label={renderCustomLabel}>
                {AIRPORT_STATS.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#6366f1'][index % 6]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <p className="text-[11px] font-bold text-slate-400 mb-0.5">전체 건수</p>
            <p className="text-2xl font-black text-slate-800">78건</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsDashboard;
