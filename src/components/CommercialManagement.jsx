import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CommercialManagement = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { name: 'Sales', value: 'sales' },
    { name: 'Purchases', value: 'purchases' },
    { name: 'Inventory', value: 'inventory' },
    { name: 'Currency Converter', value: 'currency' },
  ];

  const salesOptions = [
    'Sales Deals',
    'Sales Quotes',
    'Sales Orders',
    'Sales Invoices',
    'Sales Price Lists',
    'Sales Transfers',
    'Products & Services',
    'Sales Contracts',
    'Leads',
    'Customers',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Commercial Management</h1>
      <div className="mb-6">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">Select a tab</label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            {tabs.map((tab) => (
              <option key={tab.value} value={tab.value}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.value)}
                  className={`${
                    activeTab === tab.value
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {activeTab === 'sales' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sales Options</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {salesOptions.map((option) => (
              <Link
                key={option}
                to="#"
                className="bg-white overflow-hidden shadow rounded-lg p-6 hover:bg-gray-50"
              >
                <div className="text-lg font-medium text-indigo-600">{option}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* Add content for other tabs (Purchases, Inventory, Currency Converter) here */}
    </div>
  );
};

export default CommercialManagement;
