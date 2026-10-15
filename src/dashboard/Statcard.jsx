// components/StatsGrid.jsx
import React from "react";
import { Card } from "@heroui/react";

export default function Statcard({ data = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {data.map((item, index) => (
        <Card 
          key={index} 
          variant="secondary"
          className="p-2 rounded-2xl border border-default-200/50 dark:border-default-100/10 shadow-none transition-all hover:border-default-300"
        >
          <Card.Content className="flex flex-col justify-between gap-6 p-4">
            {/* Icon Container */}
            <div className="w-10 h-10 rounded-xl bg-default-100 dark:bg-default-200/20 flex items-center justify-center text-default-700 dark:text-default-300">
              {item.icon}
            </div>

            {/* Text Details */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-default-500">
                {item.label}
              </span>
              <span className="text-3xl font-semibold tracking-tight text-default-foreground">
                {item.value}
              </span>
            </div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}